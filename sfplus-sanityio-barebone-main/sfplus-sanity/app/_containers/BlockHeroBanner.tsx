import { sanityFetch } from "@/sanity/lib/sanityFetch";
import HeroBanner from "../_components/HeroBanner";
import { SanityValues } from "@/sanity-config/sanity.config";

const BlockHeroBanner = async ({ id }: { id: string }) => {
  if (!id) return null;
  const data = await sanityFetch<
    SanityValues["blockHero"] & { image: string; imageAlt: string }
  >({
    query: `*[_type == "blockHero" && _id == $id][0]{
        ...,
        "image": image.asset->url,
        "imageAlt": image.alt,
      }`,
    params: { id },
  });

  return (
    <HeroBanner
      image={data.image}
      imageAlt={data.imageAlt}
      title={data.title}
      content={data.content}
      ctaText={data.primaryCta}
      ctaUrl={data.primaryUrl}
      secondCtaText={data.secondaryCta}
      secondCtaUrl={data.secondaryUrl}
    />
  );
};

export default BlockHeroBanner;
