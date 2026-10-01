import { ASSETS } from "@/lib/assets";
import Image from "next/image";
import React from "react";
import { AvatarGroup } from "./AvatarGroup";

export type CourseType = {
  id?: string;
  title: string;
  author: string;
  level: string;
  price: string;
  image: string;
  lessons: number;
  duration?: string;
  comments?: number;
  rating?: number;
  students?: number;
};

export type CourseCardProps = {
  course: CourseType;
  variant?: "default" | "floating";
  className?: string;
};

export function CourseCard({
  course,
  variant = "default",
  className = "",
}: CourseCardProps) {
  const isFloating = variant === "floating";

  return (
    <div
      className={`bg-white rounded-[24px] border border-brand-gray-200 p-4 flex flex-col ${
        isFloating
          ? "shadow-[0_20px_40px_rgba(0,0,0,0.1)] w-[373px]"
          : "w-full gap-[16px] hover:shadow-xl transition-shadow cursor-pointer group"
      } ${className}`}
    >
      <div
        className={`relative w-full aspect-[341/195] rounded-[12px] overflow-hidden bg-[#443131] ${
          isFloating ? "" : "shrink-0"
        }`}
      >
        <Image
          src={course.image}
          alt={course.title}
          fill
          className={`object-cover ${
            isFloating ? "" : "group-hover:scale-105 transition-transform duration-500"
          }`}
        />

        <div className="absolute inset-x-0 bottom-3 px-3 flex flex-wrap gap-[12px]">
          <div className="bg-[rgba(246,246,246,0.6)] backdrop-blur-[4px] px-[12px] py-[6px] rounded-[24px] text-[10px] md:text-[12px] font-body font-medium text-brand-text-tertiary">
            {course.lessons} Lessons
          </div>
          {!isFloating && course.duration && (
            <div className="bg-[rgba(246,246,246,0.6)] backdrop-blur-[4px] px-[12px] py-[6px] rounded-[24px] text-[10px] md:text-[12px] font-body font-medium text-brand-text-tertiary">
              {course.duration}
            </div>
          )}
          {!isFloating && course.comments !== undefined && (
            <div className="bg-[rgba(246,246,246,0.6)] backdrop-blur-[4px] px-[12px] py-[6px] rounded-[24px] text-[10px] md:text-[12px] font-body font-medium text-brand-text-tertiary">
              {course.comments} Comments
            </div>
          )}
        </div>
      </div>

      <div className={`flex flex-col gap-[16px] ${isFloating ? "mt-4" : "flex-1 mt-2"}`}>
        <div className="flex justify-between items-start">
          <div className={`flex flex-col gap-[4px] ${isFloating ? "" : "pr-2"}`}>
            <h3
              className={`font-heading font-semibold text-[20px] text-black leading-[1.2] ${
                isFloating ? "" : "tracking-[-0.2px] break-words"
              }`}
            >
              {course.title}
            </h3>
            <p className="font-body font-normal text-[12px] text-brand-text-tertiary">
              by <span className="text-brand-blue">{course.author}</span>
            </p>
          </div>
          {!isFloating && course.rating !== undefined && (
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
          )}
        </div>

        <div className="flex items-center gap-[12px]">
          <div className="bg-brand-gray-50 flex items-center gap-[4px] px-[12px] py-[6px] rounded-[24px]">
            {!isFloating && (
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
            )}
            <span className="font-body font-medium text-[12px] text-brand-text-secondary">
              {course.level}
            </span>
          </div>

          {!isFloating && course.students !== undefined && (
            <AvatarGroup
              avatars={[
                ASSETS.avatars.avatar1,
                ASSETS.avatars.avatar2,
                ASSETS.avatars.avatar3,
                ASSETS.avatars.avatar4,
              ]}
              countText={`${course.students}+`}
              avatarClassName="w-[32px] h-[32px] border-2 border-white -ml-2 first:ml-0"
              badgeClassName="bg-brand-lime font-body font-medium text-[12px] text-brand-gray-950 pt-[2px]"
            />
          )}
        </div>

        <div className="flex items-end mt-auto h-[24px]">
          <span
            className={`font-heading font-semibold text-[20px] text-brand-blue leading-[1.2] ${
              isFloating ? "" : "tracking-[-0.2px]"
            }`}
          >
            {course.price}
          </span>
          <span className="font-body font-normal text-[12px] text-brand-text-tertiary leading-[1.6] pl-[4px]">
            /lifetime
          </span>
        </div>
      </div>
    </div>
  );
}
