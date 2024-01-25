import { PortableTextBlock } from "sanity";
import { Series } from "./Series";

export type Episode = {
  _id: string;
  _createdAt: Date;
  name: string;
  image: string;
  imageAlt: string;
  content: PortableTextBlock[];
  seasonNumber: number;
  episodeNumber: number;
  sortOrder: number;
  series: Series;
};
