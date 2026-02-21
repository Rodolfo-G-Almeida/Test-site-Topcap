"use client";
import React, { useEffect, useState } from "react";
import Footer from "~/components/footer";
import Header from "~/components/header";
import { usePathname } from "next/navigation";

interface BaseLayoutProps {
  children: React.ReactNode;
}

function BaseLayout({ children }: BaseLayoutProps) {
  const router = usePathname();
  const [fixedHeder, setFixedHeder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if(scrollY > 200) {
        setFixedHeder(true);
      } else {
        setFixedHeder(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header headerFixed={fixedHeder} />
      <main className={router === "/" ? "body-home" : "body-page"}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default BaseLayout;
