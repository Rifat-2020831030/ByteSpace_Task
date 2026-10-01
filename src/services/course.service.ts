import { ASSETS } from "@/lib/assets";

export type Course = {
  id: string;
  title: string;
  author: string;
  level: string;
  price: string;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  students: number;
};

export async function getFeaturedCourses(): Promise<Course[]> {
  return [
    {
      id: "1",
      title: "Learn Figma from Basic",
      author: "purepearl studio",
      level: "Beginner",
      price: "$25",
      image: ASSETS.courses.course1,
      lessons: 17,
      duration: "2 hours 16 mins",
      comments: 59,
      rating: 4.5,
      students: 26,
    },
    {
      id: "2",
      title: "Build Digital Asset",
      author: "purepearl studio",
      level: "Beginner",
      price: "$35",
      image: ASSETS.courses.course2,
      lessons: 17,
      duration: "2 hours 16 mins",
      comments: 59,
      rating: 4.5,
      students: 26,
    },
    {
      id: "3",
      title: "The Power of Big Data",
      author: "purepearl studio",
      level: "Beginner",
      price: "$49",
      image: ASSETS.courses.course3,
      lessons: 17,
      duration: "2 hours 16 mins",
      comments: 59,
      rating: 4.5,
      students: 26,
    },
    {
      id: "4",
      title: "Balancing Productivity and Self-Care",
      author: "purepearl studio",
      level: "Beginner",
      price: "$29",
      image: ASSETS.courses.course4,
      lessons: 17,
      duration: "2 hours 16 mins",
      comments: 59,
      rating: 4.5,
      students: 26,
    },
    {
      id: "5",
      title: "Mastering Money Management",
      author: "purepearl studio",
      level: "Beginner",
      price: "$39",
      image: ASSETS.courses.course5,
      lessons: 17,
      duration: "2 hours 16 mins",
      comments: 59,
      rating: 4.5,
      students: 26,
    },
    {
      id: "6",
      title: "Promote & Market Successfully",
      author: "purepearl studio",
      level: "Beginner",
      price: "$45",
      image: ASSETS.courses.course6,
      lessons: 17,
      duration: "2 hours 16 mins",
      comments: 59,
      rating: 4.5,
      students: 26,
    },
  ];
}

export async function getCourseOfTheDay(): Promise<Course> {
  return {
    id: "1",
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    level: "Beginner",
    price: "$25",
    image: ASSETS.courses.course1,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    students: 26,
  };
}
export async function getCourseFilters(): Promise<string[]> {
  return [
    "Finance",
    "Art",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Sketching",
    "Digital Illustration",
    "Arts & Artist",
    "Math",
    "Character & Animation Course",
    "Graphic Design",
    "Photography",
    "Productivity",
    "Web Development",
    "Data Science",
    "Reading",
    "+ More",
  ];
}
