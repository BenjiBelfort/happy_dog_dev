// app/produits/page.tsx
import { Metadata } from "next"; 
import PageTitle from '@/components/headers/PageTitle';
import ProductSommaire from '@/components/ui/buttons/ProductSommaire';
import TextBloc from '@/components/TextBloc';
import PointSeparator from "@/components/ui/PointSeparator";
import AlimentationSection from "@/components/AlimentationSection";
import AccessoiresSection from "@/components/AccessoiresSection";
import SoinsSection from "@/components/SoinsSection";


export const metadata: Metadata = {
  title: 'Produits pour chiens heureux à Belfort | Happy Dog',
  description: 'Découvrez notre sélection de friandises, accessoires et soins pour chiens chez Happy Dog à Belfort.',
  alternates: { canonical: '/produits' },
  openGraph: {
    title: 'Produits pour chiens heureux à Belfort | Happy Dog',
    description: 'Découvrez notre sélection de friandises, accessoires et soins pour chiens chez Happy Dog à Belfort.',
    url: 'https://www.happy-dog-belfort.fr/produits',
    images: [
      {
        url: '/images/produits/produits1.webp',
        width: 1200,
        height: 630,
        alt: 'Produits pour chiens heureux chez Happy Dog',
      },
    ],
  },
  twitter: {
    title: 'Produits pour chiens heureux à Belfort | Happy Dog',
    description: 'friandises, accessoires et soins pour chiens à Belfort.',
    images: ['https://www.happy-dog-belfort.fr/images/headers/header_produits.webp'],
  },
};


const ProduitsPage = () => {
  return (
    <main className="h-full">
      <PageTitle />
      <ProductSommaire />
      <TextBloc
        texts={[
          "Retrouvez ces produits dans notre boutique, et venez découvrir encore bien d’autres surprises sur place !"
        ]}
      />
      <PointSeparator />
      <AlimentationSection />
      <PointSeparator />
      <AccessoiresSection />
      <PointSeparator />
      <SoinsSection />
      <PointSeparator />
    </main>
  )
}

export default ProduitsPage;
