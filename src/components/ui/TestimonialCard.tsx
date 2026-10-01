import Image from "next/image";
import React from "react";

export type Testimonial = {
  id?: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
};

export type TestimonialCardProps = {
  testimonial: Testimonial;
  className?: string;
};

export function TestimonialCard({
  testimonial,
  className = "",
}: TestimonialCardProps) {
  return (
    <div
      className={`bg-white rounded-[24px] p-[24px] flex flex-col gap-[24px] shadow-sm ${className}`}
    >
      <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden shrink-0">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          fill
          className="object-cover"
         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>

      <div className="flex flex-col">
        <h3 className="font-heading font-semibold text-[20px] leading-[28px] text-black tracking-[-0.2px]">
          {testimonial.name}
        </h3>
        <span className="font-body font-normal text-[16px] md:text-[18px] leading-[1.6] text-brand-blue">
          {testimonial.role}
        </span>
      </div>

      <p className="font-body font-normal text-[16px] md:text-[18px] leading-[1.6] text-brand-text-tertiary">
        &quot;{testimonial.text}&quot;
      </p>
    </div>
  );
}
