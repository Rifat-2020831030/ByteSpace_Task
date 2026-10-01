import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  rounded?: "full" | "24px";
}

export function Button({
  className = "",
  variant = "primary",
  size = "md",
  rounded = "full",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-body font-medium transition-colors focus:outline-none cursor-pointer";

  const variants = {
    primary: "bg-brand-lime hover:bg-[#c4eb1a] text-brand-gray-950",
    secondary: "bg-brand-gray-50 text-brand-text-secondary hover:bg-[#e0e0e1]",
    outline: "border border-brand-gray-200 bg-white text-brand-gray-950 hover:border-brand-lime",
    ghost: "bg-transparent hover:bg-brand-gray-50 text-brand-gray-950",
  };

  const sizes = {
    sm: "h-[40px] px-[16px] text-sm",
    md: "h-[44px] px-[20px] text-base",
    lg: "h-[52px] px-[24px] md:px-[32px] text-base md:text-lg",
  };

  const borderRadii = {
    full: "rounded-full",
    "24px": "rounded-[24px]",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${borderRadii[rounded]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
