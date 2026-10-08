import type { Metadata } from "next";

type OpenGraph = NonNullable<Metadata["openGraph"]>;

export const SITE_URL = "https://www.couverture-catalane.fr";
export const SITE_NAME = "Couverture Catalane";

export const DEFAULT_OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Couverture Catalane, couvreur à Perpignan et dans les Pyrénées-Orientales",
};

/**
 * Next.js remplace l'objet openGraph du layout au lieu de le fusionner :
 * chaque page qui définit son propre openGraph doit donc reprendre
 * le nom du site, la langue et l'image de partage par défaut.
 */
export function pageOpenGraph(openGraph: OpenGraph): OpenGraph {
  return {
    type: "website",
    locale: "fr_FR",
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    ...openGraph,
  } as OpenGraph;
}
