// components/PhotoGalleryGrid.tsx
"use client";

import { useMemo, useState } from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import PhotoGalleryCard, { PhotoItem } from "./PhotoGalleryCard";

type Props = {
  items: PhotoItem[];
  title?: string;
  onCardClick?: (globalIndex: number, item: PhotoItem) => void;
};

const ITEMS_PER_PAGE = 6; // 3x2 desktop, 2x3 mobile

export default function PhotoGalleryGrid({ items, title = "Vie de la boutique", onCardClick }: Props) {
  const perPage = ITEMS_PER_PAGE;
  const pageCount = Math.max(1, Math.ceil(items.length / perPage));
  const [page, setPage] = useState(0);

  const start = page * perPage;
  const pageItems = useMemo(() => items.slice(start, start + perPage), [items, start, perPage]);

  const prevPage = () => setPage(p => (p - 1 + pageCount) % pageCount);
  const nextPage = () => setPage(p => (p + 1) % pageCount);

  const globalIndexOf = (localIdx: number) => start + localIdx;

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-3xl font-semibold text-center mb-10">
          {title}
        </h3>

        {/* Grille : mobile 2 colonnes (=> 3 lignes), desktop 3 colonnes (=> 2 lignes) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {pageItems.map((item, idx) => (
            <PhotoGalleryCard
              key={item.id}
              item={item}
              priority={idx < 3}
              onClick={() => onCardClick?.(globalIndexOf(idx), item)}
            />
          ))}
        </div>

        {/* Contrôleur sous la grille */}
        {items.length > 0 && (
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prevPage}
              className="group inline-flex items-center justify-center"
              aria-label="Page précédente"
            >
              <span className="text-2xl md:text-3xl text-black drop-shadow-[0_0_2px_#fff] transform transition duration-300 group-hover:-translate-x-1 cursor-pointer">
                <IoMdArrowRoundBack />
              </span>
            </button>

            <span className="text-sm tabular-nums">
              {page + 1} / {pageCount}
            </span>

            <button
              type="button"
              onClick={nextPage}
              className="group inline-flex items-center justify-center"
              aria-label="Page suivante"
            >
              <span className="text-2xl md:text-3xl text-black drop-shadow-[0_0_2px_#fff] transform transition duration-300 group-hover:translate-x-1 cursor-pointer">
                <IoMdArrowRoundForward />
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
