import React from "react";
import Modal from "@/components/molecules/modal";
import Image from "next/image";
import { Star } from "lucide-react";
import { formatRupiah } from "@/lib/utils";

export type ModalDetailProductProps = {
  open: boolean;
  onClose: () => void;
  image?: string;
  name?: string;
  description?: string;
  price?: number;
  basePrice?: number;
  category?: string;
  rating?: number;
};

export default function ModalDetailProduct({
  open,
  onClose,
  image,
  name,
  description,
  price,
  basePrice,
  category,
  rating,
}: ModalDetailProductProps) {
  return (
    <Modal open={open} onClose={() => onClose?.()}>
      <Modal.Title>{name}</Modal.Title>
      <Modal.Content>
        <div className="">
          <div className="relative h-[240] md:h-[360]  w-full">
            {image ? (
              <Image
                src={image}
                alt={name || "Product Image"}
                fill
                className="object-cover w-full h-auto relative"
              />
            ) : (
              <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                <span className="text-gray-500">No Image Available</span>
              </div>
            )}
          </div>
        </div>
        <div className="mt-2 pb-4 space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-gray-900 text-base md:text-lg">
              {category}
            </span>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 md:h-8 md:w-8   fill-yellow-400 " />
              <span className="text-xs md:text-sm font-medium text-gray-900">
                {rating}
              </span>
            </div>
          </div>
        </div>
        <p className="text-gray-900 text-sm md:text-base">{description}</p>
      </Modal.Content>
      <Modal.Footer>
        <div className="w-full flex justify-between items-center pt-2">
          <div className="flex flex-row items-center gap-2">
            <span className="text-base md:text-lg font-bold text-gray-900">
              {formatRupiah(price ? price : 0)}
            </span>
            <span className="text-gray-400 line-through text-xs">
              {formatRupiah(basePrice ? basePrice : 0)}
            </span>
          </div>
          <button
            onClick={() => onClose?.()}
            className="px-4 py-2 bg-gray-200 rounded text-gray-900"
          >
            Close
          </button>
        </div>
        {/* </Modal.Content> */}
      </Modal.Footer>
    </Modal>
  );
}
