import { Metadata } from "next"; 
import PageTitle from '@/components/headers/PageTitle';
import ProductSommaire from '@/components/ui/buttons/ProductSommaire'
import CroquettesSection from "@/components/CroquettesSection";
import AccessoiresSection from "@/components/AccessoiresSection";


export const metadata: Metadata = {
  title: 'Produits pour chiens heureux à Belfort | Happy Dog',
  description: 'Découvrez notre sélection de croquettes, friandises et accessoires pour chiens chez Happy Dog à Belfort.',
  openGraph: {
    title: 'Produits pour chiens heureux à Belfort | Happy Dog',
    description: 'Découvrez notre sélection de croquettes, friandises et accessoires pour chiens chez Happy Dog à Belfort.',
    url: 'https://www.METTRE_LE_LIEN_DU_VRAISITE_AVANT_MISE_EN_PRODUCTION.fr', // ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
    images: [
      {
        url: '/images/og-produits.jpg',
        width: 1200,
        height: 630,
        alt: 'Produits pour chiens heureux chez Happy Dog',
      },
    ],
  },
  twitter: {
    title: 'Produits pour chiens heureux à Belfort | Happy Dog',
    description: 'Croquettes, friandises et accessoires pour chiens à Belfort.',
    images: ['/images/og-produits.jpg'],
  },
};


const ProduitsPage = () => {
  return (
    <section className="h-full">
      <PageTitle />
      <ProductSommaire />
      <CroquettesSection />
      <AccessoiresSection />
    </section>
  )
}

export default ProduitsPage;
