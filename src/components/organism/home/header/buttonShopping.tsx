"use client";

import React from "react";
import Button from "@/components/atom/button";

function ButtonShopping() {
  const scrollToProductSection = () => {
    if (typeof window !== "undefined") {
      const section = document.getElementById("products-list");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Button
      variant="default"
      size="lg"
      className="px-8"
      label="Shop Now"
      onClick={() => scrollToProductSection()}
    />
  );
}
export default ButtonShopping;
