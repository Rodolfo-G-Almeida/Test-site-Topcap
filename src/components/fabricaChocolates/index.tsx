"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

function FabricaChocolates() {
  const t = useTranslations("Index");
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section id="fabrica-de-chocolates" className="section section-pb fabrica">
      <div className="container">
        <h2 className="title">
          {t.rich("about", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="videoWrapper">
              {!playVideo && (
                <a
                  onClick={() => setPlayVideo(true)}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={"/assets/images/thumb_video.jpg"}
                    alt={"Thumb vídeo"}
                    className="full-width"
                    width={1014}
                    height={591}
                  />
                </a>
              )}
              {playVideo && (
                <iframe
                  width="560"
                  height="315"
                  id="video-iframe"
                  src="https://www.youtube.com/embed/iZ7B4qipoC0?autoplay=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FabricaChocolates;
