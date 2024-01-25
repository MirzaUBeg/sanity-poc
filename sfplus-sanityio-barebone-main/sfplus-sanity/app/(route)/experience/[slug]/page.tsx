import HeroBanner from "@/app/_components/HeroBanner";
import { getEventQuery } from "@/sanity/lib/sanity.queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { Event } from "@/sanity/types/Event";

type Props = {
  params: { slug: string };
};

export default async function Experience({ params }: Props) {
  const sfEvent = await sanityFetch<Event>({
    query: getEventQuery,
    params: { slug: params.slug },
  });

  return (
    <HeroBanner
      image={sfEvent.image}
      imageAlt={sfEvent.imageAlt}
      title={sfEvent.title}
      content={sfEvent.content}
      ctaText={sfEvent.ctaText}
    />
  );
}
