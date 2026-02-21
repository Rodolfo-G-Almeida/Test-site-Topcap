"use client";

import { useTranslations } from "next-intl";

function PoliticaSeguranca() {
  const t = useTranslations("Index");
  return (
    <section className="section section-politica section-pt section-square-orange">
      <div className="container relative">
        <div className="cont-square">
          <div className="content-square">
            <h2 className="title">
              {t("titleSafety")}
            </h2>
            <p className="subtitle">
            {t("textFoodSafety")}
            </p>

            <ul>
            {t.rich("itemsFoodSafety", {
              li: (chunks) => <li>{chunks}</li>,
            })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PoliticaSeguranca;
