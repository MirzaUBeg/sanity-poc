import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { SanityValues } from "@/sanity-config/sanity.config";
import LandscapeCard from "../_components/LandscapeCard";

const blockEpisodesCarousel = async ({ id }: { id: string }) => {
  if (!id) return null;
  const data = await sanityFetch<
    SanityValues["blockEpisodesCarousel"] & {
      episodesList: (Omit<SanityValues["episode"], "series"> & {
        image: string;
        imageAlt: string;
        series: SanityValues["series"];
      })[];
    }
  >({
    query: `*[_type == "blockEpisodesCarousel" && _id == $id][0]{
        ...,
        "episodesList": episodes[]-> {
          ...,
          "image": image.asset->url,
          "imageAlt": image.alt,
          series->
        }
      }`,
    params: { id },
  });

  return (
    <div className="ml-7 mt-10">
      <div className="font-heading text-xl font-bold text-white">
        Featured Episodes
      </div>
      <div className="mt-3 flex gap-3">
        {data.episodesList?.map((ep) => (
          <LandscapeCard
            key={ep._id}
            image={ep.image}
            imageAlt={ep.imageAlt}
            url={`series/${ep.series?.slug?.current}/episode/episode-s${ep.seasonNumber}e${ep.episodeNumber}`}
            eyebrow={`SEASON ${ep.seasonNumber}: EPISODE ${ep.episodeNumber}`}
            title={ep.name || ""}
          />
        ))}
      </div>
    </div>
  );
};

export default blockEpisodesCarousel;
