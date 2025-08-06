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
      // départ : plus gros, flou et transparent
      initial={{ 
        scale: 1.2, 
        opacity: 0, 
        filter: "blur(8px)" 
      }}
      // arrivée : taille normale, net et opaque
      animate={{ 
        scale: 1, 
        opacity: 1, 
        filter: "blur(0px)" 
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <h1 className="text-2xl font-bold mb-4 text-center">
        Mentions Légales
      </h1>

      <section className="mb-4">
        <h2 className="font-semibold">Éditeur du site</h2>
        <p>
          Happy Dog Belfort – SARL au capital de 1 000 €<br />
          Siège social : 11 rue du Général Roussel, 90000 Belfort<br />
          RCS Belfort 931 826 622
        </p>
      </section>

      <section className="mb-4">
        <h2 className="font-semibold">Directeur de la publication</h2>
        <p>Violette LORCY – happydogbelfort@gmail.com</p>
      </section>

      <section className="mb-4">
        <h2 className="font-semibold">Hébergement</h2>
        <p>
          OVH SAS – SAS au capital de 10 069 020 €<br />
          Siège social : 2 rue Kellermann, 59100 Roubaix, France<br />
          RCS Lille Métropole : 424 761 419<br />
          TVA intracom : FR23 424 761 419
        </p>
      </section>

      <section className="mb-4">
        <h2 className="font-semibold">Données personnelles</h2>
        <p>
          Aucune collecte de données à caractère personnel n’est effectuée sur ce site.
        </p>
      </section>

      <Link href="/" className="text-sky-700 hover:underline">
        ← Retour à l’accueil
      </Link>
    </motion.main>
  );
}
