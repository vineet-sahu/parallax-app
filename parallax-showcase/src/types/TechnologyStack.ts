/* eslint-disable @typescript-eslint/no-explicit-any */

import { Logo } from "./Common";

export interface TechnologyStackSectionFields {
  sections: TechnologyStackSection[];
}

export interface TechnologyStackSection {
  __component: "service.sections-technology-stacks";
  id: number;
  heading: string;
  description: string;
  technology_stacks: TechnologyStack[];
}

export interface TechnologyStack {
  id: number;
  title: string;
  description?: string | null;
  tool?: Tool[];
}

export interface Tool {
  id: number;
  name: string;
  icon?: Logo | null;
}
