'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../public/Logo-Happy-Dog.png';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const links = [
    { path: '/', label: 'Accueil' },
    { path: '/#products', label: 'Produits' },
    { path: '/services', label: 'Services' },
    { path: '/#contact', label: 'Contact' },
  ];

  const showLeftLogo = pathname !== '/';

  return (
    <nav className="bg-vert-clair text-xl text-vert-fonce w-full md:max-w-3xl mx-auto px-6 md:rounded-md sticky top-0 md:top-4 z-20 shadow-lg/30 font-medium">

        {/* Logo en position absolute à gauche, mais en dehors du nav sticky */}
        {showLeftLogo && (
          <motion.div
            className="hidden lg:block absolute -translate-x-36 top-6 -translate-y-1/2 xl:-translate-x-49 xl:top-9 z-20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 90,
              damping: 12,
              duration: 0.8,
            }}
          >
            <Link href="/" aria-label="Retour à l'accueil">
              <Image
                src={logo}
                alt="Logo Happy Dog"
                width={70}
                height={70}
                className="w-28 xl:w-40 h-auto drop-shadow-lg"
              />
            </Link>
          </motion.div>
        )}

      <div className="mx-auto">
        {/* Desktop links */}
        <div className="hidden md:flex justify-center space-x-6">
          {links.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              onMouseEnter={() => setActiveLink(path)}
              onMouseLeave={() => setActiveLink(null)}
              className={`relative inline-block px-4 py-2 ${
                pathname === path ? 'underline underline-offset-4' : ''
              }`}
            >
              <span className="relative z-10">{label}</span>
              <AnimatePresence>
                {activeLink === path && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    transition={{ duration: 0.5, ease: [0.5, -0.5, 0.3, 1.4] }}
                    className="absolute top-[-5%] left-[-10%] right-[-10%] bottom-[-5%] z-0"
                    style={{
                      backgroundColor: '#e5ecf4',
                      borderRadius: '92% 8% 90% 10% / 14% 90% 10% 86%',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))',
                    }}
                  />
                )}
              </AnimatePresence>
            </Link>
          ))}

          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com/profile.php?id=61566776497698#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            onMouseEnter={() => setActiveLink('facebook')}
            onMouseLeave={() => setActiveLink(null)}
            className="relative inline-block px-3 py-2 text-2xl"
          >
            <span className="relative z-10">
              <FaFacebook />
            </span>
            <AnimatePresence>
              {activeLink === 'facebook' && (
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.5, ease: [0.5, -0.5, 0.3, 1.4] }}
                  className="absolute top-[-5%] left-[-10%] right-[-10%] bottom-[-5%] z-0"
                  style={{
                    backgroundColor: '#e5ecf4',
                    borderRadius: '92% 8% 90% 10% / 14% 90% 10% 86%',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))',
                  }}
                />
              )}
            </AnimatePresence>
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/happydogbelfort"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            onMouseEnter={() => setActiveLink('instagram')}
            onMouseLeave={() => setActiveLink(null)}
            className="relative inline-block px-3 py-2 text-2xl"
          >
            <span className="relative z-10">
              <FaInstagram />
            </span>
          
            <AnimatePresence>
              {activeLink === 'instagram' && (
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.5, ease: [0.5, -0.5, 0.3, 1.4] }}
                  className="absolute top-[-5%] left-[-10%] right-[-10%] bottom-[-5%] z-0"
                  style={{
                    backgroundColor: '#e5ecf4',
                    borderRadius: '92% 8% 90% 10% / 14% 90% 10% 86%',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))',
                  }}
                />
              )}
            </AnimatePresence>
          </a>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      {!menuOpen && (
        <div className="md:hidden p-3 flex justify-center">
          <button
            className="flex items-center gap-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <FaBars size={24} />
            <span>Menu</span>
          </button>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full min-h-screen bg-vert-clair flex flex-col items-center text-vert-fonce transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-y-0 h-screen' : '-translate-y-full'
        } md:hidden block`}
      >
        <button
          className="absolute top-4 right-4 z-50"
          onClick={() => setMenuOpen(false)}
          aria-label="Fermer le menu"
        >
          <FaTimes size={30} />
        </button>

        <Link
          href="/"
          className="flex justify-center items-center my-8"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src={logo}
            alt="Logo Happy Dog"
            className="w-40 drop-shadow-lg"
            width={806}
            height={439}
          />
        </Link>

        <div className="flex flex-col w-full text-2xl font-medium">
          {links.map(({ path, label }) => (
            <div key={path} className="w-full">
              <hr className="w-full border-t border-vert-fonce opacity-50" />
              <Link
                href={path}
                onClick={() => setMenuOpen(false)}
                className={`flex justify-center items-center h-24 w-full text-center ${
                  pathname === path ? 'underline underline-offset-4' : ''
                }`}
              >
                {label}
              </Link>
            </div>
          ))}
          <hr className="w-full border-t border-vert-fonce opacity-50" />
        </div>

        <div className="mt-6 flex gap-6">
          <a
            href="https://www.facebook.com/profile.php?id=61566776497698#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/happydogbelfort"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
}

