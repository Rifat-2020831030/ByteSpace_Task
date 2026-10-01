import { ASSETS } from "@/lib/assets";
import {
  getCourseFilters,
  getFeaturedCourses,
} from "@/services/course.service";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { CourseCard } from "../ui/CourseCard";
import { ScrollReveal } from "../ui/ScrollReveal";

export async function FeaturedCourses() {
  const filters = await getCourseFilters();
  const courses = await getFeaturedCourses();

  return (
    <section className="w-full bg-brand-gray-50 py-16 md:py-24 flex justify-center">
      <div className="max-w-[1200px] w-full px-4 sm:px-6 flex flex-col items-center gap-12">
        <SectionHeader
          title={
            <>
              Discover Your Passion,
              <br className="hidden sm:block" /> Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          className="max-w-[900px]"
          titleClassName="leading-tight"
          descriptionClassName="text-brand-gray-400 leading-relaxed"
        />

        <div className="flex flex-wrap justify-center items-center gap-3 w-full max-w-[1000px]">
          {filters.map((filter, index) => {
            if (filter === "+ More") {
              return (
                <Button
                  key={index}
                  variant="ghost"
                  className="px-4 py-2 h-auto text-brand-blue hover:bg-transparent text-[16px]"
                >
                  + More
                </Button>
              );
            }
            return (
              <Button
                key={index}
                variant={index === 0 ? "primary" : "secondary"}
                rounded="24px"
                className="px-5 py-2.5 h-auto text-[16px]"
              >
                {filter}
              </Button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] w-full">
          {courses.map((course, index) => (
            <ScrollReveal key={course.id} delay={index * 150} animation="scale-up" className="flex">
              <CourseCard course={course} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
