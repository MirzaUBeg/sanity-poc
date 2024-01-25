import { PortableTextBlock } from "sanity";

export type Series = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: { current: string }; // Assuming slug is an object with a 'current' field
  image: string;
  imageAlt: string;
  primaryCta: string;
  primaryUrl: string;
  content: PortableTextBlock[];
};
