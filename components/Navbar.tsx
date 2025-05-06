'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../public/Logo-Happy-Dog.png';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const links = [
    { path: '/', label: 'Accueil' },
    { path: '/produits', label: 'Produits' },
    { path: '/services', label: 'Services' },
    { path: '/#contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-vert-clair text-xl text-vert-fonce w-full md:max-w-3xl mx-auto px-6 md:rounded-md sticky top-0 md:top-4 z-50 shadow-lg/30 font-medium">
      <div className="mx-auto">
        {/* Desktop links */}
        <div className="hidden md:flex justify-center space-x-6">
          {links.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              onMouseEnter={() => setActiveLink(path)}
              onMouseLeave={() => setActiveLink(null)}
              className="relative inline-block px-4 py-2"
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
                className="flex justify-center items-center h-24 w-full text-center"
              >
                {label}
              </Link>
            </div>
          ))}
          <hr className="w-full border-t border-vert-fonce opacity-50" />
        </div>

        <div className="mt-6">
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
