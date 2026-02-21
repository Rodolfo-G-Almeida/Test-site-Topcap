import Image from "next/image";

type ImageProps = {
  imageUrl: string;
  imageUrlMobile?: string;
  isMobile?: boolean;
  title: string;
  link?: string;
  posObj?: string;
  locale?: string;
};

function ImageComponent({
  isMobile,
  imageUrlMobile,
  imageUrl,
  title,
  posObj,
}: ImageProps) {
  return (
    <Image
      src={isMobile && imageUrlMobile ? imageUrlMobile : imageUrl}
      alt={title}
      fill={true}
      style={{ objectFit: "cover", objectPosition: posObj || "center center" }}
      quality={100}
    />
  );
}

function imageWithLink({
  link,
  isMobile,
  imageUrlMobile,
  imageUrl,
  title,
  posObj,
  locale,
}: ImageProps) {
  return (
    <a href={`${locale}/${link}`}>
      {ImageComponent({ isMobile, imageUrlMobile, imageUrl, title, posObj })}
    </a>
  );
}

function imageNoLink({
  isMobile,
  imageUrlMobile,
  imageUrl,
  title,
  posObj,
}: ImageProps) {
  return ImageComponent({ isMobile, imageUrlMobile, imageUrl, title, posObj });
}

export { imageWithLink, imageNoLink };
