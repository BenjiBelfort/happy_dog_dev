"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import React from "react";

const HeaderImage = () => {
  const pathname = usePathname();

  const getHeaderImage = () => {
    if (pathname === "/") return "/images/headers/header_home.webp";
    if (pathname === "/produits") return "/images/headers/header_produits.webp";
    if (pathname === "/services") return "/images/headers/header_services.webp";
    return null;
  };

  const headerImage = getHeaderImage();

  if (!headerImage) return null;

  return (
    <div
      className="absolute -top-1 left-0 w-full h-[400px] sm:h-[450px] lg:h-[550px] z-0 overflow-hidden"
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
        src={headerImage}
        alt="Image d'en-tête"
        fill
        priority
        className="object-cover grayscale-50"
      />
    </div>
  );
};

export default HeaderImage;