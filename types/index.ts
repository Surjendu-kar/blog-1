// types/navigation.ts
import type { BuilderContent } from "@builder.io/sdk";

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
