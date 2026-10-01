import React, { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, leftIcon, className = "", id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className={`flex flex-col gap-[8px] items-start w-full ${className}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="font-body font-medium text-sm text-brand-gray-950 leading-[1.2]"
          >
            {label}
          </label>
        )}
        <div className="bg-white border border-brand-gray-100 flex h-[52px] items-center px-[24px] py-[12px] rounded-[12px] w-full focus-within:border-brand-blue focus-within:ring-1 focus-within:ring-brand-blue transition-all">
          {leftIcon && <div className="mr-[8px] flex items-center justify-center">{leftIcon}</div>}
          <input
            id={inputId}
            ref={ref}
            className="flex-1 bg-transparent border-none outline-none font-body font-normal text-lg text-brand-text-secondary leading-[1.6] placeholder:text-[#82868e] w-full"
            {...props}
          />
        </div>
        {error && (
          <span className="font-body font-normal text-xs text-red-500">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
