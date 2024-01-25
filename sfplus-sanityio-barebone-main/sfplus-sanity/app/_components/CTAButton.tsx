import Link from "next/link";

const CTAButton = ({
  ctaText,
  ctaLink,
  className,
}: {
  ctaText: string;
  ctaLink: string;
  className: string;
}) => {
  // Check if the link is internal
  const isExternalLink =
    ctaLink.startsWith("http://") || ctaLink.startsWith("https://");

  // Handler for external links
  const handleExternalLink = () => {
    window.open(ctaLink, "_blank");
  };

  return (
    <>
      {!isExternalLink ? (
        <Link href={ctaLink} passHref>
          <div className={"flex items-center justify-center " + className}>
            {ctaText}
          </div>
        </Link>
      ) : (
        <a href={ctaLink} target="_blank" rel="noopener noreferrer">
          <div className={"flex items-center justify-center " + className}>
            {ctaText}
          </div>
        </a>
      )}
    </>
  );
};

export default CTAButton;
