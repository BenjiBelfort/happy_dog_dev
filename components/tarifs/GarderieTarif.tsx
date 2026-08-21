import Image from "next/image";
import { Zilla_Slab } from "next/font/google";

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const GarderieTarif = () => {
  return (
    <div aria-labelledby="tarifs-garderie" className="relative mt-16 mb-24 px-4 w-full max-w-xl mx-auto">
        <div className="bg-emerald-800 rounded-2xl shadow-lg/30 p-4 pb-12 sm:pb-16 text-white bg-[url('/pattern/pattern-dots.png')] bg-repeat">
            <h3 id="tarifs-garderie" className="text-2xl sm:text-3xl font-bold text-white text-center">Tarifs garderie</h3>
            <Image
            src="/images/backgrounds/ornement.png"
            alt="ornement"
            width={565}
            height={63}
            className="w-54 mx-auto my-2"
            />
            <p className="text-center mb-4">Les tarifs sont dégressifs en fonction de la durée de garde.</p>
            
            <div className="grid grid-cols-2 items-center gap-y-6 md:px-24">
            <div>
                <p className="text-lg font-semibold">L&apos;heure</p>
            </div>
            <div className="text-right">
                <p className="text-2xl font-bold">9 €</p>
            </div>
            <div>
                <p className="text-lg font-semibold">Demi-journée</p>
                <p className="text-sm">De 2h à 4h de garde</p>
            </div>
            <div className="text-right">
                <p className="text-2xl font-bold">20 €</p>
            </div>
            <div>
                <p className="text-lg font-semibold">Journée</p>
                <p className="text-sm">De 4h à 8h de garde</p>
            </div>
            <div className="text-right">
                <p className="text-2xl font-bold">30 €</p>
            </div>
            </div>
        </div>

        {/* Bloc horaires chevauchant */}
        <div
        className={`
            absolute bottom-[-62px] left-1/2
            flex w-[90%] -translate-x-1/2 flex-col items-center
            rounded-md bg-vert-clair px-2 py-2 pb-4
            text-center text-sm font-semibold text-black shadow-lg/30
            sm:w-[85%] sm:text-xl
            ${zillaSlab.className}
        `}
        >
        <p>Lundi de 9h15 à 12h30</p>
        <p>Mardi, jeudi et vendredi de 9h15 à 18h</p>
        <p>et le samedi de 10h à 17h30.</p>

        {/* Encart fermeture */}
        <span
            className="
            absolute -bottom-4 left-1/2 z-10
            inline-flex -translate-x-1/2 -rotate-1
            items-center whitespace-nowrap
            rounded border border-red-300 bg-red-50
            px-3 py-1 text-xs font-semibold text-red-700
            shadow-sm sm:text-sm
            "
        >
            Fermé le mercredi
        </span>
        </div>
    </div>
  );
};

export default GarderieTarif;
