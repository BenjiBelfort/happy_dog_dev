"use client";

import { usePathname } from "next/navigation";

const HeaderImage = () => {
  const pathname = usePathname();

  const getHeaderData = () => {
    switch (pathname) {
      case "/":
        return {
          src: "/images/headers/header_home3.webp",      // desktop
          srcMobile: "/images/headers/header_mob.webp", // mobile
          alt: "Photo de la boutique Happy Dog à Belfort",
          heightClass: "h-[400px] sm:h-[550px] lg:h-[620px]",
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
      className={`absolute left-0 w-full z-0 overflow-hidden ${headerData.heightClass}`}
      style={{
        WebkitMaskImage: "url('/pattern/header-mask.png')",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "cover",
        maskImage: "url('/pattern/header-mask.png')",
        maskRepeat: "no-repeat",
        maskSize: "cover",
        maskPosition: "bottom center",
      }}
    >
      <picture>
        {headerData.srcMobile && (
          <source
            srcSet={headerData.srcMobile}
            media="(max-width: 450px)"
          />
        )}
        <img
          src={headerData.src}
          alt={headerData.alt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
      </picture>
    </div>
  );
};

export default HeaderImage;
