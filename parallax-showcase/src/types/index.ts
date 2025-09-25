import { ClientSectionFields } from "./Client";
import { CommonStrapiFields } from "./Common";
import { ContactFormSectionFields } from "./Contact";
import { HeroContentSectionFields } from "./Hero";
import { InsightSectionFields } from "./insight";
import { NavbarFields } from "./Navbar";
import { ServicesSectionFields } from "./Service";
import { SuccessStoriesSectionFields } from "./SuccessStory";
import { TechnologyStackSectionFields } from "./TechnologyStack";
import { TestimonialSectionFields } from "./Testimonial";

/* eslint-disable @typescript-eslint/no-explicit-any */
  export interface StrapiSingleResponse<T> {
    data: T & CommonStrapiFields;
    meta: any;
  }

  export type NavbarResponse = StrapiSingleResponse<NavbarFields>;
  export type ClientsResponse = StrapiSingleResponse<ClientSectionFields>;
  export type ServicesResponse = StrapiSingleResponse<ServicesSectionFields>;
  export type TechnologyStackResponse = StrapiSingleResponse<TechnologyStackSectionFields>;
  export type TestimonialResponse = StrapiSingleResponse<TestimonialSectionFields>;
  export type ContactFormResponse = StrapiSingleResponse<ContactFormSectionFields>;
  export type SuccessStoriesResponse = StrapiSingleResponse<SuccessStoriesSectionFields>;
  export type InsightSectionResponse = StrapiSingleResponse<InsightSectionFields>;
  export type HeroContentSectionResponse = StrapiSingleResponse<HeroContentSectionFields>;
  


  
