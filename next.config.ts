import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: "",
    images: {
        unoptimized: true, // Désactive l'optimisation d'image pour les exports statiques
    },
    output: "export",
};

export default nextConfig;
