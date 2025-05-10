"use client";

import { usePathname } from "next/navigation";
import Image from 'next/image';
import { motion } from 'framer-motion';

const PageTitle = () => {
  const pathname = usePathname();

  const getPageTitle = () => {
    if (pathname === "/produits") return "Nos produits";
    if (pathname === "/services") return "Nos services";
    return null;
  };

  const pageTitle = getPageTitle();

  if (!pageTitle) return null;

  return (
    // 
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }} // 1 seconde après début du logo
    className="mx-auto mt-[200px] sm:mt-[240px] lg:mt-[345px] bg-bleu-canard text-white text-center sm:rounded-2xl shadow-lg/30 w-full sm:max-w-xl z-50 p-2 bg-[url('/pattern/pattern-dots.png')] bg-repeat">
      <h1 className="text-3xl sm:text-4xl font-bold">{pageTitle}</h1>
      <Image
        src="/images/backgrounds/ornement.png"
        alt="ornement"
        width={565}
        height={63}
        className="w-48 mx-auto my-2"
      />
    </motion.div>
  );
};

export default PageTitle;
