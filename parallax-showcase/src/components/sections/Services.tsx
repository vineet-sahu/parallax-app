"use client";

import { memo, useMemo } from "react";
import { useAppContext } from "@/context/ParallaxContext";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { Media } from "@/utils";
import Image from "next/image";

const Services = () => {
  const {
    services: { isLoading, error, data },
  } = useAppContext();

  const servicesData = useMemo(() => data?.data?.sections?.[0], [data]);
  const sectionId = servicesData?.sectionId;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10 animate-pulse text-gray-400">
        Loading services...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-10 text-red-500">
        Error loading services.
      </div>
    );
  }

  if (!servicesData?.service_details?.length) {
    return (
      <div className="flex justify-center items-center py-10 text-gray-400">
        No services available.
      </div>
    );
  }

  return (
    <section id={sectionId} className="section">
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">{servicesData.title}</h2>
        {servicesData.description && (
          <p className="mt-4 text-gray-300">{servicesData.description}</p>
        )}
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,_minmax(308px,1fr))] gap-6">
        {servicesData.service_details.map((card) => {
          const imageUrl = getStrapiMediaUrl(card.icon as Media);

          return (
            <article
              key={card.id || card.title}
              className="relative h-[436px] rounded-xl p-6 md:p-8 bg-sky-500/50 flex flex-col justify-between overflow-hidden shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg duration-300"
              style={{ backgroundColor: card?.bgColor || "#00A5EF" }}
            >
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={card.title || "Service icon"}
                  width={149}
                  height={177}
                  loading="lazy"
                  className="absolute right-5 top-6 object-contain"
                  quality={85}
                />
              )}

              <p className="flex h-8 w-fit px-3 items-center justify-center rounded-full border border-[#ffffff1a] bg-[#ffffff0d] text-[10px] text-white">
                Our Services
              </p>

              <div className="mt-10 flex flex-col flex-1 justify-between relative z-10">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold leading-tight text-white">{card.title}</h3>
                  <p className="font-inter text-sm font-medium text-[#ffffffcc]">
                    {card.description}
                  </p>
                </div>

                <button
                  type="button"
                  className="mt-8 flex items-center justify-center gap-2 rounded-full bg-black px-4 py-3 text-xs text-white hover:bg-gray-900 transition"
                >
                  <span>Talk to a Product Expert</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default memo(Services);
