import type { BuilderContent } from "@builder.io/sdk";

// headers.ts
export interface NavLinkContent extends BuilderContent {
  data: {
    title: string;
    slug: {
      Default: {
        value: {
          data: {
            slug: string;
          };
        };
      };
    };
    subItems?: Array<{
      title: string;
      slug: {
        value: {
          data: {
            slug: string;
          };
        };
      };
    }>;
  };
}

export interface NavLink {
  title: string;
  slug: string;
  subItems: { title: string; slug: string }[];
}

// Footer.ts
export interface SubItem {
  item: string;
  url: string;
}

export interface FooterData {
  heading: string;
  subItems: SubItem[];
}

export interface CustomBuilderContent extends BuilderContent {
  data: FooterData;
  name: string;
}

export interface LegalLink {
  label: string;
  url: string;
}

export interface FooterLegalData {
  copyrightText: string;
  legalLinks: LegalLink[];
}

export interface FooterLegalContent extends BuilderContent {
  data: FooterLegalData;
}
