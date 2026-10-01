import Image from "next/image";
import React from "react";

export type TintedShapeProps = {
  src: string;
  color: string;
  className?: string;
  flip?: boolean;
};

export function TintedShape({
  src,
  color,
  className = "",
  flip = false,
}: TintedShapeProps) {
  return (
    <div
      className={`absolute z-0 pointer-events-none ${className} ${
        flip ? "-scale-x-100" : ""
      }`}
    >
      {/* Base Grayscale Image for 3D Shading */}
      <Image
        src={src}
        alt=""
        fill
        className="object-contain pointer-events-none opacity-80"
       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />

      {/* Color Overlay using Hard-Light blend mode to tint the 3D shape while preserving shadows */}
      <div
        className={`absolute inset-0 ${color} mix-blend-hard-light pointer-events-none`}
        style={{
          WebkitMaskImage: `url(${src})`,
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskImage: `url(${src})`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
        }}
      />
    </div>
  );
}
