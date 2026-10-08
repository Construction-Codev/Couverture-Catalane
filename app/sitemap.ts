import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import realisations from "@/data/realisations.json";

import { SITE_URL as BASE_URL } from "@/lib/seo";

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
    "/realisations",
    "/conseils",
    "/contact",
  ];

  const staticPages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${BASE_URL}${route}`,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/conseils/${article.slug}`,
    lastModified: article.updatedAt || article.publishedAt,
  }));

  const realisationPages: MetadataRoute.Sitemap = realisations.map(
    (realisation) => ({
      url: `${BASE_URL}/realisations/${realisation.slug}`,
      ...(realisation.date ? { lastModified: realisation.date } : {}),
    })
  );

  return [
    ...staticPages,
    ...articlePages,
    ...realisationPages,
  ];
}