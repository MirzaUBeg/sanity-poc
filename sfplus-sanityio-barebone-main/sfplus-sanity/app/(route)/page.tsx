import {
  ExtractReferencedType,
  SanityValues,
} from "@/sanity-config/sanity.config";
import { getEventsQuery } from "@/sanity/lib/sanity.queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { Event } from "@/sanity/types/Event";
import { referenced } from "@sanity-typed/types";
import BlockEpisodesCarousel from "../_containers/BlockEpisodesCarousel";
import BlockHeroBanner from "../_containers/BlockHeroBanner";

export default async function Home() {
  const events = await sanityFetch<Event[]>({
    query: getEventsQuery,
  });

  type BlockTypes = SanityValues["page"]["blocks"];
  type ReferencedType = ExtractReferencedType<
    NonNullable<BlockTypes>,
    typeof referenced
  >;

  const homePage = await sanityFetch<
    SanityValues["page"] & {
      blockList: { _id: string; _type: ReferencedType }[];
    }
  >({
    /**
     * We could fetch every episode or nested block doing something like
     *
      *[_type == "page" && slug.current == $slug][0]{
        blocks[]->{
          _id,
          _type,
          _type == 'blockEpisodesCarousel' => {
              episodes[]->
          },
          _type == 'blockHero' => {
              ...
          },
        },
      }
      But in this case we can make use of server components to facilitate each component fetching its own data,
      which will help us to avoid fetching data that we don't need.
     */
    query: `*[_type == "page" && slug.current == $slug][0]{
      "blockList": blocks[]->{
        _id,
        _type,
      },
      // ...
    }
    `,
    params: { slug: "homepage" },
  });

  return (
    <>
      {homePage?.blockList?.map((block) => {
        switch (block._type) {
          case "blockEpisodesCarousel":
            return <BlockEpisodesCarousel id={block._id} key={block._id} />;
          case "blockHero":
            return <BlockHeroBanner id={block._id} key={block._id} />;
          default:
            return null;
        }
      })}
    </>
  );
}
