import img12 from "@/assets/image12.png";
import { useAppContext } from "@/context/ParallaxContext";
import { getStrapiMediaUrl } from "@/lib/strapi";
import Image from "next/image";
import { memo, useMemo } from "react";

const TechnologyStack = () => {
  const {
    technologyStack: { isLoading, error, data },
  } = useAppContext();

  const technologyStackData = useMemo(() => data?.data?.sections?.[0], [data]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10 animate-pulse text-gray-400">
        Loading technology stack...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-10 text-red-500">
        Error loading technology stack.
      </div>
    );
  }

  if (!technologyStackData?.technology_stacks?.length) {
    return (
      <div className="flex justify-center items-center py-10 text-gray-400">
        No technology stack available.
      </div>
    );
  }

  return (
    <div
      className="section w-full text-white md:py-16 md:px-6"
      id={(data?.data?.sections || [])[0]?.sectionId}
    >
      <div className="mr-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="bg-gray-800 rounded-3xl p-10 relative overflow-hidden">
          <h2 className="text-4xl font-bold leading-snug">{technologyStackData.heading}</h2>
          <p className="mt-4 text-gray-400">{technologyStackData.description}</p>
          <div className="mt-10">
            <Image
              src={img12.src as string}
              alt={"3D Shape"}
              className="rounded-lg"
              width={100}
              height={100}
              quality={90}
            />
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
                      <Image
                        src={`${getStrapiMediaUrl(tool.icon)}`}
                        alt={tool.name}
                        className="w-5 h-5"
                        width={100}
                        height={100}
                        quality={90}
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

export default memo(TechnologyStack);
