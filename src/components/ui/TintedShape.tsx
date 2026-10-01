import Image from "next/image";

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
  let filterClass = "";
  if (color.includes("lime")) {
    filterClass = "tint-electric-lime";
  } else if (color.includes("gray-50") || color.includes("white")) {
    filterClass = "tint-white";
  } else {
    filterClass = "tint-shuttle-gray";
  }

  return (
    <div
      className={`absolute z-0 pointer-events-none ${className} ${
        flip ? "-scale-x-100" : ""
      }`}
    >
      <Image
        src={src}
        alt=""
        fill
        className={`object-contain pointer-events-none opacity-90 ${filterClass}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
