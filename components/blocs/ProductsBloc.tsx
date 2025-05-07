import { PiBoneFill } from "react-icons/pi";
import Image from 'next/image';
import LinkButton from "../ui/buttons/LinkButton";

const ProductsBloc = () => {
  return (
    <article className="relative flex flex-col-reverse md:flex-row justify-center items-center text-center text-vert-fonce bg-sky-300 md:rounded-3xl p-8 shadow-lg/30 max-w-4xl mx-auto my-24 gap-6 bg-[url('/pattern/pattern-dots.png')] bg-repeat">

        {/* Partie gauche */}
        <div className="md:basis-3/5">
            <div className="h-96 border-10 md:border-16 border-white bg-yellow-300 shadow-lg/50 overflow-hidden -rotate-2">
                <Image
                    src="/images/produits/produits1.webp"
                    alt="Chien heureux"
                    width={518}
                    height={800}
                    className="h-96 object-cover"
                />
    
            </div>
        </div>

        {/* Partie droite */}
        <div className="md:basis-2/5 mx-auto">
            <div className="bg-slate-500/80 rounded-3xl p-3 my-12 mx-4">
                <div className="bg-white rounded-xl p-4 flex flex-col items-center shadow-lg/30">
                    <span className="py-4 text-sky-500">
                        <PiBoneFill size={48} />
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-bold">Croquettes</h3>
                    <p className="my-4 hyphens-auto">Découvrez notre gamme de croquette et friandises pour chiens made in France.</p>
                    <LinkButton
                        text="Découvrir"
                        href="/produits"
                        bgColor="bg-sky-600"
                        hoverColor=""
                    />
                </div>
            </div>
        </div>
        
    </article>
  );
};

export default ProductsBloc;
