"use client";

import { memo, useMemo } from "react";
import Image from "next/image";
import { useAppContext } from "@/context/ParallaxContext";
import { getStrapiMediaUrl } from "@/lib/strapi";

const Client = () => {
  const {
    clientSection: { isLoading, error, data },
  } = useAppContext();

  const clients = useMemo(() => data?.data?.sections?.[0]?.Client ?? [], [data]);

  if (isLoading) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 w-full">
        <div className="animate-pulse text-gray-500">Loading clients...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 w-full">
        <div className="text-red-500">Error loading clients</div>
      </div>
    );
  }

  if (!clients.length) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 w-full">
        <div className="text-gray-600">No clients found</div>
      </div>
    );
  }

  return (
    <section
      id={data?.data?.sections?.[0]?.sectionId ?? "clients"}
      className={`mx-auto grid gap-4 section grid-cols-${clients.length} sm:grid-cols-${Math.min(
        clients.length,
        3,
      )} md:grid-cols-${Math.min(clients.length, 7)} lg:grid-cols-${Math.min(
        clients.length,
        7,
      )} xl:grid-cols-${Math.min(clients.length, 8)} 2xl:grid-cols-${Math.min(
        clients.length,
        10,
      )} items-center justify-items-center w-full px-4 py-8`}
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
      }}
    >
      {clients.map((client) => {
        const imageUrl = client.logo ? getStrapiMediaUrl(client.logo) : null;
        return (
          <figure key={client.id} className="flex items-center justify-center h-24 rounded">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={client.logo?.alternativeText || client.name}
                title={client.name}
                width={client.logo?.width || 100}
                height={client.logo?.height || 100}
                loading="lazy"
                placeholder="empty"
                className="object-contain max-h-20 w-auto"
                quality={70}
              />
            ) : (
              <div className="flex items-center justify-center h-16 px-4 bg-gray-100 rounded">
                <span className="text-gray-600 text-sm">{client.name}</span>
              </div>
            )}
          </figure>
        );
      })}
    </section>
  );
};

export default memo(Client);
