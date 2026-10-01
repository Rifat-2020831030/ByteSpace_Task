import { ASSETS } from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CourseCard } from "../ui/CourseCard";
import { AvatarGroup } from "../ui/AvatarGroup";
import { TintedShape } from "../ui/TintedShape";

export type AuthLayoutProps = {
  leftTitle: string;
  leftDescription: string;
  children: React.ReactNode;
};

export function AuthLayout({ leftTitle, leftDescription, children }: AuthLayoutProps) {
  // Mock courses for the floating cards based on Figma
  const course1 = {
    title: "Build Digital Asset",
    author: "purepearl studio",
    level: "Beginner",
    price: "$25",
    image: ASSETS.courses.course1,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    students: 26,
  };

  const course2 = {
    title: "the Power of Big Data",
    author: "purepearl studio",
    level: "Beginner",
    price: "$25",
    image: ASSETS.courses.course2,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    students: 26,
  };

  return (
    <div className="bg-brand-blue relative min-h-screen w-full overflow-hidden flex justify-center">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <Image
          src={ASSETS.hero.gridBg}
          alt=""
          fill
          className="object-cover opacity-50 mix-blend-overlay"
          priority
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1440px] min-h-screen lg:min-h-[1024px] mx-auto flex flex-col lg:grid lg:grid-cols-2 px-6 lg:px-[122px] py-[35px] lg:py-[120px]">
        
        {/* Header Logo (Absolute on Desktop, relative on Mobile) */}
        <div className="lg:absolute left-6 lg:left-[122px] top-[35px] z-50 mb-8 lg:mb-0">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-[28.8px] h-[31.5px]">
              <Image src={ASSETS.icons.logo} alt="ByteSpace" fill />
            </div>
            <span className="font-logo font-bold text-white text-[24px]">
              ByteSpace
            </span>
          </Link>
        </div>

        {/* Left Side (Hidden on smaller screens, shown on lg) */}
        <div className="hidden lg:flex flex-col relative w-full h-full">
          {/* Text Section */}
          <div className="flex flex-col gap-[16px] text-brand-gray-50 max-w-[475px]">
            <h1 className="font-heading font-semibold text-[20px] tracking-[-0.2px]">
              {leftTitle}
            </h1>
            <p className="font-body font-normal text-[18px] leading-[1.6]">
              {leftDescription}
            </p>
          </div>

          {/* Graphics Container */}
          <div className="relative w-full h-[600px] mt-[65px] -ml-[25px]">
            {/* 3D Shapes (Rendered first to stay behind cards) */}
            <TintedShape
              src={ASSETS.shapes.shape1}
              color="bg-brand-gray-50"
              className="w-[175px] h-[175px] left-[373px] top-[321px] z-0"
              flip
            />
            <TintedShape
              src={ASSETS.shapes.cone1}
              color="bg-brand-lime"
              className="w-[146px] h-[146px] left-[54px] top-[15px] z-0"
            />
            <TintedShape
              src={ASSETS.shapes.cone2}
              color="bg-brand-lime"
              className="w-[188px] h-[188px] left-[0px] top-[397px] z-0"
            />

            {/* Card 1 */}
            <div className="absolute left-[25px] top-[89px] z-10">
              <CourseCard course={course1} variant="floating" />
            </div>

            {/* Card 2 */}
            <div className="absolute left-[136px] top-0 z-20">
              <CourseCard course={course2} variant="floating" />
            </div>

            {/* Happy Students */}
            <div className="absolute left-[251px] top-[435px] z-30 backdrop-blur-[10px] bg-brand-lime p-[16px] rounded-[16px] w-[258px] flex flex-col gap-[8px]">
              <div className="flex flex-col text-brand-gray-950">
                <span className="font-body font-medium text-[16px] leading-[1.5]">Happy Students</span>
                <div className="flex items-center gap-1">
                  <span className="font-body font-bold text-[10px] leading-[1.5]">4.5</span>
                  <span className="font-body font-normal text-brand-text-secondary text-[10px] leading-[1.5]">(240)</span>
                  <div className="relative w-[16px] h-[16px]">
                    <Image src={ASSETS.icons.star} alt="Star" fill />
                  </div>
                </div>
              </div>
              <AvatarGroup
                avatars={[
                  ASSETS.avatars.avatar1,
                  ASSETS.avatars.avatar2,
                  ASSETS.avatars.avatar3,
                  ASSETS.avatars.avatar4,
                  ASSETS.avatars.avatar5,
                  ASSETS.avatars.avatar6,
                  ASSETS.avatars.avatar7,
                ]}
                countText="2K+"
                avatarClassName="w-[43px] h-[43px] -ml-[16px] first:ml-0"
                badgeClassName="w-[43px] h-[43px] -ml-[16px] bg-brand-gray-200 text-brand-gray-50 text-[12px]"
              />
            </div>
          </div>
        </div>

        {/* Right Side (Form Container) */}
        <div className="flex flex-1 items-center justify-center lg:justify-end w-full mt-8 lg:mt-0">
          <div className="bg-white rounded-[24px] w-full max-w-[579px] p-8 lg:p-[63px] min-h-[683px] flex flex-col justify-between shadow-2xl relative z-20">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
