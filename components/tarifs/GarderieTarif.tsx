import Image from "next/image";
import { Zilla_Slab } from "next/font/google";

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const GarderieTarif = () => {
  return (
    <div aria-labelledby="tarifs-garderie" className="relative mt-16 mb-18 px-4 w-full max-w-xl mx-auto">
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
        <div className={`text-center absolute bottom-[-28px] sm:bottom-[-32px] left-1/2 transform -translate-x-1/2 flex flex-col items-center bg-vert-clair w-[85%] sm:w-[75%] py-1 px-1 rounded-md shadow-lg/30 text-black text-s sm:text-xl font-semibold ${zillaSlab.className}`}>
            <p>Du lundi au vendredi de 9h15 à 17h30</p>
            <p>et le samedi de 10h à 16h.</p>
        </div>
    </div>
  );
};

export default GarderieTarif;
