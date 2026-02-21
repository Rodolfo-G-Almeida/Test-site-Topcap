import BaseLayout from "../base";
import Image from "next/image";

type Inputs = {
  nome: string;
  celular: string;
  email: string;
  mensagem: string;
};

function BirthdayTopCau() {
  return (
    <BaseLayout>
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+HR:wght@400&display=swap"
          rel="stylesheet"
        ></link>
      </header>
      <div className="box-landing-30-anos">
        <div className="header-landing">
          <div className="logo-landing">
            <Image
              src={"/assets/images/logo_topcau_cropped.svg"}
              alt="Topcau"
              width={200}
              height={177}
            />
          </div>
          <div className="info-header">
            <span>30 ANOS</span>
            Sempre
            <br />
            Presente
            <div className="vetor-landing">
              <Image
                src={"/assets/images/vetor_landing.png"}
                alt="30 anos"
                width={250}
                height={149}
              />
            </div>
          </div>
        </div>
        <div className="info-content">
          <p>
            Há 30 anos, em 1994, nascia a Top Cau, uma empresa familiar com um
            sonho doce e ambicioso: produzir chocolates de alta qualidade e
            conquistar o coração dos consumidores.
          </p>
          <p>
            Nossa história é escrita com chocolate e emoção. Nosso primeiro
            produto não podia ser outro: Ovo de Páscoa! E ele continua
            encantando até hoje.
          </p>
          <div className="image">
            <Image
              src={"/assets/images/hotsite_30_anos.jpg"}
              alt="30 anos de ovos de páscoa"
              width={1000}
              height={500}
            />
          </div>
          <p>
            No decorrer dos anos, nossa linha de produtos se ampliou para
            tabletes de chocolates e bombons de sabores variados, pirulitos de
            chocolate, rosa bombom, linha gourmet, cestas de presentes, bebidas
            quentes e frias (chocolate, café e capuccino), sorvetes e itens
            sazonais.
          </p>
          <div className="image">
            <Image
              src={"/assets/images/hotsite_30_anos_3.jpg"}
              alt="30 anos de ovos de páscoa"
              width={1000}
              height={492}
            />
          </div>
          <p>
            A tradição dos chocolates Top Cau está entre as famílias, passando
            de geração em geração celebrando momentos especiais que se tornam
            doces lembranças ao sabor do chocolate.
            <br />
            Top Cau é tradição e inovação. Nossa dedicação é para você, sua
            família e amigos sentirem o melhor sabor em cada pedaço.
          </p>
          <div className="image">
            <Image
              src={"/assets/images/hotsite_30_anos_4.jpg"}
              alt="30 anos de ovos de páscoa"
              width={1000}
              height={492}
            />
          </div>
          <h4>Obrigado por esses 30 anos juntos.</h4>
          <div className="image">
            <Image
              src={"/assets/images/hotsite_30_anos_5.jpg"}
              alt="30 anos de ovos de páscoa"
              width={1000}
              height={333}
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default BirthdayTopCau;
