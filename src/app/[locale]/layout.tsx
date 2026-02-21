import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/main.scss";
import { NextIntlClientProvider } from "next-intl";
import { Work_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import {unstable_setRequestLocale} from 'next-intl/server';
import { GoogleAnalytics } from '@next/third-parties/google'

const locales = ['pt', 'en'];

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

const workSans = Work_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

export const metadata = {
  title: "Topcau | A fábrica de Chocolates",
  description:
    "Desde 1994 a Top Cau trabalha com excelência em seus processos na fabricação de chocolates e terceirização para grandes marcas do mercado",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  let messages;
  try {
    messages = (await import(`~/../dictionaries/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang="en">
      <body className={`${workSans.className}`} suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-ZQXLWPYN51" />
    </html>
  );
}
