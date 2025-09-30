

export type HeroContent = {
    preTitle: string;
    mainTitle: { before: string; highlight1: string; connector: string; highlight2: string };
    tagline: string;
    description: string;
    stats: { value: string; label: string }[];
};

export interface HeroContentSectionFields {
  sections: HeroContentSection[];
}

export interface HeroContentSection extends HeroContent{
  __component: "client.sections-HeroContents";
  sectionId?: string;
  id: number;
}