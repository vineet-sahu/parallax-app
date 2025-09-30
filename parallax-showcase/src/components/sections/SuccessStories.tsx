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
<div className="section text-white md:py-16 w-full" id={(data?.data?.sections || [])[0]?.sectionId}>
      <div className="mar-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="mb-12">
                  <h2 className="text-4xl font-bold">{successStoryData.heading}</h2>
                  <p className="mt-4 text-gray-400 max-w-2xl">
                      {successStoryData.subheading}
                  </p>
              </div>
              {
                successStoryData.stories.map((story) => (
                  <div key={story.id} className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                      <span className="absolute top-3 left-3 bg-gray-700 text-xs px-3 py-1 rounded-full">Success Stories</span>
                      <img src={getStrapiMediaUrl(story.image as Media) as string} alt={story.title} className="w-full" />
                      <div className="absolute right-2 top-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-[100px] bg-[#00000099]"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div>
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