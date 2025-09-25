import { useAppContext } from "@/context/ParallaxContext";
import { getStrapiMediaUrl } from "@/lib/strapi";
import { Media } from "@/utils";
/* eslint-disable @next/next/no-img-element */


export const SuccessStories = ()=>{
      const {
        successStory: { isLoading, error, data },
      } = useAppContext();
    
      const successStoryData = data?.data?.sections?.[0];
    
      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Error loading successStory</div>;
      if (!successStoryData) return null;
      
return <>   
<div className="text-white md:py-16 md:px-6 w-full">
      <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="mb-12">
                  <h2 className="text-4xl font-bold uppercase">{successStoryData.heading}</h2>
                  <p className="mt-4 text-gray-400 max-w-2xl">
                      {successStoryData.subheading}
                  </p>
              </div>
              {
                successStoryData.stories.map((story) => (
                  <div key={story.id} className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                      <span className="absolute top-3 left-3 bg-gray-700 text-xs px-3 py-1 rounded-full">Success Stories</span>
                      <img src={getStrapiMediaUrl(story.image as Media) as string} alt={story.title} className="w-full" />
                      <div className="p-4">
                          <h3 className="text-xl font-semibold">{story.title}</h3>
                          <p className="text-gray-400 text-sm">{story.description}</p>
                      </div>
                  </div>
                ))
              }
          </div>
      </div>
      </div>
</>;
}