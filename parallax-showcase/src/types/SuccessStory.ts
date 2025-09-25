/* eslint-disable @typescript-eslint/no-explicit-any */

import { Logo } from "./Common";

export interface SuccessStoriesSectionFields {
  sections: SuccessStoriesSection[];
}

export interface SuccessStoriesSection {
  __component: "story.sections-success-stories";
  id: number;
  heading: string;
  subheading?: string | null;
  stories: StoryItem[];
}

export interface StoryItem {
  id: number;
  title: string;
  description: string;
  url?: string | null;
  image?: Logo | null;
}
