"use client"
import { useTranslations } from "next-intl";

function NossaHistoria() {
  const t = useTranslations("Index");
  return (
    <section id="nossa-historia" className="section section-pb nossa-historia">
      <div className="container">
        <div className="row justify-content-center row-historia">
          <div className="col-md-10">
            <div className="row">
              <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                <h3>
                  {t.rich("historyTitle", {
                    strong: (chunks) => <strong>{chunks}</strong>,
                  })}
                </h3>
              </div>
              <div className="col-12 col-lg-8">
                {t.rich("historyParagraph", {
                  p: (chunks) => <p>{chunks}</p>,
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NossaHistoria;
