import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import NavbarHead from "@/components/navbar";
import {Provider} from "react-redux";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Activnet Tech | Cheap websites",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <Head>
          <link rel="icon" href="./favicon.svg"/>
      </Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <body className={inter.className}>
      <NavbarHead/>
      {children}
      </body>
      </html>
  );
}
