"use client";

import Image from "next/image";

export type MediaExt = "webp" | "jpg" | "jpeg" | "png" | "mp4" | "webm";

export type PhotoItem = {
  id: string;
  number: number;
  ext: MediaExt;
  alt?: string;
  title?: string;
  description?: string;
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

type Props = {
  item: PhotoItem;
  onClick?: () => void;
  priority?: boolean;
};

export default function PhotoGalleryCard({ item, onClick, priority }: Props) {
  const src = buildSrc(item.number, item.ext);
  const isVideo = item.ext === "mp4" || item.ext === "webm";
  const alt = (item.alt?.trim() || filenameToAlt(src));

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative block aspect-square overflow-hidden cursor-pointer border-[6px] md:border-[12px] border-white shadow-lg shadow-black/25 hover:shadow-black/50"
      aria-label={item.title || alt}
    >
      <div className="block w-full pt-[100%]" />

      {isVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          muted
          playsInline
          autoPlay
          loop
          preload="metadata"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 33vw, 50vw"
          className="absolute inset-0 object-cover"
          priority={priority}
        />
      )}

    </button>
  );
}
