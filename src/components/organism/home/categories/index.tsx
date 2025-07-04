import Container from "@/components/molecules/container";
import React, { Suspense, lazy } from "react";
import CategoryItem from "@/components/atom/categoryItem";
import Image from "next/image";

function lazyIcon(
  importFn: () => Promise<{ default: React.ComponentType<any> }>
) {
  const Component = lazy(importFn);
  return (props: React.SVGProps<SVGSVGElement>) => (
    <Suspense fallback={<div className="w-12 h-12 mb-2 bg-gray-200 rounded" />}>
      <Component {...props} />
    </Suspense>
  );
}
const BagIcon = lazyIcon(() => import("@/assets/bag.svg"));
const TruckIcon = lazyIcon(() => import("@/assets/truck.svg"));
const BoxOfficeIcon = lazyIcon(() => import("@/assets/box-office.svg"));
const MarketIcon = lazyIcon(() => import("@/assets/market.svg"));

const CategoriesData = [
  {
    id: 1,
    name: "Bag & Purses",
    description: "Description for Category 1",
    icon: BagIcon,
  },
  {
    id: 2,
    name: "Otomotive",
    description: "Description for Category 2",
    icon: TruckIcon,
  },
  {
    id: 3,
    name: "Electronics",
    description: "Description for Category 3",
    icon: BoxOfficeIcon,
  },
  {
    id: 4,
    name: "Fashion",
    description: "Description for Category 4",
    icon: MarketIcon,
  },
  {
    id: 5,
    name: "Household",
    description: "Description for Category 5",
    icon: MarketIcon,
  },
];
function Categories() {
  return (
    <Container id="categories" className="bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
        Featured <span className="text-primary">Categories</span>
      </h2>
      <div className="flex items-center justify-around mt-12">
        {CategoriesData.map((category) => (
          <CategoryItem
            iconClassName="lg:w-12 lg:h-12 md:h-8 md:w-8 w-6 h-6 "
            textClassName="lg:text-lg md:text-base text-xs text-gray-900 font-semibold"
            key={category.id}
            id={category.id}
            name={category.name}
            description={category.description}
            icon={category.icon}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  mt-12 w-full bg-[#F1F8F4] rounded-md py-2 ">
        {/* about */}
        <div className="flex flex-col text-center md:text-left  items-center md:items-start justify-center p-8  gap-1 pr-4  rounded-lg">
          <h3 className="text-xl lg:text-3xl font-semibold text-gray-900 mb-2">
            High Standard Services and <br /> Best{" "}
            <span className="  text-primary">Quality Products </span>
          </h3>
          <p className="text-sm lg:text-xl text-gray-600 ">
            Explore a wide range of categories that suit your needs and
            preferences. From fashion to electronics, we have it all. lorem
            ipsum dolor sit amet consectetur. Tincidunt eu purus risus
          </p>
        </div>
        {/* image  */}
        <div className="hidden md:flex items-center justify-end  p-4">
          <Image
            src="/about-illustration.png"
            alt="Customer"
            width={500}
            height={500}
            className="w-64 md:w-64 lg:w-96 h-auto object-cover"
          />
        </div>
      </div>
    </Container>
  );
}
export default Categories;
