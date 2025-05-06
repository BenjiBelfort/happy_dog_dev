

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Accueil – HD Créations', // 📝 Titre par défaut de ton site
    description: 'Boutique artisanale dédiée à l’art et à la création – HD vous propose des produits uniques et faits main.', // 📝 Description pour les moteurs de recherche
    keywords: ['artisanat', 'création', 'HD', 'boutique', 'fait main'], // 🔍 Mots-clés optionnels (pas indispensable pour Google)
    authors: [{ name: 'Benji Belfort', url: 'https://benji-belfort-portfolio.netlify.app/' }], // 👤 Auteur (toi ou ton dev)
    creator: 'HD Créations', // ✏️ Nom de l’auteur du contenu
    publisher: 'HD Créations', // 🏢 Nom de l’éditeur
    icons: {
      icon: '/favicon.ico', // 📌 Favicon
      shortcut: '/favicon.ico', // 📌 Version raccourcie (par sécurité)
      apple: '/apple-touch-icon.png', // 🍎 Icône iOS (si tu la crées)
    },
    openGraph: {
      title: 'HD Créations – Artisanat et Passion', // 📣 Titre pour le partage sur les réseaux sociaux
      description: 'Découvrez l’univers unique de HD : artisanat, passion et œuvres faites main.', // 📣 Description réseaux sociaux
      url: 'https://www.hd-creations.fr', // 🌐 Lien de ton site (à adapter)
      siteName: 'HD Créations', // 🌐 Nom du site
      images: [
        {
          url: '/images/og-image.jpg', // 🖼️ Image pour le partage (1200x630 conseillé)
          width: 1200,
          height: 630,
          alt: 'Photo de la boutique HD Créations', // 🖼️ Texte alternatif
        },
      ],
      type: 'website', // 🌐 Type (souvent "website" ou "article")
      locale: 'fr_FR', // 🇫🇷 Langue locale
    },
    twitter: {
      card: 'summary_large_image', // 🐦 Type de carte Twitter
      title: 'HD Créations – Artisanat et Passion', // 🐦 Titre Twitter
      description: 'Découvrez l’univers unique de HD : artisanat, passion et œuvres faites main.', // 🐦 Description Twitter
      images: ['/images/og-image.jpg'], // 🐦 Image Twitter
    },
    metadataBase: new URL('https://www.hd-creations.fr'), // 🌍 Base pour générer des URLs absolues
  };

const Product = () => {
  return (
    <div className="md:max-w-5xl h-28 bg-sky-300 md:rounded-xl shadow-lg/30">
      
    </div>
  )
}

export default Product
