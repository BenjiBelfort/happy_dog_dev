"use client";

import { usePathname } from "next/navigation";
import Image from 'next/image';

const PageTitle = () => {
  const pathname = usePathname();

  const getPageTitle = () => {
    if (pathname === "/produits") return "Nos produits";
    if (pathname === "/services") return "Nos services";
    return null;
  };

  const pageTitle = getPageTitle();

  if (!pageTitle) return null;

  return (
    // 
    <div className="mx-auto mt-[260px] sm:mt-[340px] lg:mt-[440px] bg-bleu-canard text-white text-center sm:rounded-2xl shadow-lg/30 w-full max-w-xl z-50 p-2 bg-[url('/pattern/pattern-dots.png')] bg-repeat">
      <h1 className="text-3xl sm:text-4xl font-bold">{pageTitle}</h1>
      <Image
          src="/images/backgrounds/ornement.png"
          alt="ornement"
          width={200}
          height={200}
          className="mx-auto my-2"
      />
    </div>
  );
};

export default PageTitle;
