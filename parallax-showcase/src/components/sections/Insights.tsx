import { useAppContext } from "@/context/ParallaxContext";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { Media } from "@/utils";
/* eslint-disable @next/next/no-img-element */


export const Insights = () => {
  const { insights: { isLoading, error, data } } = useAppContext();

  const insightsData = data?.data.sections[0];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading insights</div>;
  if (!insightsData) return null;

  return (
    <div className="w-full text-white md:py-16 md:px-6">
      <div className="mr-auto">

        
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-4xl font-bold uppercase">{insightsData.title}</h2>
          <p className="mt-2 text-gray-400">{insightsData.description}</p>
        </div>

        
        <div className="grid grid-cols-[repeat(auto-fill_,minmax(330px,1fr))] gap-[22px] max-sm:grid-cols-[repeat(auto-fill_,minmax(300px,1fr))]">
          {insightsData.items.map((item) => {
        
            const imageUrl = getStrapiMediaUrl(item.image as Media);

            return (
              <div key={item.id} className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg flex flex-col">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={item.title}
                    className="w-full p-6 rounded pb-0"
                  />
                )}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-3 flex-1">{item.summary}</p>
                  <div className="mt-4">
                    <a
                      href={item.url || "#"}
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
