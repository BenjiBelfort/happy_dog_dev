"use client";

import { motion } from "framer-motion";
import { TbDog } from "react-icons/tb";
import { PiHairDryerFill } from "react-icons/pi";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Zilla_Slab } from "next/font/google";

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface SectionItem {
  section: string;
  href: string;
  bgColor: string;
  icon: React.ReactElement;
  iconColor: string;
}

const sections: SectionItem[] = [
  {
    section: "Garderie de jour",
    href: "#garderie",
    bgColor: "bg-orange-600",
    icon: <TbDog size={36} />,
    iconColor: "text-orange-500",
  },
  {
    section: "Bain et toilettage",
    href: "#toilettage",
    bgColor: "bg-stone-600",
    icon: <PiHairDryerFill size={36} />,
    iconColor: "text-stone-500",
  },
];

const ServiceSommaire: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10 my-4 md:my-12 px-4 mx-auto overflow-hidden">
      {sections.map(({ section, href, bgColor, icon, iconColor }, index) => {
      const isEven = index % 2 === 0;

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: isEven ? -100 : 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="bg-slate-500/80 rounded-2xl md:rounded-3xl p-2 sm:p-3 w-full sm:w-96 relative"
        >
          <div className="bg-white rounded-xl px-2 sm:px-4 md:p-6 flex flex-row md:flex-col items-center justify-between shadow-lg/30 bg-[url('/pattern/pattern-dots.png')] bg-repeat">
            <span className={`hidden md:block py-3 ${iconColor}`}>{icon}</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-center pl-4 md:pl-0 md:mb-4">{section}</h2>
            <div className="relative group inline-block m-2">
              {/* Sur-bouton arrière */}
              <div className="bg-yellow-300/50 absolute inset-0 rounded-2xl transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-x-110 group-hover:scale-y-123 shadow-md/10" />
              {/* Bouton principal */}
              <a
                href={href}
                className={`relative z-10 flex items-center gap-4 ${bgColor} text-white font-bold text-xl rounded-xl px-5 py-3 transition duration-300 ${zillaSlab.className}`}
              >
                Voir
                <span className="transform transition duration-300 group-hover:translate-x-1">
                  <IoMdArrowRoundForward size={18} />
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      );
    })}
    </div>
  );
};

export default ServiceSommaire;
