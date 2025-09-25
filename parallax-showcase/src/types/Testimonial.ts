/* eslint-disable @typescript-eslint/no-explicit-any */

import { Logo } from "./Common";

export interface Testimonial {
    id: number;
    name: string;
    order: number;
    quote: string;
    author_name: string;
    author_designation: string;
    company: string;
    star_rating: number;
    project: string;
    country: string;
    company_logo: Logo | null;
  }

export interface TestimonialSectionFields {
  sections: TestimonialSection[];
}

export interface TestimonialSection {
  __component: "client.sections-testimonials";
  id: number;
  title?: string | null;
  description?: string | null;
  testimonial_items: Testimonial[];
}