import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const LaureBloc = () => {
  return (
    <div className="relative max-w-2xl mx-auto p-6 mt-16 shadow-lg/30 flex flex-col sm:flex-row gap-6 md:-rotate-2 bg-[url('/images/backgrounds/papier-texture.webp')] bg-cover bg-center bg-no-repeat">
      <div className="absolute -top-8 sm:-top-4 sm:-right-3 w-full h-100 sm:w-52 sm:h-62 overflow-hidden shadow-lg border-10 border-white rotate-2">
        <Image
          src="/images/services/toilettage/Laure.webp"
          alt="Laure, toiletteuse experte"
          fill
          className="object-cover "
        />
      </div>

      {/* Contenu texte */}
      <div className={caveat.className}>
        <h6 className="text-3xl sm:text-4xl font-bold mt-90 sm:mt-4 mb-6 sm:px-8">Bonjour, je suis Laure</h6>
        <div className="flex-1 sm:max-w-[65%] md:max-w-[75%]">
            <p className="text-2xl/10 md:text-3xl/10 pb-2">
                Après une reconversion professionnelle, j’ai obtenu mon diplôme de toilettage en 2010.
                <br />
                J’ai exercé mon activité pendant 3 ans à Fesches-le-Châtel.
            </p>
        </div>
        <p className="text-2xl/10 md:text-3xl/10">
        Retrouvez-moi chez <span className="font-bold">Happy Dog</span> les jeudis, vendredis et samedis sur rendez-vous.
        <br />
        J’exerce également sur Etouvans les lundis, mardis et mercredis.
        <br />
        À bientôt !
        </p>
        <p className="font-bold text-4xl text-center sm:text-right px-8 mt-6 sm:mt-0">
            Laure Besançon
        </p>
        <p className="text-2xl text-center mt-6">  
            Pour prendre rendez-vous,
            contactez-moi au
            <span className="font-bold"> 06 61 44 84 43</span>
        </p>
      </div>
    </div>
  );
};

export default LaureBloc;
