import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const VioletteBloc = () => {
  return (
    <div id='contact' className="relative max-w-2xl mx-auto p-6 mt-16 shadow-lg/30 flex flex-col sm:flex-row gap-6 md:-rotate-2 bg-[url('/images/backgrounds/papier-texture.webp')] bg-cover bg-center bg-no-repeat">
      <div className="absolute -top-4 md:-top-4 sm:right-2 md:-right-12 max-w-[90%] w-full h-70 sm:w-48 sm:h-48 md:w-62 md:h-62 overflow-hidden shadow-lg border-10 border-white -rotate-1 md:rotate-3">
        <Image
          src="/images/violette.webp"
          alt="Violette et Vicky"
          fill
          className="object-cover"
        />
      </div>

      <div className={caveat.className}>
        <h6 className="text-3xl sm:text-4xl font-bold mt-65 sm:mt-4 mb-6 sm:px-8">Bonjour, je suis Violette</h6>

        <div className="flex-1 sm:max-w-[65%] md:max-w-[70%]">
          <p className="text-2xl/10 md:text-3xl/10 pb-2">
            Et voici ma tornade d&apos;amour, Vicky. Toujours à mes côtés pour vous accueillir dans notre boutique
            consacrée aux chiens heureux. Ici, tout est pensé pour le bien-être et le plaisir de vos compagnons.
          </p>
        </div>

        <p className="text-2xl/10 md:text-3xl/10">
          Venez découvrir notre espace garderie de jour, notre boutique spécialisée et notre coin toilettage.
          <br />
          À très vite chez <span className="font-bold">Happy Dog</span> !
        </p>

        <p className="font-bold text-4xl text-center sm:text-right px-8 mt-6 sm:mt-0">
          Violette & Vicky
        </p>

        <p className="text-2xl text-center mt-6">
          Retrouvez-nous au
          <br />
          <span className="font-bold">11 rue du Général Roussel, 90000 Belfort</span>
          <br />
          <span className="font-bold">06 46 46 76 17</span>
          <br />
          <a href="mailto:happydogbelfort@gmail.com" className="underline decoration-slate-500">
            happydogbelfort@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default VioletteBloc;
