// app/produits/head.tsx

export default function Head() {
  const jsonLdProduits = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Happy Dog",
    "image": "https://www.happy-dog-belfort.fr/images/headers/header_produits.webp",
    "description": "Découvrez notre sélection de friandises, accessoires et soins pour chiens chez Happy Dog à Belfort.",
    "url": "https://www.happy-dog-belfort.fr/produits",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11 rue du Général Roussel",
      "addressLocality": "Belfort",
      "postalCode": "90000",
      "addressCountry": "FR"
    },
    "telephone": "06 46 46 76 17",
    "department": [
      {
        "@type": "DepartmentStore",
        "name": "Alimentation pour chiens",
        "description": "Croquettes, friandises et compléments alimentaires"
      },
      {
        "@type": "DepartmentStore",
        "name": "Accessoires pour chiens",
        "description": "Jouets, laisses, colliers et couchages"
      },
      {
        "@type": "DepartmentStore",
        "name": "Soins pour chiens",
        "description": "Shampoings, produits de soin, hygiène"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduits) }}
      />
    </>
  );
}
