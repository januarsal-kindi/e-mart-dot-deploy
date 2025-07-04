import { ProductsResponse, ImagesResponse } from "./model";

export const fetchProducts = async (): Promise<{data:ProductsResponse[]}> => {
  const response = await fetch("https://www.giovankov.com/api/product.json");
  if (!response.ok) throw new Error("Failed to fetch products");
  return response.json();
};

export const fetchImages = async (): Promise<{data:ImagesResponse[]}> => {
  const response = await fetch("https://www.giovankov.com/api/image.json");
  if (!response.ok) throw new Error("Failed to fetch images");
  return response.json();
};
