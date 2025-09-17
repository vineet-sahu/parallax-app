"use client";

import { Client } from "@/components/sections/Clients";
import Hero from "./../components/sections/Hero";
import { ParallaxProvider } from "react-scroll-parallax";
import { ProductEnginering } from "@/components/sections/ProductEnginering";
import { HappyClients } from "@/components/sections/HappyClients";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { Services } from "@/components/sections/Services";
import { Insights } from "@/components/sections/Insights";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <ParallaxProvider>
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero />
        <hr className="h-px my-8 bg-gray-200 border-0 bg-white w-full opacity-20" />
        <Client />

        <hr className="h-px my-8 bg-gray-200 border-0 bg-white  w-full" />

        <ProductEnginering />

        <hr className="h-px my-8 bg-gray-200 border-0 bg-white w-full opacity-20" />

        <HappyClients />

        <hr className="h-px my-8 bg-gray-200 border-0 bg-white w-full opacity-20" />

        <SuccessStories />
        <hr className="h-px my-8 bg-gray-200 border-0 bg-white w-full opacity-20" />
        
        <Services />
        <hr className="h-px my-8 bg-gray-200 border-0 bg-white w-full opacity-20" />

        <Insights />

        <hr className="h-px my-8 bg-gray-200 border-0 bg-white w-full opacity-20" />

        <Contact />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
    </ParallaxProvider>
  );
}
