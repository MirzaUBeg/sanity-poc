import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";
import Image from "next/image";
import CTAButton from "./CTAButton";

interface HeroBannerProps {
  image: string;
  imageAlt: string;
  title?: string;
  content?: PortableTextBlock[];
  ctaText?: string;
  ctaUrl?: string;
  secondCtaText?: string;
  secondCtaUrl?: string;
}

export default ({
  image,
  imageAlt,
  title,
  content,
  ctaText,
  ctaUrl,
  secondCtaText,
  secondCtaUrl,
}: HeroBannerProps) => {
  return (
    <div
      className="relative w-screen bg-gradient-to-r from-blue-950"
      style={{ height: "80vh" }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          background:
            "linear-gradient(to right, rgba(0, 22, 57, 1) 0%, rgba(0, 0, 0, 0) 100%)",
        }}
      ></div>
      <Image src={image} alt={imageAlt} fill objectFit="cover" quality={100} />

      {/* Title overlay */}
      <div className="absolute left-0 top-0 flex h-full w-full items-center">
        <div className="z-10 mx-10">
          {title && (
            <div
              className="text-left font-heading text-3xl font-bold text-white"
              style={{ width: "30vw" }}
            >
              {title}
            </div>
          )}
          {content ? (
            <div
              className="mt-3 text-left text-xs text-white"
              style={{ width: "30vw" }}
            >
              <PortableText value={content} />
            </div>
          ) : null}
          <div className="flex">
            {ctaText && ctaUrl && (
              <CTAButton
                ctaText={ctaText}
                ctaLink={ctaUrl}
                className="mt-4 h-9 w-32 rounded-md bg-sfplus-light-blue font-heading text-xs text-white"
              />
            )}
            {secondCtaText && secondCtaUrl && (
              <CTAButton
                ctaText={secondCtaText}
                ctaLink={secondCtaUrl}
                className="mx-4 mt-4 h-9 w-32 rounded-md border border-white font-heading text-xs text-white"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
