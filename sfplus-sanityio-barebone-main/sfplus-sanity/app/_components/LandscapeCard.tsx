import Image from "next/image";
import Link from "next/link";
import { RectangleStackIcon } from "./_Icons";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";

interface LandscapeCardProps {
  image: string;
  imageAlt: string;
  url: string;
  eyebrow?: string;
  title: string;
  description?: PortableTextBlock[];
}

export default ({
  image,
  imageAlt,
  url,
  eyebrow,
  title,
  description,
}: LandscapeCardProps) => {
  return (
    <div>
      <div>
        <Link href={url}>
          <Image
            className="rounded-xl"
            src={image}
            alt={imageAlt}
            layout="responsive"
            objectFit="cover"
            quality={100}
            width={100}
            height={100}
          />
        </Link>
      </div>
      {eyebrow && (
        <div className="mt-2 flex flex-row font-heading text-xs uppercase text-white">
          <RectangleStackIcon className="mr-1 h-4 w-4" /> {eyebrow}
        </div>
      )}
      <div className="mt-2 font-heading text-sm text-white">{title}</div>
      {description && (
        <div className="mt-2 font-sans text-sm font-light">
          <PortableText value={description} />
        </div>
      )}
    </div>
  );
};
