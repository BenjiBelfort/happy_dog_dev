
import ProductsGrid from "@/components/ui/grids/ProductsGrid";

const AlimentationSection = () => {
  return (
    <section id="alimentation" className="flex flex-col items-center mt-12 scroll-mt-20 md:scroll-mt-24">
      <h3 className="text-vert-fonce text-3xl sm:text-4xl font-bold text-center">Alimentation</h3>
      <p className="md:text-xl max-w-2xl text-center my-8 mx-2">
      Des <span className="font-bold">friandises et gourmandises saines</span> pour le plaisir de votre chien. Notre gamme allie mastication, récompense et compléments alimentaires pour prendre soin de sa santé tout en régalant ses papilles. Offrez-lui ce qu’il y a de meilleur, chaque jour.</p>
      <ProductsGrid categorie="Alimentation" />
    </section>
  );
};

export default AlimentationSection;
