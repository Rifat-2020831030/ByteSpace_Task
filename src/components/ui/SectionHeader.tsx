import React from "react";

export type SectionHeaderProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  title,
  description,
  titleClassName = "",
  descriptionClassName = "",
  className = "",
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col gap-4 md:gap-6 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      <h2
        className={`font-heading font-semibold text-[32px] md:text-[44px] leading-[1.2] text-brand-gray-950 tracking-[-0.44px] ${titleClassName}`}
      >
        {title}
      </h2>
      <p
        className={`font-body font-normal text-[16px] md:text-[18px] leading-[1.6] text-brand-text-secondary ${descriptionClassName}`}
      >
        {description}
      </p>
    </div>
  );
}
