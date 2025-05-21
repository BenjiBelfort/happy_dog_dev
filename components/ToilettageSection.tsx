
import Image from "next/image";

const ToiletageSection = () => {
  return (
    <section id="toilettage" className="flex flex-col items-center mt-12 scroll-mt-20 md:scroll-mt-24">
      <h2 className="text-vert-fonce text-3xl sm:text-4xl font-bold text-center">Bain et toilettage</h2>

      <p className="md:text-xl max-w-2xl text-center my-8 mx-2 mb-12">
        Offrez à votre compagnon une séance de toilettage tout en douceur avec <span className="font-bold">Laure</span>, notre experte. Du bain relaxant à la coupe soignée, chaque étape est pensée pour le bien-être de votre chien. Résultat : un poil doux, une allure élégante… et un chien tout beau, tout propre !</p>
      
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center items-center">
          <div className="hidden md:flex w-full justify-between gap-x-6">
            <Image src="/images/services/toilettage/toilettage1.webp" alt="Image 1" width={300} height={200} className="border-10 md:border-16 border-white shadow-lg/50 -rotate-2" />
            <Image src="/images/services/toilettage/toilettage2.webp" alt="Image 2" width={300} height={200} className="border-10 md:border-16 border-white shadow-lg/50" />
            <Image src="/images/services/toilettage/toilettage3.webp" alt="Image 3" width={300} height={200} className="border-10 md:border-16 border-white shadow-lg/50 rotate-2" />
          </div>

          <div className="flex md:hidden justify-center w-full">
            <Image src="/images/services/toilettage/toilettage2.webp" alt="Image centrale" width={300} height={200} className="border-10 md:border-16 border-white shadow-lg/50" />
          </div>
        </div>
      </div>




    </section>
  );
};

export default ToiletageSection;
