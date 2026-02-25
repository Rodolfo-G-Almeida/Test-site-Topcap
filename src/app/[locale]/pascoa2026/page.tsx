"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import BaseLayout from "~/app/[locale]/base";

// --- 1. DEFINIÇÃO DE TIPOS ---
type ProductType = {
  id: number;
  name: string;
  weight: string;
  image: string;
  button?: string;
  link?: string;
  videoSrc?: string;
};

type BrandGroupType = {
  brandLogo: string;
  logoWidth: number;
  logoHeight: number;
  products: ProductType[];
}

type SectionType = {
  category: string;
  tag?: string;
  speechBubble?: string;
  products?: ProductType[];
  brandGroups?: BrandGroupType[];
};

// --- 2. TRADUÇÕES ESTÁTICAS DA PÁGINA ---
const pageContent = {
  pt: {
    banner: "/assets/images/pascoa2026/Banner top cau pascoa 2026.png",
    intro1: "A <strong>Páscoa</strong> é feita de momentos que unem gerações, o encanto das crianças, a nostalgia dos adultos e o sabor que aproxima todos à mesa.",
    intro2: "A <strong>Top Cau</strong>, que integra <strong>Grupo Marilan</strong>, faz parte dessa história com produtos que despertam sorrisos e criam lembranças, unindo diversão e carinho de marcas que estão presentes na vida dos consumidores.",
    intro3: "Em 2026, essa celebração chega com novos sabores, personagens e experiências, tornando a <strong>Páscoa</strong> ainda mais especial.",
    footerWhere: "Onde encontrar?",
    footerStore: "Loja Top Cau Chocolates",
    footerGroup: "Lojas do Grupo Marilan",
    footerButton: "Conheça as lojas",
  },
  en: {
    banner: "/assets/images/pascoa2026/Banner top cau pascoa 2026_ingles.png",
    intro1: "<strong>Easter</strong> is made of moments that bring generations together: the wonder of children, the nostalgia of adults, and the flavors that gather everyone around the table.",
    intro2: "<strong>Top Cau</strong>, as part of the <strong>Marilan Group</strong>, is proud to be part of this story with products that spark smiles and create lasting memories, blending the fun and care of brands that are present in consumers' lives.",
    intro3: "In 2026, this celebration arrives with new flavors, characters, and experiences, making <strong>Easter</strong> even more special.",
    footerWhere: "Where to find",
    footerStore: "Top Cau Chocolates Stores",
    footerGroup: "Grupo Marilan Stores",
    footerButton: "Visit our stores",
  }
};

