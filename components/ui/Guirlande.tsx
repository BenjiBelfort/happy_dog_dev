'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Guirlande() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 12,
        delay: 1.7, // décale l'animation si besoin
      }}
      className="fixed left-1/2 top-[30px] -translate-x-1/2 z-40"
    >
      <Image
        src="/pattern/guirlande.png"
        alt="Guirlande décorative"
        width={500}
        height={500}
        className="drop-shadow-lg/30"
      />
    </motion.div>
  );
}
