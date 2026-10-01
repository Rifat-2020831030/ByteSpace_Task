import { ASSETS } from "@/lib/assets";
import Image from "next/image";
import { TintedShape } from "../ui/TintedShape";
import { Button } from "../ui/Button";

export function CreatorCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-blue">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center opacity-30">
        <Image src={ASSETS.cta.grid} alt="Grid" fill className="object-cover" />
      </div>

      {/* Background Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        <div className="relative w-full max-w-[1440px] h-full">
          {/* 1. Top Right Cone */}
          <TintedShape
            src={ASSETS.cta.shape1}
            color="bg-brand-lime"
            className="-translate-x-1/2 w-[188px] aspect-square left-1/2 ml-[454px] top-[0%]"
          />

          {/* 2. Bottom Right Shape */}
          <TintedShape
            src={ASSETS.cta.shape2}
            color="bg-brand-lime"
            className="-translate-x-1/2 w-[330px] aspect-square left-1/2 ml-[555px] top-[60%]"
          />

          {/* 3. Top Left Shape */}
          <TintedShape
            src={ASSETS.cta.shape3}
            color="bg-brand-lime"
            className="-translate-x-1/2 w-[385px] aspect-square left-1/2 -ml-[645px] top-[-33%]"
          />

          {/* 4. Top Center-Left Shape (flipped) */}
          <TintedShape
            src={ASSETS.cta.shape3}
            color="bg-brand-gray-50"
            className="-translate-x-1/2 w-[175px] aspect-square left-1/2 -ml-[454px] top-[1%]"
            flip
          />

          {/* 5. Bottom Left Cone */}
          <TintedShape
            src={ASSETS.cta.shape4}
            color="bg-brand-gray-50"
            className="-translate-x-1/2 w-[188px] aspect-square left-1/2 -ml-[674px] top-[46%]"
          />

          {/* 6. Bottom Center-Left Cone */}
          <TintedShape
            src={ASSETS.cta.shape5}
            color="bg-brand-lime"
            className="-translate-x-1/2 w-[342px] aspect-square left-1/2 -ml-[529px] top-[61%]"
          />

          {/* 7. Far Right Center Cone */}
          <TintedShape
            src={ASSETS.cta.shape6}
            color="bg-brand-gray-50"
            className="-translate-x-1/2 w-[370px] aspect-square left-1/2 ml-[691px] top-[1%]"
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-24 py-20 md:py-[100px] flex flex-col items-center justify-center text-center">
        <h2 className="font-heading font-semibold text-[32px] md:text-[44px] leading-[1.2] text-white max-w-[700px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        <p className="font-body font-normal text-[16px] md:text-[18px] leading-[1.6] text-brand-gray-50 max-w-[964px] mt-6 mb-10">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <Button rounded="24px" className="px-[24px]">
          Join as Creator
        </Button>
      </div>
    </section>
  );
}
