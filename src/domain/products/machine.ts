import {  assign, setup, fromPromise } from "xstate";
import { ImagesResponse, ProductsResponse } from "./model";
import { fetchProducts, fetchImages } from "./services";

interface Product {
  id: string;
  name: string;
}
interface Image {
  productId: string;
  url: string;
}
type ContextType = {
  products: Product[] | null;
  images: Record<string, string> | null; // Map productId to images
  productError: string | null;
  imageError: string | null;
  page: number;
  isLastPage: boolean;
  showProducts: Product[] | null; // Optional: for displaying products in the UI
  selectedProduct?: Product | null; // Optional: for selected product in modal
};
type EventType =
  | { type: "SHOW_MORE_PRODUCTS" }
  | { type: "SET_PRODUCTS"; products: Product[] | null }
  | { type: "SET_SELECTED_PRODUCT"; product: Product | null }
  | { type: "FETCH_IMAGES" }
  | { type: "SET_PAGE"; page: number }
  | { type: "RESET" }
  | { type: "RETRY_PRODUCTS" }
  | { type: "RETRY_IMAGES" };

type ServiceType = {
  fetchProduct: { data: ProductsResponse };
  fetchImages: { data: ImagesResponse };
};
const PAGE_LIMIT = 4;

//get product by limit and page
const getProductsByPage = (
  products: Product[] | null,
  page: number
): Product[] | null => {
  if (!products) return null;
  const startIndex = (page - 1) * PAGE_LIMIT;
  const endIndex = startIndex + PAGE_LIMIT;
  return products.slice(startIndex, endIndex);
};
const checkIslastPage = (products: Product[] | null, page: number): boolean => {
  if (!products) return false;
  const totalProducts = products.length;
  const startIndex = (page - 1) * PAGE_LIMIT;
  return startIndex + PAGE_LIMIT >= totalProducts;
};

export const productListMachine = setup({
  types: {
    context: {} as ContextType,
    // events: {} as EventType,
  },
  guards: {
    isNotLastPage: ({ context }) => !context.isLastPage,
  },
  actors: {
    fetchProduct: fromPromise(() => fetchProducts()),
    fetchImages: fromPromise(() => fetchImages()),
  },
  actions: {
    setProducts: assign({
      products: ({ event }) => event.output.data,
    }),
    setSelectedProduct: assign({
      selectedProduct: ({ event }) => event.product,
    }),
    setShowProducts: assign({
      showProducts: ({ context }) =>
        getProductsByPage(context.products, context.page),
    }),
    setPageProducts: assign({
      page: ({ context }) => context.page + 1,
      showProducts: ({ context }) => [
        ...(context.showProducts ?? []),
        ...(getProductsByPage(context.products, context.page + 1) ?? []),
      ],
      isLastPage: ({ context }) =>
        checkIslastPage(context.products, context.page + 1),
    }),
  },
}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAcBOB7CBXAxgFwEkBbAQxgDEw8cALAOgDMraBLAOygGIJ02w7YeEnn5pMuQqQrN6TajXZQA2gAYAuohTpYLPC16aQAD0QB2FQE46pgBwBGAEwBmGwDYVdgKyeHAFgA0IACeiE6eTnQqtl4qDqY+vj4AvkmBYtj4xGRglPKMMop06RKwdAA26CQQity8-OwAbugA1qIYGZLZubT58oXF+KUVVYoIjeg4wvpsqmqzhsjautOGJghOdhF2viqujs4WTs5OgSEIDg4qdJ4qt7GuvnuephY2KWntElnSeXKsHEVPoNypVqhxOGBUBhUEUysIGOhUERAeJMlIcjJev8oCiOkNQaNxpM9LxZvMkCBFjoSWxVqFNnRtrt9k5DsdTvSIs97Bt4m4nE4VJ53pSgZ0fj0-goASx0fiRuCeHw6ONWrivujurICjK5SCFVAxmwmsTpmT1AsljS6esVDY6IdTL4LM9Nq4HDYbByEL5zNdos6nC9Pc5halRajxRjfjqcbLsvKwVxIdDYfDEciBlGtVjpXG9cMk0aTVNSepyVpqSsKWtBfbHc7XU53Z7vZ5XBFXO24jZnaGnSlw2xMHAFmLvtHaJaqwYa4gALS+Bzexd2B0WDcvRw2Uysp2uEVZic5qWKafLWegNaub2Ja53bYvd0OPamQ-jzWY08ArPwClUi9aTnBBPACYJEE2CI7luHcHDsOwLEuN9wyPT8Yz6H8xUTM9-ytasrwg2JvWOSJWSiS4LF8JcnV8d9I2PL9Y3VYFYFwHA4D-StAJtG41w2BwbiOA4bCiMCzj8NcVDImw4iOQUPCcOiOgY9DsWYvBSgYEgWDKLBUDAc9rWA3i6H4wSLlZESnW9fj-XsOwHl7UCHiUjUukYjD8wTQz8OMRBQJsmwoOibxEmdByqNctF3NUvMVQLAkOB8y8-IQOwiPAn0gsZOxTDgkN7E8XKww+ei0MlJj4xgUpWJwdjYE4yk8JStY+wdXY4g8PLPAsXLb16nK8ocSjXHcPxfSi7MPLUqq4EYbTdP05KgIIn1EPa91zFygTetMNt3ToLt3Q7fLOuQ0rlPK+h9KqM4uKM1aZIiGT7Ck1wdwsUab0ysIrheyw4k2mxkkHIA */
  id: "productImageFetch",
  initial: "fetching",
  context: {
    products: null,
    images: null,
    productError: null,
    imageError: null,
    page: 1,
    isLastPage: false,
    showProducts: null, // Optional: for displaying products in the UI
  },
  states: {
    fetching: {
      type: "parallel",
      states: {
        products: {
          initial: "loading",
          states: {
            loading: {
              invoke: {
                src: "fetchProduct",
                onDone: {
                  target: "success",
                  actions: ["setProducts", "setShowProducts"],
                },
                onError: {
                  target: "failure",
                },
              },
            },
            success: { type: "final" },
            failure: {},
          },
        },
        images: {
          initial: "loading",
          states: {
            loading: {
              on: {
                SHOW_MORE_PRODUCTS: [
                  {
                    actions: ["setPageProducts"],
                    guard: "isNotLastPage",
                  },
                ],
                SET_SELECTED_PRODUCT: {
                  actions: ["setSelectedProduct"],
                },
              },
              invoke: {
                src: "fetchImages",
                onDone: {
                  target: "success",
                  actions: assign({
                    images: ({ event }) => {
                      const data: Record<string, string> = {};
                      event.output?.data.forEach((image: ImagesResponse) => {
                        image.id.forEach((productId: string) => {
                          if (productId) {
                            data[productId] = image.image;
                          }
                        });
                      });
                      return data;
                    },
                  }),
                },
                onError: {
                  target: "failure",
                },
              },
            },
            success: { type: "final" },
            failure: {},
          },
        },
      },
      onDone: "ready", // ✅ only happens when both sub-states reach `success` (final)
    },
    ready: {
      on: {
        SHOW_MORE_PRODUCTS: {
          actions: ["setPageProducts"],
          guard: "isNotLastPage",
        },
        SET_SELECTED_PRODUCT: {
          actions: ["setSelectedProduct"],
        },
      },
    },
  },
});
