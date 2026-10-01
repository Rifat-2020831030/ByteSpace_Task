import { ASSETS } from "@/lib/assets";
import { TestimonialService } from "@/services/testimonial.service";
import Image from "next/image";
import { SectionHeader } from "../ui/SectionHeader";
import { TestimonialCard } from "../ui/TestimonialCard";
import { ScrollReveal } from "../ui/ScrollReveal";

export async function Testimonials() {
  const testimonials = await TestimonialService.getTestimonials();

  return (
    <section className="relative w-full overflow-hidden bg-brand-light">
      {/* Absolute SVG Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={ASSETS.testimonials.bg}
          alt=""
          fill
          className="object-cover object-center"
          priority
         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[118px] py-16 md:py-[100px] flex flex-col gap-[72px]">
        {/* Header Row */}
        <ScrollReveal delay={0}>
          <SectionHeader
            align="left"
            title="Discover What Our Community Is Saying"
            description="At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators."
            className="xl:flex-row xl:items-end justify-between gap-8 xl:gap-[43px]"
            titleClassName="text-black max-w-[577px]"
            descriptionClassName="max-w-[580px]"
          />
        </ScrollReveal>

        {/* Cards Row */}
        <div className="flex flex-col lg:flex-row gap-[41px] items-stretch w-full overflow-x-auto snap-x pb-8">
          {testimonials.map((testimonial, idx) => (
            <ScrollReveal key={idx} delay={idx * 150} animation="scale-up" className="flex shrink-0 snap-center w-full lg:w-[374px] min-w-[300px]">
              <TestimonialCard
                testimonial={testimonial}
                className="w-full h-full"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
