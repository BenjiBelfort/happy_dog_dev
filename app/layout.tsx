import type { Metadata } from "next";
import type { Viewport } from 'next'

import { Zilla_Slab, Libre_Franklin } from "next/font/google";
import "./globals.css";

import BackgroundWrapper from "@/components/patterns/BackgroundWrapper";
import HeaderImage from "@/components/headers/HeaderImage";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  variable: "--font-zilla-slab",
  weight: ["400", "500", "700"],
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin",
  weight: ["400", "700"],
});

export const viewport: Viewport = {
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: 'La boutique des chiens heureux à Belfort | Happy Dog',
  description: 'Happy Dog, la boutique des chiens heureux à Belfort. Croquettes, friandises, accessoires, garderie de jour, bain, toilettage', // 📝 Description pour les moteurs de recherche
  authors: [{ name: 'Benji Belfort', url: 'https://benji-belfort-portfolio.netlify.app/' }],
  creator: 'Happy Dog', // ✏️ Nom de l’auteur du contenu
  publisher: 'Happy Dog', // 🏢 Nom de l’éditeur
  icons: {
    icon: "/favicon.ico", // format par défaut
    shortcut: "/favicon.ico", // version raccourcie
    apple: "/apple-touch-icon.png", // iOS
    other: [
      {
        rel: "icon",
        url: "/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      {
        rel: "icon",
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  appleWebApp: {
    title: "Happy Dog",
  },
  openGraph: {
    title: 'Happy Dog, la boutique des chiens heureux à Belfort',
    description: 'Happy Dog, la boutique des chiens heureux à Belfort. Croquettes, friandises, accessoires, garderie de jour, bain, toilettage',
    url: 'https://www.METTRE_LE_LIEN_DU_VRAISITE_AVANT_MISE_EN_PRODUCTION.fr', // ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
    siteName: 'La boutique des chiens heureux à Belfort | Happy Dog',
    images: [
      {
        url: '/images/og-image.jpg', // 🖼️ Image pour le partage (1200x630 conseillé)
        width: 1200,
        height: 630,
        alt: 'Photo de la boutique des chiens heureux Happy Dog', // 🖼️ Texte alternatif
      },
    ],
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image', // 🐦 Type de carte Twitter
    title: 'Happy Dog, la boutique des chiens heureux à Belfort',
    description: 'Happy Dog, la boutique des chiens heureux à Belfort. Croquettes, friandises, accessoires, garderie de jour, bain, toilettage',
    images: ['/images/og-image.jpg'], // 🐦 Image Twitter
  },
  metadataBase: new URL('https://www.METTRE_LE_LIEN_DU_VRAISITE_AVANT_MISE_EN_PRODUCTION.fr'), // ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr" className={`${zillaSlab.variable} ${libreFranklin.variable}`}>
      <body className="relative min-h-screen flex flex-col">
        <BackgroundWrapper />
        <HeaderImage />
        <Navbar />
        <main className="relative z-10 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
