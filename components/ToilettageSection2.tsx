"use client";

import Image from "next/image";
import BainToilettageListe from "./tarifs/BainToilettageListe";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const BainToilettageSection2 = () => {
  return (
    <section
      id="toilettage"
      className="flex flex-col items-center mt-12 scroll-mt-20 md:scroll-mt-24 overflow-hidden"
    >
      <h2 className="text-vert-fonce text-3xl sm:text-4xl font-bold text-center">
        Bain et toilettage
      </h2>

      <p className="md:text-xl max-w-2xl text-center my-8 mx-2 mb-12">
        ✨ Un moment de complicité avec votre compagnon ✨ <br />
        Profitez de notre espace bain-toilettage en libre-service : un endroit
        pratique, confortable et tout équipé pour que vous puissiez laver et
        chouchouter votre chien vous-même, en toute simplicité.
      </p>

      {/* Les 3 photos en desktop */}
      <div className="hidden md:flex w-full justify-between gap-x-6 max-w-5xl mx-auto mb-12">
        {/* Gauche */}
        <div>
          <Image
            src="/images/services/toilettage/toilettage1.webp"
            alt="Cabine de toilettage chez Happy Dog Belfort"
            width={300}
            height={200}
            className="border-10 md:border-16 border-white shadow-lg/50 -rotate-2"
          />
        </div>

        {/* Centre */}
        <div>
          <Image
            src="/images/services/toilettage/toilettage2.webp"
            alt="Laure pratiquant un toilettage"
            width={300}
            height={200}
            className="border-10 md:border-16 border-white shadow-lg/50"
          />
        </div>

        {/* Droite */}
        <div>
          <Image
            src="/images/services/toilettage/toilettage3.webp"
            alt="Un chien tout beau tout propre"
            width={300}
            height={200}
            className="border-10 md:border-16 border-white shadow-lg/50 rotate-2"
          />
        </div>
      </div>

      {/* Photo mobile */}
      <div className="flex md:hidden justify-center w-full mb-12">
        <Image
          src="/images/services/toilettage/toilettage1.webp"
          alt="Cabine de toilettage chez Happy Dog Belfort"
          width={320}
          height={220}
          className="border-10 border-white shadow-lg/50 rounded-md"
        />
      </div>

      <BainToilettageListe />

      {/* Photo finale */}
      <div className="relative w-[85%] sm:w-[70%] max-w-[700px] aspect-[3/2] mb-12">
        <Image
          src="/images/services/toilettage/salle-toilettage.webp"
          alt="Salon de toilettage de Laure chez Happy Dog Belfort"
          fill
          className="object-cover shadow-lg border-10 md:border-16 border-white shadow-lg/30"
        />
      </div>

      {/* Signature */}
      <p
        className={`mt-6 mb-12 text-center text-7xl text-vert-fonce ${caveat.className}`}
      >
        à bientôt !
      </p>
    </section>
  );
};

export default BainToilettageSection2;
