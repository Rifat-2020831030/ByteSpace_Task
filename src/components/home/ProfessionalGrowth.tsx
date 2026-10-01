import { ASSETS } from "@/lib/assets";
import { getCourseOfTheDay } from "@/services/course.service";
import { PlatformService } from "@/services/platform.service";
import Image from "next/image";
import { CourseCard } from "../ui/CourseCard";
import { LearningProgressCard } from "../ui/LearningProgressCard";
import { SectionHeader } from "../ui/SectionHeader";
import { TintedShape } from "../ui/TintedShape";

export async function ProfessionalGrowth() {
  const metrics = await PlatformService.getMetrics();
  const featuredCourse = await getCourseOfTheDay();

  return (
    <section className="relative w-full pt-16 md:pt-32 pb-8 md:pb-[36px] flex justify-center overflow-hidden">
      <div className="relative z-10 max-w-[1440px] w-full px-4 sm:px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-[63px]">
        {/* Left Side: Text and Stats */}
        <div className="flex flex-col gap-10 lg:w-[574px] shrink-0">
          <SectionHeader
            align="left"
            title="Your Path to Professional Growth Starts Here!"
            description="Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need."
            titleClassName="max-w-[577px]"
            descriptionClassName="max-w-[477px]"
          />

          <div className="flex flex-wrap gap-8 md:gap-[56px] items-end mt-4">
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-[48px] text-brand-blue leading-[1.2] tracking-[-0.48px]">
                {metrics.studentsCount}
              </span>
              <span className="font-body font-normal text-[16px] text-brand-text-secondary leading-[1.2] mt-1">
                Students
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-[48px] text-brand-blue leading-[1.2] tracking-[-0.48px]">
                {metrics.coursesCount}
              </span>
              <span className="font-body font-normal text-[16px] text-brand-text-secondary leading-[1.2] mt-1">
                Courses
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-[48px] text-brand-blue leading-[1.2] tracking-[-0.48px]">
                {metrics.creatorsCount}
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
            <CourseCard course={featuredCourse} />
          </div>

          {/* Floating Learning Progress Card - Above the student (z-30) */}
          <LearningProgressCard
            progress={55}
            className="absolute -right-4 md:-right-4 md:top-[38%] top-[50%] bg-white/90 z-30"
          />

          {/* 3D Shape - Lime Color, properly positioned via CSS Mask */}
          <TintedShape
            src={ASSETS.growth.shape1}
            color="bg-brand-lime"
            className="left-[30%] md:left-[79%] -top-8 md:top-[55px] w-[150px] md:w-[215px] aspect-square z-30 hidden"
          />
        </div>
      </div>
    </section>
  );
}
