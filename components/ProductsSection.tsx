import ProductsBloc from '@/components/blocs/ProductsBloc';
import ProductsBloc2 from '@/components/blocs/ProductsBloc2';
import ProductsBloc3 from '@/components/blocs/ProductsBloc3';

const ProductsSection = () => {
  return (
    <section id="products" className="flex flex-col items-center mt-12 scroll-mt-20 md:scroll-mt-24">
      <ProductsBloc />
      <ProductsBloc2 />
      <ProductsBloc3 />
    </section>
  );
};

export default ProductsSection;
