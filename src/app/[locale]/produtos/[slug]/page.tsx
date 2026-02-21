"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import BaseLayout from "~/app/[locale]/base";
import HeaderPage from "~/components/headerPage";
import { Flavor, products } from "~/components/linhaProdutos/produtos";

interface ProdutosProps {
  params: {
    slug: string;
  };
}

function Produtos({ params }: ProdutosProps) {
  const t = useTranslations("Index");
  const locale = useLocale();

  // Verificação de segurança caso o slug não exista
  const productData = products[params.slug];
  if (!productData) {
    return null; // ou um componente de Loading/404
  }

  const { title, titleEn, color, description, descriptionEn, flavors } = productData;

  const [showModal, setShowModal] = useState(false);
  const [imageModal, setImageModal] = useState("");
  const [titleModal, setTitleModal] = useState("");

  const titleFinal = locale === "en" ? titleEn : title;
  const descriptionFinal = locale === "en" ? descriptionEn : description;

  const handleFlavor = (flavor: Flavor) => {
    setImageModal(flavor.image);
    setTitleModal(flavor.name);
    setShowModal(true);
  };

  const renderFlavorsButtons = (flavor: Flavor) => {
    return (
      <div 
        key={flavor.name} 
        onClick={() => handleFlavor(flavor)} 
        style={{ cursor: 'pointer' }}
      >
        {flavor.name}
      </div>
    );
  };

  return (
    <BaseLayout>
      <HeaderPage title={titleFinal} subtitle="" />
      <section className="section section-page">
        <div className="container">
          <div className="section-square-orange square-menu-produtos">
            <div className="cont-square" style={{ backgroundColor: color }}>
              <div className="content-square" style={{ width: "100%" }}>
                <div className="cont-escolha-produtos">
                  
                  {/* --- MENU LATERAL (CORREÇÃO DO TEXTO CORTADO) --- */}
                  <div className="menu-produtos" style={{ minWidth: '140px' }}> 
                    <ul>
                      {Object.keys(products).map((key) => {
                        const { path, title, titleEn, id } = products[key];
                        return (
                          <li key={id} style={{ marginBottom: '8px' }}>
                            <Link 
                              href={`/${locale}/${path}`}
                              style={{
                                /* ESTILOS PARA CORRIGIR O CORTE DO TEXTO */
                                display: 'block',
                                whiteSpace: 'normal',       // Permite quebra de linha
                                wordWrap: 'break-word',     // Quebra palavras longas
                                overflowWrap: 'anywhere',   // Garante a quebra em qualquer lugar
                                lineHeight: '1.2',          // Espaçamento entre linhas confortável
                                fontSize: '15px'            // Tamanho legível
                              }}
                            >
                              {locale === "en" ? titleEn : title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {/* ----------------------------------------------- */}

                  <div className="produto-selecionado">
                    <h1>{titleFinal}</h1>
                    <div className="desc-produto">
                      {descriptionFinal}

                      {flavors && (
                        <div className="container-flavors">
                          <h4>{t("clickNutricionalInfo")}</h4>
                          <div className="links-flavors">
                            {flavors.map((flavor) =>
                              renderFlavorsButtons(flavor)
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* MODAL */}
      <div
        onClick={() => setShowModal(false)}
        className={`overlay ${!showModal ? "hide-modal" : "show-modal"}`}
      >
        <div className="content-overlay" onClick={(e) => e.stopPropagation()}>
          <div className="btn-close" onClick={() => setShowModal(false)}></div>
          <h2>{titleModal}</h2>
          {imageModal && (
             <Image 
               src={imageModal} 
               width={600} 
               height={400} // Adicionado height para evitar erro do Next/Image
               style={{ width: '100%', height: 'auto' }}
               alt={titleModal} 
             />
          )}
        </div>
      </div>
    </BaseLayout>
  );
}

export default Produtos;