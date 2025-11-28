// components/gallery/PhotoGalleryModal.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import type { PhotoItem } from "./PhotoGalleryCard";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Props = {
  items: PhotoItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

const filenameToAlt = (src: string) => {
  const name = decodeURIComponent(src.split("/").pop() || "image");
  const base = name.replace(/\.[^.]+$/, "");
  return base.replace(/[-_]+/g, " ").trim() || "Image";
};

export default function PhotoGalleryModal({ items, index, onClose, onPrev, onNext }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const item = items[index];

  // Lock scroll + raccourcis clavier
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] bg-black/90"
        role="dialog"
        aria-modal="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: prefersReducedMotion ? 0 : 0.15 } }}
        exit={{ opacity: 0, transition: { duration: prefersReducedMotion ? 0 : 0.12 } }}
        onClick={onClose}
      >
        <div
          className="absolute inset-0 flex items-center justify-center p-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Croix : bas-droite (mobile & desktop) */}
          <button
            onClick={onClose}
            className="z-[9999] text-xl absolute bottom-4 right-4 rounded-full border border-white/30 text-white/90 px-3 py-1.5 hover:bg-white/10 cursor-pointer hover:scale-115 transition-transform"
            aria-label="Fermer"
          >
            ✕
          </button>

          {/* Flèche gauche (desktop) */}
          <button
            onClick={onPrev}
            className="hidden md:inline-flex items-center justify-center absolute left-3 top-1/2 -translate-y-1/2 group"
            aria-label="Photo précédente"
          >
            <span className="text-3xl text-white/90 transform transition duration-300 group-hover:-translate-x-1 cursor-pointer">
              <IoMdArrowRoundBack />
            </span>
          </button>

          {/* Contenu média : cadre 90vw x 80vh (pas de bord blanc) */}
          <motion.figure
            key={item?.id ?? index}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: prefersReducedMotion ? 0 : 0.2 } }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8, transition: { duration: prefersReducedMotion ? 0 : 0.12 } }}
            className="w-full flex flex-col items-center"
          >
            {/* Wrapper avec dimensions explicites pour éviter "fill + height: 0" */}
            <div className="relative w-[90vw] max-w-5xl h-[80vh] overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt?.trim() || filenameToAlt(item.src)}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {(item.title || item.description) && (
              <figcaption className="mt-4 text-center text-white/90 max-w-[90vw]">
                {item.title && <div className="text-lg font-semibold">{item.title}</div>}
                {item.description && <p className="text-sm text-white/80">{item.description}</p>}
              </figcaption>
            )}
          </motion.figure>

          {/* Flèche droite (desktop) */}
          <button
            onClick={onNext}
            className="hidden md:inline-flex items-center justify-center absolute right-3 top-1/2 -translate-y-1/2 group"
            aria-label="Photo suivante"
          >
            <span className="text-3xl text-white/90 transform transition duration-300 group-hover:translate-x-1 cursor-pointer">
              <IoMdArrowRoundForward />
            </span>
          </button>

          {/* Contrôleur bas (mobile) */}
          <div className="md:hidden absolute bottom-5.5 inset-x-0 flex items-center justify-center gap-16">
            <button onClick={onPrev} className="group inline-flex items-center justify-center" aria-label="Photo précédente">
              <span className="text-3xl text-white/90 transform transition duration-300 group-hover:-translate-x-1 cursor-pointer">
                <IoMdArrowRoundBack />
              </span>
            </button>
            <button onClick={onNext} className="group inline-flex items-center justify-center" aria-label="Photo suivante">
              <span className="text-3xl text-white/90 transform transition duration-300 group-hover:translate-x-1 cursor-pointer">
                <IoMdArrowRoundForward />
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
