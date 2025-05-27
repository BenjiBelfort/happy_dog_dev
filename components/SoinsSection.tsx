
import ProductsGrid from "@/components/ui/grids/ProductsGrid";

const SoinsSection = () => {
  return (
    <section id="soins" className="flex flex-col items-center mt-12 scroll-mt-20 md:scroll-mt-24">
      <h3 className="text-vert-fonce text-3xl sm:text-4xl font-bold text-center">Soins</h3>

      <p className="md:text-xl max-w-2xl text-center my-8 mx-2">
        <span className="font-bold">Prenez soin de votre chien naturellement.</span>
        <br />
        Shampooings doux, anti-tiques, lotions, baumes protecteurs ou brosses à dents : notre gamme de soins complète aide à garder votre compagnon propre, sain et en pleine forme, jour après jour.
      </p>
      <ProductsGrid categorie="soins" />
    </section>
  );
};

export default SoinsSection;
