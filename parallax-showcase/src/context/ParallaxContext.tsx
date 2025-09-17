'use client';

import { createContext, useContext } from "react";
import strapiHooks from "../hooks/useStrapi";

type ParallaxContextType = {
  navbar: typeof strapiHooks.useNavbar,
  footer: typeof strapiHooks.useFooter,
  globalSettings: typeof strapiHooks.useGlobalSettings,
}

export const ParallaxContext = createContext<ParallaxContextType | null>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const navbar = strapiHooks.useNavbar();
  const footer = strapiHooks.useFooter();
  const globalSettings = strapiHooks.useGlobalSettings();

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <ParallaxContext.Provider value={{ navbar, footer, globalSettings } as any}>
      {children}
    </ParallaxContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(ParallaxContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

export default AppProvider;
