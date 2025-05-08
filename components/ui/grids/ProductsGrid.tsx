"use client";

import React from "react";
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
    <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {filteredProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
