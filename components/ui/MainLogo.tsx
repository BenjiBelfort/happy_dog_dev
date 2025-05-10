"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const MainLogo = () => {
  return (
    
    <div className="py-24 md:py-32 overflow-hidden">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
          duration: 0.8,
        }}
        className="w-fit mx-auto"
      >
        <Image
          src="/Logo-Happy-Dog.png"
          alt="Logo Happy Dog"
          width={806}
          height={439}
          className="h-20 w-auto md:h-35 drop-shadow-lg/50"
        />
      </motion.div>
    </div>
  );
};

export default MainLogo;
