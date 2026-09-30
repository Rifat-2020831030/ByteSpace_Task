import { ASSETS } from "@/lib/assets";
import { TestimonialService } from "@/services/testimonial.service";
import Image from "next/image";

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
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[118px] py-16 md:py-[100px] flex flex-col gap-[72px]">
        {/* Header Row */}
        <div className="flex flex-col xl:flex-row items-start xl:items-end justify-between gap-8 xl:gap-[43px]">
          <h2 className="font-heading font-semibold text-[32px] md:text-[44px] leading-[1.2] text-black tracking-[-0.44px] max-w-[577px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="font-body font-normal text-[16px] md:text-[18px] leading-[1.6] text-brand-text-tertiary max-w-[580px]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Cards Row */}
        <div className="flex flex-col lg:flex-row gap-[41px] items-stretch w-full overflow-x-auto snap-x pb-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] p-[24px] flex flex-col gap-[24px] w-full min-w-[300px] lg:w-[374px] shrink-0 snap-center shadow-sm"
            >
              <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden shrink-0">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="font-heading font-semibold text-[20px] leading-[28px] text-black tracking-[-0.2px]">
                  {testimonial.name}
                </h3>
                <span className="font-body font-normal text-[16px] md:text-[18px] leading-[1.6] text-brand-blue">
                  {testimonial.role}
                </span>
              </div>

              <p className="font-body font-normal text-[16px] md:text-[18px] leading-[1.6] text-brand-text-tertiary">
                &quot;{testimonial.text}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
