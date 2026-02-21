"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface MenuBoxProps {
  translation: any;
}

function MenuBox({ translation }: MenuBoxProps) {
  const [showMenu, setShowMenu] = useState(false);
  const locale = useLocale();
  return (
    <>
      <div
        className="box-icon-menu"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <Image
          src={"/assets/images/icon_menu.svg"}
          alt="Menu"
          width={25}
          height={16}
        />
        <span>MENU</span>
      </div>
      <div
        className={`box-content-menu ${showMenu && "open"}`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto">
          <li>
            <Link
              className="nav-link"
              legacyBehavior={true}
              href={`/${locale}/#fabrica-de-chocolates`}
            >
              {translation("menu1")}
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              href={`/${locale}/#nossos-clientes`}
            >
              {translation("menu2")}
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              href={`/${locale}/#dna`}
            >
              {translation("menu3")}
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              href={`${locale}/#estrutura`}
            >
              {translation("menu4")}
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              href={`/${locale}/#produtos`}
            >
              {translation("menu5")}
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              href={`/${locale}/#novos-projetos`}
            >
              {translation("menu6")}
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              href={`${locale}/#garantia-de-qualidade`}
            >
              {translation("menu7")}
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              href={`/${locale}/#terceirizacao`}
            >
              {translation("menu8")}
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              href={`/${locale}/#b2b`}
            >
              {translation("menu9")}
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              legacyBehavior={true}
              href={`/${locale}/#chocolateria`}
            >
              {translation("menu10")}
            </Link>
          </li>
          <li>
            <div className="nav-link">
            {translation("menu11")}
            </div>
            <ul className="sub-menu">
              <li>
                <Link
                  className="nav-link"
                  href={`/${locale}/b2b-terceirizacao-de-producao`}
                >
                  {translation("menu12")}
                </Link>
              </li>
              <li>
                <Link className="nav-link" href={`/${locale}/comercial`}>
                {translation("menu13")}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link target="_blank" className="nav-link" href={`https://atracaodetalentos.totvs.app/topcau`}>
            {translation("menu14")}
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              href={`/${locale}/politica-de-privacidade`}
            >
              {translation("menu15")}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MenuBox;
