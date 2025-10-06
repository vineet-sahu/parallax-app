"use client";

import React, { Suspense, lazy } from "react";
import AppProvider from "@/context/ParallaxContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ParallaxProvider } from "react-scroll-parallax";
import { sora } from "@/utils";

const GlobalLoader = lazy(() => import("@/components/common/GlobalLoader"));
const Navbar = lazy(() => import("@/components/common/Navbar"));

export default function ClientRootWrapper({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ParallaxProvider>
        <AppProvider>
          <div className={`${sora.variable}`}>
            <GlobalLoader />
            <Suspense fallback={<GlobalLoader />}>
              <Navbar />
            </Suspense>
            {children}
          </div>
        </AppProvider>
      </ParallaxProvider>
    </QueryClientProvider>
  );
}
