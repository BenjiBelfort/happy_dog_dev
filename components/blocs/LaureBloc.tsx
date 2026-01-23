import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const LaureBloc = () => {
  return (
    <div className="relative max-w-2xl mx-auto p-6 mt-16 shadow-lg/30 flex flex-col sm:flex-row gap-6 md:-rotate-2 bg-[url('/images/backgrounds/papier-texture.webp')] bg-cover bg-center bg-no-repeat">
      <div className="absolute -top-4 md:-top-4 sm:right-2 md:-right-12 max-w-[90%] w-full h-70 sm:w-48 sm:h-48 md:w-62 md:h-62 overflow-hidden shadow-lg border-10 border-white -rotate-1 md:rotate-3">
        <Image
          src="/images/services/toilettage/Pauline.webp"
          alt="Pauline, toiletteuse experte"
          fill
          className="object-cover "
        />
      </div>

      {/* Contenu texte */}
      <div className={caveat.className}>
        <h6 className="text-3xl sm:text-4xl font-bold mt-65 sm:mt-4 mb-6 sm:px-8">Bonjour, je suis Pauline</h6>
        <div className="flex-1 sm:max-w-[65%] md:max-w-[75%]">
          <p className="text-2xl/10 md:text-3xl/10 pb-4">
            Passionnée depuis toujours par les animaux, j’ai eu la chance de suivre une formation en toilettage afin de pouvoir prendre soin d’eux et les chouchouter au quotidien.
          </p>
        </div>

        <div className="flex-1 text-2xl/10 md:text-3xl/10 pb-2">
            Petits ou grands chiens, chats et lapins, j’aime m’occuper de chaque animal avec douceur et attention.
            <span className="block mt-4"></span>

            À l’écoute de leur caractère, je sais m’adapter à chacun et prendre le temps nécessaire pour que le toilettage soit un moment calme et agréable.
        </div>


        <div className="px-6 md:px-10 mt-4">
          <p className="text-2xl/10 md:text-3xl/10">
            Retrouvez-moi chez <span className="font-bold">Happy Dog</span> les{" "}
            <span className="underline underline-offset-2 decoration-1 decoration-dotted">mardis</span>,{" "}
            <span className="underline underline-offset-2 decoration-1 decoration-dotted">jeudis</span> et{" "}
            <span className="underline underline-offset-2 decoration-1 decoration-dotted">vendredis</span> sur rendez-vous.
            <br />
            <span className="block text-center mt-4">À bientôt&nbsp;!</span>
          </p>
        </div>

        <p className="font-bold text-4xl text-center sm:text-right px-8 mt-6 sm:mt-0">
            Pauline Maugain
        </p>
        <p className="text-2xl text-center mt-6">
          Pour prendre rendez-vous, contactez-moi au
          <span className="font-bold"> 07&nbsp;69&nbsp;41&nbsp;41&nbsp;75</span>
          <br />
          <span className="block">
            ou visitez notre site{" "}
            <a
              href="https://www.les-aristos-chiens.fr/"
              className="font-bold underline underline-offset-2"
            >
              les-aristos-chiens.fr
            </a>
          </span>
        </p>

      </div>
    </div>
  );
};

export default LaureBloc;
