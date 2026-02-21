"use client";

import HeaderPage from "~/components/headerPage";
import BaseLayout from "../base";
import { useLocale, useTranslations } from "next-intl";
import TextPt from "./textPt";
import TextEn from "./textEn";

function PoliticaPrivacidade() {
  const t = useTranslations("Menu");
  const locale = useLocale();
  return (
    <BaseLayout>
      <HeaderPage title={t("menu15")} subtitle="" />
      <div className="container-politica">
        {locale === "pt" && <TextPt />}
        {locale === "en" && <TextEn />}
      </div>
    </BaseLayout>
  );
}

export default PoliticaPrivacidade;
