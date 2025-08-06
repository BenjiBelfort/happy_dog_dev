'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // on attend un tick pour être sûr que la page est rendue
    setTimeout(() => {
      const hash = window.location.hash; // ex: "#contact"
      if (hash) {
        const target = document.querySelector(hash) as HTMLElement;
        const nav = document.querySelector('nav') as HTMLElement;
        if (target) {
          const navHeight = nav?.clientHeight || 0;
          const top = target.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: top - navHeight,
            behavior: 'smooth',
          });
        }
      }
    }, 0);
  }, [pathname]);

  return null; // rien à rendre
}
