"use client";

import { memo, useMemo } from "react";
import { useAppContext } from "@/context/ParallaxContext";
import { getStrapiMediaUrl } from "@/lib/strapi";
import Image from "next/image";
import { Media } from "@/utils";

const Insights = () => {
  const {
    insights: { isLoading, error, data },
  } = useAppContext();

  const insightsData = useMemo(() => data?.data?.sections?.[0], [data]);
  const sectionId = insightsData?.sectionId;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10 animate-pulse text-gray-400">
        Loading insights...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-10 text-red-500">
        Error loading insights.
      </div>
    );
  }

  if (!insightsData?.items?.length) {
    return (
      <div className="flex justify-center items-center py-10 text-gray-400">
        No insights available.
      </div>
    );
  }

  return (
    <section id={sectionId} className="section w-full text-white md:py-16">
      <div className="mr-auto">
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-4xl font-bold">{insightsData.title}</h2>
          {insightsData.description && (
            <p className="mt-2 text-gray-400 max-w-2xl mx-auto lg:mx-0">
              {insightsData.description}
            </p>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {insightsData.items.map((item) => {
            const imageUrl = getStrapiMediaUrl(item.image as Media);

            return (
              <article
                key={item.id}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg flex flex-col transition-transform hover:scale-[1.02] hover:shadow-xl duration-300"
              >
                {imageUrl && (
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src={imageUrl}
                      alt={item.title || "Insight image"}
                      fill
                      className="object-cover p-4 rounded-[25px] border"
                      quality={85}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  {item.summary && (
                    <p className="text-gray-400 text-sm mt-3 flex-1">{item.summary}</p>
                  )}

                  {item.url && (
                    <div className="mt-4">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Read more about ${item.title}`}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-gray-700 transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 3h7m0 0v7m0-7L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default memo(Insights);
