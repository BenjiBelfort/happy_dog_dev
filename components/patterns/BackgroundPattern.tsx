
type BackgroundPatternProps = {
  variant?: "pattes" | "os" | "logo" | "none";
};

const BackgroundPattern: React.FC<BackgroundPatternProps> = ({ variant = "pattes" }) => {
  if (variant === "none") return null;

  // Définition des classes selon le variant
  let backgroundClass = "";
  if (variant === "pattes") {
    backgroundClass = "bg-[url('/images/backgrounds/Fond-pattes.jpg')] bg-[length:500px_500px]";
  } else if (variant === "os") {
    backgroundClass = "bg-[url('/images/backgrounds/fond-os.png')] bg-[length:80px_80px]";
  } else if (variant === "logo") {
    backgroundClass = "bg-[url('/images/backgrounds/Fond-HD-2.jpg')]";
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div
        className={`absolute top-0 left-0 w-[200%] h-[200%] bg-repeat animate-[patternScroll_80s_linear_infinite] ${backgroundClass}`}
      />
    </div>
  );
};

export default BackgroundPattern;