/* eslint-disable @typescript-eslint/no-explicit-any */

import { Logo, Section } from "./Common";
export interface InsightSection extends Section {
  __component: "story.sections-insight-section";
  id: number;
  title: string;
  description: string;
  items: InsightItem[];
}

export interface InsightSectionFields {
    sections: InsightSection[];
}

export interface InsightItem {
  id: number;
  title: string;
  summary: string;
  url?: string | null;
  date?: string | null;
  image?: Logo | null;
}
