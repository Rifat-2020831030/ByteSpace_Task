import { ASSETS } from "@/lib/assets";
import Image from "next/image";

export function ProfessionalGrowth() {
  return (
    <section className="relative w-full py-16 md:py-32 flex justify-center overflow-hidden">
      <div className="relative z-10 max-w-[1440px] w-full px-4 sm:px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-[63px]">
        {/* Left Side: Text and Stats */}
        <div className="flex flex-col gap-10 lg:w-[574px] shrink-0">
          <div className="flex flex-col gap-6">
            <h2 className="font-heading font-semibold text-[32px] md:text-[44px] leading-[1.2] text-brand-gray-950 tracking-[-0.44px] max-w-[577px]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="font-body font-normal text-[16px] md:text-[18px] leading-[1.6] text-brand-text-secondary max-w-[477px]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-[56px] items-end mt-4">
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-[48px] text-brand-blue leading-[1.2] tracking-[-0.48px]">
                12K
              </span>
              <span className="font-body font-normal text-[16px] text-brand-text-secondary leading-[1.2] mt-1">
                Students
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-[48px] text-brand-blue leading-[1.2] tracking-[-0.48px]">
                70+
              </span>
              <span className="font-body font-normal text-[16px] text-brand-text-secondary leading-[1.2] mt-1">
                Courses
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-[48px] text-brand-blue leading-[1.2] tracking-[-0.48px]">
                16
              </span>
              <span className="font-body font-normal text-[16px] text-brand-text-secondary leading-[1.2] mt-1">
                Creators
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Image and Floating Cards */}
        <div className="relative w-full max-w-[577px] aspect-[577/540] shrink-0 mt-8 lg:mt-0">
          {/* Main Photo (z-20 so card goes behind it) */}
          {/* REMOVED rounded and overflow and shadow so transparent PNG floats normally! */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <Image
              src={ASSETS.growth.student1}
              alt="Student learning"
              fill
              className="object-contain"
            />
          </div>

          {/* Floating Course Card - BEHIND the student (z-10) */}
          <div className="absolute -left-4 md:-left-[50px] top-[20px] md:top-[120px] scale-[0.6] md:scale-[0.75] origin-top-left z-10 pointer-events-none opacity-80 md:opacity-100">
            <div className="w-[373px] bg-white rounded-[24px] border border-brand-gray-200 p-4 flex flex-col shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
              <div className="relative w-full aspect-[341/195] rounded-[12px] overflow-hidden bg-[#443131]">
                <Image
                  src={ASSETS.courses.course1}
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-3 px-3 flex gap-2">
                  <div className="bg-[rgba(246,246,246,0.6)] backdrop-blur-[4px] px-[12px] py-[6px] rounded-[24px] text-[12px] font-body font-medium text-brand-text-tertiary">
                    17 Lessons
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-[4px]">
                    <h3 className="font-heading font-semibold text-[20px] text-black leading-[1.2]">
                      Learn Figma from Basic
                    </h3>
                    <p className="font-body font-normal text-[12px] text-brand-text-tertiary">
                      by{" "}
                      <span className="text-brand-blue">purepearl studio</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[12px]">
                  <div className="bg-brand-gray-50 flex items-center gap-[4px] px-[12px] py-[6px] rounded-[24px]">
                    <span className="font-body font-medium text-[12px] text-brand-text-secondary">
                      Beginner
                    </span>
                  </div>
                </div>
                <div className="flex items-end mt-auto h-[24px]">
                  <span className="font-heading font-semibold text-[20px] text-brand-blue leading-[1.2]">
                    $25
                  </span>
                  <span className="font-body font-normal text-[12px] text-brand-text-tertiary pl-[4px]">
                    /lifetime
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Learning Progress Card - Above the student (z-30) */}
          <div className="absolute -right-4 md:-right-4 top-[38%] bg-white/90 backdrop-blur-[10px] p-[16px] rounded-[16px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex flex-col gap-[8px] z-30">
            <p className="font-body font-medium text-[14px] text-brand-gray-950 leading-[1.6]">
              Learning Progress
            </p>
            <p className="font-heading font-semibold text-[48px] text-brand-gray-950 leading-[1.2] tracking-[-0.48px]">
              55%
            </p>
            <div className="w-[200px] h-[8px] bg-[#f6f6f6] rounded-[24px] overflow-hidden">
              <div className="h-full bg-brand-lime w-[55%] rounded-[24px]"></div>
            </div>
          </div>

          {/* 3D Shape - Lime Color, properly positioned via CSS Mask */}
          <div className="absolute left-[30%] md:left-[73%] -top-8 md:top-[50px] w-[150px] md:w-[215px] aspect-square z-30 pointer-events-none">
            <Image
              src={ASSETS.growth.shape1}
              alt=""
              fill
              className="object-contain pointer-events-none"
            />
            <div
              className="absolute inset-0 bg-brand-lime mix-blend-hard-light pointer-events-none"
              style={{
                WebkitMaskImage: `url(${ASSETS.growth.shape1})`,
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskImage: `url(${ASSETS.growth.shape1})`,
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
