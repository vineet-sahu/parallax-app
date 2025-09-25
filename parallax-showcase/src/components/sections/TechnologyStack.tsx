import img12 from "@/assets/image12.png";
import { useAppContext } from "@/context/ParallaxContext";
import { getStrapiMediaUrl } from "@/lib/strapi";
/* eslint-disable @next/next/no-img-element */

export const TechnologyStack = () => {
  const {
    technologyStack: { isLoading, error, data },
  } = useAppContext();

  const technologyStackData = data?.data?.sections?.[0];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading technologyStack</div>;
  if (!technologyStackData) return null;

  return (
    <div className="w-full text-white md:py-16 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="bg-gray-800 rounded-3xl p-10 relative overflow-hidden">
          <h2 className="text-4xl font-bold uppercase leading-snug">
            {technologyStackData.heading}
          </h2>
          <p className="mt-4 text-gray-400">
            {technologyStackData.description}
          </p>
          <div className="mt-10">
            <img src={img12.src} alt="3D Shape" className="rounded-lg" />
          </div>
        </div>

        
        <div className="space-y-10">
          {technologyStackData.technology_stacks?.map((stack, index) => (
            <div key={stack.id}>
              <div className="flex items-center gap-3">
                <span className="text-gray-600 text-2xl font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold">{stack.title}</h3>
              </div>

              
              <div className="flex flex-wrap gap-3 mt-3">
                {stack.tool?.map((tool) => (
                  <span
                    key={tool.id}
                    className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-lg"
                  >
                    {tool.icon?.url && (
                      <img
                        src={`${getStrapiMediaUrl(tool.icon)}`}
                        alt={tool.name}
                        className="w-5 h-5"
                      />
                    )}
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
