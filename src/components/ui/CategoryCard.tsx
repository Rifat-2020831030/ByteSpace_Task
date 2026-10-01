import Image from "next/image";
import React from "react";

export type Category = {
  id?: string;
  title: string;
  icon: string;
};

export type CategoryCardProps = {
  category: Category;
  className?: string;
};

export function CategoryCard({ category, className = "" }: CategoryCardProps) {
  return (
    <div
      className={`bg-white border border-brand-gray-200 flex flex-col items-center justify-center rounded-[24px] w-[167px] h-[167px] group cursor-pointer hover:border-brand-lime transition-colors ${className}`}
    >
      <div className="flex flex-col items-center gap-[12px]">
        <div className="bg-brand-lime rounded-full p-[12px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <div className="relative w-[36px] h-[36px]">
            <Image
              src={category.icon}
              alt={category.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
        <h3 className="font-body font-medium text-brand-gray-950 text-[20px] leading-[1.2] text-center">
          {category.title}
        </h3>
      </div>
    </div>
  );
}
