import { Logo } from "./Common";

export interface NavbarFields {
    buttonLink: string | null;
    buttonText: string | null;
    menuItems: MenuItem[];
    logo: Logo[];
  }
  
  export interface MenuItem {
    id: number;
    label: string;
    url: string;
    isExternal: boolean | null;
  }

  export interface MenuItem {
    id: number;
    label: string;
    url: string;
    isExternal: boolean | null;
  }
  