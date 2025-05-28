import Image from "next/image";
import { Product } from "@/app/types/Product";

type ProductCardProps = Pick<Product, "produit" | "description" | "image" | "categorie">;


const ProductCard: React.FC<ProductCardProps> = ({
  produit,
  description,
  image,
  categorie,
}) => {
  const bgColor = getBgColor(categorie);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Image container avec marges sur mobile */}
      <div className="w-full sm:px-6 md:px-0">
        <div className="relative w-full border-10 md:border-16 border-white bg-yellow-100 shadow-lg/30">
          <Image
            src={image}
            alt={`{produit} - chez Happy Dog Belfort`}
            width={1200}
            height={700}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Bloc infos : titre + description, avec ombre */}
      <div className="w-full max-w-2xl px-4 sm:px-6 md:px-0 mb-6 sm:mb-10">
        <div className="shadow-lg/30 rounded-b-xl overflow-hidden">
          {/* Titre */}
          <div className={`w-full text-center py-4 ${bgColor} bg-[url('/pattern/pattern-dots.png')] bg-repeat`}>
            <h3 className="text-2xl font-bold">{produit}</h3>
          </div>

          {/* Description */}
          <div className="w-full bg-white px-4 py-3">
            <p className="text-sm lg:text-base">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const getBgColor = (categorie: string): string => {
  switch (categorie.toLowerCase()) {
    case "alimentation":
      return "bg-sky-300";
    case "accessoires":
      return "bg-slate-300";
    case "soins":
      return "bg-rose-300";
    default:
      return "bg-gray-300";
  }
};

export default ProductCard;
