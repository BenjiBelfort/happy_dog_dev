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
      <p className="md:text-xl max-w-2xl text-center my-8 mx-2">
        <span className="font-bold">Tout le confort et le style pour votre compagnon.</span>
        <br />
        Découvrez notre sélection d’accessoires : laisses, harnais, colliers, couchages, gamelles et jeux pensés pour le bien-être, la sécurité et le plaisir de votre chien au quotidien.</p>
      <ProductsGrid categorie="Accessoires" />
    </section>
  );
};

export default AccessoiresSection;