// --- 3. BANCO DE DADOS DINÂMICO (Idioma) ---
const getPascoaData = (locale: 'pt' | 'en'): SectionType[] => [
  {
    category: locale === 'pt' ? "Clássicos Top Cau" : "Top Cau Classics",
    products: [
      { id: 1, name: locale === 'pt' ? "Chocolate ao Leite" : "Milk chocolate", weight: "120g", image: "/assets/images/pascoa2026/chocolate ao leite 120.png" },
      { id: 2, name: locale === 'pt' ? "Chocolate Crocante" : "Crunchy chocolate", weight: "120g", image: "/assets/images/pascoa2026/crocante.png" },
      { id: 3, name: locale === 'pt' ? "Chocolate ao Leite" : "Milk chocolate", weight: "210g", image: "/assets/images/pascoa2026/chocolate ao leite 210.png" },
      { id: 4, name: locale === 'pt' ? "Chocolate ao Leite" : "Milk chocolate", weight: "370g", image: "/assets/images/pascoa2026/chocolate ao leite 370.png" },
    ]
  },
  {
    category: locale === 'pt' ? "Ovos Marilan" : "Marilan Eggs",
    products: [
      { id: 5, name: "Maizena", weight: "140g", image: "/assets/images/pascoa2026/ovo marilan.png" },
      { id: 6, name: "Teens", weight: "140g", image: "/assets/images/pascoa2026/Teens.png" },
    ]
  },
  {
    category: locale === 'pt' ? "Pré Páscoa" : "Pre Easter",
    products: [
      { id: 7, name: locale === 'pt' ? "Mini Ovos Bluey" : "Mini eggs Bluey", weight: "72g", image: "/assets/images/pascoa2026/mini ovos bluey.png" },
      { id: 8, name: locale === 'pt' ? "Mini Ovos LOL" : "Mini eggs LOL", weight: "72g", image: "/assets/images/pascoa2026/mini ovos lol.png" },
      { id: 9, name: locale === 'pt' ? "Coelho de Chocolate" : "Chocolate Bunny", weight: "34g", image: "/assets/images/pascoa2026/coelho de chocolate.png" },
    ]
  },
  {
    category: locale === 'pt' ? "Choco + Presentes" : "Choco and Gifts",
    tag: locale === 'pt' ? "Lançamentos" : "New arrivals",
    products: [
      { id: 10, name: "Minions", weight: "80g", image: "/assets/images/pascoa2026/minios figurinha.png" },
      { id: 11, name: "Unicórnio", weight: "80g", image: "/assets/images/pascoa2026/unicornio adesivo.png" },
      { id: 12, name: "Shrek", weight: "80g", image: "/assets/images/pascoa2026/shrek.png" },
      { id: 13, name: "Transformers", weight: "80g", image: "/assets/images/pascoa2026/transformes adesivo.png" },
    ]
  },
  {
    category: locale === 'pt' ? "Choco + Presentes" : "Choco and Gifts",
    products: [
      { id: 14, name: "Ben 10", weight: "80g", image: "/assets/images/pascoa2026/ben 10 adesivo.png" },
      { id: 15, name: "LOL", weight: "80g", image: "/assets/images/pascoa2026/LOL adesivos.png" },
      { id: 16, name: "Bluey", weight: "80g", image: "/assets/images/pascoa2026/bluey quebra cabeca.png" },
    ]
  },
  {
    category: locale === 'pt' ? "Choco + Presentes" : "Choco and Gifts",
    tag: locale === 'pt' ? "Lançamentos" : "New arrivals",
    products: [
      { id: 17, name: "Transformers", weight: "90g", image: "/assets/images/pascoa2026/transformes 90.png" },
      { id: 18, name: "Unicórnio", weight: "90g", image: "/assets/images/pascoa2026/unicornio copo.png" },
      { id: 19, name: "Minions", weight: "90g", image: "/assets/images/pascoa2026/minions pote.png" },
      { id: 40, name: "Turbo Cars", weight: "90g", image: "/assets/images/pascoa2026/cars.png" },
    ]
  },
  {
    category: locale === 'pt' ? "Choco + Presentes" : "Choco and Gifts",
    products: [
      { id: 21, name: "LOL", weight: "90g", image: "/assets/images/pascoa2026/lol bolsa.png" },
      { id: 22, name: "Bluey", weight: "90g", image: "/assets/images/pascoa2026/bluey com maleta.png" },
      { id: 23, name: "PlayStation", weight: "90g", image: "/assets/images/pascoa2026/playstation.png" },
    ]
  },
  {
    category: "Collabs",
    brandGroups: [
      {
        brandLogo: "/assets/images/pascoa2026/pacoquita logo-Photoroom.png",
        logoWidth: 260,
        logoHeight: 100, 
        products: [
          { id: 32, name: "Ovo Paçoquita", weight: "300g", image: "/assets/images/pascoa2026/pacoquita recheada.png" },
          { id: 33, name: "Ovo Paçoquita", weight: "162g", image: "/assets/images/pascoa2026/pacoquita ovo.png" },
        ]
      },
      {
        brandLogo: "/assets/images/pascoa2026/mem logo.png",
        logoWidth: 460, 
        logoHeight: 220, 
        products: [
          { id: 34, name: "Ovo M&M's", weight: "210g", image: "/assets/images/pascoa2026/mem.png" },
        ]
      },
      {
        brandLogo: "/assets/images/pascoa2026/fini-logo-png_seeklogo-616844.png",
        logoWidth: 220, 
        logoHeight: 110,
        products: [
          { id: 35, name: "Ovo Dentadura", weight: "155g", image: "/assets/images/pascoa2026/dentadura fini.png" },
          { id: 36, name: "Ovo Beijos", weight: "155g", image: "/assets/images/pascoa2026/beijos fini.png" },
        ]
      }
    ]
  },
  {
    category: locale === 'pt' ? "Choco + Presentes" : "Choco and Gifts",
    tag: locale === 'pt' ? "Lançamentos" : "New arrivals",
    speechBubble: locale === 'pt' ? "Copo muda de<br/>cor com líquido<br/>gelado!" : "Color-changing<br/>cup with cold<br/>liquid",
    products: [
      { id: 29, name: "Barça", weight: "120g", image: "/assets/images/pascoa2026/barca.png", button: locale === 'pt' ? "Veja a transformação" : "See the transformation", videoSrc: "/assets/images/pascoa2026/copo_barcelona.mp4" },
      { id: 30, name: "Manchester City", weight: "120g", image: "/assets/images/pascoa2026/mancherter.png", button: locale === 'pt' ? "Confira a troca de cor" : "Check out the color change", videoSrc: "/assets/images/pascoa2026/copo_manchester.mp4" },
      { id: 31, name: "PSG", weight: "120g", image: "/assets/images/pascoa2026/psg.png", button: locale === 'pt' ? "Clique aqui e assista" : "Click here to watch", videoSrc: "/assets/images/pascoa2026/copo_psg.mp4" },
    ]
  },
  {
    category: locale === 'pt' ? "Choco + Presentes" : "Choco and Gifts",
    tag: locale === 'pt' ? "Itens Exclusivos" : "Exclusive items",
    products: [
      { id: 24, name: "Trolls", weight: "90g", image: "/assets/images/pascoa2026/trolls copo.png" },
      { id: 25, name: "Trolls", weight: "80g", image: "/assets/images/pascoa2026/trolls adesivo.png" },
      { id: 26, name: "PJ Masks", weight: "90g", image: "/assets/images/pascoa2026/pj.png" },
    ]
  },
  {
    category: locale === 'pt' ? "Choco + Presentes" : "Choco and Gifts",
    products: [
      { id: 27, name: "Kung Fu Panda", weight: "90g", image: "/assets/images/pascoa2026/kung fu panda.png" },
      { id: 28, name: "Kung Fu Panda", weight: "80g", image: "/assets/images/pascoa2026/kung fu.png" },
    ]
  }
];

