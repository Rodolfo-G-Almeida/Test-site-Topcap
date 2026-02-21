"use client";



import Image from "next/image";

import { products } from "./produtos";

import Link from "next/link";

import { useLocale, useTranslations } from "next-intl";



function LinhaProdutos() {

  const t = useTranslations("Index");

  const locale = useLocale();



  return (

    <>  

      <section id="produtos" className="section section-pt linhas-producao">

        <div className="container">

          <div className="row justify-content-center">

            <div className="col-md-10">

              <h2 className="title">{t("titleProducts")}</h2>

              <p className="subtitle">

                {t("textProducts")}

              </p>



              <div className="cont-produtos">

                <div className="row no-gutters">

                  {Object.keys(products).map((key: any) => {

                    const product = products[key];

                    return (

                      <div key={product.id} className="col-md-6 no-padding">

                        <Link href={`/${locale}/${product.path}`} className="box-produto">

                          <Image

                            src={product.image}

                            alt={locale === 'en' ? product.titleEn:product.title}

                            width={1000}

                            height={667}

                          />

                          <div

                            className="nome-produto"

                            style={{ backgroundColor: product.color }}

                          >

                            {locale === 'en' ? product.titleEn:product.title}

                          </div>

                        </Link>

                      </div>

                    );

                  })}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>

  );

}



export default LinhaProdutos;