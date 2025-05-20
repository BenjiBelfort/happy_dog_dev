"use client";

import ProductCard from "@/components/ui/cards/ProductCard";
import productsData from "@/app/data/products.json";
import { Product } from "@/app/types/Product";

interface ProductsGridProps {
  categorie?: string;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ categorie }) => {
  const filteredProducts = categorie
    ? productsData.filter(
        (product: Product) =>
          product.categorie.toLowerCase() === categorie.toLowerCase()
      )
    : productsData;

    return (
      <>
        <div className="max-w-3xl p-4 lg:p-0 grid grid-cols-1 gap-6 w-full">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </>
    );
  };
  
  export default ProductsGrid;
