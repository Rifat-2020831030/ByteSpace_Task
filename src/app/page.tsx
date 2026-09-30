import { Categories } from "@/components/home/Categories";
import { CreatorCTA } from "@/components/home/CreatorCTA";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { Hero } from "@/components/home/Hero";
import { ManageCourses } from "@/components/home/ManageCourses";
import { Partners } from "@/components/home/Partners";
import { ProfessionalGrowth } from "@/components/home/ProfessionalGrowth";
import { Testimonials } from "@/components/home/Testimonials";
import { ASSETS } from "@/lib/assets";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <Partners />
      <FeaturedCourses />
      <Categories />

      <div className="relative w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src={ASSETS.growth.bg}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 w-full flex flex-col items-center">
          <ProfessionalGrowth />
          <ManageCourses />
        </div>
      </div>

      <CreatorCTA />
      <Testimonials />
    </div>
  );
}
