// app/mentions-legales/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function MentionsLegales() {
  return (
    <motion.main
      className="
        max-w-3xl mx-auto p-8 sm:mt-12 md:mt-18
        bg-emerald-300 bg-[url('/pattern/pattern-dots.png')]
        rounded-3xl shadow-lg/30
      "
      initial={{ scale: 1.2, opacity: 0, filter: "blur(8px)" }}
      animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-2xl font-bold mb-6 text-center">
        Mentions légales
      </h1>

      <section className="mb-6">
        <h2 className="font-semibold text-lg">Éditeur du site</h2>
        <p>
          Happy Dog Belfort – SARL au capital de 1 000 €<br />
          Siège social : 11 rue du Général Roussel, 90000 Belfort<br />
          RCS Belfort : 931 826 622<br />
          SIREN : 931 826 622
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg">Directrice de la publication</h2>
        <p>
          Violette Lorcy<br />
          Email : happydogbelfort@gmail.com
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg">Hébergement</h2>
        <p>
          OVH SAS<br />
          2 rue Kellermann, 59100 Roubaix, France<br />
          RCS Lille Métropole : 424 761 419<br />
          TVA intracommunautaire : FR22 424 761 419
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg">Données personnelles</h2>
        <p>
          Le site ne propose pas de formulaire de contact et ne collecte pas
          directement de données personnelles via son interface.
          Les échanges éventuels avec l’entreprise se font par email.
        </p>
        <p className="mt-2">
          Les données personnelles transmises dans ce cadre sont utilisées
          uniquement pour répondre aux demandes des utilisateurs.
          Conformément au Règlement Général sur la Protection des Données (RGPD),
          toute personne dispose d’un droit d’accès, de rectification ou de suppression
          des données la concernant en contactant l’éditeur du site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg">Cookies</h2>
        <p>
          Le site n’utilise pas de cookies publicitaires ni de traceurs de mesure
          d’audience soumis au consentement de l’utilisateur.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-lg">Propriété intellectuelle</h2>
        <p>
          L’ensemble des contenus présents sur ce site (textes, images,
          photographies, logo, éléments graphiques) est protégé par le droit
          d’auteur. Toute reproduction, représentation, adaptation ou exploitation,
          totale ou partielle, sans autorisation préalable, est interdite.
        </p>
      </section>

      <Link href="/" className="text-sky-700 hover:underline">
        ← Retour à l’accueil
      </Link>
    </motion.main>
  );
}