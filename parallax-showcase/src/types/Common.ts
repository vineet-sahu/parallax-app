/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Logo {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: any | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }

  export interface CommonStrapiFields {
    id: number;
    documentId?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
  }

  export interface Section {
    __component: string;
    id: number;
    heading: string;
    sectionId?: string;
  }