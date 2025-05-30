"use client";


import Image from "next/image";
import ToilettageTarif from "@/components/tarifs/ToilettageTarif";
import LaureBloc from "@/components/blocs/LaureBloc";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ToiletageSection = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" });

  return (
    <section id="toilettage" className="flex flex-col items-center mt-12 scroll-mt-20 md:scroll-mt-24">
      <h2 className="text-vert-fonce text-3xl sm:text-4xl font-bold text-center">Bain et toilettage</h2>

      <p className="md:text-xl max-w-2xl text-center my-8 mx-2 mb-12">
        Offrez à votre compagnon une séance de toilettage tout en douceur avec <span className="font-bold">Laure</span>, notre experte. Du bain relaxant à la coupe soignée, chaque étape est pensée pour le bien-être de votre chien. Résultat : un poil doux, une allure élégante… et un chien tout beau, tout propre !</p>
      
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center items-center">
          <div className="hidden md:flex w-full justify-between gap-x-6">
            {/* Gauche */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Image
                src="/images/services/toilettage/toilettage1.webp"
                alt="Cabine de toilettage chez Happy Dog Belfort"
                width={300}
                height={200}
                className="border-10 md:border-16 border-white shadow-lg/50 -rotate-2"
              />
            </motion.div>

            {/* Centre */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Image
                src="/images/services/toilettage/toilettage2.webp"
                alt="Laure pratiquant un toilettage"
                width={300}
                height={200}
                className="border-10 md:border-16 border-white shadow-lg/50"
              />
            </motion.div>

            {/* Droite */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.6 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Image
                src="/images/services/toilettage/toilettage3.webp"
                alt="Un chien tout beau tout propre"
                width={300}
                height={200}
                className="border-10 md:border-16 border-white shadow-lg/50 rotate-2"
              />
            </motion.div>
          </div>


          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex md:hidden justify-center w-full"
          >
            <Image
              src="/images/services/toilettage/toilettage2.webp"
              alt="Laure pratiquant un toilettage"
              width={300}
              height={200}
              className="border-10 md:border-16 border-white shadow-lg/50"
            />
          </motion.div>

        </div>
      </div>

      {/* Bain */}
      <div ref={ref1} className="relative w-full max-w-5xl flex flex-col items-center md:flex-row md:items-start md:justify-between md:gap-8 mt-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full md:w-4/7 aspect-[4/3] md:-rotate-1"
        >
          <Image
            src="/images/services/toilettage/avant.webp"
            alt="Un bon bain pour un chien heureux à Belfort"
            fill
            className="object-cover border-10 md:border-16 border-white shadow-lg/30 "
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Encadré */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative md:absolute md:left-1/2 md:top-1/2 md:-translate-y-1/2 z-10 md:bg-yellow-100 shadow-lg/30 rounded-xl p-4 bg-white max-w-md mt-[-3rem] md:mt-0"
        >
          <h3 className="text-center sm:text-left text-xl sm:text-2xl font-bold mb-2">
            Des activités pour ne jamais s’ennuyer
          </h3>
          <p>
            Offrez à votre compagnon un moment de détente et de soin avec un bain complet : shampoing adapté, rinçage doux, séchage minutieux et beaucoup de câlins pour repartir tout propre et heureux.
          </p>
        </motion.div>
      </div>

      {/* Toilettage */}
      <div ref={ref2} className="relative w-full max-w-5xl flex flex-col items-center md:flex-row-reverse md:items-start md:justify-between md:gap-8 mt-4 md:-mt-8 lg:-mt-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full md:w-4/7 aspect-[4/3]"
        >
          <Image
            src="/images/services/toilettage/apres.webp"
            alt="Coupe, tonte et épilation pour chien heureux à Belfort"
            fill
            className="object-cover border-10 md:border-16 border-white shadow-lg/30"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Encadré */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative md:absolute md:right-1/2 md:top-1/2 md:-translate-y-1/2 z-10 md:bg-yellow-100 shadow-lg/30 rounded-xl p-4 bg-white max-w-md mt-[-3rem] md:mt-0">
          <h3 className="text-center sm:text-left text-xl sm:text-2xl font-bold mb-2">
            Du repos et beaucoup de tendresse
          </h3>
          <p>
            Selon le type de poil de votre chien, nous réalisons une coupe aux ciseaux, une tonte ou une épilation douce, pour allier hygiène, confort et esthétisme… toujours dans le respect de l’animal.
          </p>
        </motion.div>
      </div>

      <LaureBloc />
      <ToilettageTarif />

      <div className="relative w-[85%] sm:w-[70%] max-w-[700px] aspect-[3/2] mb-12">
        <Image
          src="/images/services/toilettage/salle-toilettage.webp"
          alt="Salon de toilettage de Laure chez Happy Dog Belfort"
          fill
          className="object-cover shadow-lg border-10 md:border-16 border-white shadow-lg/30"
        />
      </div>

    </section>
  );
};

export default ToiletageSection;

