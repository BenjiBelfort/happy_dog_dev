
import Image from 'next/image';

const VioletteBloc = () => {
  return (
    <article className="relative flex flex-col md:flex-row items-center text-vert-fonce bg-slate-300 md:rounded-3xl  p-6 shadow-lg/30 bg-[url('/pattern/pattern-dots.png')] bg-repeat max-w-3xl mx-auto my-32" id='contact'>



        {/* Partie gauche */}
        <div className="md:basis-1/2 mx-auto text-center md:text-left p-4">
            <h3 className="text-3xl sm:text-4xl font-bold">Qui sommes nous ?</h3>
            <p className="mt-4 hyphens-auto">Je m&apos;appelle Violette et voici mon acolyte Vicky, ma tornade d&apos;amour, toujours à mes côtés pour vous accueillir dans notre boutique consacrée aux chiens heureux.</p>
        </div>

        {/* Partie droite */}
        <div className="md:basis-1/2 w-[300px] h-auto md:w-50 md:h-70 relative border-10 md:border-16 border-white bg-yellow-300 shadow-lg/50 overflow-hidden md:-mt-14">
            <Image
                src="/images/violette.webp"
                alt="Violette et Vicky"
                width={518}
                height={800}
                className="object-cover"
            />
        </div>
        
    </article>
  );
};

export default VioletteBloc;
