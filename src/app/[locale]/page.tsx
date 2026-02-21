import B2b from "~/components/b2b";
import Chocolateria from "~/components/chocolateria";
import Clients from "~/components/clients";
import Estrutura from "~/components/estrutura";
import GarantiaQualidade from "~/components/garantiaQualidade";
import ResponsiveCarousel from "~/components/hero";
import LinhaProdutos from "~/components/linhaProdutos";
import NossaHistoria from "~/components/nossaHistoria";
import NovosProjetos from "~/components/novosProjetos";
import PoliticaSeguranca from "~/components/politicaSeguranca";
import Terceirizacao from "~/components/terceirizacao";
import ValoresSeguranca from "~/components/valoresSeguranca";
import VerticalGallery from "~/components/verticalGallery";
import BaseLayout from "./base";


export default function Home() {
  return (
    <BaseLayout>
      <ResponsiveCarousel />
      <NossaHistoria />
      <Clients />
      <ValoresSeguranca />
      <VerticalGallery
        images={[
          { alt: "Fábrica 1", path: "/assets/images/topcau-26.jpg" },
          { alt: "Fábrica 2", path: "/assets/images/topcau-8.jpg" },
          { alt: "Fábrica 3", path: "/assets/images/topcau-10.jpg" },
          { alt: "Fábrica 4", path: "/assets/images/topcau-25.jpg" },
        ]}
      />
      <Estrutura />
      <VerticalGallery
        images={[
          { alt: "Estrutura 1", path: "/assets/images/topcau-22.jpg" },
          { alt: "Estrutura 2", path: "/assets/images/topcau-29.jpg" },
          { alt: "Estrutura 3", path: "/assets/images/topcau-28.jpg" },
          { alt: "Estrutura 4", path: "/assets/images/topcau-33.jpg" },
        ]}
      />

      <LinhaProdutos />
      <NovosProjetos />
      <GarantiaQualidade />
      <PoliticaSeguranca />
      <Terceirizacao />
      <B2b />
      <Chocolateria />
    </BaseLayout>
  );
}