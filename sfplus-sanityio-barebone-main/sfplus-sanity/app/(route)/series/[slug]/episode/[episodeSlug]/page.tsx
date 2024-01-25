import VideoPlayer from "@/app/_components/VideoPlayer";
import { BookmarkOutlineIcon } from "@/app/_components/_Icons";
import { getEpisodeBySeasonAndEpisodeNumberQuery } from "@/sanity/lib/sanity.queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { Episode } from "@/sanity/types/Episode";
import { PortableText } from "@portabletext/react";
import groq from "groq";
import { SanityValues } from "@/sanity-config/sanity.config";

type Props = {
  params: { slug: string; episodeSlug: string };
};

function extractSeasonAndEpisode(slug: string) {
  const regex = /episode-s(\d+)e(\d+)/;
  const match = slug.match(regex);

  if (match) {
    return {
      seasonNumber: parseInt(match[1], 10), // First captured group is season number
      episodeNumber: parseInt(match[2], 10), // Second captured group is episode number
    };
  }

  return null; // Return null or an appropriate default value if the format does not match
}

// export default async function Episode({ params }: Props) {
export default async function Episode({ params }: Props) {
  const extractedData = extractSeasonAndEpisode(params.episodeSlug);
  console.log("🚀 ~ Episode ~ params.slug:", params.slug);

  if (extractedData) {
    const { seasonNumber, episodeNumber } = extractedData;

    // Now you can use seasonNumber and episodeNumber safely
    const episode = await sanityFetch<
      SanityValues["episode"] & { image: string; imageAlt: string }
    >({
      // query: getEpisodeBySeasonAndEpisodeNumberQuery,
      query: groq`*[_type == "episode" && seasonNumber == $seasonNumber && episodeNumber == $episodeNumber && series->slug.current == $seriesSlug][0]{
        ...,
        "image": image.asset->url,
        "imageAlt": image.alt,
      }`,
      params: { seriesSlug: params.slug, seasonNumber, episodeNumber },
    });

    // Use the fetched episode data
    return (
      <>
        <VideoPlayer image={episode.image} imageAlt={episode.imageAlt} />
        <div>
          <div className="left-0 top-0 flex h-full w-full items-center justify-between">
            <div className="z-10 mx-10">
              {episode.name && (
                <div
                  className="mt-7 text-left font-heading text-3xl text-white"
                  style={{ width: "70vw" }}
                >
                  {episode.name}
                </div>
              )}
              {episode.content ? (
                <div
                  className="mt-3 text-left text-xs text-white"
                  style={{ width: "60vw" }}
                >
                  <PortableText value={episode.content} />
                </div>
              ) : null}
            </div>
            <div className="flex h-10 w-10 mr-10 items-center justify-center rounded-full border border-white align-middle">
              <BookmarkOutlineIcon className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    // handle bad URL format
  }
}
