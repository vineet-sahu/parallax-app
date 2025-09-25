import { useAppContext } from "@/context/ParallaxContext";

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

      
      <div className="grid gap-6 items-stretch grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {servicesData.service_details?.map((service) => (
          <div
            key={service.id}
            className="bg-blue-700 p-6 rounded-xl shadow-lg flex flex-col justify-between h-full"
          >
            <span className="text-sm bg-white/10 px-3 py-1 rounded-full w-max mb-4">
              Our Services
            </span>

            
            <h3 className="mt-12 text-4xl font-bold mb-3 break-words">
              {service.title}
            </h3>

            
            <p className="text-gray-200 text-base mb-6">{service.description}</p>

            
            {service.buttonLink && (
              <a
                href={service.buttonLink || "#"}
                className="text-sm mt-auto inline-flex items-center justify-center px-1 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 sm:text-xs"
              >
                {service.buttonText || "Talk to a Product Expert"}
                <span className="ml-2">↗</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
