import { Logo, Section } from "./Common";

  export interface ClientSectionFields {
    sections: ClientSection[];
  }

  export interface ClientSection extends Section{
    __component: "client.sections-clients";
    heading: string;
    Client: Client[];
  }

  export interface Client {
    id: number;
    name: string;
    url?: string | null;
    logo?: Logo | null;
  }