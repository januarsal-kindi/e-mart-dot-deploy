import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function classNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatRupiah(value: number): string {
  return value.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
}


export function getDiscount(price?: number, basePrice?: number) {
  if (!price || !basePrice || basePrice <= price) return null;
  return Math.round(((basePrice - price) / basePrice) * 100);
}