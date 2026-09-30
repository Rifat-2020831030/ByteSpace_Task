import { ASSETS } from "@/lib/assets";
import {
  getCourseFilters,
  getFeaturedCourses,
} from "@/services/course.service";
import Image from "next/image";

export async function FeaturedCourses() {
  const filters = await getCourseFilters();
  const courses = await getFeaturedCourses();

  return (
    <section className="w-full bg-brand-gray-50 py-16 md:py-24 flex justify-center">
      <div className="max-w-[1200px] w-full px-4 sm:px-6 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center text-center gap-4 max-w-[900px]">
          <h2 className="font-heading font-semibold text-[32px] md:text-[44px] leading-tight text-brand-gray-950 tracking-[-0.44px]">
            Discover Your Passion,
            <br className="hidden sm:block" /> Build Your Skills
          </h2>
          <p className="font-body font-normal text-brand-gray-400 text-[16px] md:text-[18px] leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3 w-full max-w-[1000px]">
          {filters.map((filter, index) => {
            if (filter === "+ More") {
              return (
                <button
                  key={index}
                  className="px-4 py-2 text-brand-blue text-[16px] font-body font-medium"
                >
                  + More
                </button>
              );
            }
            return (
              <button
                key={index}
                className={`px-5 py-2.5 rounded-[24px] transition-colors text-[16px] font-body font-medium ${
                  index === 0
                    ? "bg-brand-lime text-brand-gray-950"
                    : "bg-brand-gray-50 text-brand-text-secondary hover:bg-[#e0e0e1]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] w-full">
          {courses.map((course) => (
            <div
              key={course.id}
              className="w-full bg-white rounded-[24px] border border-brand-gray-200 p-4 flex flex-col gap-[16px] hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className="relative w-full aspect-[341/195] rounded-[12px] overflow-hidden bg-[#443131] shrink-0">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-x-0 bottom-3 px-3 flex flex-wrap gap-[12px]">
                  <div className="bg-[rgba(246,246,246,0.6)] backdrop-blur-[4px] px-[12px] py-[6px] rounded-[24px] text-[10px] md:text-[12px] font-body font-medium text-brand-text-tertiary">
                    {course.lessons} Lessons
                  </div>
                  <div className="bg-[rgba(246,246,246,0.6)] backdrop-blur-[4px] px-[12px] py-[6px] rounded-[24px] text-[10px] md:text-[12px] font-body font-medium text-brand-text-tertiary">
                    {course.duration}
                  </div>
                  <div className="bg-[rgba(246,246,246,0.6)] backdrop-blur-[4px] px-[12px] py-[6px] rounded-[24px] text-[10px] md:text-[12px] font-body font-medium text-brand-text-tertiary">
                    {course.comments} Comments
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[16px] flex-1 mt-2">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-[4px] pr-2">
                    <h3 className="font-heading font-semibold text-[20px] text-black leading-[1.2] tracking-[-0.2px] break-words">
                      {course.title}
                    </h3>
                    <p className="font-body font-normal text-[12px] text-brand-text-tertiary">
                      by <span className="text-brand-blue">{course.author}</span>
                    </p>
                  </div>
                  <div className="flex items-center shrink-0">
                    <span className="font-body font-normal text-[18px] text-brand-text-tertiary leading-[1.6]">
                      {course.rating}&nbsp;
                    </span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#ced0d3"
                      stroke="#ced0d3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-[2px]"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                </div>

                <div className="flex items-center gap-[12px]">
                  <div className="bg-brand-gray-50 flex items-center gap-[4px] px-[12px] py-[6px] rounded-[24px]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-text-secondary"
                    >
                      <path d="M6 20v-6"></path>
                      <path d="M12 20v-10"></path>
                      <path d="M18 20v-14"></path>
                    </svg>
                    <span className="font-body font-medium text-[12px] text-brand-text-secondary">
                      {course.level}
                    </span>
                  </div>

                  <div className="flex items-center">
                    {[
                      ASSETS.avatars.avatar1,
                      ASSETS.avatars.avatar2,
                      ASSETS.avatars.avatar3,
                      ASSETS.avatars.avatar4,
                    ].map((avatar, i) => (
                      <div
                        key={i}
                        className="relative w-[32px] h-[32px] rounded-full border-2 border-white -ml-2 first:ml-0 overflow-hidden shrink-0"
                      >
                        <Image
                          src={avatar}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    ))}
                    <div className="relative w-[32px] h-[32px] rounded-full border-2 border-white -ml-2 bg-brand-lime flex items-center justify-center shrink-0 z-10">
                      <span className="font-body font-medium text-[12px] text-brand-gray-950 pt-[2px]">
                        {course.students}+
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-end mt-auto h-[24px]">
                  <span className="font-heading font-semibold text-[20px] text-brand-blue leading-[1.2] tracking-[-0.2px]">
                    {course.price}
                  </span>
                  <span className="font-body font-normal text-[12px] text-brand-text-tertiary leading-[1.6] pl-[4px]">
                    /lifetime
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
