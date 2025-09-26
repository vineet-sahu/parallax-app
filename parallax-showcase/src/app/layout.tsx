'use client';

import GlobalLoader from "@/components/common/GlobalLoader";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import AppProvider from "@/context/ParallaxContext";
import { geistMono, geistSans, sora } from "@/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ParallaxProvider } from "react-scroll-parallax";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body
        className={`${sora.variable} antialiased bg-red-100 font-sora`}
      >
      <QueryClientProvider client={queryClient}>
      <ParallaxProvider>
        <AppProvider>
          <GlobalLoader />
          <Navbar />
          {children}
        </AppProvider>
        </ParallaxProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
