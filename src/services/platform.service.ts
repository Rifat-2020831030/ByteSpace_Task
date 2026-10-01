import { ASSETS } from "@/lib/assets";

export type PlatformMetrics = {
  studentsCount: string;
  coursesCount: string;
  creatorsCount: string;
};

export class PlatformService {
  static async getMetrics(): Promise<PlatformMetrics> {
    return {
      studentsCount: "12K",
      coursesCount: "70+",
      creatorsCount: "16",
    };
  }

  static async getPartners(): Promise<string[]> {
    return [
      ASSETS.partners.partner1,
      ASSETS.partners.partner2,
      ASSETS.partners.partner3,
      ASSETS.partners.partner4,
      ASSETS.partners.partner5,
    ];
  }

  static async getNavLinks() {
    return [
      { label: "Home", href: "#" },
      { label: "Courses", href: "#" },
      { label: "Creators", href: "#" },
    ];
  }
}
