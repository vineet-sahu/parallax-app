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
    <section className="text-white md:py-16 md:px-6 md:px-16 w-full">
      <div className="md:text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">OUR HAPPY CLIENTS</h2>
        <p className="mt-4 text-gray-300">
          Dummy ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonialSection.testimonial_items.map((item) => (
          <div key={item.id} className="bg-[#141827] rounded-xl p-6 shadow-lg relative">
            <span className="text-4xl text-teal-400 font-serif">“</span>
            <p className="mt-4 text-gray-200 text-sm leading-relaxed">{item.quote}</p>

            <div className="mt-6">
              <h4 className="font-bold">{item.author_name}</h4>
              <p className="text-gray-400 text-sm">
                ({item.author_designation}, {item.company})
              </p>
            </div>

            <hr className="my-6 bg-gray-400 opacity-10" />

            <div className="text-xs text-gray-400">
              <p>Star Rating - {item.star_rating} / 5</p>
              <p>Project - {item.project}</p>
              <p>Country - {item.country}</p>
            </div>

            {item.company_logo?.url && (
              <div className="absolute bottom-4 right-6">
                <img src={getStrapiMediaUrl(item.company_logo) as string} alt={item.company} className="h-6 object-contain" />
              </div>
            )}
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
