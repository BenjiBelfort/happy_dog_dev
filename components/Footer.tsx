// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logoCPEP from "@/public/logo-CPEP.png";
import ClientYear from "@/components/ClientYear";


export default function Footer() {

  return (
    <footer className="bg-amber-200 text-black">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-3 md:items-start">
        {/* Colonne 1 : logo + réseaux */}
        <div>
          <Link href="/" aria-label="Retour à l'accueil" className="inline-block">
            <Image
              src="/happy-dog-logo.svg"
              alt="Happy Dog Belfort"
              width={512}
              height={512}
              priority={false}
              className="w-32 md:w-44 h-auto"
            />
          </Link>

          <p className="mt-3 max-w-md text-sm leading-relaxed opacity-90">
            <span className="font-semibold uppercase">Happy Dog</span> Belfort — boutique d’accessoires pour chiens (chats) heureux, salon de toilettage canin et garderie de jour pour chiens à Belfort.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61566776497698#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/10 ring-1 ring-black/20 transition hover:bg-teal-400"
            >
              <FaFacebook className="text-xl" />
            </a>

            <a
              href="https://www.instagram.com/happydogbelfort"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/10 ring-1 ring-black/20 transition hover:bg-teal-400"
            >
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>

        {/* Colonne 2 : menu (centré en desktop) */}
        <nav
          aria-label="Menu de pied de page"
          className="md:justify-self-center md:text-center"
        >
          <h3 className="text-xl font-semibold tracking-wide underline underline-offset-4">
            Menu
          </h3>
          <ul className="mt-4 space-y-3 md:space-y-4 text-xl md:inline-block">
            <li>
              <Link href="/" className="hover:underline hover:underline-offset-4">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/produits" className="hover:underline hover:underline-offset-4">
                Produits
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline hover:underline-offset-4">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#galerie" className="hover:underline hover:underline-offset-4">
                Galerie
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:underline hover:underline-offset-4">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Colonne 3 : coordonnées / horaires */}
        <div>
          <h3 className="text-xl font-semibold tracking-wide underline underline-offset-4">
            Coordonnées
          </h3>

          <address className="mt-4 not-italic space-y-1">
            <p>11 rue du Général Roussel, 90000 Belfort</p>
            <p>
              Tél.{" "}
              <a
                href="tel:+33646467617"
                className="hover:underline hover:underline-offset-4"
              >
                06&nbsp;46&nbsp;46&nbsp;76&nbsp;17
              </a>
            </p>
            <p>
              <a
                href="mailto:happydogbelfort@gmail.com"
                className="hover:underline hover:underline-offset-4"
              >
                happydogbelfort@gmail.com
              </a>
            </p>
          </address>

          <div className="mt-5">
            <h3 className="text-xl font-semibold tracking-wide underline underline-offset-4">
              Horaires
            </h3>
            <ul className="mt-2">
              <li><span className="italic">Mardi, jeudi et vendredi&nbsp;</span> : 9h15 – 18h00</li>
              <li><span className="italic">Mercredi&nbsp;</span> : 9h15 – 12h30</li>
              <li><span className="italic">Samedi&nbsp;</span> : 10h00 – 17h30</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ligne de séparation */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-black/30" />
      </div>

      {/* Bas de footer */}
      <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm opacity-90">
          © <ClientYear /> <span className="inline opacity-80">•</span>{" "}
          <span className="font-semibold uppercase">Happy Dog</span> Belfort. Tous droits réservés.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/mentions-legales"
            className="text-sm hover:text-sky-700 hover:underline transition-colors hover:underline-offset-4"
          >
            Mentions légales
          </Link>

          <span className="hidden md:inline opacity-80">•</span>

          <a
            href="https://benji-belfort-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:text-sky-700 hover:underline transition-colors hover:underline-offset-4"
          >
            Dev by Benji Belfort
            <Image
              src={logoCPEP}
              alt="Logo CPEP"
              className="h-5 w-auto"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
