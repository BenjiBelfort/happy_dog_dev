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
 
        <div className="md:px-18">
            {/* Bain & brossage */}
            <div className="my-8">
            <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-lg sm:text-xl font-bold underline">Bain & brossage</h4>
            </div>
            <div className="flex justify-between">
                <p>Petits clients</p>
                <p className="font-bold">40 € - 1 heure</p>
            </div>
            <div className="flex justify-between">
                <p>Grands cliens</p>
                <p className="font-bold">50 € / heure</p>
            </div>
                <p><span className="font-bold">10 €</span> supplémentaire pour un soin pendant le shampoing sur demande</p>
            </div>

            {/* Tonte */}
            <div className="my-8">
            <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-lg sm:text-xl font-bold underline">Tonte</h4>
            </div>
            <div className="flex justify-between">
                <p>Petits clients</p>
                <p className="font-bold">50 €</p>
            </div>
            <div className="flex justify-between">
                <p>Moyens cliens</p>
                <p className="font-bold">55 € - 60 €</p>
            </div>
            <div className="flex justify-between">
                <p>Grands cliens</p>
                <p className="font-bold">65 € - 70 €</p>
            </div>
            </div>

            {/* Coupe Ciseaux */}
            <div className="my-8">
                <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-lg sm:text-xl font-bold underline">Coupe Ciseaux</h4>
                    <p className="font-bold">65 €</p>
                </div>
            </div>

            {/* Épilation */}
            <div className="my-8">
                <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-lg sm:text-xl font-bold underline">Épilation</h4>
                    <p className="font-bold">80 €</p>
                </div>
            </div>

            {/* Chat */}
            <div className="my-8">
            <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-lg sm:text-xl font-bold underline">Chat</h4>
            </div>
            <div className="flex justify-between">
                <p>Bain & brossage</p>
                <p className="font-bold">35 € - 40 €</p>
            </div>
            <div className="flex justify-between">
                <p>Brossage & shampoing</p>
                <p className="font-bold">25 € / heure</p>
            </div>
            <div className="flex justify-between">
                <p>Tonte</p>
                <p className="font-bold">45 €</p>
            </div>
            </div>

            {/* Lapin */}
            <div className="my-8">
            <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-lg sm:text-xl font-bold underline">Lapin</h4>
            </div>
            <div className="flex justify-between">
                <p>Brossage & coupe</p>
                <p className="font-bold">20 €</p>
            </div>
            <div className="flex justify-between">
                <p>Bain & brossage</p>
                <p className="font-bold">30 €</p>
            </div>
            </div>
        </div>

        <p className="text-center text-sm">Un supplément peut être demandé en cas de <span className="text-base font-semibold">gros nœuds</span></p>
        </div>

        {/* Bloc horaires chevauchant */}
        <div className={`text-center absolute bottom-[-30px] sm:bottom-[-32px] left-1/2 transform -translate-x-1/2 flex flex-col items-center bg-vert-clair w-[85%] sm:w-[75%] py-1 px-1 rounded-md shadow-lg/30 text-black text-s sm:text-xl font-semibold ${zillaSlab.className}`}>
            <p>Les mardis, jeudis et vendredis sur rendez-vous</p>
            <p>07 69 41 41 75</p>
        </div>
    </div>
  );
};

export default ToilettageTarif;
