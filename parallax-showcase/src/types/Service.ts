/* eslint-disable @typescript-eslint/no-explicit-any */

import { Logo, Section } from "./Common";
  
  export interface ServiceSection extends Section{
    __component: "service.sections-service";
    id: number;
    title: string;
    description: string;
    service_details: ServiceDetail[];
  }
  
  export interface ServiceDetail {
    id: number;
    title: string;
    description: string;
    buttonText?: string | null;
    buttonLink?: string | null;
    icon?: Logo | null;
    bgColor?: string | null;
  }
  

    export interface ServicesSectionFields {
      sections: ServiceSection[];
    }

