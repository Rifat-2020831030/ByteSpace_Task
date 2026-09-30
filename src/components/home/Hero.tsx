import { ASSETS } from "@/lib/assets";
import Image from "next/image";
import { Header } from "../layout/Header";

export function Hero() {
  return (
    <div className="relative w-full min-h-screen lg:min-h-[1024px] bg-brand-blue overflow-hidden flex flex-col items-center">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center w-full min-w-[1440px]">
        <Image
          alt="Grid Background"
          className="object-cover object-top opacity-100"
          src={ASSETS.hero.gridBg}
          fill
          priority
        />
      </div>

      {/* Fixed 1440x1024 Absolute Background Layer for 3D Shapes & Glow */}
      {/* This layer uses origin-top and scales down on smaller screens, perfectly preserving Figma layout */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-[1024px] pointer-events-none z-0 transform origin-top scale-[0.4] sm:scale-[0.6] md:scale-[0.8] lg:scale-100">
        {/* Glow Ellipse */}
        <div className="-translate-x-1/2 absolute left-[calc(50%-0.5px)] size-[1149px] top-[750px] hidden md:block">
          <Image
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={ASSETS.hero.ellipseBg}
            fill
            priority
          />
        </div>

        {/* 3D Decorative Ornaments */}
        <div className="-translate-x-1/2 absolute bottom-[2.15%] left-[calc(50%+572px)] top-[65.63%] w-[330px]">
          <div className="absolute inset-[0_0.47%_-0.47%_-0.93%]">
            <Image
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full tint-shuttle-gray"
              src={ASSETS.shapes.shape1}
              fill
            />
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bottom-[40.82%] left-[calc(50%-645.5px)] top-[21.58%] w-[385px]">
          <div className="absolute inset-[0_0.47%_-0.47%_-0.93%]">
            <Image
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full tint-electric-lime"
              src={ASSETS.shapes.shape2}
              fill
            />
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bottom-[36.33%] flex items-center justify-center left-[calc(50%-449.5px)] top-[46.58%] w-[175px]">
          <div className="relative size-full">
            <div className="absolute inset-[0_0.47%_-0.47%_-0.93%]">
              <Image
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full scale-x-[-1] tint-shuttle-gray"
                src={ASSETS.shapes.shape2}
                fill
              />
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bottom-0 left-[calc(50%-531px)] top-[66.6%] w-[342px]">
          <div className="absolute inset-[-0.22%_0.56%_-0.28%_-1.05%]">
            <Image
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full tint-shuttle-gray"
              src={ASSETS.shapes.cone1}
              fill
            />
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bottom-[42.29%] left-[calc(50%+696px)] top-[21.58%] w-[370px]">
          <div className="absolute inset-[-0.22%_0.56%_-0.28%_-1.05%]">
            <Image
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full tint-electric-lime"
              src={ASSETS.shapes.cone2}
              fill
            />
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bottom-[36.33%] left-[calc(50%+480px)] top-[45.31%] w-[188px]">
          <div className="absolute inset-[-0.22%_0.56%_-0.28%_-1.05%]">
            <Image
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full tint-shuttle-gray"
              src={ASSETS.shapes.cone3}
              fill
            />
          </div>
        </div>
      </div>

      {/* Actual Responsive UI Container */}
      <div className="w-full max-w-[1440px] z-20 flex flex-col items-center px-4 sm:px-6 lg:px-[122px] pt-6 lg:pt-[35px] h-full flex-1">
        {/* Header replaces old fixed nav */}
        <Header />

        {/* Text & Search */}
        <div className="flex flex-col items-center text-center w-full mt-12 md:mt-24 lg:mt-[94px] z-30">
          <h1 className="font-heading font-semibold text-[40px] sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] lg:leading-[1.2] tracking-[-0.72px] text-white max-w-[935px]">
            Get Access to Hundreds
            <br className="hidden sm:block" /> Courses Available
          </h1>
          <p className="mt-6 md:mt-8 font-body font-normal text-[#e5e6e8] text-sm sm:text-base md:text-[18px] leading-[1.6] max-w-[600px]">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <div className="mt-8 md:mt-[60px] flex flex-col sm:flex-row gap-4 items-start w-full max-w-[620px]">
            <div className="flex-1 bg-white rounded-full flex items-center px-6 py-[12px] w-full h-[52px]">
              <div className="w-[24px] h-[24px] relative shrink-0">
                <Image src={ASSETS.icons.search} alt="Search" fill />
              </div>
              <input
                type="text"
                placeholder="Course, topic, creator"
                className="w-full outline-none bg-transparent ml-2 font-body font-normal text-brand-gray-400 text-sm md:text-[18px]"
              />
            </div>
            <button className="bg-brand-lime hover:bg-[#c4eb1a] transition-colors rounded-full h-[52px] px-8 flex items-center justify-center font-body font-medium text-brand-gray-950 text-[18px] w-full sm:w-auto shrink-0">
              Search
            </button>
          </div>
        </div>

        {/* Responsive Student Photo + Floating Cards Container */}
        {/* Matches Figma's aspect ratio of the student image exactly */}
        <div className="relative w-[90%] sm:w-[450px] md:w-[500px] lg:w-[578px] aspect-[578/541] mt-[20px] lg:mt-[30px] drop-shadow-2xl z-30">
          <Image
            alt="Student with headphones"
            src={ASSETS.hero.mainPhoto}
            fill
            className="object-cover object-bottom"
            priority
          />

          {/* Floating Card: UI/UX Design (Left) */}
          <div className="absolute left-[0%] sm:left-[-4.6%] top-[23.4%] backdrop-blur-[10px] bg-white/95 p-3 md:p-4 rounded-[16px] shadow-[0px_4px_24px_rgba(0,0,0,0.1)] flex flex-col w-[max-content] hover:-translate-y-1 transition-transform origin-top-left scale-75 sm:scale-100">
            <p className="font-body font-medium text-brand-gray-950 text-[12px] md:text-[16px] leading-[1.2]">
              UI/UX Design
            </p>
            <div className="flex items-center gap-[8px] mt-1 font-body font-normal text-brand-gray-400 text-[10px] md:text-[12px]">
              <span>200 Courses</span>
              <span className="text-[10px]">•</span>
              <span>1000+ Students</span>
            </div>
          </div>

          {/* Floating Card: Learning Progress (Right) */}
          <div className="absolute right-[0%] left-auto sm:right-auto sm:left-[71.1%] top-[25.6%] backdrop-blur-[10px] bg-white/95 p-3 md:p-4 rounded-[16px] shadow-[0px_4px_24px_rgba(0,0,0,0.1)] flex flex-col gap-[8px] w-[140px] md:w-[200px] hover:-translate-y-1 transition-transform origin-bottom-right scale-75 sm:scale-100">
            <p className="font-body font-medium text-brand-gray-950 text-[12px] md:text-[14px] leading-[1.2]">
              Learning Progress
            </p>
            <p className="font-heading font-semibold text-brand-gray-950 text-[32px] md:text-[48px] leading-[1.2] tracking-[-0.48px]">
              55%
            </p>
            <div className="w-full h-[8px] bg-[#f6f6f6] rounded-full overflow-hidden relative flex">
              <div className="h-full w-[55%] bg-brand-lime rounded-full" />
            </div>
          </div>

          {/* Floating Card: Happy Students (Bottom Left) */}
          <div className="absolute left-[0%] sm:left-[-17.8%] top-[60.0%] backdrop-blur-[10px] bg-white/95 p-3 md:p-4 rounded-[16px] shadow-[0px_4px_24px_rgba(0,0,0,0.1)] flex flex-col gap-2 w-[max-content] hover:-translate-y-1 transition-transform origin-bottom-left scale-75 sm:scale-100">
            <p className="font-body font-medium text-brand-gray-950 text-[14px] md:text-[16px] leading-[1.2]">
              Happy Students
            </p>
            <div className="flex items-center gap-1">
              <span className="font-body font-normal text-brand-gray-950 text-[10px] md:text-[12px] leading-[1.6]">
                4.5
              </span>
              <span className="font-body font-normal text-brand-gray-400 text-[10px] md:text-[12px] leading-[1.6]">
                (240)
              </span>
              <div className="relative w-[16px] h-[16px] ml-1">
                <Image src={ASSETS.icons.star} fill alt="star" />
              </div>
            </div>
            <div className="flex items-center mt-1">
              {[
                ASSETS.avatars.avatar1,
                ASSETS.avatars.avatar2,
                ASSETS.avatars.avatar3,
                ASSETS.avatars.avatar4,
                ASSETS.avatars.avatar5,
                ASSETS.avatars.avatar6,
                ASSETS.avatars.avatar7,
              ].map((avatar, i) => (
                <div
                  key={i}
                  className="relative w-[32px] h-[32px] md:w-[43px] md:h-[43px] -ml-[12px] md:-ml-[16px] first:ml-0 rounded-full border-[2px] border-white overflow-hidden shrink-0"
                >
                  <Image
                    src={avatar}
                    fill
                    className="object-cover"
                    alt="Student"
                  />
                </div>
              ))}
              <div className="relative w-[32px] h-[32px] md:w-[43px] md:h-[43px] -ml-[12px] md:-ml-[16px] rounded-full border-[2px] border-white shrink-0 flex items-center justify-center overflow-hidden">
                <Image
                  src={ASSETS.avatars.badgeBg}
                  fill
                  className="object-cover -z-10 absolute inset-0"
                  alt=""
                />
                <span className="font-body font-bold text-brand-gray-950 text-[10px] md:text-[12px] relative z-10">
                  2K+
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
