"use client";

import Image from "next/image";

export type PhotoItem = {
  id: string;
  src: string;
  alt?: string;
  title?: string;
  description?: string;
};

type Props = {
  item: PhotoItem;
  onClick?: () => void;
  priority?: boolean;
};

const filenameToAlt = (src: string) => {
  const name = decodeURIComponent(src.split("/").pop() || "image");
  const base = name.replace(/\.[^.]+$/, "");
  return (base.replace(/[-_]+/g, " ").trim() || "Image");
};

export default function PhotoGalleryCard({ item, onClick, priority }: Props) {
  const alt = (item.alt?.trim() || filenameToAlt(item.src));

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative block aspect-square overflow-hidden cursor-pointer border-[6px] md:border-[12px] border-white shadow-lg shadow-black/25 hover:shadow-black/50"
      aria-label={item.title || alt}
    >
        <div className="block w-full pt-[100%]" />
            <Image
            src={item.src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 33vw, 50vw"
            className="absolute inset-0 object-cover"
            priority={priority}
            />
    </button>
  );
}
