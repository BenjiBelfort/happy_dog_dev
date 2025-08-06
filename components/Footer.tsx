import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-amber-200 flex flex-col items-center justify-center gap-1 p-4 md:flex-row md:gap-2">
      <p>&#169; {currentYear}</p>
      
      <div className="flex items-center gap-1">
        <span className="font-bold">HAPPY</span>
        <Image
          src="/images/backgrounds/patte-HD-noire.png"
          alt="Patte de chien Happy Dog"
          width={14}
          height={14}
          className="w-4 h-auto relative -top-0.5"
        />
        <span className="font-bold">DOG</span>
      </div>
      
      <p>Tous droits réservés.</p>

      <Link
        href="/mentions-legales"
        className="hover:text-sky-700 hover:underline transition-colors mx-2"
      >
        Mentions Légales.
      </Link>
      
      <a
        className="hover:text-sky-700 hover:underline transition-colors"
        href="https://benji-belfort-portfolio.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dev by Benji Belfort.
      </a>
    </footer>
  );
};

export default Footer;
