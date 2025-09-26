/* eslint-disable react/no-unescaped-entities */
"use client";
import { useAppContext } from "@/context/ParallaxContext";
import magicImg from "@/assets/magic.png";

export const Hero = () => {
    const {
        heroContent: { isLoading, error, data },
      } = useAppContext();
    
      const heroContentData = data?.data?.sections?.[0];
    
      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Error loading heroContent</div>;
      if (!heroContentData) return null;

    return (
      <div className="text-center mx-auto md:w-1/2 flex flex-col gap-4">
        <div className="flex flex-col items-center gap-3 mx-a">
          <h5 className="flex justify-center items-center gap-3"><img src={magicImg.src} width={"16px"} height={"16px"}/> <span className="font-inter font-medium text-[#ECF4BD]">{heroContentData.preTitle}</span></h5>
          <p className="text-5xl font-bold mb-4 text-[clamp(36px,6vw,64px)] leading-[96px]">
            {heroContentData.mainTitle.before} <span className="text-cyan-400">{heroContentData.mainTitle.highlight1}</span> <br />
            {heroContentData.mainTitle.connector} <span className="text-blue-600">{heroContentData.mainTitle.highlight2}</span>
          </p>
          <p className="text-lime-50 text-2xl">{heroContentData.tagline}</p>
        </div>
  
        <p className="max-w-[698px] m-8 size-fit mx-auto font-sora">{heroContentData.description}</p>
  
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mt-24">
          {heroContentData.stats.map((stat, idx) => (
            <div key={idx}>
              <h3 className="bg-gradient-to-r from-[#3C6BFE] to-[#9D84F2] bg-clip-text text-[32px] font-semibold text-transparent"   style={{
                  backgroundClip: "text",
                  MozBackgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "rgba(255, 255, 255, 0)",
                }}>{stat.value}</h3>
              <p className="text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };


export default Hero;