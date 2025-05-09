import ProductsGrid from "@/components/ui/grids/ProductsGrid";

const AccessoiresSection = () => {
  return (
    <section id="accessoires" className="flex flex-col items-center mt-8 scroll-mt-20 md:scroll-mt-24">
      <h3 className="text-vert-fonce text-2xl sm:text-3xl font-bold text-center">Accessoires</h3>
      <p className="max-w-2xl text-center my-8 hyphens-auto">Description de la section accessoires, paragraphe moyennement long incluant des mots clés du type <span className="font-bold">Croquettes pour chiens heureux</span> par exemple, ou <span className="font-bold">alimentation Made in France 🇫🇷</span>, ou valeurs anti-gaspi, etc...</p>
      <ProductsGrid categorie="Accessoires" />
    </section>
  );
};

export default AccessoiresSection;
