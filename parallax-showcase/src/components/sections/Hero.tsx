/* eslint-disable react/no-unescaped-entities */
"use client";
import { useAppContext } from "@/context/ParallaxContext";

export const Hero = () => {
    const {
        heroContent: { isLoading, error, data },
      } = useAppContext();
    
      const heroContentData = data?.data?.sections?.[0];
    
      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Error loading heroContent</div>;
      if (!heroContentData) return null;

    return (
      <div className="text-center mx-auto md:w-1/2">
        <h5>{heroContentData.preTitle}</h5>
        <h1 className="text-5xl font-bold mb-4">
          {heroContentData.mainTitle.before} <span className="text-cyan-400">{heroContentData.mainTitle.highlight1}</span> <br />
          {heroContentData.mainTitle.connector} <span className="text-blue-600">{heroContentData.mainTitle.highlight2}</span>
        </h1>
        <p className="text-lime-200 text-2xl">{heroContentData.tagline}</p>
  
        <p className="text-sm m-8 size-fit mx-auto">{heroContentData.description}</p>
  
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mt-24">
          {heroContentData.stats.map((stat, idx) => (
            <div key={idx}>
              <h3 className="text-blue-600 text-2xl font-bold">{stat.value}</h3>
              <p className="text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };


export default Hero;