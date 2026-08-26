"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    '/images/headers/happy-dog-1.webp',
    '/images/headers/happy-dog-2.webp',
    '/images/headers/happy-dog-3.webp',
    '/images/headers/happy-dog-4.webp',
    '/images/headers/happy-dog-5.webp',
    '/images/headers/happy-dog-6.webp',
    '/images/headers/happy-dog-7.webp',
    '/images/headers/happy-dog-8.webp',
];

const H1Bloc = () => {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 7000); // toutes les 7 secondes
      return () => clearInterval(interval);
    }, []);

  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.5 }} // 1 seconde après début du logo
    className="relative flex flex-col md:flex-row justify-evenly text-center bg-bleu-canard text-white md:rounded-3xl p-8 shadow-lg/30 bg-[url('/pattern/pattern-dots.png')] bg-repeat pb-16 md:pb-14 max-w-4xl mx-auto mb-12"
    >
        {/* Partie 1 */}
        <div className="md:basis-2/3 px-4">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 md:px-8 hyphens-auto">Bienvenue dans la boutique des chiens (chats) heureux&nbsp;!</h1>
            <Image
                src="/images/backgrounds/ornement.png"
                alt="ornement"
                width={565}
                height={63}
                className="w-80 mx-auto my-2"
            />
            <p className="mb-1 mt-4">11 rue du Général Roussel, 90000 Belfort</p>
            <p className="font-bold">+33 3 61 88 78 71</p>
        </div>

        {/* Partie 2 */}
        <div className="md:basis-1/3 mx-auto flex justify-center items-center relative z-10 md:-mt-9 w-[275px] h-[210px] md:w-70 md:h-50 md:rotate-3 border-6 md:border-10 border-white shadow-lg/50 overflow-hidden my-5 md:my-0">
            <AnimatePresence>
                <motion.div
                key={images[index]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0"
                >
                <Image
                    src={images[index]}
                    alt="Chiens heureux"
                    fill
                    className="object-cover object-top"
                    priority
                />
                </motion.div>
            </AnimatePresence>
        </div>

        <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="
              absolute bottom-[-70px] left-1/2 z-20
              flex h-auto w-full -translate-x-1/2 flex-col
              justify-center bg-emerald-50 py-2
              text-xl font-bold text-black shadow-lg/30
              sm:text-2xl md:max-w-3xl md:items-center md:rounded-md
            "
          >
            <h2>Lundi de 9h15 à 12h30</h2>
            <h2>Mardi, jeudi et vendredi de 9h15 à 18h</h2>

            <div className="flex flex-wrap items-center justify-center gap-x-3">
              <h2>et le samedi de 10h à 17h30.</h2>

              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                className="
                  inline-flex -rotate-2 items-center
                  rounded border border-red-300
                  bg-red-50 px-2 py-0.5
                  text-sm font-semibold text-red-700
                  shadow-sm sm:text-base
                "
              >
                Fermé le mercredi
              </motion.span>
            </div>
          </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="absolute text-xs sm:text-base w-[90%] sm:w-[70%] lg:w-[50%] bottom-[-100px] sm:bottom-[-108px] rounded-sm left-1/2 transform -translate-x-1/2 text-center bg-neutral-700/90 bg-[url('/pattern/pattern-dots.png')] bg-repeat text-white px-2 py-2 shadow-sm z-10"
        >
          Ouverture le premier dimanche du mois de 9h à 12h.
        </motion.div>

    </motion.div>
  )
}

export default H1Bloc;
