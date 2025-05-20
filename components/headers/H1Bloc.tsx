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
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 md:px-8 hyphens-auto">Bienvenue dans la boutique des chiens heureux&nbsp;!</h1>
            <Image
                src="/images/backgrounds/ornement.png"
                alt="ornement"
                width={565}
                height={63}
                className="w-80 mx-auto my-2"
            />
            <p className="mb-1 mt-4">11 rue du Général Roussel, 90000 Belfort</p>
            <p className="font-bold">06 46 46 76 17</p>
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
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }} // 1 seconde après début du logo
        className="text-black absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row justify-center md:items-center bg-emerald-50 w-full py-2 md:max-w-3xl h-auto md:h-11 md:w-3xl md:rounded-md shadow-lg/30 md:gap-1 text-xl sm:text-2xl font-bold">
            <h2>Du lundi au vendredi de 9h15 à 17h30</h2>
            <h2>et le samedi de 10h à 16h.</h2>
        </motion.div>
    </motion.div>
  )
}

export default H1Bloc;
