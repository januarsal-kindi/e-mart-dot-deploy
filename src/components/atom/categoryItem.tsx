import React, { Suspense } from "react";
import { classNames } from "@/lib/utils";

export type CategoryItemProps = {
  id: number;
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconClassName?: string;
  textClassName?: string;
};


function CategoryItem({ id, name, description, icon, iconClassName, textClassName }: CategoryItemProps) {
  const Icon = icon;

  return (
    <div className="flex flex-col items-center gap-1" key={id}>
      <div className="flex flex-col items-center justify-center p-4 bg-[#F0F0F0] rounded-full shadow-md">
        <Suspense fallback={<div className="w-12 h-12 bg-gray-200 rounded" />}>
          <Icon className={classNames("w-8 h-8", iconClassName)} />
        </Suspense>
      </div>
      <h3 className={classNames("mt-5 text-lg text-semibold", textClassName)}>{name}</h3>
    </div>
  );
}
export default CategoryItem;