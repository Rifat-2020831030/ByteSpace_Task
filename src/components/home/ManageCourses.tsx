import { ASSETS } from "@/lib/assets";
import Image from "next/image";
import { TintedShape } from "../ui/TintedShape";
import { AvatarGroup } from "../ui/AvatarGroup";
import { SectionHeader } from "../ui/SectionHeader";
import { MiniStatCard } from "../ui/MiniStatCard";

export function ManageCourses() {
  return (
    <section className="relative w-full pt-8 md:pt-[36px] pb-16 md:pb-32 flex justify-center overflow-hidden">
      <div className="relative z-10 max-w-[1440px] w-full px-4 sm:px-6 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-[79px]">
        {/* Left Side: Image and Floating Cards */}
        <div className="relative w-full max-w-[541px] aspect-[541/596] shrink-0 mt-8 lg:mt-0">
          {/* Main Photo (Transparent cutout, no box/shadow) */}
          <div className="absolute right-0 bottom-0 h-[100%] md:h-[110%] w-[90%] md:w-[480px] z-20 pointer-events-none">
            <Image
              src={ASSETS.growth.shape2}
              alt="Student learning"
              fill
              className="object-contain object-bottom pointer-events-none"
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </div>

          {/* Floating Card: Total Revenue (Left edge) */}
          <MiniStatCard
            title="Total Revenue"
            subtitle="July 1-28"
            amount="$120.29"
            increase="+12$"
            progress={55}
            className="absolute left-0 top-[7.4%] z-30 w-[150px] md:w-[200px]"
          />

          {/* Floating Card: Year to Date (Left edge) */}
          <MiniStatCard
            title="Year to Date"
            subtitle="2023"
            amount="$1,200.38"
            increase="+12$"
            className="absolute left-0 top-[32.6%] z-30 w-[120px] md:w-[134px]"
          />

          {/* Floating Card: Happy Students (Bottom right) */}
          <div className="absolute left-[30%] md:left-[52.3%] top-[69.3%] bg-white backdrop-blur-[10px] p-[16px] rounded-[16px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex flex-col justify-center gap-[8px] z-30 w-[200px] md:w-[258px]">
            <div className="flex flex-col">
              <span className="font-body font-medium text-[16px] text-brand-gray-950 leading-[24px]">
                Happy Students
              </span>
              <div className="flex items-center">
                <span className="font-body font-bold text-brand-gray-950 text-[10px] leading-[1.5]">
                  4.5&nbsp;
                </span>
                <span className="font-body font-normal text-brand-gray-400 text-[10px] leading-[1.5]">
                  (240)
                </span>
                <div className="relative w-[16px] h-[16px] ml-1">
                  <Image
                    src={ASSETS.icons.star}
                    alt="Star"
                    fill
                    className="object-contain"
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
              ]}
              countText="2K+"
              avatarClassName="w-[32px] h-[32px] md:w-[43px] md:h-[43px] border-[1.5px] border-white -mr-[16px] z-[1]"
              badgeClassName="bg-brand-lime z-10 font-body font-bold text-[10px] md:text-[12px] text-brand-gray-950"
            />
          </div>

          {/* 3D Shape (Swirl) - BEHIND the student, Electric Lime! */}
          <TintedShape
            src={ASSETS.growth.student2}
            color="bg-brand-lime"
            className="right-[-5%] md:right-[0px] top-[10%] md:top-[120px] w-[150px] md:w-[215px] aspect-square z-10"
          />
        </div>

        {/* Right Side: Text and Features */}
        <div className="flex flex-col gap-[40px] lg:w-[580px] shrink-0">
          <SectionHeader
            align="left"
            title="Create & Manage Courses Easily."
            description={
              <>
                <span className="font-body font-bold text-brand-gray-950">
                  ByteSpace
                </span>{" "}
                supports individuals or entities in the creation, publication, and
                administration of educational courses.
              </>
            }
            titleClassName="max-w-[391px]"
            descriptionClassName="max-w-[574px]"
          />

          <div className="flex flex-col gap-[16px]">
            {[
              "Share Your Expertise",
              "Monetize Your Passion",
              "Flexibility and Autonomy",
              "Build a Community",
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-[8px]">
                <div className="relative w-[24px] h-[24px] shrink-0">
                  <Image
                    src={ASSETS.icons.check}
                    alt="Check"
                    fill
                    className="object-contain"
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <span className="font-body font-medium text-[16px] md:text-[18px] text-brand-gray-950 leading-[1.2]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
