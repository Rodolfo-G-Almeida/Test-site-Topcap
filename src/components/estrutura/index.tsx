"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

function Estrutura() {
  const t = useTranslations("Index");
  return (
    <section id="estrutura" className="section section-pt section-estrutura">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2 className="title">{t("titleStruct")}</h2>
            <p>{t("paragraphStruct1")}</p>
          </div>
        </div>

        <div className="box-estrutura-texto">
          <div className="box-texto">
            <p>{t("paragraphStruct2")}</p>
          </div>
          <Image
            src={"/assets/images/topcau-1.jpg"}
            alt="Estrutura"
            className="full-width"
            width={1600}
            height={1067}
          />
        </div>
      </div>
    </section>
  );
}

export default Estrutura;
