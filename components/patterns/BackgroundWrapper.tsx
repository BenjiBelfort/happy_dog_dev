// components/BackgroundWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import BackgroundPattern from "@/components/patterns/BackgroundPattern";

const BackgroundWrapper = () => {
  const pathname = usePathname();

  const getPatternVariant = (): "pattes" | "os" | "none" => {
    if (pathname === "/") return "pattes";
    if (pathname === "/produits") return "os";
    if (pathname === "/services") return "pattes";
    return "none";
  };

  return <BackgroundPattern variant={getPatternVariant()} />;
};

export default BackgroundWrapper;
