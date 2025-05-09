import Image from "next/image";
import { Product } from "@/app/types/Product";

interface ProductCardProps extends Product {
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  produit,
  description,
  image,
  categorie,
  onClick,
}) => {
  const bgColor = getBgColor(categorie);

  return (
    <button
      onClick={onClick}
      className={`text-left w-full cursor-pointer shadow-md rounded-2xl overflow-hidden flex flex-col p-2 sm:p-3 transition-transform duration-200 hover:scale-[1.05] focus:outline-none ${bgColor}`}
    >
      <div className="w-full h-62 relative">
        <Image
          src={image}
          alt={produit}
          fill
          className="object-cover rounded-xl"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <h3 className="text-xl font-bold mt-4">{produit}</h3>
      <p className="mb-2 text-sm lg:text-base">{description}</p>
    </button>
  );
};

const getBgColor = (categorie: string): string => {
  switch (categorie.toLowerCase()) {
    case "alimentation":
      return "bg-sky-300";
    case "accessoires":
      return "bg-slate-300";
    case "jeux":
      return "bg-rose-300";
    default:
      return "bg-gray-300";
  }
};

export default ProductCard;
