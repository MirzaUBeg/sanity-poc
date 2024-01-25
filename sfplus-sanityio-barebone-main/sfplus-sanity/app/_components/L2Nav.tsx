import Image from "next/image";
import Link from "next/link";
import PullDownMenu from "./PullDownMenu";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import {
  getEventsQuery,
  getSeriesListQuery,
} from "@/sanity/lib/sanity.queries";
import { Event } from "@/sanity/types/Event";
import { Series } from "@/sanity/types/Series";
import AuthButton from "./AuthButton";

export default async () => {
  const events = await sanityFetch<Event[]>({
    query: getEventsQuery,
  });
  const eventMenuItems = events.map((event) => ({
    title: event.name,
    path: `/experience/${event.slug}`,
  }));

  const series = await sanityFetch<Series[]>({
    query: getSeriesListQuery,
  });
  const seriesMenuItems = series.map((s) => ({
    title: s.name,
    path: `/series/${s.slug}`,
  }));

  return (
    <div className="flex justify-between bg-custom-beige">
      <div className="flex h-14 items-center gap-6 pl-5">
        <Link href="/">
          <Image
            src="/BeaconTextOnly.png"
            height={60}
            width={150}
            alt="Sanity Logo"
            className="mr-3"
          />
        </Link>
        <Link
          href="https://salesforce.quip.com/ajK9AHT2XMkZ"
          className="font-heading text-lg text-sfplus-dark hover:text-sfplus-light-blue"
        >
          X
        </Link>
        <Link href="https://www.sanity.io">
          <Image
            src="/Sanity-logo.png"
            height={60}
            width={100}
            alt="Sanity Logo"
          />
        </Link>
        <Link
          href="/"
          className="text-xs font-bold text-sfplus-dark hover:text-sfplus-light-blue"
        >
          Home
        </Link>
        <PullDownMenu title="Events" items={eventMenuItems} />
        <PullDownMenu title="Original Series" items={seriesMenuItems} />
        <Link
          href="/mylist"
          className="text-xs font-bold text-sfplus-dark hover:text-sfplus-light-blue"
        >
          My List
        </Link>
      </div>
      <div className="flex h-14 items-center gap-6 pr-5">
        <AuthButton className="text-xs font-bold text-sfplus-dark hover:text-sfplus-light-blue" />
      </div>
    </div>
  );
};
