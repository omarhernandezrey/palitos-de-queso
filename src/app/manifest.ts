import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Palitos de Queso Bogotá",
    short_name: "Palitos de Queso",
    description:
      "Palitos de queso artesanales congelados en Bogotá. Receta familiar de Montería, queso costeño, 20 unidades por $15.000 COP.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFF7ED",
    theme_color: "#D97706",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
