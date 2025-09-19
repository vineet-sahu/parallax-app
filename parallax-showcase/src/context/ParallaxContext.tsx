/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { createContext, useContext } from "react";
import strapiHooks from "../hooks/useStrapi";
import { UseQueryResult } from "@tanstack/react-query";
import { ClientsResponse, NavbarResponse } from "@/types";

// type ParallaxContextType = {
//   navbar: typeof strapiHooks.useNavbar,
//   footer: typeof strapiHooks.useFooter,
//   globalSettings: typeof strapiHooks.useGlobalSettings,
// }


interface ParallaxContextType {
  navbar: UseQueryResult<NavbarResponse | null, Error>;
  clientSection: UseQueryResult<ClientsResponse | null, Error>;
  // footer: UseQueryResult<FooterResponse | null, Error>;
  // globalSettings: UseQueryResult<GlobalSettingsResponse | null, Error>;
}
export const ParallaxContext = createContext<ParallaxContextType | null>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const navbar = strapiHooks.useNavbar();
  const clientSection = strapiHooks.useClients();
  // const footer = strapiHooks.useFooter();
  // const globalSettings = strapiHooks.useGlobalSettings();

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <ParallaxContext.Provider value={{ navbar, clientSection } }>
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
