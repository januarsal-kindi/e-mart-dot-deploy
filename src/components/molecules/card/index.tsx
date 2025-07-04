import { Star, Heart } from "lucide-react";
import Image from "next/image";
import Button from "@/components/atom/button";
export type CardProps = {
  id: string;
  name: string;
  image?: string;
};

function Card({ id, name, image }: CardProps) {
  return (
    <div className="w-full max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer">
      {/* Header with discount badge and heart icon */}
      <div className="relative">
        <div className="absolute top-0 w-full p-2 flex justify-between items-center z-10 ">
          <div className="flex justify-between items-start w-full ">
            <div className="bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full">
              20% Off
            </div>
            {/* <button className="h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
              <Heart className="h-5 w-5 text-gray-600" />
            </button> */}
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
          <span className="text-gray-500 text-sm">Fruits</span>
          <div className="flex items-center gap-1">
            <Star className=" h-4 w-4 md:h-4 md:w-4 fill-yellow-400 " />
            <span className="text-xs md:text-sm font-medium text-gray-900">
              4.8
            </span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-base md:text-lg font-semibold text-gray-900 line-clamp-2 h-14">
          {name}
        </h3>

        {/* Weight */}
        <p className="text-gray-500 text-xs md:text-xs line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga
          sunt omnis aliquid molestiae autem veritatis atque
        </p>

        {/* Price and Add Button */}
        <div className="flex justify-between items-center pt-2">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <span className="text-base md:text-lg font-bold text-gray-900">
              $10.00
            </span>
            <span className="text-gray-400 line-through text-xs">$12.00</span>
          </div>

          <Button variant="default" size="sm" label="Add" />
        </div>
      </div>
    </div>
  );
}

export default Card;
