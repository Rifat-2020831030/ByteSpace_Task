import { Categories } from "@/components/home/Categories";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { Hero } from "@/components/home/Hero";
import { Partners } from "@/components/home/Partners";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <Partners />
      <FeaturedCourses />
      <Categories />
    </div>
  );
}
