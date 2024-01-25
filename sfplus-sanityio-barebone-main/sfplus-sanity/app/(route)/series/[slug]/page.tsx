import HeroBanner from "@/app/_components/HeroBanner";
import LandscapeCard from "@/app/_components/LandscapeCard";
import {
  getEpisodeQueryBySeriesSlug,
  getSeriesQuery,
} from "@/sanity/lib/sanity.queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { Episode } from "@/sanity/types/Episode";
import { Series } from "@/sanity/types/Series";

type Props = {
  params: { slug: string };
};

export default async function Series({ params }: Props) {
  const series = await sanityFetch<Series>({
    query: getSeriesQuery,
    params: { slug: params.slug },
  });

  const episodes = await sanityFetch<Episode[]>({
    query: getEpisodeQueryBySeriesSlug,
    params: { seriesSlug: params.slug },
  });

  return (
    <>
      <HeroBanner
        title={series.name}
        image={series.image}
        imageAlt={series.imageAlt}
        content={series.content}
        ctaText={series.primaryCta}
        ctaUrl={series.primaryUrl}
      />
      <div className="ml-7 mt-10">
        <div className="font-heading text-xl font-bold text-white">
          Episodes
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {episodes.map((episode) => (
              <LandscapeCard
                image={episode.image}
                imageAlt={episode.imageAlt}
                url={`${episode.series.slug}/episode/episode-s${episode.seasonNumber}e${episode.episodeNumber}`}
                eyebrow={`${
                  episode.episodeNumber == 0
                    ? "Trailer"
                    : "Episode " + episode.episodeNumber
                }`}
                title={episode.name}
                description={episode.content}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
