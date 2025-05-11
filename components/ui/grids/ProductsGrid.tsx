"use client";

import { useState } from "react";
import ProductCard from "@/components/ui/cards/ProductCard";
import productsData from "@/app/data/products.json";
import { Product } from "@/app/types/Product";
import ProductModal from "@/components/ui/lightbox/ProductModal";

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

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
      setSelectedIndex(index);
    };
  
    const closeModal = () => {
      setSelectedIndex(null);
    };
  
    const showPrev = () => {
      if (selectedIndex !== null) {
        setSelectedIndex((selectedIndex - 1 + filteredProducts.length) % filteredProducts.length);
      }
    };
  
    const showNext = () => {
      if (selectedIndex !== null) {
        setSelectedIndex((selectedIndex + 1) % filteredProducts.length);
      }
    };

    return (
      <>
        <div className="max-w-5xl p-4 lg:p-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} {...product} onClick={() => handleCardClick(index)} />
          ))}
        </div>
  
        {selectedIndex !== null && (
          <ProductModal
            product={filteredProducts[selectedIndex]}
            onClose={closeModal}
            onPrev={showPrev}
            onNext={showNext}
          />
        )}
      </>
    );
  };
  
  export default ProductsGrid;
