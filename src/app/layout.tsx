import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

import Header from "@/components/header";
import MenuMobile from "@/components/menuMobile";

import "./globals.css";
import BASE_URL from "@/hooks/axios";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ["latin"], variable: '--font-montserrat', display: 'swap', });

export const metadata: Metadata = {
  title: "MedicAll Farma",
  description: "Generated by create next app",
};

interface IContact {
  link: string
}

async function getData() {
  return (await BASE_URL.get<IContact>('/contact-link')).data
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contact_link = await getData()

  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.variable}`}>
        <Header contact={contact_link.link}/>
        <div className="children">
          {children}
        </div>
        <MenuMobile />
      </body>
    </html>
  );
}
