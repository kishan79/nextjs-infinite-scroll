import Image from "next/image";

export default function ImageCard({ image }) {
  return (
    <Image
      src={image.urls.small}
      width={300}
      height={400}
      alt={image.alt_description}
    />
  );
}
