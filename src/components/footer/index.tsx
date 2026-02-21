"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  return (
    <footer>
      <div id="footer">
        <div className="container">
          <div className="itens-footer">
            <div className="item-footer">
              <Link href={`/${locale}/b2b-terceirizacao-de-producao`}>
                <Image
                  src={"/assets/images/icon_footer2.svg"}
                  alt="B2B Terceirização de produção"
                  width={36}
                  height={36}
                />
                <h3>
                  {locale === "en" && (
                    <>
                      B2B
                      <br />
                      Production
                      <br />
                      Outsourcing
                    </>
                  )}
                  {locale === "pt" && (
                    <>
                      B2B
                      <br />
                      Terceirização
                      <br />
                      de produção
                    </>
                  )}
                </h3>
              </Link>
            </div>
            <div className="item-footer">
              <Link href={`/${locale}/comercial`}>
                <Image
                  src={"/assets/images/icon_footer3.svg"}
                  alt="Contato comercial"
                  width={36}
                  height={36}
                />
                <h3>
                  {locale === "en" && (
                    <>
                      Comercial
                      <br />
                      Contact
                    </>
                  )}
                  {locale === "pt" && (
                    <>
                      Contato
                      <br />
                      comercial
                    </>
                  )}
                </h3>
              </Link>
            </div>
            <div className="item-footer">
              <Link target="_blank" href={`https://atracaodetalentos.totvs.app/topcau`}>
                <Image
                  src={"/assets/images/icon_cv.png"}
                  alt="Trabalhe conosco"
                  width={38}
                  height={36}
                />
                <h3>
                  {locale === "en" && (
                    <>
                      Work
                      <br />
                      with us
                    </>
                  )}
                  {locale === "pt" && (
                    <>
                      Trabalhe
                      <br />
                      conosco
                    </>
                  )}
                </h3>
              </Link>
            </div>
            <div className="item-footer">
              <Link href={`/${locale}/#chocolateria`}>
                <Image
                  src={"/assets/images/icon_footer4.svg"}
                  alt="Loja"
                  width={36}
                  height={36}
                />
                <h3>{t("Store")}</h3>
              </Link>
            </div>
            <div className="item-footer" style={{ marginTop: '-15px' }}>
              <Link href={`/${locale}`}>
                <Image
                  src={"/assets/images/logo_footer.png"}
                  alt="Logo Top Cau Footer"
                  width={120}
                  height={110}
              
                />
              </Link>
              <div className="box-redes-footer" style={{ marginTop: '-20px' }}>
                <ul>
                  <Link
                    href={`/${locale === "en" ? "pt" : "en"}`}
                    className="box-change-language-footer"
                  >
                    {locale === "en" ? "PT" : "EN"}
                  </Link>
                  <li>
                    <a
                      href="https://www.instagram.com/topcauchocolates/?hl=pt-br"
                      target="_blank"
                    >
                      <Image
                        src={"/assets/images/icon_footer_instagram.svg"}
                        alt="Instagram"
                        width={22}
                        height={21}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pt-br.facebook.com/topcauchocolates/"
                      target="_blank"
                    >
                      <Image
                        src={"/assets/images/icon_footer_facebook.svg"}
                        alt="Facebook"
                        width={12}
                        height={21}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UC3fwgplNc67oFGEBB-SA5AQ"
                      target="_blank"
                    >
                      <Image
                        src={"/assets/images/icon_footer_youtube.svg"}
                        alt="Youtube"
                        width={27}
                        height={21}
                      />
                    </a>
                  </li>
                </ul>
                <a
                  className="block"
                  href="https://www.contatoseguro.com.br/topcauchocolates"
                  target="_blank"
                >
                  {t("EthicsChannel")}
                </a>
                <Link className="block" href={`/${locale}/politica-de-privacidade`}>
                  {t("PrivacyPolicy")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
