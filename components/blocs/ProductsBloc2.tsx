import { GiSpiralLollipop } from "react-icons/gi";
import Image from 'next/image';
import LinkButton from "../ui/buttons/LinkButton";

const ProductsBloc2 = () => {
  return (
    <article className="relative flex flex-col md:flex-row justify-center items-center text-center text-vert-fonce bg-amber-300 md:rounded-3xl p-8 shadow-lg/30 bg-[url('/images/backgrounds/fond-os.png')] bg-repeat max-w-4xl mx-auto my-24 gap-6">

        {/* Partie gauche */}
        <div className="md:basis-2/5 mx-auto">
            <div className="bg-amber-500/80 rounded-3xl p-3 my-12 mx-4">
                <div className="bg-white rounded-xl p-4 flex flex-col items-center shadow-lg/30">
                    <span className="py-4 text-amber-500">
                        <GiSpiralLollipop size={48} />
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-bold">Accessoires</h3>
                    <p className="my-4 hyphens-auto">Une gamme d&apos;accéssoires pour le plaisir de nos toutous.</p>
                    <LinkButton
                        text="Découvrir"
                        href="/produits"
                        bgColor="bg-amber-600"
                        hoverColor=""
                    />
                </div>
            </div>
        </div>

        {/* Partie droite */}
        <div className="md:basis-3/5">
            <div className="h-96 border-10 md:border-16 border-white bg-yellow-300 shadow-lg/50 overflow-hidden -rotate-2">
                <Image
                    src="/images/produits/accessoires.webp"
                    alt="Chien heureux"
                    width={518}
                    height={800}
                    className="h-96 object-cover"
                />
    
            </div>
        </div>
        
    </article>
  );
};

export default ProductsBloc2;
