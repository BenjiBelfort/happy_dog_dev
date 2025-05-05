import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Active l'exportation statique
  images: {
    unoptimized: true, // Désactive l'optimisation d'image pour l'export statique
  },
  // Optionnel : spécifier le basePath si votre site n'est pas à la racine
  // basePath: '/mon-dossier',
};

export default nextConfig;