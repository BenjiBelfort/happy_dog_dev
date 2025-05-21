
import Image from "next/image";
import { Zilla_Slab } from "next/font/google";

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const GarderieSection = () => {
  return (
    <section id="garderie" className="flex flex-col items-center mt-12 scroll-mt-20 md:scroll-mt-24">
      <h2 className="text-vert-fonce text-3xl sm:text-4xl font-bold text-center">Garderie de jour</h2>

      <p className="md:text-xl max-w-2xl text-center my-8 mx-2 mb-12">
        Offrez à votre compagnon une journée remplie d&apos;attention, de jeux et de détente pendant vos rendez-vous. Notre service de garderie accueille votre chien dans <span className="font-bold">un environnement sécurisé et stimulant, pensé pour son bien-être</span>. Jeux, repos et promenades rythment sa journée sous la supervision attentive de notre équipe</p>
      
      {/* jeux et occupations */}
      <div className="relative w-full max-w-5xl flex flex-col items-center md:flex-row md:items-start md:justify-between md:gap-8">
        {/* Image */}
        <div className="relative w-full md:w-4/7 aspect-[4/3] md:-rotate-1">
          <Image
            src="/images/services/garderie/garderie1.webp"
            alt="La garderie des chiens heureux à Belfort"
            fill
            className="object-cover border-10 md:border-16 border-white shadow-lg/30 "
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Encadré */}
        <div className="relative md:absolute md:left-1/2 md:top-1/2 md:-translate-y-1/2 z-10 md:bg-yellow-100 shadow-lg/30 rounded-xl p-4 bg-white max-w-md mt-[-3rem] md:mt-0">
          <h3 className="text-center sm:text-left text-xl sm:text-2xl font-bold mb-2">
            Des activités pour ne jamais s’ennuyer
          </h3>
          <p>
            Entre jouets ludiques, jeux collectifs et piscine à balles, tout est prévu pour stimuler et divertir les chiens tout au long de la journée. Un environnement joyeux et sécurisé, pensé pour leur plaisir !
          </p>
        </div>
      </div>

      {/* Temps calme, câlins */}
      <div className="relative w-full max-w-5xl flex flex-col items-center md:flex-row-reverse md:items-start md:justify-between md:gap-8 mt-4 md:-mt-8 lg:-mt-18">
        {/* Image */}
        <div className="relative w-full md:w-4/7 aspect-[4/3]">
          <Image
            src="/images/services/garderie/garderie2.webp"
            alt="Moments d'attention personnalisée en garderie"
            fill
            className="object-cover border-10 md:border-16 border-white shadow-lg/30"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Encadré */}
        <div className="relative md:absolute md:right-1/2 md:top-1/2 md:-translate-y-1/2 z-10 md:bg-yellow-100 shadow-lg/30 rounded-xl p-4 bg-white max-w-md mt-[-3rem] md:mt-0">
          <h3 className="text-center sm:text-left text-xl sm:text-2xl font-bold mb-2">
            Du repos et beaucoup de tendresse
          </h3>
          <p>
            Parce que les temps calmes sont tout aussi importants, des espaces confortables accueillent les chiens pour des moments de détente, de repos… et de câlins avec notre équipe attentive.
          </p>
        </div>
      </div>

      {/* balade */}
      <div className="relative w-full max-w-5xl flex flex-col items-center md:flex-row md:items-start md:justify-between md:gap-8 mt-4 md:-mt-6 lg:-mt-12">
        {/* Image */}
        <div className="relative w-full md:w-4/7 aspect-[4/3] md:-rotate-1">
          <Image
            src="/images/services/garderie/garderie3.webp"
            alt="La garderie des chiens heureux à Belfort"
            fill
            className="object-cover border-10 md:border-16 border-white shadow-lg/30 "
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Encadré */}
        <div className="relative md:absolute md:left-1/2 md:top-1/2 md:-translate-y-1/2 z-10 md:bg-yellow-100 shadow-lg/30 rounded-xl p-4 bg-white max-w-md mt-[-3rem] md:mt-0">
          <h3 className="text-center sm:text-left text-xl sm:text-2xl font-bold mb-2">
            Des promenades et une attention constante
          </h3>
          <p>
            Plusieurs sorties rythment la journée, pour se dépenser en extérieur et explorer les environs. De l’eau fraîche à volonté et la possibilité de prendre son repas sur place : tout est prévu pour leur bien-être.
          </p>
        </div>
      </div>

      {/* Bloc Tarifs esthétique */}
      <div className="relative mt-16 mb-18 px-4 w-full max-w-xl">
        <div className="bg-emerald-800 rounded-2xl shadow-lg/30 p-4 pb-12 sm:pb-16 text-white bg-[url('/pattern/pattern-dots.png')] bg-repeat">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center">Tarifs garderie</h3>
          <Image
            src="/images/backgrounds/ornement.png"
            alt="ornement"
            width={565}
            height={63}
            className="w-54 mx-auto my-2"
          />
          <p className="text-center mb-4">Les tarifs sont dégressifs en fonction de la durée de garde</p>
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



    </section>
  );
};

export default GarderieSection;
