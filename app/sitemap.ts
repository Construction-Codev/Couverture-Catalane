import type { MetadataRoute } from "next";

const BASE_URL = "https://www.couverture-catalane.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/a-propos",
    "/couverture",
    "/reparations",
    "/fuites",
    "/zinguerie",
    "/nettoyage",
    "/charpente",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
  }));
}