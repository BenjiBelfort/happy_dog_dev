// import Image from 'next/image';
import ProductsGrid from "@/components/ui/grids/ProductsGrid";

const AccessoiresSection = () => {
  return (
    <section id="accessoires" className="flex flex-col items-center mt-12 scroll-mt-20 md:scroll-mt-24">
      <h3 className="text-vert-fonce text-3xl sm:text-4xl font-bold text-center">Accessoires</h3>
        {/* <Image
            src="/images/backgrounds/guirlande.png"
            alt="ornement"
            width={565}
            height={63}
            className="w-80 mx-auto my-2 drop-shadow-lg/30"
        /> */}
      <p className="md:text-xl max-w-2xl text-center my-8 mx-2">Description de la section accessoires, paragraphe moyennement long incluant des mots clés du type <span className="font-bold">Croquettes pour chiens heureux</span> par exemple, ou <span className="font-bold">alimentation Made in France 🇫🇷</span>, ou valeurs anti-gaspi, etc...</p>
      <ProductsGrid categorie="Accessoires" />
    </section>
  );
};

export default AccessoiresSection;
