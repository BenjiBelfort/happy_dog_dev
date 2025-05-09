
import Image from 'next/image';

const VioletteBloc = () => {
  return (
    <article id='contact' className="relative flex flex-col md:flex-row items-center bg-slate-300 md:rounded-3xl  p-6 shadow-lg/30 bg-[url('/pattern/pattern-dots.png')] bg-repeat max-w-3xl mx-auto my-32 scroll-mt-4 md:scroll-mt-32">



        {/* Partie gauche */}
        <div className="md:basis-1/2 mx-auto text-center p-6">
            <h3 className="text-3xl sm:text-4xl font-bold">Qui sommes nous ?</h3>
            <p className="mt-4 hyphens-auto">Je m&apos;appelle Violette et voici mon acolyte Vicky, ma tornade d&apos;amour, toujours à mes côtés pour vous accueillir dans notre boutique consacrée aux chiens heureux.</p>
            <Image
                src="/images/backgrounds/ornement.png"
                alt="ornement"
                width={200}
                height={200}
                className="mx-auto my-3 invert"
            />
            <p className="">11 rue du Général Roussel, 90000 Belfort</p>
            <p className="font-bold">06 46 46 76 17</p>
            <a href="mailto:happydogbelfort@gmail.com" className='underline decoration-slate-500'>happydogbelfort@gmail.com</a>
        </div>

        {/* Partie droite */}
        <div className="md:basis-1/2 w-[300px] h-auto md:w-50 md:h-96 relative border-8 md:border-14 border-white bg-yellow-300 shadow-lg/50 overflow-hidden md:-mt-12">
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
