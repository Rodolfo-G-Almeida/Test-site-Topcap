import Image from "next/image";

type arrayImages = {
  path: string;
  alt: string;
};

interface VerticalGalleryProps {
  images: Array<arrayImages>;
}

function VerticalGallery({ images }: VerticalGalleryProps) {
  return (
    <section className="section section-pt section-gal-grid">
      <div className="container">
        <div className="galeria-vertical">
          {images.map((item) => (
            <Image
              key={item.alt}
              src={item.path}
              alt={item.alt}
              className="full-width"
              width={1600}
              height={1067}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default VerticalGallery;
