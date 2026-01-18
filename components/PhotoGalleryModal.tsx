"use client";

import { useEffect } from "react";
import Image from "next/image";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { PhotoItem } from "./PhotoGalleryCard";

type Props = {
  items: PhotoItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

const GALLERY_BASE = "/images/galerie";
const GALLERY_PREFIX = "galerie-happy-dog_";
const buildSrc = (number: number, ext: string) =>
  `${GALLERY_BASE}/${GALLERY_PREFIX}${number}.${ext}`;

const filenameToAlt = (src: string) => {
  const name = decodeURIComponent(src.split("/").pop() || "image");
  const base = name.replace(/\.[^.]+$/, "");
  return base.replace(/[-_]+/g, " ").trim() || "Image";
};

export default function PhotoGalleryModal({ items, index, onClose, onPrev, onNext }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const item = items[index];
  const src = buildSrc(item.number, item.ext);
  const isVideo = item.ext === "mp4" || item.ext === "webm";

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
        <div className="absolute inset-0 flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={onClose}
            className="z-[9999] text-xl absolute bottom-4 right-4 rounded-full border border-white/30 text-white/90 px-3 py-1.5 hover:bg-white/10 cursor-pointer hover:scale-115 transition-transform"
            aria-label="Fermer"
          >
            ✕
          </button>

          <button
            onClick={onPrev}
            className="hidden md:inline-flex items-center justify-center absolute left-3 top-1/2 -translate-y-1/2 group"
            aria-label="Média précédent"
          >
            <span className="text-3xl text-white/90 transform transition duration-300 group-hover:-translate-x-1 cursor-pointer">
              <IoMdArrowRoundBack />
            </span>
          </button>

          <motion.figure
            key={item?.id ?? index}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: prefersReducedMotion ? 0 : 0.2 } }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8, transition: { duration: prefersReducedMotion ? 0 : 0.12 } }}
            className="w-full flex flex-col items-center"
          >
            <div className="relative w-[90vw] max-w-5xl h-[80vh] overflow-hidden">
              {isVideo ? (
                <video
                  className="h-full w-full object-contain"
                  src={src}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                />
              ) : (
                <Image
                  src={src}
                  alt={item.alt?.trim() || filenameToAlt(src)}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              )}
            </div>

            {(item.title || item.description) && (
              <figcaption className="mt-4 text-center text-white/90 max-w-[90vw]">
                {item.title && <div className="text-lg font-semibold">{item.title}</div>}
                {item.description && <p className="text-sm text-white/80">{item.description}</p>}
              </figcaption>
            )}
          </motion.figure>

          <button
            onClick={onNext}
            className="hidden md:inline-flex items-center justify-center absolute right-3 top-1/2 -translate-y-1/2 group"
            aria-label="Média suivant"
          >
            <span className="text-3xl text-white/90 transform transition duration-300 group-hover:translate-x-1 cursor-pointer">
              <IoMdArrowRoundForward />
            </span>
          </button>

          <div className="md:hidden absolute bottom-5.5 inset-x-0 flex items-center justify-center gap-16">
            <button onClick={onPrev} className="group inline-flex items-center justify-center" aria-label="Média précédent">
              <span className="text-3xl text-white/90 transform transition duration-300 group-hover:-translate-x-1 cursor-pointer">
                <IoMdArrowRoundBack />
              </span>
            </button>
            <button onClick={onNext} className="group inline-flex items-center justify-center" aria-label="Média suivant">
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
