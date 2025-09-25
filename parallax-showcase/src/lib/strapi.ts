import {
  ClientsResponse,
  ContactFormResponse,
  HeroContentSectionResponse,
  InsightSectionResponse,
  NavbarResponse,
  ServicesResponse,
  SuccessStoriesResponse,
  TechnologyStackResponse,
  TestimonialResponse,
} from "@/types";
import { Media } from "@/utils";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL ?? "";
const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN ?? "";

async function strapiFetch<T>(endpoint: string): Promise<T | null> {
  try {
    const res = await fetch(`${STRAPI_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`Failed to fetch ${endpoint}: ${res.status} ${res.statusText}`);
      return null;
    }

    return (await res.json()) as T;
  } catch (error) {
    console.error(`⚠️ Error fetching ${endpoint}:`, error);
    return null;
  }
}

const populateQuery = (populate: string): string => `/api/homepage?populate${populate}`;

export const fetchNavbar = (): Promise<NavbarResponse | null> =>
  strapiFetch<NavbarResponse>(`/api/navbar${populateQuery("*")}`);

export const fetchHome = (): Promise<unknown> =>
  strapiFetch<unknown>(`${populateQuery("[sections][populate]=*")}`);

export const fetchClients = (): Promise<ClientsResponse | null> =>
  strapiFetch<ClientsResponse>(
    `${populateQuery("[sections][on][client.sections-clients][populate][Client][populate]=logo")}`,
  );

export const fetchServices = (): Promise<ServicesResponse | null> =>
  strapiFetch<ServicesResponse>(
    `${populateQuery("[sections][on][service.sections-service][populate][service_details][populate]=*")}`,
  );

export const fetchContactForm = (): Promise<ContactFormResponse | null> =>
  strapiFetch<ContactFormResponse>(
    `${populateQuery("[sections][on][contact-form.sections-contact-form][populate][formfields][populate]=*")}`,
  );

export const fetchInsights = (): Promise<InsightSectionResponse | null> =>
  strapiFetch<InsightSectionResponse>(
    `${populateQuery("[sections][on][story.sections-insight-section][populate][items][populate]=*")}`,
  );

export const fetchTechnologyStack = (): Promise<TechnologyStackResponse | null> =>
  strapiFetch<TechnologyStackResponse>(
    `${populateQuery("[sections][on][service.sections-technology-stacks][populate][technology_stacks][populate][tool][populate]=icon")}`,
  );

export const fetchSuccessStories = (): Promise<SuccessStoriesResponse | null> =>
  strapiFetch<SuccessStoriesResponse>(
    `${populateQuery("[sections][on][story.sections-success-stories][populate][stories][populate]=*")}`,
    // `${populateQuery("=*")}`,

  );
export const fetchTestimonial = (): Promise<TestimonialResponse | null> =>
  strapiFetch<TestimonialResponse>(
    `${populateQuery("[sections][on][client.sections-testimonials][populate][testimonial_items][populate]=company_logo")}`,
  );

export const fetchHeroContent = (): Promise<HeroContentSectionResponse | null> =>
  strapiFetch<HeroContentSectionResponse>(
    `${populateQuery("[sections][on][hero.sections-hero][populate]=*")}`,
  );

export function getStrapiMediaUrl(media: Media | null): string | null {
  if (!media?.url) return null;
  return media.url.startsWith("/") ? `${STRAPI_URL}${media.url}` : media.url;
}
