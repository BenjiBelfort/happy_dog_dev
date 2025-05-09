import { TbDog } from "react-icons/tb";
import Image from 'next/image';
import LinkButton from "../ui/buttons/LinkButton";

const ProductsBloc4 = () => {
  return (
    <article className="relative flex flex-col sm:flex-row justify-center items-center text-center bg-orange-300 md:rounded-3xl p-8 shadow-lg/30 bg-[url('/pattern/pattern-dots.png')] bg-repeat max-w-4xl mx-auto my-12 md:my-24 gap-6">

        {/* Partie gauche */}


        <div className="md:basis-2/5 mx-auto">
            <div className="bg-slate-500/80 rounded-3xl p-3 my-2 md:my-12 mx-4">
                <div className="bg-white rounded-xl p-4 flex flex-col items-center shadow-lg/30">
                    <span className="py-4 text-orange-500">
                        <TbDog size={48} />
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-bold">Garderie de jour</h3>
                    <p className="my-4">Profitez d&apos;un espace convivial pour votre animal, le temps d&apos;un rendez-vous.</p>
                    <LinkButton
                        text="Découvrir"
                        href="/services"
                        bgColor="bg-orange-600"
                    />
                </div>
            </div>
        </div>

        {/* Partie droite */}
        <div className="md:basis-3/5">
            <div className="mb-4 sm:mb-0 h-96 border-10 md:border-16 border-white bg-yellow-300 shadow-lg/50 overflow-hidden md:-rotate-2">
                <Image
                    src="/images/headers/header_services.webp"
                    alt="Toilettage"
                    width={518}
                    height={800}
                    className="h-96 object-cover"
                />
    
            </div>
        </div>

    </article>
  );
};

export default ProductsBloc4;
