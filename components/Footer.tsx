import Image from "next/image";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-amber-200 flex flex-col items-center justify-center gap-1 p-4 sm:flex-row sm:gap-3">
      <p>&#169; {currentYear}</p>
      
      <div className="flex items-center gap-1">
        <span className="font-bold">HAPPY</span>
        <Image
          src="/images/backgrounds/patte-HD-noire.png"
          alt="Patte de chien Happy Dog"
          width={14}
          height={14}
          style={{ height: "auto" }}
        />
        <span className="font-bold">DOG</span>
      </div>
      
      <p>Tous droits réservés.</p>
      
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
