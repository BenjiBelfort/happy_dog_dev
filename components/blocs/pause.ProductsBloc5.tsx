import { PiHairDryerFill } from "react-icons/pi";
import Image from 'next/image';
import LinkButton from "../ui/buttons/LinkButton";

const ProductsBloc5 = () => {
  return (
    <article className="relative flex flex-col-reverse sm:flex-row justify-center items-center text-center bg-stone-300 md:rounded-3xl p-8 shadow-lg/30 bg-[url('/pattern/pattern-dots.png')] bg-repeat max-w-4xl mx-auto my-12 md:my-24 gap-6">

        {/* Partie gauche */}
        <div className="md:basis-3/5">
            <div className="md:absolute md:top-1/2 md:-translate-y-1/2 mb-4 md:mb-0 h-auto md:h-[105%] md:w-[55%] border-10 md:border-16 border-white bg-yellow-300 shadow-lg/50 overflow-hidden md:-rotate-2">
                <Image
                    src="/images/produits/toilettage.webp"
                    alt="Toilettage"
                    width={518}
                    height={800}
                    className="object-cover h-full w-full"
                />
    
            </div>
        </div>

        {/* Partie droite */}
        <div className="md:basis-2/5 mx-auto">
            <div className="bg-slate-500/80 rounded-3xl p-3 my-2 md:my-4 mx-4">
                <div className="bg-white rounded-xl p-4 flex flex-col items-center shadow-lg/30">
                    <span className="py-4 text-stone-500">
                        <PiHairDryerFill size={48} />
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-bold">Bain et toilettage</h3>
                    <p className="my-4">Offrez à votre compagnon une séance beauté entre les mains expertes de Laure : <span className="font-bold">Au P&apos;tit Bonheur Canin</span> !</p>
                    <LinkButton
                        text="Découvrir"
                        href="/services#toilettage"
                        bgColor="bg-stone-600"
                    />
                </div>
            </div>
        </div>
        
    </article>
  );
};

export default ProductsBloc5;
