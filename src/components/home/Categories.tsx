import { getCategories } from "@/services/category.service";
import Image from "next/image";
import { SectionHeader } from "../ui/SectionHeader";
import { CategoryCard } from "../ui/CategoryCard";

export async function Categories() {
  const categories = await getCategories();

  return (
    <section className="w-full bg-white py-16 md:py-24 flex justify-center">
      <div className="max-w-[1440px] w-full px-4 sm:px-6 lg:px-24 flex flex-col items-center gap-12 text-center">
        <SectionHeader
          title="Explore Diverse Learning Paths at Bytespace"
          description={
            <>
              At Bytespace, we believe in empowering individuals through
              knowledge. Our diverse range of courses spans various fields,
              ensuring there&apos;s something for everyone. Unleash your potential
              and explore our carefully curated categories.
            </>
          }
          className="max-w-[917px]"
          titleClassName="md:text-4xl text-[#040819] tracking-[-0.0225rem]"
          descriptionClassName="text-brand-gray-400"
        />

        <div className="flex flex-wrap justify-center gap-[40px] w-full mt-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
