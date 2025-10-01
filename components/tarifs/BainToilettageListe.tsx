import Image from "next/image";
import { Zilla_Slab } from "next/font/google";

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const BainToilettageListe = () => {
  return (
    <div
      aria-labelledby="bain-toilettage-libre-service"
      className="relative mt-16 mb-18 px-4 w-full max-w-xl mx-auto"
    >
      <div className="bg-emerald-700 rounded-2xl shadow-lg/30 p-6 sm:p-8 text-white bg-[url('/pattern/pattern-dots.png')] bg-repeat">
        <h3
          id="bain-toilettage-libre-service"
          className="text-2xl sm:text-3xl font-bold text-white text-center"
        >
          Libre-service bain & toilettage
        </h3>
        <Image
          src="/images/backgrounds/ornement.png"
          alt="ornement"
          width={565}
          height={63}
          className="w-54 mx-auto my-2"
        />
        <p className="text-center mb-6">
          Profitez d’un espace pratique et confortable pour partager un vrai
          moment de complicité avec votre compagnon 🐾
        </p>

        {/* Liste slogans */}
        <ul className="space-y-6 text-lg sm:text-xl">
          <li className="flex items-start gap-2">
            <span className="text-2xl">🐾</span>
            <span>Lavez-le vous-même, chouchoutez-le comme jamais !</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-2xl">🛁</span>
            <span>Un bain pratique, un moment unique avec votre chien.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-2xl">✨</span>
            <span>
              Le toilettage en toute liberté, pour des maîtres heureux et des
              chiens épanouis.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-2xl">🐶</span>
            <span>Libre-service, mais plein d’amour !</span>
          </li>
        </ul>
      </div>

      {/* Bloc accroche chevauchant */}
      <div
        className={`text-center absolute bottom-[-28px] sm:bottom-[-32px] left-1/2 transform -translate-x-1/2 flex flex-col items-center bg-vert-clair w-[85%] sm:w-[75%] py-2 px-3 rounded-md shadow-lg/30 text-black text-base sm:text-lg font-semibold ${zillaSlab.className}`}
      >
        <p>✨ Un vrai moment de complicité ✨</p>
      </div>
    </div>
  );
};

export default BainToilettageListe;
