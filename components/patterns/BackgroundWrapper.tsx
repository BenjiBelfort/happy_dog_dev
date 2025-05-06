// components/BackgroundWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import BackgroundPattern from "@/components/patterns/BackgroundPattern";

const BackgroundWrapper = () => {
  const pathname = usePathname();

  const getPatternVariant = (): "confetti" | "os" | "none" => {
    if (pathname === "/") return "confetti";
    if (pathname === "/produits") return "os";
    if (pathname === "/services") return "confetti";
    return "none";
  };

  return <BackgroundPattern variant={getPatternVariant()} />;
};

export default BackgroundWrapper;
