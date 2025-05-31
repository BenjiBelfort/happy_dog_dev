import { FaPumpSoap } from "react-icons/fa";
import Image from 'next/image';
import LinkButton from "../ui/buttons/LinkButton";

const ProductsBloc3 = () => {
  return (
    <article className="relative flex flex-col-reverse sm:flex-row justify-center items-center text-center bg-rose-300 md:rounded-3xl p-8 shadow-lg/30 bg-[url('/pattern/pattern-dots.png')] bg-repeat max-w-4xl mx-auto my-12 md:my-24 gap-6">

        {/* Partie gauche */}
        <div className="md:basis-3/5">
            <div className="md:absolute md:top-1/2 md:-translate-y-1/2 mb-4 md:mb-0 h-auto md:h-[105%] md:w-[55%] border-10 md:border-16 border-white bg-yellow-300 shadow-lg/50 overflow-hidden md:-rotate-2">
                <Image
                    src="/images/produits/gamme-soins.webp"
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
                    <span className="py-4 text-rose-500">
                        <FaPumpSoap size={48} />
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-bold">Soins</h3>
                    <p className="my-4">Une gamme de soins 100 % fabriqués en France pour la toilette de votre ami.</p>
                    <LinkButton
                        text="Découvrir"
                        href="/produits#soins"
                        bgColor="bg-rose-600"
                    />
                </div>
            </div>
        </div>
    </article>
  );
};

export default ProductsBloc3;
