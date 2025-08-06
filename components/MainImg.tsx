'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import TextBloc from './TextBloc';

const MainImg = () => {
  return (
    <section className="relative w-full h-screen hero">
        <div className="absolute inset-0 w-full h-full">
            <svg className="w-full h-full -translate-y-[22vh] overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <mask id="header-mask" className="mask-type-alpha">
                        <image
                        href="/pattern/header-mask.png"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                        className=""
                        />
                    </mask>
                </defs>

                <image
                    href="/images/boutique3.webp"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    mask="url(#header-mask)"
                    className="grayscale-50"
                />
            </svg>
        </div>

      {/* Groupe logo + cadre infos */}
      <div className="absolute top-[180px] left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-8 w-full">
        {/* Logo animé */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.8 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 10,
            duration: 0.8
          }}
        >
          <Image
            src="/Logo-Happy-Dog.png"
            alt="Logo Happy Dog"
            width={280}
            height={280}
            className="h-20 w-auto md:h-40 mx-auto drop-shadow-lg/30"
          />
        </motion.div>

        {/* Cadre d'information */}
        <div className="relative md:bg-white md:rounded-xl md:p-2 w-full md:max-w-5xl md:shadow-lg/30 mt-22">

          {/* Marguerites */}
            {/* <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
                duration: 0.8,
                delay: 0.5
            }}
            className="hidden md:block absolute -top-5 left-8 z-20"
            >
            <Image
                src="/pattern/marguerite.png"
                alt="Marguerite"
                width={48}
                height={48}
                className="drop-shadow-lg/30 rotate-30"
            />
            </motion.div>

            <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
                duration: 0.8,
                delay: 1
            }}
            className="hidden md:block absolute top-3 -left-4 z-10"
            >
            <Image
                src="/pattern/marguerite.png"
                alt="Marguerite"
                width={48}
                height={48}
                className="drop-shadow-lg/30"
            />
            </motion.div> */}

            {/* Patte 1 */}
            <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                type: 'spring',
                stiffness: 100,
                damping: 25,
                duration: 0.3,
                delay: 1.2
            }}
            className="absolute -bottom-4 right-8 z-10"
            >
            <Image
                src="/pattern/patte.png"
                alt="Pattes"
                width={50}
                height={50}
                className="hidden md:block w-auto h-10 md:h-12 rotate-25 drop-shadow-lg/30"
            />
            </motion.div>

            {/* Patte 2 */}
            <motion.div
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 25,
                    duration: 0.3,
                    delay: 1.4
                }}
                className="absolute bottom-3 -right-5 z-10 rotate-12"
                >
                <Image
                    src="/pattern/patte.png"
                    alt="Pattes"
                    width={50}
                    height={50}
                    className="hidden md:block w-auto h-10 md:h-12 rotate-25 drop-shadow-lg/30"
                />
            </motion.div>

            {/* Patte 3 */}
            <motion.div
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 25,
                    duration: 0.3,
                    delay: 1.6
                }}
                className="hidden md:block absolute bottom-17 right-2 z-10 "
                >
                <Image
                    src="/pattern/patte.png"
                    alt="Pattes"
                    width={50}
                    height={50}
                    className="w-auto h-10 md:h-12 rotate-25 drop-shadow-lg/30"
                />
            </motion.div>

            {/* Patte 4 */}
            <motion.div
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 25,
                    duration: 0.3,
                    delay: 1.8
                }}
                className="hidden md:block absolute top-18 -right-9 z-10 rotate-8"
                >
                <Image
                    src="/pattern/patte.png"
                    alt="Pattes"
                    width={50}
                    height={50}
                    className="w-auto h-10 md:h-12 rotate-25 drop-shadow-lg/30"
                />
            </motion.div>

                
            <div className="relative bg-sky-700 text-white md:rounded-xl p-8 text-center shadow-lg/30 bg-[url('/pattern/pattern-dots.png')] bg-repeat pb-16 md:pb-12">
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">Bienvenue dans la boutique des chiens heureux</h1>
                <p className="mb-1">Nous vous accueillons</p>
                <p className="mb-1">11 rue du Général Roussel, 90000 Belfort</p>
                <p className="text-base">06 46 46 76 17</p>
                <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row justify-center md:items-center bg-vert-clair text-vert-fonce w-full py-2 md:max-w-3xl h-auto md:h-11 md:w-3xl md:rounded-md shadow-lg/30 md:gap-1 text-xl sm:text-2xl font-bold">
                    <h2>Du lundi au vendredi de 8h15 à 17h30</h2>
                    <h2>et le samedi de 10h à 16h.</h2>
                </div>
            </div>
        </div>

        <TextBloc
        texts={[
            "Découvrez un univers enchanté pour vos compagnons à quatre pattes.",
            "Venez découvrir notre espace garderie de jour et notre boutique canine !",
            ]}
        />

      </div>
    </section>
  );
};

export default MainImg;
