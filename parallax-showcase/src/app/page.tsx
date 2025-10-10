"use client";
import React from "react";
import dynamic from "next/dynamic";
import Client from "@/components/sections/Clients";
import Hero from "./../components/sections/Hero";
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: false });
const Testimonial = dynamic(() => import("@/components/sections/Testimonial"), { ssr: false });
const SuccessStories = dynamic(() => import("@/components/sections/SuccessStories"), {
  ssr: false,
});
const TechnologyStack = dynamic(() => import("@/components/sections/TechnologyStack"), {
  ssr: false,
});
const Insights = dynamic(() => import("@/components/sections/Insights"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: false });
const LazyLoaderWithScroll = dynamic(() => import("@/components/common/LazyLoaderWithScroll"), {
  ssr: false,
});
const ClientRootWrapper = dynamic(() => import("@/components/ClientRootWrapper"), { ssr: false });
import { motion, useTransform, useScroll, useMotionTemplate } from "framer-motion";
import MainBall from "@/assets/MainBall.png";
import Image from "next/image";
import Triangle from "@/assets/Triangle.png";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const ballTopPosition = useTransform(scrollYProgress, [0, 0.3], [120, 400]);

  const ballRightPosition = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.6, 1],
    [0, 260, 260, 260, 600],
  );

  const ballScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.45, 0.6, 0.8, 0.9, 1],
    [1, 1, 1.5, 1.3, 1, 1, 1, 1],
  );

  const ballBlur = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.5], [0, 0, 10, 20]);

  const ballOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.8, 1],
    [1, 1, 1, 1, 1, 0.5, 0, 0],
  );

  const ballFilter = useMotionTemplate`blur(${ballBlur}px)`;

  const triangleTopPosition = useTransform(scrollYProgress, [0, 0.3], [120, 400]);

  const triangleScale = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.5], [1, 0.2, 0.5, 1]);

  const triangleLeftPosition = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.5],
    [-200, -100, -190, -200, -200],
  );

  const triangleOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.6],
    [1, 1, 1, 1, 1, 0],
  );

  const triangleBlur = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4, 0.6], [0, 20, 30, 5, 2]);

  const tringleFilter = useMotionTemplate`blur(${triangleBlur}px)`;

  return (
    <ClientRootWrapper>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="wrapper h-full absolute left-0 top-[-72px] right-0 z-[-1]"></div>
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <motion.div
            className="fixed select-none pointer-events-none pointer-events-none"
            style={{
              top: ballTopPosition,
              right: ballRightPosition,
              scale: ballScale,
              filter: ballFilter,
              opacity: ballOpacity,
            }}
          >
            <Image
              alt="Main Ball"
              src={MainBall.src}
              width={MainBall.width}
              height={MainBall.height}
              priority
            />
          </motion.div>

          <motion.div
            className="fixed select-none pointer-events-none pointer-events-none z-[-1] mix-blend-plus-lighter max-lg:hidden"
            style={{
              top: triangleTopPosition,
              scale: triangleScale,
              left: triangleLeftPosition,
              opacity: triangleOpacity,
              filter: tringleFilter,
            }}
          >
            <motion.div style={{ filter: tringleFilter }}>
              <Image
                alt="Triangle"
                src={Triangle.src}
                width={Triangle.width}
                height={Triangle.height}
                quality={90}
                priority
              />
            </motion.div>
          </motion.div>

          <Hero />
          <hr className="my-8 border-t-1 border-dashed border-gray-400 w-full opacity-40" />
          <Client />

          <hr className="my-8 border-t-1 border-dashed border-gray-400 w-full opacity-40" />

          <LazyLoaderWithScroll>
            <Services />
          </LazyLoaderWithScroll>

          <LazyLoaderWithScroll>
            <Testimonial />
          </LazyLoaderWithScroll>

          <LazyLoaderWithScroll>
            <SuccessStories />
          </LazyLoaderWithScroll>
          <TechnologyStack />
          <LazyLoaderWithScroll>
            <Insights />
          </LazyLoaderWithScroll>

          <LazyLoaderWithScroll>
            <Contact />
          </LazyLoaderWithScroll>
        </main>
      </div>
    </ClientRootWrapper>
  );
}
