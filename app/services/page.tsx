// app/services/page.tsx
import type { Metadata } from "next";
import PageTitle from '@/components/headers/PageTitle';
import ServiceSommaire from '@/components/ui/buttons/ServiceSommaire';
import PointSeparator from "@/components/ui/PointSeparator";
import GarderieSection from "@/components/GarderieSection";
import ToilettageSection from "@/components/ToilettageSection";

export const metadata = {
  metadataBase: new URL('https://www.happy-dog-belfort.fr'),
  title: 'Services pour chiens heureux à Belfort | Happy Dog',
  description: "Offrez à votre chien un toilettage entre les mains expertes de Au P'tit Bonheur Canin, et garderie de jour chez Happy Dog à Belfort.",
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services pour chiens heureux à Belfort | Happy Dog',
    description: "Offrez à votre chien un toilettage entre les mains expertes de Au P'tit Bonheur Canin, et garderie de jour chez Happy Dog à Belfort.",
    url: 'https://www.happy-dog-belfort.fr/services',
    images: [
      {
        url: '/images/produits/toilettage.webp', // relatif OK grâce à metadataBase
        width: 1200,
        height: 630,
        alt: 'Services pour chiens heureux chez Happy Dog',
      },
    ],
    siteName: 'Happy Dog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services pour chiens heureux à Belfort | Happy Dog',
    description: "Offrez à votre chien un toilettage entre les mains expertes de Au P'tit Bonheur Canin, et garderie de jour chez Happy Dog à Belfort.",
    images: ['https://www.happy-dog-belfort.fr/images/headers/header_services.webp'],
  },
} satisfies Metadata;

export default function ServicesPage() {
  return (
    <main className="h-full">
      <PageTitle />
      <ServiceSommaire />
      <PointSeparator />
      <GarderieSection />
      <PointSeparator />
      <ToilettageSection />
      <PointSeparator />
    </main>
  );
}
