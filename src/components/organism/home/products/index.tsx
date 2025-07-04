"use client";

import Container from "@/components/molecules/container";
import React from "react";
import Card from "@/components/molecules/card";
import { productListMachine } from "@/domain/products/machine";
import { useMachine } from "@xstate/react";
import Button from "@/components/atom/button";

function Categories() {
  const [state, send] = useMachine(productListMachine);

  // Safely access products and images state
  const productsState =
    typeof state.value === "object" && "fetching" in state.value
      ? state.value.fetching.products
      : undefined;
  const imagesState =
    typeof state.value === "object" && "fetching" in state.value
      ? state.value.fetching.images
      : undefined;

  const isProductReady =
    (productsState && productsState === "success") ||
    state.matches("ready") ||
    state.context?.showProducts;

  return (
    <Container>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
        Featured <span className="text-primary">Products</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {isProductReady &&
          state.context.showProducts &&
          state.context.showProducts.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              image={state.context?.images?.[product.id]}
            />
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
    </Container>
  );
}
export default Categories;
