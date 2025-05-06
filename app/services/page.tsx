import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Services pour chiens heureux à Belfort | Happy Dog',
  description: "Offrez à votre chien un toilettage entre les mains expertes de Au P'tit Bonheur Canin, et garderie de jour chez Happy Dog à Belfort.",
  openGraph: {
    title: 'Produits pour chiens heureux à Belfort | Happy Dog',
    description: "Offrez à votre chien un toilettage entre les mains expertes de Au P'tit Bonheur Canin, et garderie de jour chez Happy Dog à Belfort.",
    url: 'https://www.METTRE_LE_LIEN_DU_VRAISITE_AVANT_MISE_EN_PRODUCTION.fr', // ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
    images: [
      {
        url: '/images/og-produits.jpg',
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
      <section className="h-full">
        <h1 className="text-3xl">Page des Services</h1>;
      </section>
    )
  }
  
  export default ServicesPage;