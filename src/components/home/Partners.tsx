import { ASSETS } from "@/lib/assets";
import Image from "next/image";

export function Partners() {
  return (
    <section className="w-full bg-white py-12 md:py-20 flex justify-center">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
        {[
          ASSETS.partners.partner1,
          ASSETS.partners.partner2,
          ASSETS.partners.partner3,
          ASSETS.partners.partner4,
          ASSETS.partners.partner5,
        ].map((logo, i) => (
          <div key={i} className="relative h-8 md:h-10 w-24 md:w-32 lg:w-40 hover:scale-105 transition-transform duration-300">
            <Image src={logo} alt={`Partner ${i + 1}`} fill className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}

