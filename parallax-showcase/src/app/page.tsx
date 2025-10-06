"use client";
import React from "react";

import Client from "@/components/sections/Clients";
import Hero from "./../components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonial from "@/components/sections/Testimonial";
import SuccessStories from "@/components/sections/SuccessStories";
import TechnologyStack from "@/components/sections/TechnologyStack";
import Insights from "@/components/sections/Insights";
import Contact from "@/components/sections/Contact";
import LazyLoaderWithScroll from "@/components/common/LazyLoaderWithScroll";
import ClientRootWrapper from "@/components/ClientRootWrapper";

export default function Home() {
  return (
    <ClientRootWrapper>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Hero />
          <hr className="my-8 border-t-1 border-dashed border-gray-400 w-full opacity-40" />
          <Client />

          <hr className="my-8 border-t-1 border-dashed border-gray-400 w-full opacity-40" />

          <LazyLoaderWithScroll>
            <Services />
          </LazyLoaderWithScroll>

          <hr className="my-8 border-t-1 border-dashed border-gray-400 w-full opacity-40" />
          <LazyLoaderWithScroll>
            <Testimonial />
          </LazyLoaderWithScroll>

          <hr className="my-8 border-t-1 border-dashed border-gray-400 w-full opacity-40" />
          <LazyLoaderWithScroll>
            <SuccessStories />
          </LazyLoaderWithScroll>

          <hr className="my-8 border-t-1 border-dashed border-gray-400 w-full opacity-40" />
          <LazyLoaderWithScroll>
            <TechnologyStack />
          </LazyLoaderWithScroll>
          <hr className="my-8 border-t-1 border-dashed border-gray-400 w-full opacity-40" />
          <LazyLoaderWithScroll>
            <Insights />
          </LazyLoaderWithScroll>

          <hr className="my-8 border-t-1 border-dashed border-gray-400 w-full opacity-40" />
          <LazyLoaderWithScroll>
            <Contact />
          </LazyLoaderWithScroll>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
      </div>
    </ClientRootWrapper>
  );
}
