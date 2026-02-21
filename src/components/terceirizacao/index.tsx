"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

function Terceirizacao() {
  const t = useTranslations("Index");
  const locale = useLocale();

  return (
    <section id="terceirizacao" className="section section-pt terceirizacao">
      <div className="container">
        <h2 className="title">{t("titleOutsourcing")}</h2>
        <div className="row justify-content-center mb-60">
          <div className="col-md-10">
            <div className="txt-terceirizacao">
              {t.rich("textOutsourcing", {
                p: (chunks) => <p>{chunks}</p>,
              })}
            </div>
          </div>
        </div>
        <div className="section-gal-grid">
          <div className="galeria-vertical">
            <Image
              src={"/assets/images/terceirizacao-1.jpg"}
              alt="Terceirização"
              className="full-width"
              width={1000}
              height={667}
            />
            <Image
              src={"/assets/images/terceirizacao-2.jpg"}
              alt="Terceirização 2"
              className="full-width"
              width={1000}
              height={667}
            />
          </div>
        </div>
        <div className="img-full">
          {locale === "en" && (
            <Image
              src={"/assets/images/terceirizacao-3_v2_en.jpg"}
              alt="Terceirização"
              className="full-width"
              width={1033}
              height={442}
            />
          )}
          {locale === "pt" && (
            <Image
              src={"/assets/images/terceirizacao-3_v4.jpg"}
              alt="Terceirização"
              className="full-width"
              width={1033}
              height={442}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Terceirizacao;
