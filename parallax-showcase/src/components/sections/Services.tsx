import { useAppContext } from "@/context/ParallaxContext";
import cardImage1 from "@/assets/cardImage1.png";
import cardImage2 from "@/assets/cardImage2.png";
import cardImage3 from "@/assets/cardImage3.webp";
import cardImage4 from "@/assets/cardImage4.png";
import { getStrapiMediaUrl } from "@/lib/strapi";

export const Services = () => {
  const {
    services: { isLoading, error, data },
  } = useAppContext();

  const servicesData = data?.data?.sections?.[0];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading services</div>;
  if (!servicesData) return null;

  return (
    <>
      
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          {servicesData.title}
        </h2>
        <p className="mt-4 text-gray-300">{servicesData.description}</p>
      </div>

      
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(308px,1fr))] gap-4 max-md:gap-6">
      {servicesData.service_details.map((card, index) => (
        <div key={index} className="relative" style={{ top: 0, opacity: 1 }}>
          <div
            className="relative h-[436px] gap-4 rounded-xl px-5 py-8 bg-sky-500/50"
            style={{ backgroundColor: card?.bgColor || "#00A5EF" }}
          >
            <img
              alt="Image Card"
              loading="lazy"
              width={149.28}
              height={177}
              decoding="async"
              className="absolute right-5 top-8"
              style={{ color: "transparent" }}
              src={getStrapiMediaUrl(card.icon) as string}
            />

            <p className="flex h-8 w-[97px] items-center justify-center rounded-[50px] border border-[#ffffff1a] bg-[#ffffff0d] text-[10px]">
              Our Services
            </p>

            <div className="mt-[48px] flex min-h-[292px] flex-col justify-between">
              <div className="space-y-4">
                <p className="w-[80%] text-2xl font-semibold leading-[26px]">
                  {card.title}
                </p>
                <p className="font-inter text-sm font-medium text-[#ffffffcc]">
                  {card.description}
                </p>
              </div>

              <button className="mx-auto flex h-14 w-full items-center justify-center gap-2 rounded-[80px] bg-black px-2 py-3 text-xs">
                <p>Talk to a Product Expert</p>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};
