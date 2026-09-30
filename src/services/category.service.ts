import { ASSETS } from "@/lib/assets";

export type Category = {
  id: string;
  title: string;
  icon: string;
};

export async function getCategories(): Promise<Category[]> {
  return [
    { id: "1", title: "Design", icon: ASSETS.categories.design },
    { id: "2", title: "Development", icon: ASSETS.categories.dev },
    { id: "3", title: "IT & Software", icon: ASSETS.categories.it },
    { id: "4", title: "Business", icon: ASSETS.categories.business },
    { id: "5", title: "Marketing", icon: ASSETS.categories.marketing },
    { id: "6", title: "Photography", icon: ASSETS.categories.photo },
  ];
}
