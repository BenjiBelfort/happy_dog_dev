import Image from "next/image";
import { Zilla_Slab } from "next/font/google";

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ToilettageTarif = () => {
  return (
    <div aria-labelledby="tarifs-toilettage" className="relative mt-16 mb-18 px-4 w-full max-w-xl mx-auto">
        <div className="bg-emerald-800 rounded-2xl shadow-lg/30 p-4 pb-12 sm:pb-16 text-white bg-[url('/pattern/pattern-dots.png')] bg-repeat">
        <h3 id="tarifs-toilettage" className="text-2xl sm:text-3xl font-bold text-white text-center">Tarifs toilettage</h3>
        <Image
            src="/images/backgrounds/ornement.png"
            alt="ornement"
            width={565}
            height={63}
            className="w-54 mx-auto my-2"
        />
        <p className="text-center mb-4">Les tarifs inclus : griffes, soins oreilles et yeux, démêlage, bain, coupe et surtout beaucoup de câlins.</p>

        <div className="md:px-18">
            {/* petit chien */}
            <div className="my-12">
            <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-lg sm:text-xl font-bold underline">Mini / Petit chien</h4>
                <p className="italic text-sm sm:text-base">Durée : 1h30 environ</p>
            </div>
            <div className="flex justify-between">
                <p>Bain</p>
                <p className="font-bold">30 à 45 €</p>
            </div>
            <div className="flex justify-between">
                <p>Coupe / Tonte / Épilation</p>
                <p className="font-bold">40 à 55 €</p>
            </div>
            </div>

            {/* chien moyen */}
            <div className="my-12">
            <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-lg sm:text-xl font-bold underline">Chien moyen</h4>
                <p className="italic text-sm sm:text-base">Durée : 2h00 environ</p>
            </div>
            <div className="flex justify-between">
                <p>Bain</p>
                <p className="font-bold">45 à 60 €</p>
            </div>
            <div className="flex justify-between">
                <p>Tonte / Épilation</p>
                <p className="font-bold">50 à 65 €</p>
            </div>
            </div>

            {/* grand chien */}
            <div className="my-12">
            <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-lg sm:text-xl font-bold underline">Grand chien</h4>
                <p className="italic text-sm sm:text-base">Durée : 2h00 environ</p>
            </div>
            <div className="flex justify-between">
                <p>Bain + finition</p>
                <p className="font-bold">55 à 65 €</p>
            </div>
            </div>

            {/* très grand chien */}
            <div className="my-12">
            <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-lg sm:text-xl font-bold underline">Très grand chien</h4>
                <p className="italic text-sm sm:text-base">Durée : 3h30 environ</p>
            </div>
            <div className="flex justify-between">
                <p>Prix sur devis après avoir vu l&apos;animal</p>
            </div>
            </div>

        </div>

        <p className="text-center text-sm">Un supplément pourra être demandé suivant l&apos;état du pelage et le caractère de l&apos;animal.</p>
        </div>

        {/* Bloc horaires chevauchant */}
        <div className={`text-center absolute bottom-[-28px] sm:bottom-[-32px] left-1/2 transform -translate-x-1/2 flex flex-col items-center bg-vert-clair w-[85%] sm:w-[75%] py-1 px-1 rounded-md shadow-lg/30 text-black text-s sm:text-xl font-semibold ${zillaSlab.className}`}>
            <p>Du mercredi au samedi sur rendez-vous</p>
            <p>06 61 44 84 43</p>
        </div>
    </div>
  );
};

export default ToilettageTarif;
