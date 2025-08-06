// components/BackgroundWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import BackgroundPattern from "@/components/patterns/BackgroundPattern";

const BackgroundWrapper = () => {
  const pathname = usePathname();

  const getPatternVariant = (): "pattes" | "os" | "logo" | "none" => {
    if (pathname === "/") return "pattes";
    if (pathname === "/produits") return "pattes";
    if (pathname === "/services") return "pattes";
    if (pathname === "/mentions-legales") return "logo";
    return "none";
  };

  return <BackgroundPattern variant={getPatternVariant()} />;
};

export default BackgroundWrapper;
