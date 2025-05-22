
import Image from "next/image";
import { Zilla_Slab } from "next/font/google";

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ToiletageSection = () => {
  return (
    <section id="toilettage" className="flex flex-col items-center mt-12 scroll-mt-20 md:scroll-mt-24">
      <h2 className="text-vert-fonce text-3xl sm:text-4xl font-bold text-center">Bain et toilettage</h2>

      <p className="md:text-xl max-w-2xl text-center my-8 mx-2 mb-12">
        Offrez à votre compagnon une séance de toilettage tout en douceur avec <span className="font-bold">Laure</span>, notre experte. Du bain relaxant à la coupe soignée, chaque étape est pensée pour le bien-être de votre chien. Résultat : un poil doux, une allure élégante… et un chien tout beau, tout propre !</p>
      
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center items-center">
          <div className="hidden md:flex w-full justify-between gap-x-6">
            <Image src="/images/services/toilettage/toilettage1.webp" alt="Cabine de toilettage chez Happy Dog Belfort" width={300} height={200} className="border-10 md:border-16 border-white shadow-lg/50 -rotate-2" />
            <Image src="/images/services/toilettage/toilettage2.webp" alt="Laure pratiquant un toilettage" width={300} height={200} className="border-10 md:border-16 border-white shadow-lg/50" />
            <Image src="/images/services/toilettage/toilettage3.webp" alt="Un chien tout beau tout propre" width={300} height={200} className="border-10 md:border-16 border-white shadow-lg/50 rotate-2" />
          </div>

          <div className="flex md:hidden justify-center w-full">
            <Image src="/images/services/toilettage/toilettage2.webp" alt="Laure pratiquant un toilettage chez Happy Dog Belfort" width={300} height={200} className="border-10 md:border-16 border-white shadow-lg/50" />
          </div>
        </div>

        {/* toilettage */}
        <div className="relative w-full max-w-5xl flex flex-col items-center md:flex-row md:items-start md:justify-between md:gap-8 mt-12">
          {/* Image */}
          <div className="relative w-full md:w-4/7 aspect-[4/3] md:-rotate-1">
            <Image
              src="/images/services/toilettage/avant.webp"
              alt="La garderie des chiens heureux à Belfort"
              fill
              className="object-cover border-10 md:border-16 border-white shadow-lg/30 "
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
  
          {/* Encadré */}
          <div className="relative md:absolute md:left-1/2 md:top-1/2 md:-translate-y-1/2 z-10 md:bg-yellow-100 shadow-lg/30 rounded-xl p-4 bg-white max-w-md mt-[-3rem] md:mt-0">
            <h3 className="text-center sm:text-left text-xl sm:text-2xl font-bold mb-2">
              Service de toilettage
            </h3>
            <p>
              Offrez à votre compagnon un moment de bien-être et de soin avec notre service de toilettage professionnel. Dans un environnement calme et respectueux, nous prenons soin de chaque chien avec douceur et patience. Du bain relaxant à la coupe adaptée à sa morphologie, en passant par le brossage, le nettoyage des oreilles et la coupe des griffes, chaque étape est pensée pour le confort et l’hygiène de votre animal.
            <br />
              Notre toiletteuse expérimentée, Laure, adapte ses gestes et ses outils à la taille, au type de poil et au tempérament de chaque chien. Que ce soit pour un entretien régulier ou une mise en beauté complète, votre compagnon ressortira tout propre, tout beau… et heureux !
            </p>
          </div>
        </div>

        {/* Laure */}
        <div className="relative w-full max-w-5xl flex flex-col items-center md:flex-row-reverse md:items-start md:justify-between md:gap-8 mt-4 md:-mt-8 lg:-mt-18">
          {/* Image */}
          <div className="relative w-full md:w-4/7 aspect-[4/3]">
            <Image
              src="/images/services/toilettage/laure.webp"
              alt="Moments d'attention personnalisée en garderie"
              fill
              className="object-cover border-10 md:border-16 border-white shadow-lg/30"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
  
          {/* Encadré */}
          <div className="relative md:absolute md:right-1/2 md:top-1/2 md:-translate-y-1/2 z-10 md:bg-yellow-100 shadow-lg/30 rounded-xl p-4 bg-white max-w-md mt-[-3rem] md:mt-0">
            <h3 className="text-center sm:text-left text-xl sm:text-2xl font-bold mb-2">
              Laure Besançon
            </h3>
            <p>
              Après une reconversion professionnelle, j’ai obtenu mon diplôme de toilettage en 2010. J’ai exercé mon activité pendant 3 ans à Fesches-le-Châtel.
              <br />
              Retrouvez-moi chez Happy Dog les jeudis, vendredis et samedis sur rendez-vous.
              J’exerce également sur Etouvans les lundis, mardis et mercredis.
              <br />
              À bientôt

              <br />
              Pour prendre rendez-vous,
              <br />
              contactez-moi au 06 61 44 84 43
            </p>
          </div>
        </div>

        {/* Bloc Tarifs esthétique */}
        <div className="relative mt-16 mb-18 px-4 w-full max-w-xl mx-auto">
          <div className="bg-emerald-800 rounded-2xl shadow-lg/30 p-4 pb-8 sm:pb-10 text-white bg-[url('/pattern/pattern-dots.png')] bg-repeat">
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center">Tarifs toilettage</h3>
            <Image
              src="/images/backgrounds/ornement.png"
              alt="ornement"
              width={565}
              height={63}
              className="w-54 mx-auto my-2"
            />
            <p className="text-center mb-4">Les tarifs inclus : griffes, soins oreilles et yeux, démêlage, bain, coupe et surtout beaucoup de câlins.</p>

            <div className="md:px-18">
              {/* petit chien */}
              <div className="my-12">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-lg sm:text-xl font-bold underline">Mini / Petit chien</h4>
                  <p className="italic text-sm sm:text-base">Durée : 1h30 environ</p>
                </div>
                <div className="flex justify-between">
                  <p>Bain</p>
                  <p className="font-bold">30 à 45 €</p>
                </div>
                <div className="flex justify-between">
                  <p>Coupe / Tonte / Épilation</p>
                  <p className="font-bold">40 à 55 €</p>
                </div>
              </div>

              {/* chien moyen */}
              <div className="my-12">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-lg sm:text-xl font-bold underline">Chien moyen</h4>
                  <p className="italic text-sm sm:text-base">Durée : 2h00 environ</p>
                </div>
                <div className="flex justify-between">
                  <p>Bain</p>
                  <p className="font-bold">45 à 60 €</p>
                </div>
                <div className="flex justify-between">
                  <p>Tonte / Épilation</p>
                  <p className="font-bold">50 à 65 €</p>
                </div>
              </div>

              {/* grand chien */}
              <div className="my-12">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-lg sm:text-xl font-bold underline">Grand chien</h4>
                  <p className="italic text-sm sm:text-base">Durée : 2h00 environ</p>
                </div>
                <div className="flex justify-between">
                  <p>Bain + finition</p>
                  <p className="font-bold">55 à 65 €</p>
                </div>
              </div>

              {/* très grand chien */}
              <div className="my-12">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-lg sm:text-xl font-bold underline">Très grand chien</h4>
                  <p className="italic text-sm sm:text-base">Durée : 3h30 environ</p>
                </div>
                <div className="flex justify-between">
                  <p>Prix sur devis après avoir vu l&apos;animal</p>
                </div>
              </div>

            </div>

            <p className="text-center text-sm">Un supplément pourra être demandé suivant l&apos;état du pelage et le caractère de l&apos;animal.</p>
          </div>
  
          {/* Bloc horaires chevauchant */}
          <div className={`text-center absolute bottom-[-16px] sm:bottom-[-15px] left-1/2 transform -translate-x-1/2 flex flex-col items-center bg-vert-clair w-[85%] sm:w-[75%] py-1 px-1 rounded-md shadow-lg/30 text-black text-s sm:text-xl font-semibold ${zillaSlab.className}`}>
            <p>Du mercredi au samedi sur rendez-vous</p>
          </div>
        </div>



      </div>




    </section>
  );
};

export default ToiletageSection;
