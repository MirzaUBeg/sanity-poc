import { PortableTextBlock } from "sanity";

export type Event = {
  _id: string;
  _createdAt: Date;
  name: string;
  title: string;
  slug: string;
  image: string;
  imageAlt: string;
  url: string;
  content: PortableTextBlock[];
  startDate: Date;
  ctaText: string;
};
