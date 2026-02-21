"use client";

import BaseLayout from "../base";
import { certificacoes } from "./certificacoes";
import HeaderPage from "~/components/headerPage";
import { BoxCertificate, BoxCertificateLink } from "./_components/BoxCertificado";
import { useLocale, useTranslations } from "next-intl";

function Certifications() {
  const t = useTranslations("Certifications");
  const locale = useLocale();
  
  return (
    <BaseLayout>
      <HeaderPage
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <section className="section cetrificacoes">
        <div className="container">
          {certificacoes.map((item) => {
            return item.link ? (
              <BoxCertificateLink key={item.id} item={item} locale={locale} />
            ) : (
              <BoxCertificate key={item.id} item={item} locale={locale} />
            );
          })}
        </div>
      </section>
    </BaseLayout>
  );
}

export default Certifications;
