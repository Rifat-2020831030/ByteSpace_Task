import { ASSETS } from "@/lib/assets";
import Image from "next/image";

export function ManageCourses() {
  return (
    <section className="relative w-full py-16 md:py-32 flex justify-center overflow-hidden">
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
            />
          </div>

          {/* Floating Card: Total Revenue (Left edge) */}
          <div className="absolute left-0 top-[20px] md:top-[44px] bg-[#003be2] backdrop-blur-[10px] p-[16px] rounded-[16px] shadow-lg flex flex-col gap-[8px] z-30 w-[200px] md:w-fit">
            <div className="flex flex-col text-[#f5f5f6]">
              <span className="font-['Satoshi:Medium'] text-[16px] leading-[1.2]">
                Total Revenue
              </span>
              <span className="font-['Satoshi:Regular'] text-[10px] leading-[1.2]">
                July 1-28
              </span>
            </div>
            <div className="flex items-center justify-between gap-[16px]">
              <span className="font-['Poppins:SemiBold'] text-[24px] text-[#f5f5f6] leading-[32px] tracking-[-0.24px]">
                $120.29
              </span>
              <div className="bg-[#cbfc01] px-[8px] py-[2px] rounded-[24px]">
                <span className="font-['Satoshi:Medium'] text-[10px] text-[#242528]">
                  +12$
                </span>
              </div>
            </div>
            <div className="w-full md:w-[200px] h-[8px] bg-white rounded-[24px] overflow-hidden mt-2 relative">
              <div className="absolute left-0 top-0 h-full bg-[#d4fb20] w-[55%] rounded-[24px]"></div>
            </div>
          </div>

          {/* Floating Card: Year to Date (Left edge) */}
          <div className="absolute left-0 top-[150px] md:top-[194px] bg-[#003be2] backdrop-blur-[10px] p-[16px] rounded-[16px] shadow-lg flex flex-col gap-[8px] z-30 w-[134px]">
            <div className="flex flex-col text-[#f5f5f6]">
              <span className="font-['Satoshi:Medium'] text-[16px] leading-[1.2]">
                Year to Date
              </span>
              <span className="font-['Satoshi:Regular'] text-[10px] leading-[1.2]">
                2023
              </span>
            </div>
            <span className="font-['Poppins:SemiBold'] text-[24px] text-[#f5f5f6] leading-[32px] tracking-[-0.24px]">
              $1,200.38
            </span>
            <div className="bg-[#cbfc01] px-[8px] py-[2px] rounded-[24px] w-fit">
              <span className="font-['Satoshi:Medium'] text-[10px] text-[#242528]">
                +12$
              </span>
            </div>
          </div>

          {/* Floating Card: Happy Students (Bottom right) */}
          <div className="absolute right-0 md:left-[283px] bottom-0 md:top-[413px] bg-white backdrop-blur-[10px] p-[16px] rounded-[16px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex flex-col justify-center gap-[8px] z-30 w-[258px]">
            <span className="font-['Satoshi:Medium'] text-[16px] text-[#242528] leading-[24px]">
              Happy Students
            </span>

            <div className="flex items-center gap-[4px] -mt-1 mb-1">
              <span className="font-['Satoshi:Bold'] text-[#242528] text-[10px] leading-[1.5]">
                4.5
              </span>
              <span className="font-['Satoshi:Regular'] text-[#82868e] text-[10px] leading-[1.5]">
                (240)
              </span>
              <div className="relative w-[16px] h-[16px]">
                <Image
                  src={ASSETS.icons.star}
                  alt="Star"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex items-center">
              {[
                ASSETS.avatars.avatar1,
                ASSETS.avatars.avatar2,
                ASSETS.avatars.avatar3,
                ASSETS.avatars.avatar4,
                ASSETS.avatars.avatar5,
                ASSETS.avatars.avatar6,
              ].map((avatar, i) => (
                <div
                  key={i}
                  className="relative w-[43px] h-[43px] rounded-full border-[1.5px] border-white -mr-[16px] overflow-hidden shrink-0 z-[1]"
                >
                  <Image src={avatar} fill className="object-cover" alt="" />
                </div>
              ))}
              <div className="relative w-[43px] h-[43px] rounded-full border-[1.5px] border-white bg-[#d4fb20] flex items-center justify-center shrink-0 z-10">
                <span className="font-['Satoshi:Bold'] text-[12px] text-[#242528]">
                  2K+
                </span>
              </div>
            </div>
          </div>

          {/* 3D Shape (Swirl) - BEHIND the student, Electric Lime! */}
          <div className="absolute right-[-5%] md:right-[0px] top-[10%] md:top-[120px] w-[150px] md:w-[215px] aspect-square z-10 pointer-events-none">
            <Image
              src={ASSETS.growth.student2}
              alt=""
              fill
              className="object-contain pointer-events-none"
            />
            <div
              className="absolute inset-0 bg-[#d4fb20] mix-blend-hard-light pointer-events-none"
              style={{
                WebkitMaskImage: `url(${ASSETS.growth.student2})`,
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskImage: `url(${ASSETS.growth.student2})`,
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
              }}
            />
          </div>
        </div>

        {/* Right Side: Text and Features */}
        <div className="flex flex-col gap-[40px] lg:w-[580px] shrink-0">
          <div className="flex flex-col gap-6">
            <h2 className="font-['Poppins:SemiBold'] text-[32px] md:text-[44px] leading-[1.2] text-[#242528] tracking-[-0.44px] max-w-[391px]">
              Create & Manage Courses Easily.
            </h2>
            <p className="font-['Satoshi:Regular'] text-[16px] md:text-[18px] leading-[1.6] text-[#4b4c53] max-w-[574px]">
              <span className="font-['Satoshi:Bold'] text-[#242528]">
                ByteSpace
              </span>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
          </div>

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
                  />
                </div>
                <span className="font-['Satoshi:Medium'] text-[16px] md:text-[18px] text-[#242528] leading-[1.2]">
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
