"use client";

import { useTranslations } from "next-intl";

function NovosProjetos() {
  const t = useTranslations("Index");
  return (
    <section id="novos-projetos" className="section section-pt novos-projetos">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="txt-novos-projetos">
              <h2 className="title">{t("titleProjects")}</h2>
              {t.rich("textProjects", {
                p: (chunks) => <p>{chunks}</p>,
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NovosProjetos;
