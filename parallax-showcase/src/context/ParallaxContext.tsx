/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { createContext, useContext } from "react";
import strapiHooks from "../hooks/useStrapi";
import { UseQueryResult } from "@tanstack/react-query";
import { ClientsResponse, ContactFormResponse, HeroContentSectionResponse, InsightSectionResponse, NavbarResponse, ServicesResponse, SuccessStoriesResponse, TechnologyStackResponse, TestimonialResponse } from "@/types";
interface ParallaxContextType {
  navbar: UseQueryResult<NavbarResponse | null, Error>;
  clientSection: UseQueryResult<ClientsResponse | null, Error>;
  contactForm: UseQueryResult<ContactFormResponse | null, Error>;
  insights: UseQueryResult<InsightSectionResponse | null, Error>;
  technologyStack: UseQueryResult<TechnologyStackResponse | null, Error>;
  services: UseQueryResult<ServicesResponse | null, Error>;
  successStory: UseQueryResult<SuccessStoriesResponse | null, Error>;
  testimonial: UseQueryResult<TestimonialResponse | null, Error>;
  heroContent: UseQueryResult<HeroContentSectionResponse | null, Error>;
}
export const ParallaxContext = createContext<ParallaxContextType | null>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <ParallaxContext.Provider value={{ 
      navbar: strapiHooks.useNavbar(),
      clientSection: strapiHooks.useClients(), 
      heroContent: strapiHooks.useHeroContent(),
      contactForm: strapiHooks.useContactForm(),
      insights: strapiHooks.useInsights(),
      technologyStack: strapiHooks.useTechnologyStack(),
      services: strapiHooks.useServices(),
      successStory: strapiHooks.useSuccessStory(),
      testimonial: strapiHooks.useTestimonial(),
      } }>
      {children}
    </ParallaxContext.Provider>
  );
};

export const useAppContext = (): ParallaxContextType => {
  const context = useContext(ParallaxContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default AppProvider;
