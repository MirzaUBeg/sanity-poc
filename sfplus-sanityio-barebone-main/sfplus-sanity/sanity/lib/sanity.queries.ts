import groq from "groq";

export const getEventQuery = groq`
*[_type == "event" && slug.current == $slug][0]{
  _id,
  _createdAt,
  name,
  title,
  "slug": slug.current,
  "image": image.asset->url,
  "imageAlt": image.alt,
  url,
  content,
  ctaText
}`;

export const getEventsQuery = groq`
*[_type == "event"]{
  _id,
  _createdAt,
  name,
  title,
  "slug": slug.current,
  "image": image.asset->url,
  url,
  content,
  ctaText
}`;

export const getPageQuery = groq`
*[_type == "page" && slug.current == $slug][0]{
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  "imageAlt": image.alt,
  title,
  primaryCta,
  primaryUrl,
  secondaryCta,
  secondaryUrl,
  content,
  "episodes": episodes[]->{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    "imageAlt": image.alt,    
    seasonNumber,
    episodeNumber,
    sortOrder,
    "series": series->{"slug": slug.current}
  }
}`;

export const getSeriesQuery = groq`*[_type == "series" && slug.current == $slug][0]{
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  "imageAlt": image.alt,
  primaryCta,
  primaryUrl,
  content
}`;

export const getSeriesListQuery = groq`*[_type == "series"]{
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  "imageAlt": image.alt,
  primaryCta,
  primaryUrl,
  content
}`;

export const getEpisodeBySeasonAndEpisodeNumberQuery = groq`*[_type == "episode" && seasonNumber == $seasonNumber && episodeNumber == $episodeNumber && series->slug.current == $seriesSlug][0]{
  _id,
  _createdAt,
  name,
  "image": image.asset->url,
  "imageAlt": image.alt,
  content,
  seasonNumber,
  episodeNumber,
  sortOrder,
  "series": series->{
    _id,
    name,
    "slug": slug.current
  }
}`;

export const getEpisodeQueryBySeriesSlug = groq`*[_type == "episode" && series->slug.current == $seriesSlug] | 
  order(sortOrder, seasonNumber, episodeNumber) {
  _id,
  _createdAt,
  name,
  "image": image.asset->url,
  "imageAlt": image.alt,
  content,
  seasonNumber,
  episodeNumber,
  sortOrder,
  "series": series->{
    _id,
    name,
    "slug": slug.current
  }
}`;
