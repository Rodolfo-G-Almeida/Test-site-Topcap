"use client";

import Image from "next/image";
import MenuBox from "./_components/MenuBox";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

interface HeaderProps {
  headerFixed: boolean;
}

function Header({ headerFixed }: HeaderProps) {
  const locale = useLocale();
  const t = useTranslations("Menu");
  
  return (
    <header>
      <div className="header">
        <div className={`container-header ${headerFixed && "over"}`}>
          <div className="container">
            <div className="box-header">
              <nav className="navbar navbar-expand-md navbar-light">
                <MenuBox translation={t} />
              </nav>
             <div className="logo" style={{ transform: 'translateY(-30px) scale(1.3)' }}>
                <Link href={`/${locale}`}>
                  <Image
                    src={"/assets/images/logo_topcau_v2.png"}
                    alt="Topcau"
                    width={222}
                    height={157}
                  />
                  <h1>Topcau</h1>
                </Link>
              </div>
              <Link href={`/${locale === "en" ? "pt" : "en"}`} className="box-change-language">
                {locale === "en" ? "PT" : "EN"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
