import type { Schema, Struct } from '@strapi/strapi';

export interface ClientClients extends Struct.ComponentSchema {
  collectionName: 'components_client_clients';
  info: {
    displayName: 'clients';
  };
  attributes: {
    logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
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

export interface ContactFormSectionsContactForm extends Struct.ComponentSchema {
  collectionName: 'components_contact_form_sections_contact_forms';
  info: {
    displayName: 'sections.contactForm';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
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
    stats: Schema.Attribute.Component<'stat.stats', false>;
    subtitle: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
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

export interface ServiceSectionsServices extends Struct.ComponentSchema {
  collectionName: 'components_service_sections_services';
  info: {
    displayName: 'sections.services';
  };
  attributes: {
    heading: Schema.Attribute.String;
    services: Schema.Attribute.Component<'service.services', true>;
  };
}

export interface ServiceServices extends Struct.ComponentSchema {
  collectionName: 'components_service_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface StatStats extends Struct.ComponentSchema {
  collectionName: 'components_stat_stats';
  info: {
    displayName: 'stats';
  };
  attributes: {};
}

export interface StorySectionsSuccessStories extends Struct.ComponentSchema {
  collectionName: 'components_story_sections_success_stories';
  info: {
    displayName: 'sections.successStories';
  };
  attributes: {
    heading: Schema.Attribute.String;
    stories: Schema.Attribute.Component<'story.stories', true>;
  };
}

export interface StoryStories extends Struct.ComponentSchema {
  collectionName: 'components_story_stories';
  info: {
    displayName: 'stories';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'client.clients': ClientClients;
      'client.sections-clients': ClientSectionsClients;
      'contact-form.sections-contact-form': ContactFormSectionsContactForm;
      'hero.sections-hero': HeroSectionsHero;
      'menu-item.menu-item': MenuItemMenuItem;
      'service.sections-services': ServiceSectionsServices;
      'service.services': ServiceServices;
      'stat.stats': StatStats;
      'story.sections-success-stories': StorySectionsSuccessStories;
      'story.stories': StoryStories;
    }
  }
}
