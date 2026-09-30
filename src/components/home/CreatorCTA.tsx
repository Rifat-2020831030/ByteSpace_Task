import { ASSETS } from "@/lib/assets";
import Image from "next/image";

const MaskedShape = ({
  src,
  color,
  className,
  flip = false,
}: {
  src: string;
  color: string;
  className: string;
  flip?: boolean;
}) => (
  <div
    className={`-translate-x-1/2 absolute z-0 pointer-events-none ${className} ${
      flip ? "-scale-x-100" : ""
    }`}
  >
    {/* Base Grayscale Image for 3D Shading */}
    <Image
      src={src}
      alt=""
      fill
      className="object-contain pointer-events-none opacity-80"
    />

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

export function CreatorCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-[#003be2]">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center opacity-30">
        <Image src={ASSETS.cta.grid} alt="Grid" fill className="object-cover" />
      </div>

      {/* Background Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        <div className="relative w-full max-w-[1440px] h-full">
          {/* 1. Top Right Cone */}
          <MaskedShape
            src={ASSETS.cta.shape1}
            color="bg-[#d4fb20]"
            className="w-[188px] aspect-square left-1/2 ml-[454px] top-[0%]"
          />

          {/* 2. Bottom Right Shape */}
          <MaskedShape
            src={ASSETS.cta.shape2}
            color="bg-[#d4fb20]"
            className="w-[330px] aspect-square left-1/2 ml-[555px] top-[60%]"
          />

          {/* 3. Top Left Shape */}
          <MaskedShape
            src={ASSETS.cta.shape3}
            color="bg-[#d4fb20]"
            className="w-[385px] aspect-square left-1/2 -ml-[645px] top-[-33%]"
          />

          {/* 4. Top Center-Left Shape (flipped) */}
          <MaskedShape
            src={ASSETS.cta.shape3}
            color="bg-[#f5f5f6]"
            className="w-[175px] aspect-square left-1/2 -ml-[454px] top-[1%]"
            flip
          />

          {/* 5. Bottom Left Cone */}
          <MaskedShape
            src={ASSETS.cta.shape4}
            color="bg-[#f5f5f6]"
            className="w-[188px] aspect-square left-1/2 -ml-[674px] top-[46%]"
          />

          {/* 6. Bottom Center-Left Cone */}
          <MaskedShape
            src={ASSETS.cta.shape5}
            color="bg-[#d4fb20]"
            className="w-[342px] aspect-square left-1/2 -ml-[529px] top-[61%]"
          />

          {/* 7. Far Right Center Cone */}
          <MaskedShape
            src={ASSETS.cta.shape6}
            color="bg-[#f5f5f6]"
            className="w-[370px] aspect-square left-1/2 ml-[691px] top-[1%]"
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-24 py-20 md:py-[100px] flex flex-col items-center justify-center text-center">
        <h2 className="font-['Poppins:SemiBold'] text-[32px] md:text-[44px] leading-[1.2] text-white max-w-[700px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        <p className="font-['Satoshi:Regular'] text-[16px] md:text-[18px] leading-[1.6] text-[#f5f5f6] max-w-[964px] mt-6 mb-10">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <button className="bg-[#d4fb20] hover:bg-[#c4ec10] transition-colors px-[24px] py-[12px] rounded-[24px] font-['Satoshi:Medium'] text-[16px] md:text-[18px] text-[#242528] leading-[1.2]">
          Join as Creator
        </button>
      </div>
    </section>
  );
}
