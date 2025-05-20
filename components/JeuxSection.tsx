
import ProductsGrid from "@/components/ui/grids/ProductsGrid";

const JeuxSection = () => {
  return (
    <section id="jeux" className="flex flex-col items-center mt-12 scroll-mt-20 md:scroll-mt-24">
      <h3 className="text-vert-fonce text-3xl sm:text-4xl font-bold text-center">Jeux</h3>

      <p className="md:text-xl max-w-2xl text-center my-8">Description de la section Jeux, paragraphe moyennement long incluant des mots clés du type <span className="font-bold">Croquettes pour chiens heureux</span> par exemple, ou <span className="font-bold">alimentation Made in France 🇫🇷</span>, ou valeurs anti-gaspi, etc...</p>
      <ProductsGrid categorie="Jeux" />
    </section>
  );
};

export default JeuxSection;
