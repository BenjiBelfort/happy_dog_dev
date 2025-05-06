
type BackgroundPatternProps = {
  variant?: "confetti" | "os" | "none";
};

const BackgroundPattern: React.FC<BackgroundPatternProps> = ({ variant = "confetti" }) => {
  if (variant === "none") return null;

  // Définition des classes selon le variant
  let backgroundClass = "";
  if (variant === "confetti") {
    backgroundClass = "bg-[url('/images/backgrounds/Fond-HD-1.jpg')] bg-[length:250px_250px]";
  } else if (variant === "os") {
    backgroundClass = "bg-[url('/images/backgrounds/fond-os.png')] bg-[length:80px_80px]";
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