"use client";

import { useTranslations } from "next-intl";

function GarantiaQualidade() {
  const t = useTranslations("Index");

  return (
    <section
      id="garantia-de-qualidade"
      className="section section-pt section-square-orange"
    >
      <div className="container relative">
        <div className="cont-square" style={{width:'100%'}}>
          <div className="content-square">
            <h2 className="title">{t("titleQuality")}</h2>
            <p>
              {t("textQuality")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default GarantiaQualidade;
