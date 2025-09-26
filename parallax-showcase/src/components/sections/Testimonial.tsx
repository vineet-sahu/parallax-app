import { useAppContext } from "@/context/ParallaxContext";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { TestimonialSection } from "@/types/Testimonial";
/* eslint-disable @next/next/no-img-element */

export const Testimonial = () => {
  const {
    testimonial: { isLoading, error, data },
  } = useAppContext();

  const testimonialSection: TestimonialSection | undefined = data?.data?.sections?.[0];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading testimonialSection</div>;
  if (!testimonialSection) return null;

  return (
    <section className="text-white md:py-16 w-full">
      <div className="max-w-3xl mr-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">{testimonialSection.title}</h2>
        <p className="mt-4 text-gray-300">
          {testimonialSection.description}
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,_minmax(340px,1fr))] gap-4 max-md:gap-6"
      >
        {testimonialSection.testimonial_items.map((item) => (
        <div
        key={item.id}
        className="h-[450px] rounded-[20px] bg-[#bdd5f40d] p-6 backdrop-blur-[40px] transition-all duration-200 hover:bg-[#bdd5f433] relative"
      >
        {/* Quote Icon */}
        <span className="text-4xl text-teal-400 font-serif">“</span>

        {/* Main Quote */}
        <div className="mt-2.5 flex h-[282px] flex-col justify-between border-b border-[#ffffff1a] pb-6">
          <p className="min-h-[192px] font-medium">{item.quote}</p>

          {/* Author Info */}
          <div className="h-[42px] w-full space-y-1 text-end">
            <p className="text-sm font-bold">{item.author_name}</p>
            <p className="text-xs text-[#ffffff99]">
              ({item.author_designation}, {item.company})
            </p>
          </div>
        </div>

        {/* Footer Details */}
        <div className="mt-6 flex h-[54px] items-center justify-between">
          <div className="text-[10px] font-normal text-[#ffffff99] space-y-1">
            <p className="leading-[18px]">Star Rating - {item.star_rating} / 5</p>
            <p className="leading-[18px]">Project - {item.project}</p>
            <p className="leading-[18px]">Country - {item.country}</p>
          </div>

          {/* Company Logo */}
          {item.company_logo?.url && (
            <img
              alt={item.company}
              width={63}
              height={24}
              className="h-6 w-[63px]"
              src={getStrapiMediaUrl(item.company_logo)}
            />
          )}
        </div>
      </div>
        ))}
      </div>

      <div className="flex justify-end gap-4 mt-8">
        <button className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center">
          ←
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center">
          →
        </button>
      </div>
    </section>
  );
};
