"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

function B2b() {
  const t = useTranslations("Index");
  return (
    <section id="b2b" className="section section-pt section-b2b">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="cont-square">
              <div className="content-square">
                <h2 className="title">{t('titleB2B')}</h2>
                {t.rich('textB2B', {
                  p: (chunks) => <p>{chunks}</p>,
                })}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="galeria-vertical relative">
              <Image
                src={"/assets/images/b2b-2.jpg"}
                alt="B2B"
                className="full-width"
                width={1000}
                height={667}
              />
              <Image
                src={"/assets/images/b2b-1.jpg"}
                alt="B2B"
                className="full-width"
                width={1000}
                height={667}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default B2b;
