"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

function Chocolateria() {
  const t = useTranslations("Index");
  const t2 = useTranslations("ContactInfo");

  return (
    <section
      id="chocolateria"
      className="section chocolateria"
      style={{ paddingTop: 0 }}
    >
      <div className="container">
        <h2 className="title">{t("titleChocolate")}</h2>
        <p className="subtitle">{t("textChocolate")}</p>
        <div className="galeria-vertical">
          <Image
            src={"/assets/images/chocolateria.jpg"}
            alt="Chocolateria"
            className="full-width"
            width={1000}
            height={667}
          />
        </div>
        <div className="info-loja">
          <div className="endereco">
            {t2("Store")}
            <br />
            {t2("Address")} Coronel Emídio Piedade 378
            <br />
            Pari - São Paulo/SP
          </div>
          <div className="divisioria"></div>
          <div className="horarios">
            {t2("TxtHours")}
            <br />
            {t2("DaysHours")}
            <br />
            {t2("from")} 09:00hs {t2("to")} 18:00hs
            <br />
            {t2("Saturday")}: 09:00hs {t2("to")} 15:00hs
          </div>
        </div>
        <div className="endereco-adm">
          {t2("AddressAdmTitle")}:
          <br />
          {t2("Address")}: Silva Teles, 821 – Pari
          <br />
          {t2("ZipCode")}: 03026-001
          <br />
          São Paulo/SP
          <br />
          +55 11 2172.3500
        </div>
      </div>
    </section>
  );
}

export default Chocolateria;
