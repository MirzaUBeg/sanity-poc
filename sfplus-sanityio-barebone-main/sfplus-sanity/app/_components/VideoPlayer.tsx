import Image from "next/image";

interface VideoPlayerProps {
  image: string;
  imageAlt: string;
}

export default ({ image, imageAlt }: VideoPlayerProps) => {
  return (
    <div style={{ width: "100vw", position: "relative" }}>
      <Image
        src={image}
        alt={imageAlt}
        layout="responsive"
        objectFit="cover"
        quality={100}
        width={100}
        height={100}
      />
    </div>
  );
};
