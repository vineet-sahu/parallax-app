import { Logo } from "./Common";

export interface ContactFormSectionFields {
  sections: ContactFormSection[];
}

export interface ContactFormSection {
  __component: "contact-form.sections-contact-form";
  id: number;
  heading: string;
  subheading?: string | null;
  buttonText: string;
  url?: string | null;
  phone?: string | null;
  email?: string | null;
  form_title: string;
  formfields: ContactFormField[];
  icon?: Logo | null;
  contactUsBG?: Logo | null;
  sectionId?: string;
}

export interface ContactFormField {
  id: number;
  label: string;
  placeholder?: string | null;
  type: "text" | "email" | "number" | "textarea" | "date" |string;
  required?: boolean | null;
}
