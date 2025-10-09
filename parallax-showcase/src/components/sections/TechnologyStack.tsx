import img12 from "@/assets/image12.png";
import { useAppContext } from "@/context/ParallaxContext";
import { getStrapiMediaUrl } from "@/lib/strapi";
import Image from "next/image";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GlobImage from "@/assets/Glob.png";

const TechnologyStack = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  const {
    technologyStack: { isLoading, error, data },
  } = useAppContext();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const spacing = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
    [130, 120, 100, 80, 60, 50, 30, 20],
  );

  const globeLeftPostion = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8, 1],
    [-200, -150, -100, -150],
  );
  const globeScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.8, 1],
    [0.5, 1.2, 1.4, 1.1, 0.8],
  );
  const globeRotate = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 0.8, 0.9, 1],
    [-60, 15, 0, 10, -20, 10],
  );

  const globeTopPosition = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.8, 1],
    [0, 300, 600, 1200, 1400],
  );

  const technologyStackData = useMemo(() => data?.data?.sections?.[0], [data]);

  if (!isMounted) {
    return (
      <div
        ref={sectionRef}
        className="flex justify-center items-center py-10 animate-pulse text-gray-400"
      >
        Loading technology stack...
      </div>
    );
  }

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
    <motion.div
      className="section w-full text-white md:py-16 relative"
      id={(data?.data?.sections || [])[0]?.sectionId}
      ref={sectionRef}
    >
      <motion.div
        className="absolute z-[-1]"
        style={{
          left: globeLeftPostion,
          scale: globeScale,
          rotate: globeRotate,
          top: globeTopPosition,
        }}
      >
        <Image
          alt="globe image"
          src={GlobImage.src}
          width={300}
          height={GlobImage.height}
          quality={90}
        ></Image>
      </motion.div>
      <div className="grid grid-cols-[1fr_1.5fr] gap-6 items-stretch h-full gap-20">
        <div className="bg-gray-800 rounded-[100px] p-10 relative overflow-hidden">
          <h2 className="text-4xl font-bold uppercase [word-spacing:100vw] leading-normal">
            {technologyStackData.heading}
          </h2>
          <p className="mt-4 text-gray-400">{technologyStackData.description}</p>
          <div className="mt-10">
            <Image
              src={img12.src as string}
              alt={"3D Shape"}
              className="rounded-lg w-full mix-blend-color-dodge"
              width={img12.width}
              height={img12.height}
              quality={90}
            />
          </div>
        </div>

        <motion.div className="py-30 flex flex-col">
          {technologyStackData.technology_stacks?.map((stack, index) => (
            <motion.div key={stack.id} style={{ marginTop: spacing }}>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default memo(TechnologyStack);
