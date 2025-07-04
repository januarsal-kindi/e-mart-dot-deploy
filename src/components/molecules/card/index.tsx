import { Star } from "lucide-react";
import Image from "next/image";
import { formatRupiah, getDiscount } from "@/lib/utils";
export type CardProps = {
  id: string;
  name: string;
  image?: string;
  description?: string;
  price?: number;
  basePrice?: number;
  category?: string;
  rating?: number;
  onClick?: () => void;
};

function Card({
  name,
  image,
  onClick,
  description,
  price,
  basePrice,
  category,
  rating,
}: CardProps) {
  const discount = getDiscount(price, basePrice);

  return (
    <div
      className="w-full max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer"
      onClick={() => onClick?.()}
    >
      {/* Header with discount badge and heart icon */}
      <div className="relative">
        <div className="absolute top-0 w-full p-2 flex justify-between items-center z-10 ">
          <div className="flex justify-between items-start w-full ">
            {discount && (
              <div className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                {discount}% Off
              </div>
            )}
          </div>
        </div>

        {/* Product Image */}
        <div className="">
          <div className="relative h-28 md:h-32 lg:h-36 w-full">
            {image ? (
              <Image src={image} alt={name} fill className="object-cover" />
            ) : (
              <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                <span className="text-gray-500">No Image Available</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className=" mt-2 px-4 pb-4 space-y-1">
        {/* Category and Rating */}
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">{category}</span>
          <div className="flex items-center gap-1">
            <Star className=" h-4 w-4 md:h-4 md:w-4 fill-yellow-400 " />
            {rating && (
              <span className="text-xs md:text-sm font-medium text-gray-900">
                {rating}
              </span>
            )}
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-base md:text-lg font-semibold text-gray-900 line-clamp-2 h-14">
          {name}
        </h3>

        {description && (
          <p className="text-gray-900 text-sm md:text-base line-clamp-2 h-12">
            {description}
          </p>
        )}

        {/* Price and Add Button */}
        <div className="flex justify-between items-center pt-2">
          <div className="flex flex-col md:flex-row items-center gap-2">
            {price && (
              <span className="text-base md:text-lg font-bold text-gray-900">
                {formatRupiah(price)}
              </span>
            )}

            {basePrice && (
              <span className="text-gray-400 line-through text-xs">
                {formatRupiah(basePrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
