import Image from "next/image";

const PointSeparator = () => {
  return (
    <Image
      src="/images/backgrounds/point-separator.webp"
      alt="Point de séparation"
      width={515}
      height={42}
      className="w-80 mx-auto pt-4 my-12 drop-shadow-lg/30"
    />
  );
};

export default PointSeparator;
