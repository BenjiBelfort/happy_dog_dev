import { Metadata } from "next";
import PageTitle from '@/components/headers/PageTitle';
import ServiceSommaire from '@/components/ui/buttons/ServiceSommaire'
import PointSeparator from "@/components/ui/PointSeparator";
import GarderieSection from "@/components/GarderieSection";
import ToilettageSection from "@/components/ToilettageSection";

export const metadata: Metadata = {
  title: 'Services pour chiens heureux à Belfort | Happy Dog',
  description: "Offrez à votre chien un toilettage entre les mains expertes de Au P'tit Bonheur Canin, et garderie de jour chez Happy Dog à Belfort.",
  openGraph: {
    title: 'Produits pour chiens heureux à Belfort | Happy Dog',
    description: "Offrez à votre chien un toilettage entre les mains expertes de Au P'tit Bonheur Canin, et garderie de jour chez Happy Dog à Belfort.",
    url: 'https://www.METTRE_LE_LIEN_DU_VRAISITE_AVANT_MISE_EN_PRODUCTION.fr', // ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
    images: [
      {
        url: '/images/produits/toilettage.webp',
        width: 1200,
        height: 630,
        alt: 'Services pour chiens heureux chez Happy Dog',
      },
    ],
  },
  twitter: {
    title: 'Services pour chiens heureux à Belfort | Happy Dog',
    description: "Offrez à votre chien un toilettage entre les mains expertes de Au P'tit Bonheur Canin, et garderie de jour chez Happy Dog à Belfort.",
    images: ['/images/og-produits.jpg'],
  },
};


const ServicesPage = () => {
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
    )
  }
  
  export default ServicesPage;