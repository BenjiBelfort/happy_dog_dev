import { PiBoneLight } from "react-icons/pi";
import Image from 'next/image';
import LinkButton from "../ui/buttons/LinkButton";

const ProductsBloc = () => {
  return (
    <article className="relative flex flex-col-reverse md:flex-row justify-center items-center text-center text-vert-fonce bg-sky-300 md:rounded-3xl p-8 shadow-lg/30 bg-[url('/images/backgrounds/fond-os.png')] bg-repeat max-w-4xl mx-auto my-24 gap-6">

        {/* Partie gauche */}
        <div className="md:basis-3/5">
            <div className="h-96 border-18 border-white bg-yellow-300 shadow-lg/50 overflow-hidden">
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
            <div className="bg-sky-500/80 rounded-3xl p-3">
                <div className="bg-white rounded-xl p-4 flex flex-col items-center shadow-lg/30">
                    <span className="py-4">
                        <PiBoneLight size={48} />
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-medium">Nos croquettes</h3>
                    <p className="my-4">Découvrez notre gamme de croquette et alimentation pour chiens made in France.</p>
                    <LinkButton
                        text="Découvrir"
                        href="/produits"
                        bgColor="bg-sky-600"
                        hoverColor="hover:bg-sky-800"
                    />
                </div>
            </div>
        </div>
        
    </article>
  );
};

export default ProductsBloc;
