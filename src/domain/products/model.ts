export type ProductsResponse = {
  id: string;
  name: string;
}

export type ImagesResponse = {
  id: string[];
  image: string;
}

export type ProductsDetailsResponse = {
  id: string;
  description: string;
  price: number;
  basePrice: number;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}