// --- 4. LÓGICA DE CÁLCULO DE PROPORÇÃO DE ALTURA ---
const getProductHeight = (product: ProductType, isCollab: boolean) => {
  if (isCollab) {
    if (product.id === 32) return 330; 
    if (product.id === 34) return 360; 
    if (product.id === 33) return 265; 
    return 255;                        
  }

  const weight = parseInt(product.weight.replace(/\D/g, ''));
  if (isNaN(weight)) return 220;
  
  const multiplier = 0.45;
  const baseHeight = 220; 
  return baseHeight + ((weight - 120) * multiplier);
};

export default function Pascoa2026() {
  const params = useParams();
  const locale = (params.locale as 'pt' | 'en') || 'pt';
  const targetLocale = locale === 'pt' ? 'en' : 'pt';
  const t = pageContent[locale];
  const pascoaData = getPascoaData(locale);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // --- EFEITO DE OBSERVAÇÃO PARA A ANIMAÇÃO ---
  useEffect(() => {
    document.body.classList.add("esconder-header-footer");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { 
      threshold: 0.15, 
      rootMargin: "0px 0px -50px 0px" 
    });

    setTimeout(() => {
      const animatedElements = document.querySelectorAll(".animate-fade-up");
      animatedElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      document.body.classList.remove("esconder-header-footer");
      observer.disconnect();
    };
  }, []);

  return (
    <BaseLayout>
      <style dangerouslySetInnerHTML={{ __html: `
        /* --- IMPORTAÇÃO DA FONTE LOCAL (FUTURA) --- */
        
        /* 1. Futura Regular (Para textos normais e pesos) */
        @font-face {
          font-family: 'FuturaWeb';
          src: url('/fonts/Futura-Regular.otf') format('opentype'),
               url('/fonts/Futura-Regular.ttf') format('truetype');
          font-weight: normal; /* 400 */
          font-style: normal;
          font-display: swap;
        }

        /* 2. Futura Bold (Para os Títulos e Nomes dos Produtos) */
        @font-face {
          font-family: 'FuturaWeb';
          src: url('/fonts/Futura-Bold.otf') format('opentype'),
               url('/fonts/Futura-Bold.ttf') format('truetype');
          font-weight: bold; /* 700 */
          font-style: normal;
          font-display: swap;
        }

        /* 3. Futura Condensed (Exclusivo para o texto introdutório) */
        @font-face {
          font-family: 'FuturaCondensed';
          src: url('/fonts/Futura-Condensed.otf') format('opentype'),
               url('/fonts/Futura-Condensed.ttf') format('truetype');
          font-weight: normal; 
          font-style: normal;
          font-display: swap;
        }

        .esconder-header-footer header, 
        .esconder-header-footer footer,
        .esconder-header-footer .header,
        .esconder-header-footer .footer,
        .esconder-header-footer #header,
        .esconder-header-footer #footer {
          display: none !important;
        }

        body.esconder-header-footer {
          background-color: #fe5702 !important;
        }
        
        body.esconder-header-footer main,
        body.esconder-header-footer .main,
        body.esconder-header-footer #main,
        body.esconder-header-footer > div {
          padding-top: 0 !important;
          margin-top: 0 !important;
        }

        .product-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 2rem;
        }

        /* --- CLASSE MÁGICA DA ANIMAÇÃO DO CANVA --- */
        .animate-fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
          will-change: opacity, transform;
        }
        
        .animate-fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}} />

      <section style={{ backgroundColor: "#fe5702", color: "#fff", paddingTop: "20px", paddingBottom: "80px", fontFamily: "'FuturaWeb', 'Futura', 'Trebuchet MS', Arial, sans-serif", minHeight: "100vh", overflowX: "hidden", position: "relative" }}>
        
        {/* BOTÃO DE TROCA DE IDIOMA */}
        <div style={{ position: 'absolute', top: '20px', right: '30px', zIndex: 999 }}>
          <Link 
            href={`/${targetLocale}/pascoa2026`}
            style={{ 
              backgroundColor: '#fff', 
              color: '#fe5702', 
              borderRadius: '50%', 
              width: '45px', 
              height: '45px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontWeight: '900', 
              fontSize: '16px',
              textDecoration: 'none',
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
              border: '2px solid #fff'
            }}
          >
            {targetLocale.toUpperCase()}
          </Link>
        </div>

        <div className="container-fluid" style={{ maxWidth: "1400px" }}>
          
          {/* CABEÇALHO */}
          <div className="row justify-content-center mb-4 mt-4">
            <div className="col-12 text-center animate-fade-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: "100%", maxWidth: "1100px", marginBottom: "40px" }}>
                 <Image src={t.banner} alt="Banner Páscoa Topcau" width={1200} height={500} style={{ width: "100%", height: "auto", objectFit: "contain" }} priority />
              </div>
              <div className="row align-items-center w-100" style={{ maxWidth: "1100px", margin: "0 auto" }}>
                <div className="col-md-5 text-center mb-5 mb-md-0 d-flex justify-content-center">
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 30%, rgba(254,87,2,0) 65%)', zIndex: 0 }}></div>
                    <Image src="/assets/images/pascoa2026/m marilan.png" alt="Coração com Ovo de Páscoa" width={400} height={400} style={{ maxWidth: "430px", width: "100%", height: "auto", position: 'relative', zIndex: 1 }} />
                  </div>
                </div>
                <div className="col-md-7 d-flex justify-content-end">
                  <div style={{ textAlign: "right", maxWidth: "600px", fontFamily: "'FuturaCondensed', 'FuturaWeb', sans-serif" }}>
                    <p style={{ fontSize: "19px", lineHeight: "1.4", fontWeight: "normal", marginBottom: "20px", letterSpacing: "0.2px" }} dangerouslySetInnerHTML={{ __html: t.intro1 }}></p>
                    <p style={{ fontSize: "19px", lineHeight: "1.4", fontWeight: "normal", marginBottom: "20px", letterSpacing: "0.2px" }} dangerouslySetInnerHTML={{ __html: t.intro2 }}></p>
                    <p style={{ fontSize: "19px", lineHeight: "1.4", fontWeight: "normal", marginBottom: "0", letterSpacing: "0.2px" }} dangerouslySetInnerHTML={{ __html: t.intro3 }}></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RENDERIZAÇÃO DAS CATEGORIAS */}
          {pascoaData.map((section, index) => (
            <div key={index} style={{ marginBottom: "60px", marginTop: "40px" }}>
              
              {/* TÍTULO DA SEÇÃO ANIMADO */}
              <div className="row align-items-center w-100 mx-0 animate-fade-up" style={{ marginBottom: section.category === "Collabs" ? "15px" : "-5px", position: "relative", zIndex: 2 }}>
                <div className="col-12 position-relative d-flex justify-content-center">
                  <h3 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: "bold", margin: 0, textAlign: "center", lineHeight: "1" }}>
                    {section.category}
                  </h3>
                  {section.tag && (
                    <span className="position-absolute end-0 d-none d-md-flex align-items-center" style={{ backgroundColor: "#fff", color: "#fe5702", padding: "8px 25px", borderRadius: "30px", fontWeight: "bold", fontSize: "14px", top: "50%", transform: "translateY(-50%)" }}>{section.tag}</span>
                  )}
                </div>
                {/* AQUI FOI ADICIONADO mb-3 PARA O MOBILE PARA SEPARAR A TAG DO BALÃO! */}
                {section.tag && (
                  <div className="col-12 text-center d-md-none mt-3 mb-3">
                    <span style={{ backgroundColor: "#fff", color: "#fe5702", padding: "6px 20px", borderRadius: "25px", fontWeight: "bold", fontSize: "12px" }}>{section.tag}</span>
                  </div>
                )}
              </div>

              {/* CONTEÚDO DA SEÇÃO */}
              <div className={`row justify-content-center ${section.speechBubble ? 'align-items-center' : 'align-items-end'} mt-1 position-relative`}>
                
                {/* Balão Animado */}
                {section.speechBubble && (
                  <>
                    {/* Mobile View: mt-2 e mb-5 para dar respiro acima e afastar dos copos abaixo */}
                    <div className="col-12 d-block d-md-none mt-2 mb-5 d-flex justify-content-center animate-fade-up">
                      <div style={{ backgroundColor: "#fff", color: "#fe5702", padding: "20px 25px", borderRadius: "40px", fontWeight: "bold", fontSize: "15px", lineHeight: "1.4", maxWidth: "200px", textAlign: "center", boxShadow: "0 5px 15px rgba(0,0,0,0.15)" }}>
                        <span dangerouslySetInnerHTML={{ __html: section.speechBubble }} />
                      </div>
                    </div>
                    {/* Desktop View: top: '70px' para descer o balão, mantendo-o flutuante */}
                    <div className="d-none d-md-flex position-absolute" style={{ left: '5%', top: '70px', height: '320px', alignItems: 'center', width: 'auto', zIndex: 10 }}>
                      <div className="animate-fade-up" style={{ backgroundColor: "#fff", color: "#fe5702", padding: "20px 25px", borderRadius: "40px", fontWeight: "bold", fontSize: "15px", lineHeight: "1.4", maxWidth: "200px", textAlign: "center", boxShadow: "0 5px 15px rgba(0,0,0,0.15)" }}>
                        <span dangerouslySetInnerHTML={{ __html: section.speechBubble }} />
                      </div>
                    </div>
                  </>
                )}

                {/* LÓGICA DE RENDERIZAÇÃO */}
                {section.brandGroups ? (
                  
                  // --- LAYOUT COLLABS ---
                  <div className="col-12 w-100">
                    
                    {/* DESKTOP */}
                    <div className="d-none d-lg-flex flex-column w-100">
                      <div className="d-flex w-100 justify-content-between align-items-center" style={{ marginBottom: "-70px" }}>
                        {section.brandGroups.map((group, gIndex) => {
                          const isPacoquita = group.brandLogo.includes("pacoquita");
                          const isMem = group.brandLogo.includes("mem");
                          const isFini = group.brandLogo.includes("fini");
                          
                          let logoTransform = "none";
                          if (isPacoquita) {
                            logoTransform = "rotate(12deg) scale(1.1) translateY(15px)"; 
                          } else if (isMem) {
                            logoTransform = "rotate(8deg) translateY(5px)"; 
                          } else if (isFini) {
                            logoTransform = "translateX(-60px) translateY(5px)";
                          }

                          return (
                            <div key={`desk-logo-${gIndex}`} className="animate-fade-up d-flex justify-content-center" style={{ flex: group.products.length, transitionDelay: `${gIndex * 0.1}s` }}>
                              <Image 
                                 src={group.brandLogo} 
                                 alt="Logo parceiro" 
                                 width={group.logoWidth} 
                                 height={group.logoHeight} 
                                 style={{ objectFit: "contain", transform: logoTransform, transformOrigin: "center center" }} 
                              />
                            </div>
                          );
                        })}
                      </div>

                      <div className="d-flex w-100 justify-content-between align-items-end">
                        {section.brandGroups.flatMap(bg => bg.products).map((product, pIndex) => (
                          <div key={`desk-prod-${product.id}`} className="animate-fade-up d-flex flex-column align-items-center" style={{ flex: "1 1 0", padding: "0 10px", transitionDelay: `${pIndex * 0.1}s` }}>
                            <div style={{ width: "100%", height: "360px", display: "flex", alignItems: "flex-end", justifyContent: "center", marginBottom: "8px" }}>
                              <div style={{ width: "100%", height: `${getProductHeight(product, true)}px`, position: "relative", maxWidth: "240px" }}>
                                <Image src={product.image} alt={product.name} fill style={{ objectFit: "contain", objectPosition: "bottom" }} />
                              </div>
                            </div>
                            <h4 style={{ fontSize: "18px", fontWeight: "bold", margin: "0 0 2px 0", lineHeight: "1.2", textAlign: "center" }}>{product.name}</h4>
                            <p style={{ fontSize: "16px", fontWeight: "normal", margin: "0", lineHeight: "1.2", textAlign: "center" }}>{product.weight}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* MOBILE */}
                    <div className="d-flex d-lg-none flex-column w-100">
                      {section.brandGroups.map((group, gIndex) => {
                         const isPacoquita = group.brandLogo.includes("pacoquita");
                         const isMem = group.brandLogo.includes("mem");
                         
                         let logoTransform = "none";
                         if (isPacoquita) {
                           logoTransform = "rotate(12deg) scale(1.1)"; 
                         } else if (isMem) {
                           logoTransform = "rotate(8deg)"; 
                         }

                         return (
                           <div key={`mob-group-${gIndex}`} className="d-flex flex-column align-items-center w-100 mb-5">
                             <div className="animate-fade-up mb-4" style={{ display: 'flex', justifyContent: 'center' }}>
                               <Image 
                                  src={group.brandLogo} 
                                  alt="Logo parceiro" 
                                  width={group.logoWidth * 0.8} 
                                  height={group.logoHeight * 0.8} 
                                  style={{ objectFit: "contain", transform: logoTransform }} 
                               />
                             </div>
                             <div className="d-flex flex-wrap justify-content-center w-100" style={{ gap: "1.5rem" }}>
                               {group.products.map((product, pIndex) => (
                                 <div key={`mob-prod-${product.id}`} className="d-flex flex-column align-items-center" style={{ width: "220px", transitionDelay: `${pIndex * 0.1}s` }}>
                                   <div style={{ width: "100%", height: "320px", display: "flex", alignItems: "flex-end", justifyContent: "center", marginBottom: "8px" }}>
                                     <div style={{ width: "100%", height: `${getProductHeight(product, true) * 0.85}px`, position: "relative" }}>
                                       <Image src={product.image} alt={product.name} fill style={{ objectFit: "contain", objectPosition: "bottom" }} />
                                     </div>
                                   </div>
                                   <h4 style={{ fontSize: "18px", fontWeight: "bold", margin: "0 0 2px 0", textAlign: "center" }}>{product.name}</h4>
                                   <p style={{ fontSize: "16px", fontWeight: "normal", margin: "0", textAlign: "center" }}>{product.weight}</p>
                                 </div>
                               ))}
                             </div>
                           </div>
                         );
                      })}
                    </div>
                  </div>
                ) : (
                  // --- LAYOUT PADRÃO DE GRADE ---
                  section.products?.map((product, pIndex) => (
                    <div key={product.id} className="col-6 col-md-3 product-card animate-fade-up" style={{ transitionDelay: `${pIndex * 0.15}s` }}>
                      
                      <div style={{ 
                        width: "100%", 
                        height: "320px", 
                        display: "flex", 
                        alignItems: "flex-end", 
                        justifyContent: "center",
                        marginBottom: "8px" 
                      }}>
                        <div style={{ 
                          width: "100%", 
                          maxWidth: "240px", 
                          height: `${getProductHeight(product, false)}px`, 
                          position: "relative" 
                        }}>
                          <Image src={product.image} alt={product.name} fill style={{ objectFit: "contain", objectPosition: "bottom" }} />
                        </div>
                      </div>
                      
                      <h4 style={{ fontSize: "18px", fontWeight: "bold", margin: "0 0 2px 0", lineHeight: "1.2" }}>{product.name}</h4>
                      <p style={{ fontSize: "16px", fontWeight: "normal", margin: "0", lineHeight: "1.2" }}>{product.weight}</p>
                      
                      {product.button && (
                        <button onClick={() => setActiveVideo(product.videoSrc!)} style={{ backgroundColor: "#fff", color: "#fe5702", padding: "10px 20px", borderRadius: "30px", fontSize: "13px", fontWeight: "bold", textDecoration: "underline", marginTop: "15px", border: "none", cursor: "pointer" }}>{product.button}</button>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}

          {/* RODAPÉ EM 2 COLUNAS */}
          <div className="row mt-5 pt-5 justify-content-center animate-fade-up" style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}>
            <div className="col-12 text-center mb-5">
              <h3 style={{ fontWeight: "900", fontSize: "2rem" }}>{t.footerWhere}</h3>
            </div>
            
            {/* Coluna 1: Top Cau */}
            <div className="col-12 col-md-6 mb-5 d-flex flex-column align-items-center text-center">
              <h4 style={{ fontSize: "18px", marginBottom: "20px", fontWeight: "bold" }}>{t.footerStore}</h4>
              <a href="https://maps.app.goo.gl/LG5pYy5KDWr2SJcH6" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#fff", color: "#fe5702", borderRadius: "30px", padding: "12px 30px", display: "inline-block", fontSize: "16px", fontWeight: "bold", textDecoration: "underline", marginBottom: "35px", whiteSpace: "nowrap" }}>R. Cel. Emídio Piedade, 378 - Brás - São Paulo - SP</a>
              <div style={{ height: "150px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px" }}>
                <Image src="/assets/images/logo_topcau_v2.png" alt="Top Cau" width={300} height={150} style={{ objectFit: "contain" }} />
              </div>
              <a href="https://www.instagram.com/topcauchocolates/" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "underline", fontSize: "16px", display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: "normal" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><linearGradient id="ig-grad1" x1="20%" y1="100%" x2="80%" y2="0%"><stop offset="0%" stopColor="#fdf497" /><stop offset="5%" stopColor="#fdf497" /><stop offset="45%" stopColor="#fd5949" /><stop offset="60%" stopColor="#d6249f" /><stop offset="90%" stopColor="#285AEB" /></linearGradient></defs><rect width="24" height="24" rx="6" fill="url(#ig-grad1)" /><path fill="#fff" d="M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 7.4a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm3.8-8.2a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/><path fill="#fff" d="M12 5.3c2.2 0 2.4 0 3.3.05a4.5 4.5 0 0 1 1.5.28 2.5 2.5 0 0 1 1.4 1.4 4.5 4.5 0 0 1 .28 1.5c.04.9.04 1.1.04 3.3s0 2.4-.05 3.3a4.5 4.5 0 0 1-.28 1.5 2.5 2.5 0 0 1-1.4 1.4 4.5 4.5 0 0 1-1.5.28c-.9.04-1.1.04-3.3.04s-2.4 0-3.3-.05a4.5 4.5 0 0 1-1.5-.28 2.5 2.5 0 0 1-1.4-1.4 4.5 4.5 0 0 1-.28-1.5C5.3 14.4 5.3 14.2 5.3 12s0-2.4.05-3.3a4.5 4.5 0 0 1 .28-1.5 2.5 2.5 0 0 1 1.4-1.4 4.5 4.5 0 0 1 1.5-.28C9.6 5.3 9.8 5.3 12 5.3m0-1.8c-2.2 0-2.5.01-3.4.05a6.3 6.3 0 0 0-2 .38 4.3 4.3 0 0 0-2.4 2.4 6.3 6.3 0 0 0-.38 2C3.81 9.3 3.8 9.6 3.8 11.8s.01 2.5.05 3.4a6.3 6.3 0 0 0 .38 2 4.3 4.3 0 0 0 2.4 2.4 6.3 6.3 0 0 0 2 .38c.9.04 1.2.05 3.4.05s2.5-.01 3.4-.05a6.3 6.3 0 0 0 2-.38 4.3 4.3 0 0 0 2.4-2.4 6.3 6.3 0 0 0 .38-2c.04-.9.05-1.2.05-3.4s-.01-2.5-.05-3.4a6.3 6.3 0 0 0-.38-2 4.3 4.3 0 0 0-2.4-2.4 6.3 6.3 0 0 0-2-.38C14.5 3.51 14.2 3.5 12 3.5z"/></svg> topcauchocolates
              </a>
            </div>

            {/* Coluna 2: Grupo Marilan */}
            <div className="col-12 col-md-6 mb-5 d-flex flex-column align-items-center text-center">
              <h4 style={{ fontSize: "18px", marginBottom: "20px", fontWeight: "bold" }}>{t.footerGroup}</h4>
              <a href="https://www.grupomarilan.com.br/lojas" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#fff", color: "#fe5702", borderRadius: "30px", padding: "12px 30px", display: "inline-block", fontSize: "16px", fontWeight: "bold", textDecoration: "underline", marginBottom: "35px", whiteSpace: "nowrap" }}>{t.footerButton}</a>
              <div style={{ height: "150px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px" }}>
                <Image src="/assets/images/pascoa2026/logo.webp" alt="Grupo Marilan" width={160} height={80} style={{ objectFit: "contain", mixBlendMode: "screen" }} />
              </div>
              <a href="https://www.instagram.com/marilanalimentos/" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "underline", fontSize: "16px", display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: "normal" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><linearGradient id="ig-grad2" x1="20%" y1="100%" x2="80%" y2="0%"><stop offset="0%" stopColor="#fdf497" /><stop offset="5%" stopColor="#fdf497" /><stop offset="45%" stopColor="#fd5949" /><stop offset="60%" stopColor="#d6249f" /><stop offset="90%" stopColor="#285AEB" /></linearGradient></defs><rect width="24" height="24" rx="6" fill="url(#ig-grad2)" /><path fill="#fff" d="M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 7.4a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm3.8-8.2a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/><path fill="#fff" d="M12 5.3c2.2 0 2.4 0 3.3.05a4.5 4.5 0 0 1 1.5.28 2.5 2.5 0 0 1 1.4 1.4 4.5 4.5 0 0 1 .28 1.5c.04.9.04 1.1.04 3.3s0 2.4-.05 3.3a4.5 4.5 0 0 1-.28 1.5 2.5 2.5 0 0 1-1.4 1.4 4.5 4.5 0 0 1-1.5.28c-.9.04-1.1.04-3.3.04s-2.4 0-3.3-.05a4.5 4.5 0 0 1-1.5-.28 2.5 2.5 0 0 1-1.4-1.4 4.5 4.5 0 0 1-.28-1.5C5.3 14.4 5.3 14.2 5.3 12s0-2.4.05-3.3a4.5 4.5 0 0 1 .28-1.5 2.5 2.5 0 0 1 1.4-1.4 4.5 4.5 0 0 1 1.5-.28C9.6 5.3 9.8 5.3 12 5.3m0-1.8c-2.2 0-2.5.01-3.4.05a6.3 6.3 0 0 0-2 .38 4.3 4.3 0 0 0-2.4 2.4 6.3 6.3 0 0 0-.38 2C3.81 9.3 3.8 9.6 3.8 11.8s.01 2.5.05 3.4a6.3 6.3 0 0 0 .38 2 4.3 4.3 0 0 0 2.4 2.4 6.3 6.3 0 0 0 2 .38c.9.04 1.2.05 3.4.05s2.5-.01 3.4-.05a6.3 6.3 0 0 0 2-.38 4.3 4.3 0 0 0 2.4-2.4 6.3 6.3 0 0 0 .38-2c.04-.9.05-1.2.05-3.4s-.01-2.5-.05-3.4a6.3 6.3 0 0 0-.38-2 4.3 4.3 0 0 0-2.4-2.4 6.3 6.3 0 0 0-2-.38C14.5 3.51 14.2 3.5 12 3.5z"/></svg> marilanalimentos
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* MODAL DE VÍDEO */}
      {activeVideo && (
        <div onClick={() => setActiveVideo(null)} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.85)", zIndex: 9999, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ position: "relative", width: "90%", maxWidth: "400px" }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveVideo(null)} style={{ position: "absolute", top: "-45px", right: "0px", background: "none", border: "none", color: "#fff", fontSize: "40px", cursor: "pointer", fontWeight: "bold", lineHeight: "1" }}>×</button>
            <video src={activeVideo} controls autoPlay playsInline style={{ width: "100%", borderRadius: "15px", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }} />
          </div>
        </div>
      )}
      
    </BaseLayout>
  );
}