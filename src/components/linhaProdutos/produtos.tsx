export interface Product {
  id: number;
  color: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  path: string;
  flavors?: Flavor[];
}

export type Flavor = {
  name: string;
  image: string;
};

export const products: Record<string, Product> = {
  "ovos-de-chocolate": {
    id: 1,
    color: "#f5841f",
    title: "Ovos de Chocolate",
    titleEn: "Chocolate eggs",
    description:
      "Linha automatizada com produção personalizada conforme a fórmula de cada cliente. Possibilidade de produção com dupla e tripla camada.",
    descriptionEn:
      "Automated line with customized production according to each client’s formula. Options for double and triple-layer eggs.",
    image: "/assets/images/produtos/ovos.jpg",
    path: "/produtos/ovos-de-chocolate",
  },
  "bombons-recheados": {
    id: 2,
    color: "#c42a7b",
    title: "Bombons Recheados",
    titleEn: "Filled Bonbons",
    description:
      "Linha automatizada que permite a fabricação de diferentes formatos e recheios variados.",
    descriptionEn:
      "Automated line capable of producing various shapes and a wide range of fillings.",
    image: "/assets/images/produtos/bombons_recheados_thumb.jpg",
    path: "/produtos/bombons-recheados",
    flavors: [
      {
        name: "Brigadeiro",
        image: "/assets/images/produtos/flavors/BRIGADEIRO.svg",
      },
      {
        name: "Cereja",
        image: "/assets/images/produtos/flavors/CEREJA.svg",
      },
      {
        name: "Chocolate ao Leite",
        image: "/assets/images/produtos/flavors/CHOCOLATE_AO_LEITE.svg",
      },
      {
        name: "Paçoca",
        image: "/assets/images/produtos/flavors/PACOCA.svg",
      },
      {
        name: "Trufa",
        image: "/assets/images/produtos/flavors/TRUFA.svg",
      },
    ],
  },
  "mini-ovos-surpresa": {
    id: 3,
    color: "#801f63",
    title: "Ovos com surpresa",
    titleEn: "Mini Surprise Eggs",
    description: "Combinação do sabor com o aspecto lúdico, agregando valor à experiência do consumidor.",
    descriptionEn:
      "Combines flavor with a playful experience, adding value to the consumer journey.",
    image: "/assets/images/produtos/mini-ovos-surpresa.jpg",
    path: "/produtos/mini-ovos-surpresa",
  },
  "linha-gourmet": {
    id: 4,
    color: "#adb523",
    title: "Linha Gourmet",
    titleEn: "Gourmet Line ",
    description:
      "Produção semi artesanal com inúmeras possibilidades de receitas, formatos, sabores e adições diferenciadas.",
    descriptionEn:
      "Semi-artisanal production with countless possibilities for recipes, shapes, flavors, and unique additions.",
    image: "/assets/images/produtos/linha_gourmet_v2.jpg",
    path: "/produtos/linha-gourmet",
  },
  tabletes: {
    id: 5,
    color: "#f26122",
    title: "Tabletes",
    titleEn: "Tablets",
    description:
      "Linha automatizada com flexibilidade para diferentes formatos e fórmulas de chocolate.",
    descriptionEn:
      "Automated line with flexibility for different shapes and chocolate formulas.",
    image: "/assets/images/produtos/tablets_thumb.jpg",
    path: "/produtos/tabletes",
  },
  "zero-acucar": {
    id: 6,
    color: "#57add0",
    title: "Zero Açúcar",
    titleEn: "Zero Sugar",
    description:
      "Linha dedicada à produção de chocolates com diferentes formulações e formatos, sem adição de açúcar.",
    descriptionEn:
      "Dedicated line for producing chocolates in various formats and formulations without added sugar.",
    image: "/assets/images/produtos/zero_acucar_thumb.jpg",
    path: "/produtos/zero-acucar",
  },
};
