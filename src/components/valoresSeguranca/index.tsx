"use client"

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

function ValoresSeguranca() {
  const t = useTranslations("Index");
  const locale = useLocale();

  // Array para os 5 novos valores (Seção Laranja)
  const valuesItems = [1, 2, 3, 4, 5];

  return (
    <section id="dna" className="section section-valores-seguranca">
      <div className="container relative">
        <div className="cont-valores">
          <div className="box-valores">
            <h3>{t("titleMission")}</h3>
            <p>{t("textMission")}</p>
          </div>
          <div className="box-valores">
            <h3>{t("titleVision")}</h3>
            <p>{t("textVision")} </p>
          </div>
          
          <div className="box-valores">
            <h3>{t("titleValues")}</h3>
            <div className="lista-novos-valores">
              {valuesItems.map((item) => (
                <div key={item} className="item-valor-novo" style={{ marginBottom: '20px' }}>
                  <h3 style={{ fontSize: 'inherit', marginBottom: '5px', display: 'block' }}>
                    {t(`valueTitle${item}`)}
                  </h3>
                  <p>
                    {t(`valueText${item}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SEÇÃO ROXA - AGORA DINÂMICA PARA PT E EN */}
        <div className="cont-seguranca">
          <ul>
            <li>
              {t.rich("textSafety", {
                span: (chunks) => <span>{chunks}</span>,
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </li>
            <li>
              {t.rich("textFlexibility", {
                span: (chunks) => <span>{chunks}</span>,
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </li>
            <li>
              {t.rich("textCommitment", {
                span: (chunks) => <span>{chunks}</span>,
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </li>
            <li>
              {t.rich("textPassion", {
                span: (chunks) => <span>{chunks}</span>,
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </li>
          </ul>
        </div>

        <div className="box-btn-certificado">
          <Link href={`/${locale}/certificacoes`} className="btn-certificacoes">
            {t("textBtnCertifications")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ValoresSeguranca;