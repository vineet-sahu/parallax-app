import { useAppContext } from "@/context/ParallaxContext";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { TestimonialSection } from "@/types/Testimonial";
import Image from "next/image";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const Testimonial = () => {
  const {
    testimonial: { isLoading, error, data },
  } = useAppContext();
  const controls = useAnimationControls();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonialSection: TestimonialSection | undefined = useMemo(
    () => data?.data?.sections?.[0],
    [data],
  );

  const testimonialItems = testimonialSection?.testimonial_items || [];
  const tripledItems = [...testimonialItems, ...testimonialItems, ...testimonialItems];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonialItems.length);
  }, [testimonialItems.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonialItems.length) % testimonialItems.length);
  }, [testimonialItems.length]);

  useEffect(() => {
    if (isHovered) return;

    const autoSlide = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(autoSlide);
  }, [currentIndex, isHovered, handleNext]);

  useEffect(() => {
    const cardWidth = 350;
    const gap = 32;
    controls.start({
      x: -currentIndex * (cardWidth + gap),
      transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] },
    });
  }, [currentIndex, controls]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10 animate-pulse text-gray-400">
        Loading testimonial section...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-10 text-red-500">
        Error loading testimonial section.
      </div>
    );
  }

  if (!testimonialSection?.testimonial_items?.length) {
    return (
      <div className="flex justify-center items-center py-10 text-gray-400">
        No testimonial section available.
      </div>
    );
  }

  return (
    <section className="text-white md:py-16 w-full" id={(data?.data?.sections || [])[0]?.sectionId}>
      <div className="max-w-3xl mr-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">{testimonialSection.title}</h2>
        <p className="mt-4 text-gray-300">{testimonialSection.description}</p>
      </div>

      <div className="mx-auto max-w-[92vw]">
        <div className="flex justify-end gap-4 my-8">
          <button
            className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center"
            onClick={handlePrev}
          >
            ←
          </button>
          <button
            className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center"
            onClick={handleNext}
          >
            →
          </button>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={controls}
            className="flex gap-8 w-fit"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {tripledItems.map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                className="min-w-[350px] max-w-[350px] h-[450px] rounded-[20px] bg-[#bdd5f40d] p-6 backdrop-blur-[40px] transition-all duration-200 hover:bg-[#bdd5f433] relative"
                whileHover={{ y: -8 }}
              >
                <span className="text-4xl text-teal-400 font-serif">“</span>

                <div className="mt-2.5 flex h-[282px] flex-col justify-between border-b border-[#ffffff1a] pb-6">
                  <p className="min-h-[192px] font-medium">{item.quote}</p>

                  <div className="h-[42px] w-full space-y-1 text-end">
                    <p className="text-sm font-bold">{item.author_name}</p>
                    <p className="text-xs text-[#ffffff99]">
                      ({item.author_designation}, {item.company})
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex h-[54px] items-center justify-between">
                  <div className="text-[10px] font-normal text-[#ffffff99] space-y-1">
                    <p className="leading-[18px]">Star Rating - {item.star_rating} / 5</p>
                    <p className="leading-[18px]">Project - {item.project}</p>
                    <p className="leading-[18px]">Country - {item.country}</p>
                  </div>

                  {item.company_logo?.url && (
                    <Image
                      alt={item.company}
                      width={63}
                      height={24}
                      className="h-6 w-[63px]"
                      src={getStrapiMediaUrl(item.company_logo) as string}
                      quality={90}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(Testimonial);
