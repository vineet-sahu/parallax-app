import type { Schema, Struct } from '@strapi/strapi';

export interface ClientClients extends Struct.ComponentSchema {
  collectionName: 'components_client_clients';
  info: {
    displayName: 'clients';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ClientSectionsClients extends Struct.ComponentSchema {
  collectionName: 'components_client_sections_clients';
  info: {
    displayName: 'sections.clients';
  };
  attributes: {
    Client: Schema.Attribute.Component<'client.clients', true>;
    heading: Schema.Attribute.String;
  };
}

export interface ClientSectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_client_sections_testimonials';
  info: {
    displayName: 'sections.testimonials';
  };
  attributes: {
    description: Schema.Attribute.Text;
    testimonial_items: Schema.Attribute.Component<
      'client.testimonial-item',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ClientTestimonialItem extends Struct.ComponentSchema {
  collectionName: 'components_client_testimonial_items';
  info: {
    displayName: 'Testimonial Item';
  };
  attributes: {
    author_designation: Schema.Attribute.String;
    author_name: Schema.Attribute.String;
    company: Schema.Attribute.String;
    company_logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    country: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    project: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    star_rating: Schema.Attribute.Decimal;
  };
}

export interface ContactFormContactForm extends Struct.ComponentSchema {
  collectionName: 'components_contact_form_contact_forms';
  info: {
    displayName: 'Contact-Form';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean;
    type: Schema.Attribute.Enumeration<
      ['text', 'date', 'email', 'phone', 'textarea']
    >;
  };
}

export interface ContactFormSectionsContactForm extends Struct.ComponentSchema {
  collectionName: 'components_contact_form_sections_contact_forms';
  info: {
    displayName: 'sections.contactForm';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    contactUsBG: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    email: Schema.Attribute.String;
    form_title: Schema.Attribute.String;
    formfields: Schema.Attribute.Component<'contact-form.contact-form', true>;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    phone: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface HeroSectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_hero_sections_heroes';
  info: {
    displayName: 'sections.hero';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    description: Schema.Attribute.Text;
    mainTitle: Schema.Attribute.Component<'main-title.main-title', false>;
    preTitle: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'stat.stats', true>;
    tagline: Schema.Attribute.String;
  };
}

export interface MainTitleMainTitle extends Struct.ComponentSchema {
  collectionName: 'components_main_title_main_titles';
  info: {
    displayName: 'mainTitle';
  };
  attributes: {
    before: Schema.Attribute.String;
    connector: Schema.Attribute.String;
    highlight1: Schema.Attribute.String;
    highlight2: Schema.Attribute.String;
  };
}

export interface MenuItemMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_menu_item_menu_items';
  info: {
    displayName: 'menu-item';
  };
  attributes: {
    isExternal: Schema.Attribute.String;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ServiceToolServiceTool extends Struct.ComponentSchema {
  collectionName: 'components_service_tool_service_tools';
  info: {
    displayName: 'Service-Tool';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface ServiceSectionsService extends Struct.ComponentSchema {
  collectionName: 'components_service_sections_services';
  info: {
    displayName: 'sections.service-section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    service_details: Schema.Attribute.Component<'service.service-detail', true>;
    title: Schema.Attribute.String;
  };
}

export interface ServiceSectionsTechnologyStacks
  extends Struct.ComponentSchema {
  collectionName: 'components_service_sections_technology_stacks';
  info: {
    displayName: 'sections.technology-stack-section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    technology_stacks: Schema.Attribute.Component<
      'service.technology-stack',
      true
    >;
  };
}

export interface ServiceServiceDetail extends Struct.ComponentSchema {
  collectionName: 'components_service_service_details';
  info: {
    displayName: 'ServiceDetail';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ServiceTechnologyStack extends Struct.ComponentSchema {
  collectionName: 'components_service_technology-stacks';
  info: {
    displayName: 'domains';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    tool: Schema.Attribute.Component<'service-tool.service-tool', true>;
  };
}

export interface StatStats extends Struct.ComponentSchema {
  collectionName: 'components_stat_stats';
  info: {
    displayName: 'stats';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface StoryInsightsSection extends Struct.ComponentSchema {
  collectionName: 'components_story_insights_sections';
  info: {
    displayName: 'Insights Section';
  };
  attributes: {};
}

export interface StoryInsightsSectionItems extends Struct.ComponentSchema {
  collectionName: 'components_story_insights_section_items';
  info: {
    displayName: 'Insights Section items';
  };
  attributes: {
    date: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    summary: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface StorySectionsInsightSection extends Struct.ComponentSchema {
  collectionName: 'components_story_sections_insight_sections';
  info: {
    displayName: 'sections.insight_section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'story.insights-section-items', true>;
    title: Schema.Attribute.String;
  };
}

export interface StorySectionsSuccessStories extends Struct.ComponentSchema {
  collectionName: 'components_story_sections_success_stories';
  info: {
    displayName: 'sections.stories-section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    stories: Schema.Attribute.Component<'story.stories', true>;
    subheading: Schema.Attribute.Text;
  };
}

export interface StoryStories extends Struct.ComponentSchema {
  collectionName: 'components_story_stories';
  info: {
    displayName: 'stories';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'client.clients': ClientClients;
      'client.sections-clients': ClientSectionsClients;
      'client.sections-testimonials': ClientSectionsTestimonials;
      'client.testimonial-item': ClientTestimonialItem;
      'contact-form.contact-form': ContactFormContactForm;
      'contact-form.sections-contact-form': ContactFormSectionsContactForm;
      'hero.sections-hero': HeroSectionsHero;
      'main-title.main-title': MainTitleMainTitle;
      'menu-item.menu-item': MenuItemMenuItem;
      'service-tool.service-tool': ServiceToolServiceTool;
      'service.sections-service': ServiceSectionsService;
      'service.sections-technology-stacks': ServiceSectionsTechnologyStacks;
      'service.service-detail': ServiceServiceDetail;
      'service.technology-stack': ServiceTechnologyStack;
      'stat.stats': StatStats;
      'story.insights-section': StoryInsightsSection;
      'story.insights-section-items': StoryInsightsSectionItems;
      'story.sections-insight-section': StorySectionsInsightSection;
      'story.sections-success-stories': StorySectionsSuccessStories;
      'story.stories': StoryStories;
    }
  }
}
