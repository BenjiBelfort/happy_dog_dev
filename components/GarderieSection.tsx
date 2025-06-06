"use client";

import Image from "next/image";
import GarderieTarif from "@/components/tarifs/GarderieTarif";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";


const GarderieSection = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" });
  const isInView3 = useInView(ref3, { once: true, margin: "-100px" });

  return (
    <section id="garderie" className="flex flex-col items-center mt-12 scroll-mt-20 md:scroll-mt-24 overflow-hidden">
      <h2 className="text-vert-fonce text-3xl sm:text-4xl font-bold text-center">Garderie de jour</h2>

      <p className="md:text-xl max-w-2xl text-center my-8 mx-2 mb-12">
        Offrez à votre compagnon une journée remplie d&apos;attention, de jeux et de détente pendant vos rendez-vous. Notre service de garderie accueille votre chien dans <span className="font-bold">un environnement sécurisé et stimulant, pensé pour son bien-être</span>. Jeux, repos et promenades rythment sa journée sous la supervision attentive de notre équipe</p>
      
      {/* jeux et occupations */}
      <div ref={ref1} className="relative w-full max-w-5xl flex flex-col items-center md:flex-row md:items-start md:justify-between md:gap-8">
        {/* Image */}
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isInView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full md:w-4/7 aspect-[4/3] md:-rotate-1"
      >
          <Image
            src="/images/services/garderie/garderie1.webp"
            alt="La garderie des chiens heureux à Belfort"
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
            Entre jouets ludiques, jeux collectifs et piscine à balles, tout est prévu pour stimuler et divertir les chiens tout au long de la journée. Un environnement joyeux et sécurisé, pensé pour leur plaisir !
          </p>
        </motion.div>
      </div>

      {/* Temps calme, câlins */}
      <div ref={ref2} className="relative w-full max-w-5xl flex flex-col items-center md:flex-row-reverse md:items-start md:justify-between md:gap-8 mt-4 md:-mt-8 lg:-mt-18">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full md:w-4/7 aspect-[4/3]"
        >
          <Image
            src="/images/services/garderie/garderie2.webp"
            alt="Moments d'attention personnalisée en garderie"
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
            Parce que les temps calmes sont tout aussi importants, des espaces confortables accueillent les chiens pour des moments de détente, de repos… et de câlins avec notre équipe attentive.
          </p>
        </motion.div>
      </div>

      {/* balade */}
      <div ref={ref3} className="relative w-full max-w-5xl flex flex-col items-center md:flex-row md:items-start md:justify-between md:gap-8 mt-4 md:-mt-6 lg:-mt-12">
        {/* video */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full md:w-4/7 aspect-[4/3] md:-rotate-1"
        >
          <video
            src="/images/services/garderie/balade.mp4" // Ton fichier vidéo
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full border-10 md:border-16 border-white shadow-lg/30"
          />
        </motion.div>

        {/* Encadré */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView3 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="relative md:absolute md:left-1/2 md:top-1/2 md:-translate-y-1/2 z-10 md:bg-yellow-100 shadow-lg/30 rounded-xl p-4 bg-white max-w-md mt-[-3rem] md:mt-0"
        >
          <h3 className="text-center sm:text-left text-xl sm:text-2xl font-bold mb-2">
            Des promenades et une attention constante
          </h3>
          <p>
            Plusieurs sorties rythment la journée, pour se dépenser en extérieur et explorer les environs. De l’eau fraîche à volonté et la possibilité de prendre son repas sur place : tout est prévu pour leur bien-être.
          </p>
        </motion.div>
      </div>

      <GarderieTarif />

    </section>
  );
};

export default GarderieSection;