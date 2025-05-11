// components/ui/modals/ProductModal.tsx
import { useEffect } from "react";
import { TbSquareRoundedChevronLeftFilled, TbSquareRoundedChevronRightFilled } from "react-icons/tb";
import { RiCloseCircleFill } from "react-icons/ri";
import Image from "next/image";
import { Product } from "@/app/types/Product";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", handleKeyDown);

    // Empêcher le scroll en arrière-plan
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = ""; // Réactiver le scroll
    };
  }, [onClose, onPrev, onNext]);
  
  return (
    <div className="fixed inset-0 bg-black/80 bg-opacity-70 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg max-w-lg w-full relative p-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-black"
        >
          <RiCloseCircleFill size={24} />
        </button>

        <div className="relative h-96 w-full mb-4">
          <Image
            src={product.image}
            alt={product.produit}
            fill
            className="object-cover rounded"
          />
        </div>

        <h2 className="text-2xl font-bold mb-2">{product.produit}</h2>
        <p className="text-sm">{product.description}</p>

        <button
          onClick={onPrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-black"
        >
          <TbSquareRoundedChevronLeftFilled size={32} />
        </button>
        <button
          onClick={onNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-black"
        >
          <TbSquareRoundedChevronRightFilled size={32} />
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
