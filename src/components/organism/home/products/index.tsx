"use client";

import Container from "@/components/molecules/container";
import React from "react";
import Card from "@/components/molecules/card";
import { productListMachine } from "@/domain/products/machine";
import { useMachine } from "@xstate/react";
import Button from "@/components/atom/button";
import ModalDetailProduct from "./modalDetailProduct";
import CardShimmer from "@/components/molecules/card/cardShimmer";

const FailedToLoadProducts = ({ onRetry }: { onRetry: () => void }) => {
  return (
    <div className="w-full flex justify-center items-center h-64">
      <p className="text-gray-500 text-lg">
        Failed to load products. Please try again later.
      </p>
      <Button
        variant="secondary"
        size="lg"
        label="Retry"
        className="mt-4"
        onClick={() => onRetry?.()}
      />
    </div>
  );
};

function Categories() {
  const [state, send] = useMachine(productListMachine);

  // Safely access products and images state
  const productsState =
    typeof state.value === "object" && "fetching" in state.value
      ? state.value.fetching.products
      : undefined;

  const isProductReady =
    (productsState && productsState === "success") ||
    state.matches("ready") ||
    state.context?.showProducts;

  return (
    <Container id="products-list">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
        Featured <span className="text-primary">Products</span>
      </h2>

      {productsState === "failure" && (
        <FailedToLoadProducts onRetry={() => send({ type: "RETRY" })} />
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {productsState === "loading" &&
          Array.from({ length: 4 }).map((_, index) => (
            <div className="animate-fadeInUp" key={index}>
              <CardShimmer />
            </div>
          ))}
        {isProductReady &&
          state.context.showProducts &&
          state.context.showProducts.map((product) => (
            <div className="animate-fadeInUp" key={product.id}>
              <Card
                key={product.id}
                id={product.id}
                name={product.name}
                description={state.context.productsDetails?.[product.id]?.description}
                price={state.context.productsDetails?.[product.id]?.price}
                basePrice={state.context.productsDetails?.[product.id]?.basePrice}
                category={state.context.productsDetails?.[product.id]?.category}
                rating={state.context.productsDetails?.[product.id]?.rating?.rate}
                image={state.context?.images?.[product.id]}
                onClick={() =>
                  send({
                    type: "SET_SELECTED_PRODUCT",
                    product: product,
                  })
                }
              />
            </div>
          ))}
      </div>

      {isProductReady && !state.context.isLastPage && (
        <div className="w-full flex  justify-center  mt-12">
          <Button
            variant="secondary"
            size="lg"
            label="Show More"
            className="w-48"
            onClick={() => send({ type: "SHOW_MORE_PRODUCTS" })}
          />
        </div>
      )}
      {state.context.selectedProduct && (
        <ModalDetailProduct
          open={!!state.context.selectedProduct}
          onClose={() => send({ type: "SET_SELECTED_PRODUCT", product: null })}
          name={state.context.selectedProduct.name}
          image={state.context.images?.[state.context.selectedProduct.id]}
          description={
            state.context.productsDetails?.[state.context.selectedProduct.id]
              ?.description
          }
          price={
            state.context.productsDetails?.[state.context.selectedProduct.id]
              ?.price
          }
          basePrice={
            state.context.productsDetails?.[state.context.selectedProduct.id]
              ?.basePrice
          }
          category={
            state.context.productsDetails?.[state.context.selectedProduct.id]
              ?.category
          }
          rating={
            state.context.productsDetails?.[state.context.selectedProduct.id]
              ?.rating?.rate
          }
          
        />
      )}
    </Container>
  );
}
export default Categories;
