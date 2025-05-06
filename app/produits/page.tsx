import { Metadata } from "next";

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
      <h1 className="text-3xl">Page des Produits</h1>
    </section>
  )
}

export default ProduitsPage;
