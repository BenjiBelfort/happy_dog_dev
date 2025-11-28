// app/layout.tsx
import type { Metadata } from "next";
import type { Viewport } from 'next'

import { Zilla_Slab, Libre_Franklin } from "next/font/google";
import "./globals.css";

import BackgroundWrapper from "@/components/patterns/BackgroundWrapper";
import HeaderImage from "@/components/headers/HeaderImage";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// import ScrollHandler from "@/components/ScrollHandler";


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
}

export const metadata: Metadata = {
  title: 'La boutique des chiens heureux à Belfort | Happy Dog',
  description: 'Happy Dog, la boutique des chiens heureux à Belfort. Friandises, accessoires, soins, garderie de jour, bain, toilettage pour le plaisir de votre chien',
  authors: [{ name: 'Benji Belfort', url: 'https://benji-belfort-portfolio.netlify.app/' }],
  creator: 'Happy Dog',
  publisher: 'Happy Dog',
  verification: {
    google: 'tXqFQhT3Bz_1ax1VAMr58uxHRIGdO44nAAiDwVhDN4k',
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
    url: 'https://www.happy-dog-belfort.fr',
    siteName: 'La boutique des chiens heureux à Belfort | Happy Dog',
    images: [
      {
        url: 'https://www.happy-dog-belfort.fr/images/headers/header_home.webp', // 🖼️ Image pour le partage (1200x630 conseillé)
        width: 1200,
        height: 630,
        alt: 'Photo de la boutique des chiens heureux Happy Dog',
      },
    ],
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image', // 🐦 Type de carte Twitter
    title: 'Happy Dog, la boutique des chiens heureux à Belfort',
    description: 'Happy Dog, la boutique des chiens heureux à Belfort. Croquettes, friandises, accessoires, garderie de jour, bain, toilettage',
    images: ['https://www.happy-dog-belfort.fr/images/headers/header_home.webp'], // 🐦 Image Twitter
  },
  metadataBase: new URL('https://www.happy-dog-belfort.fr'),
  alternates: {
    canonical: '/',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Happy Dog",
    "image": "https://www.happy-dog-belfort.fr/images/headers/header_home.webp",
    "description": "La boutique des chiens heureux à Belfort. Friandises, accessoires, soins, garderie de jour, bain, toilettage.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11 rue du Général Roussel",
      "addressLocality": "Belfort",
      "addressRegion": "FR",
      "postalCode": "90000",
      "addressCountry": "France"
    },
    "telephone": "06 46 46 76 17",
    "url": "https://www.happy-dog-belfort.fr",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Tuesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:15",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "09:15",
        "closes": "12:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "17:30"
      }
    ]
  };

  return (
    <html lang="fr" className={`${zillaSlab.variable} ${libreFranklin.variable}`}>
      
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative min-h-screen flex flex-col">
        <BackgroundWrapper />
        <HeaderImage />
        <Navbar />
        {/* <ScrollHandler /> */}
        <main className="relative z-10 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
