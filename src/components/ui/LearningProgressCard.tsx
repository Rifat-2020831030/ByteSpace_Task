import React from "react";

export type LearningProgressCardProps = {
  progress: number;
  className?: string;
  size?: "sm" | "md";
};

export function LearningProgressCard({
  progress,
  className = "",
  size = "md",
}: LearningProgressCardProps) {
  const isSm = size === "sm";

  return (
    <div
      className={`p-3 md:p-4 rounded-[16px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex flex-col gap-[8px] ${
        isSm ? "w-[140px] md:w-[200px]" : "w-[200px]"
      } ${className}`}
    >
      <p
        className={`font-body font-medium text-brand-gray-950 leading-[1.6] ${
          isSm ? "text-xs md:text-sm" : "text-sm"
        }`}
      >
        Learning Progress
      </p>
      <p
        className={`font-heading font-semibold text-brand-gray-950 leading-[1.2] tracking-[-0.03rem] ${
          isSm ? "text-[2rem] md:text-5xl" : "text-5xl"
        }`}
      >
        {progress}%
      </p>
      <div className="w-full h-[8px] bg-[#f6f6f6] rounded-[24px] overflow-hidden relative flex">
        <div
          className="h-full bg-brand-lime rounded-[24px]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
