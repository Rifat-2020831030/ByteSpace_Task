import { getCategories } from "@/services/category.service";
import Image from "next/image";

export async function Categories() {
  const categories = await getCategories();

  return (
    <section className="w-full bg-white py-16 md:py-24 flex justify-center">
      <div className="max-w-[1200px] w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12 text-center">
        <div className="flex flex-col items-center gap-[16px] max-w-[917px]">
          <h2 className="font-['Poppins:SemiBold'] text-[32px] md:text-[36px] leading-[1.2] text-[#040819] tracking-[-0.36px]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="font-['Satoshi:Regular'] text-[#82868e] text-[16px] md:text-[18px] leading-[1.6]">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-[40px] w-full mt-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white border border-[#ced0d3] flex flex-col items-center justify-center rounded-[24px] w-[167px] h-[167px] group cursor-pointer hover:border-[#d4fb20] transition-colors"
            >
              <div className="flex flex-col items-center gap-[12px]">
                <div className="bg-[#d4fb20] rounded-full p-[12px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="relative w-[36px] h-[36px]">
                    <Image
                      src={category.icon}
                      alt={category.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="font-['Satoshi:Medium'] text-[#242528] text-[20px] leading-[1.2] text-center">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
