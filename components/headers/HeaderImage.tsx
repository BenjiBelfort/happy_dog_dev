"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import React from "react";

const HeaderImage = () => {
  const pathname = usePathname();

  // Définir l’image et le alt selon la route
  const getHeaderData = () => {
    switch (pathname) {
      case "/":
        return {
          src: "/images/headers/header_home.webp",
          alt: "Photo de la boutique Happy Dog à Belfort",
          heightClass: "h-[400px] sm:h-[450px] lg:h-[550px]",
        };
      case "/produits":
        return {
          src: "/images/headers/header_produits.webp",
          alt: "Photo des produits disponibles chez Happy Dog à Belfort",
          heightClass: "h-[300px] sm:h-[350px] lg:h-[450px]",
        };
      case "/services":
        return {
          src: "/images/headers/header_services.webp",
          alt: "Photo représentant les services proposés par Happy Dog à Belfort",
          heightClass: "h-[300px] sm:h-[350px] lg:h-[450px]",
        };
      default:
        return null;
    }
  };

  const headerData = getHeaderData();

  if (!headerData) return null;

  return (
    <div
      className={`absolute -top-1 left-0 w-full z-0 overflow-hidden ${headerData.heightClass}`}
      style={{
        WebkitMaskImage: "url('/pattern/header-mask.png')",
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: 'cover',
        maskImage: "url('/pattern/header-mask.png')",
        maskRepeat: 'no-repeat',
        maskSize: 'cover',
        maskPosition: 'bottom center',
      }}
    >
      <Image
        src={headerData.src}
        alt={headerData.alt}
        fill
        priority
        className="object-cover"
      />
    </div>
  );
};

export default HeaderImage;
