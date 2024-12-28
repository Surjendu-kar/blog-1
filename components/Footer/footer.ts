import { BuilderContent } from "@builder.io/sdk";

export interface FooterLink {
  id: string;
  name: string;
  data: {
    title: string;
    url: string;
  };
  order: number;
}

export interface GroupedLinks {
  about: FooterLink[];
  resources: FooterLink[];
  support: FooterLink[];
  bottom: FooterLink[];
}

export type FooterBuilderContent = BuilderContent & {
  id: string;
  name: string;
  data: {
    title: string;
    url: string;
  };
};
