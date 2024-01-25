// Page.ts
import { PortableTextBlock } from "sanity";
import { Episode } from "./Episode";

export type Page = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: { current: string };
  title: string;
  content: PortableTextBlock[];
  image: string;
  imageAlt: string;
  primaryCta: string;
  primaryUrl: string;
  secondaryCta: string;
  secondaryUrl: string;
  episodes: Array<Episode>;
};
