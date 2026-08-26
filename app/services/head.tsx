// app/services/head.tsx
export default function Head() {
  const jsonLdServices = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Toilettage et garderie pour chiens",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Happy Dog",
      "image": "https://www.happy-dog-belfort.fr/images/headers/header_services.webp",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "11 rue du Général Roussel",
        "addressLocality": "Belfort",
        "addressRegion": "FR",
        "postalCode": "90000",
        "addressCountry": "France"
      },
      "telephone": "+33 3 61 88 78 71",
      "url": "https://www.happy-dog-belfort.fr/services"
    },
    "description": "Offrez à votre chien un toilettage entre les mains expertes de Au P'tit Bonheur Canin, et garderie de jour chez Happy Dog à Belfort."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdServices) }}
      />
    </>
  );
}
