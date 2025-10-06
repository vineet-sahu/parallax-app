"use client";

import { memo, useMemo } from "react";
import { useAppContext } from "@/context/ParallaxContext";
import Image from "next/image";
import magicImg from "@/assets/magic.png";

const Hero = () => {
  const {
    heroContent: { isLoading, error, data },
  } = useAppContext();

  const heroContentData = useMemo(() => data?.data?.sections?.[0], [data]);
  const sectionId = heroContentData?.sectionId;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10 animate-pulse">
        Loading hero content...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-10 text-red-500">
        Error loading hero content
      </div>
    );
  }

  if (!heroContentData) return null;

  const { preTitle, mainTitle, tagline, description, stats } = heroContentData;

  return (
    <section id={sectionId} className="section text-center mx-auto flex flex-col gap-4">
      <div className="flex flex-col items-center gap-3">
        <h5 className="flex justify-center items-center gap-3 text-[#ECF4BD] font-inter font-medium">
          <Image src={magicImg} alt="Title icon" width={16} height={16} priority quality={90} />
          <span>{preTitle}</span>
        </h5>

        <h1 className="main-title text-[clamp(36px,6vw,64px)] font-bold leading-[96px] text-white">
          {mainTitle.before} <span className="text-cyan-400">{mainTitle.highlight1}</span>
          <br />
          {mainTitle.connector} <span className="text-blue-600">{mainTitle.highlight2}</span>
        </h1>

        <p className="text-lime-50 text-2xl">{tagline}</p>
      </div>

      {description && (
        <p className="max-w-[698px] mx-auto mt-8 font-sora text-base text-gray-100">
          {description}
        </p>
      )}

      {Array.isArray(stats) && stats.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mt-24">
          {stats.map(({ value, label }, idx) => (
            <div key={idx}>
              <h3
                className="text-[32px] font-semibold text-transparent bg-gradient-to-r from-[#3C6BFE] to-[#9D84F2] bg-clip-text"
                style={{
                  WebkitTextFillColor: "transparent",
                }}
              >
                {value}
              </h3>
              <p className="text-sm text-gray-200">{label}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default memo(Hero);
