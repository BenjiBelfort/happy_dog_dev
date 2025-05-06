import { PiHairDryerFill } from "react-icons/pi";
import Image from 'next/image';
import LinkButton from "../ui/buttons/LinkButton";

const ProductsBloc = () => {
  return (
    <article className="relative flex flex-col-reverse md:flex-row justify-center items-center text-center text-vert-fonce bg-green-300 md:rounded-3xl p-8 shadow-lg/30 bg-[url('/images/backgrounds/fond-os.png')] bg-repeat max-w-4xl mx-auto my-24 gap-6">

        {/* Partie gauche */}
        <div className="md:basis-3/5">
            <div className="h-96 border-18 border-white bg-yellow-300 shadow-lg/50 overflow-hidden -rotate-2">
                <Image
                    src="/images/produits/toilettage.webp"
                    alt="Toilettage"
                    width={518}
                    height={800}
                    className="h-96 object-cover"
                />
    
            </div>
        </div>

        {/* Partie droite */}
        <div className="md:basis-2/5 mx-auto">
            <div className="bg-green-500/80 rounded-3xl p-3">
                <div className="bg-white rounded-xl p-4 flex flex-col items-center shadow-lg/30">
                    <span className="py-4">
                        <PiHairDryerFill size={48} />
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-medium">Bain et toilettage</h3>
                    <p className="my-4">Offrez à votre compagnon une séance beauté entre les mains expertes de Au P&apos;tit Bonheur Canin.</p>
                    <LinkButton
                        text="Découvrir"
                        href="/services"
                        bgColor="bg-green-600"
                        hoverColor="hover:bg-green-800"
                    />
                </div>
            </div>
        </div>
        
    </article>
  );
};

export default ProductsBloc;
