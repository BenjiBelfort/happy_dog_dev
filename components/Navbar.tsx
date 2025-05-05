'use client';
import { useState, useEffect, CSSProperties } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../public/Logo-Happy-Dog.png';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);


  

  // Gérer le blocage du scroll sur mobile
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'; // Désactive le scroll
    } else {
      document.body.style.overflow = 'auto'; // Réactive le scroll
    }
  }, [menuOpen]);

  const blobStyle = (linkPath: string): CSSProperties => {
    const isActive = activeLink === linkPath;
    return {
      position: 'absolute',
      top: '-5%',
      left: '-10%',
      right: '-10%',
      bottom: '-5%',
      backgroundColor: '#e5ecf4',
      borderRadius: '92% 8% 90% 10% / 14% 90% 10% 86%',
      transformOrigin: 'center center',
      zIndex: 0,
      opacity: isActive ? 1 : 0,
      transform: isActive ? 'scale(1)' : 'scale(0)',
      transition: 'transform 300ms cubic-bezier(0.5, -0.5, 0.3, 1.4), opacity 300ms ease-in',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))',
    };
  };

  const links = ['/boutique', '/produits', '/services', '/contact'];

  return (
    <nav className="bg-vert-clair text-vert-fonce md:max-w-3xl mx-auto px-6 md:rounded-md sticky top-0 md:top-4 z-100 shadow-lg/30">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-6 text-lg font-medium text-vert-fonce">
          {links.map(path => (
            <Link
              key={path}
              href={path}
              onMouseEnter={() => setActiveLink(path)}
              onMouseLeave={() => setActiveLink(null)}
              className="relative inline-block px-4 py-2 text-lg"
            >
              <span className="relative z-10 capitalize">{path.slice(1)}</span>
              <span style={blobStyle(path)} />
            </Link>
          ))}
          <a
            href="https://www.instagram.com/happydogbelfort"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            onMouseEnter={() => setActiveLink('instagram')}
            onMouseLeave={() => setActiveLink(null)}
            className="relative inline-block px-3 py-2 text-2xl text-vert-fonce"
          >
            <span className="relative z-10">
              <FaInstagram />
            </span>
            <span style={blobStyle('instagram')} />
          </a>
        </div>

        {!menuOpen && (
          <button
            className="md:hidden z-50 flex items-center p-2 space-x-3"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <FaBars size={24} />
            <span className="text-xl">Menu</span>
            
          </button>
        )}
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-vert-clair flex flex-col items-center pt-6 text-vert-fonce transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        } md:hidden block`}
      >
        {/* Bouton de fermeture */}
        <button
          className="absolute top-4 right-4 z-50"
          onClick={() => setMenuOpen(false)}
          aria-label="Fermer le menu"
        >
          <FaTimes size={30} />
        </button>

        {/* Logo */}
        <Link href="/" className="flex justify-center items-center my-8" onClick={() => setMenuOpen(false)}>
          <Image src={logo} alt="Logo Happy Dog" className="w-40" />
        </Link>
        
        {/* Liens */}
        <div className="flex flex-col w-full text-2xl font-medium">
          {links.map((path) => (
            <div key={path} className="w-full">
              <hr className="w-full border-t border-vert-fonce opacity-50" />
              <Link
                href={path}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={() => setActiveLink(path)}
                onMouseLeave={() => setActiveLink(null)}
                className="capitalize flex justify-center items-center h-24 w-full text-center"
              >
                {path.slice(1)}
              </Link>
            </div>
          ))}
          <hr className="w-full border-t border-vert-fonce opacity-50" />
        </div>

        {/* Logo Instagram */}
        <div className="mt-6">
          <a
            href="https://www.instagram.com/happydogbelfort"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="text-3xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
}
