"use client";

import { useState } from "react";
import PhotoGalleryGrid from "./PhotoGalleryGrid";
import PhotoGalleryModal from "./PhotoGalleryModal";
import type { PhotoItem } from "./PhotoGalleryCard";
import raw from "@/app/data/galerie-photos.json";

export default function PhotoGallery() {
  const data = (raw as PhotoItem[]).slice().reverse();

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openModalAt = (globalIndex: number) => {
    setActiveIndex(globalIndex);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  const next = () => setActiveIndex((i) => (i === null ? 0 : (i + 1) % data.length));
  const prev = () => setActiveIndex((i) => (i === null ? 0 : (i - 1 + data.length) % data.length));

  return (
    <section className="py-12" id="galerie">
      <PhotoGalleryGrid items={data} title="Vie de la boutique" onCardClick={openModalAt} />

      {isOpen && activeIndex !== null && (
        <PhotoGalleryModal items={data} index={activeIndex} onClose={closeModal} onPrev={prev} onNext={next} />
      )}
    </section>
  );
}
