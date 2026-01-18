"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const MainLogo = () => {
  return (
    <div className="min-h-[40vh] md:min-h-[60vh] overflow-hidden flex flex-col">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.8 }}
        className="my-auto mx-auto w-fit translate-y-20 md:translate-y-0"
      >
        <Image
          src="/Logo-Happy-Dog.svg"
          alt="Logo Happy Dog"
          width={806}
          height={439}
          className="h-10 w-auto md:h-35 drop-shadow-lg/50"
        />
      </motion.div>
    </div>
  );
};

export default MainLogo;
