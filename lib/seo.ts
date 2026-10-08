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

export const PHONE_E164 = "+33662125611";
export const PHONE_DISPLAY = "06 62 12 56 11";

/**
 * Sérialise un objet JSON-LD pour <script type="application/ld+json">
 * en neutralisant les "<" (évite toute fermeture prématurée de balise).
 */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/**
 * "à Perpignan", mais "au Barcarès" / "aux Angles" : évite les
 * tournures incorrectes du type "à Le Barcarès" dans les titres.
 */
export function inCity(city: string): string {
  if (city.startsWith("Le ")) return `au ${city.slice(3)}`;
  if (city.startsWith("Les ")) return `aux ${city.slice(4)}`;
  return `à ${city}`;
}

type ServiceJsonLdInput = {
  name: string;
  description: string;
  path: string;
  serviceType: string;
};

/**
 * Données structurées Service rattachées à l'entreprise déclarée
 * dans le layout (RoofingContractor, @id `${SITE_URL}/#business`).
 */
export function serviceJsonLd({
  name,
  description,
  path,
  serviceType,
}: ServiceJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    name,
    description,
    serviceType,
    url: `${SITE_URL}${path}`,
    provider: {
      "@id": `${SITE_URL}/#business`,
    },
    areaServed: [
      { "@type": "City", name: "Perpignan" },
      { "@type": "AdministrativeArea", name: "Pyrénées-Orientales" },
    ],
  };
}
