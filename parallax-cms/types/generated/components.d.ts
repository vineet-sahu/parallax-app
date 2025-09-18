import type { Schema, Struct } from '@strapi/strapi';

export interface ClientclientsClients extends Struct.ComponentSchema {
  collectionName: 'components_clientclients_clients';
  info: {
    displayName: 'Clients';
  };
  attributes: {
    Client: Schema.Attribute.Component<'clientdetails.clients', true>;
    heading: Schema.Attribute.String;
  };
}

export interface ClientdetailsClients extends Struct.ComponentSchema {
  collectionName: 'components_clientdetails_clients';
  info: {
    displayName: 'clients';
  };
  attributes: {};
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

export interface SectionHero extends Struct.ComponentSchema {
  collectionName: 'components_section_heroes';
  info: {
    displayName: 'Hero';
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
      'clientclients.clients': ClientclientsClients;
      'clientdetails.clients': ClientdetailsClients;
      'contact-form.sections-contact-form': ContactFormSectionsContactForm;
      'menu-item.menu-item': MenuItemMenuItem;
      'section.hero': SectionHero;
      'service.sections-services': ServiceSectionsServices;
      'service.services': ServiceServices;
      'stat.stats': StatStats;
      'story.sections-success-stories': StorySectionsSuccessStories;
      'story.stories': StoryStories;
    }
  }
}
