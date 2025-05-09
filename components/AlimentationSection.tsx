import ProductsGrid from "@/components/ui/grids/ProductsGrid";

const AlimentationSection = () => {
  return (
    <section id="alimentation" className="flex flex-col items-center mt-8 scroll-mt-20 md:scroll-mt-24">
      <h3 className="text-vert-fonce text-2xl sm:text-3xl font-bold text-center">Alimentation</h3>
      <p className="max-w-2xl text-center my-8">Description de la section Croquettes, paragraphe moyennement long incluant des mots clés du type <span className="font-bold">Croquettes pour chiens heureux</span> par exemple, ou <span className="font-bold">alimentation Made in France 🇫🇷</span>, ou valeurs anti-gaspi, etc...</p>
      <ProductsGrid categorie="Alimentation" />
    </section>
  );
};

export default AlimentationSection;
