/* eslint-disable @next/next/no-img-element */

import { useAppContext } from "@/context/ParallaxContext";
import { getStrapiMediaUrl } from "@/lib/strapi";

export const Client = ()=>{

  const { clientSection: {isLoading, error, data} } = useAppContext();
  const clients = (data?.data?.sections || [])[0]?.Client || [];

 if (isLoading) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 w-full">
      <div className="animate-pulse">Loading clients...</div>
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

if (!clients || clients.length === 0) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 w-full">
      <div>No clients found</div>
    </div>
  );
}

  return (
    <div
    className={`grid gap-4 mx-auto`}
    style={{
      gridTemplateColumns: `repeat(${clients.length}, minmax(0, 1fr))`,
    }}
  >
    {clients.map((client) => (
      <div
        key={client.id}
        className="flex items-center justify-center h-24 rounded"
      >
        {client.logo ? (
          <img
            className="w-auto object-contain"
            src={getStrapiMediaUrl(client.logo) as string}
            alt={client.logo.alternativeText || client.name}
            title={client.name}
          />
        ) : (
          <div className="flex items-center justify-center h-16 px-4 bg-gray-100 rounded">
            <span className="text-gray-600 text-sm">{client.name}</span>
          </div>
        )}
      </div>
    ))}
  </div>
  );
}