import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import CookieBanner from "@/components/CookieBanner";
import GoogleAdsTag from "@/components/GoogleAdsTag";
import JsonLd from "@/components/JsonLd";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo";
import realisations from "@/data/realisations.json";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Couverture Catalane | Couvreur à Perpignan et dans le 66",
    template: "%s | Couverture Catalane",
  },

  description:
    "Couverture Catalane intervient à Perpignan et dans les Pyrénées-Orientales pour vos travaux de couverture, réparation de toiture, recherche de fuite, zinguerie, nettoyage et charpente.",

  applicationName: "Couverture Catalane",

  authors: [
    {
      name: "Couverture Catalane",
      url: SITE_URL,
    },
  ],

  creator: "Couverture Catalane",
  publisher: "Couverture Catalane",

  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Couverture Catalane",
    title: "Couverture Catalane | Couvreur à Perpignan et dans le 66",
    description:
      "Travaux de couverture, réparation de toiture, recherche de fuite, zinguerie, nettoyage et charpente à Perpignan et dans les Pyrénées-Orientales.",
    images: [DEFAULT_OG_IMAGE],
  },

  twitter: {
    card: "summary_large_image",
    title: "Couverture Catalane | Couvreur à Perpignan et dans le 66",
    description:
      "Travaux de couverture, réparation, fuite, zinguerie, nettoyage et charpente à Perpignan et dans les Pyrénées-Orientales.",
    images: [DEFAULT_OG_IMAGE.url],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": `${SITE_URL}/#business`,

  name: "Couverture Catalane",

  url: SITE_URL,

  telephone: "+33662125611",

  email: "contact@couverture-catalane.fr",

  address: {
    "@type": "PostalAddress",
    streetAddress: "88 chemin des Charrettes",
    postalCode: "66380",
    addressLocality: "Pia",
    addressRegion: "Pyrénées-Orientales",
    addressCountry: "FR",
  },

  logo: `${SITE_URL}/logo1.png`,

  image: `${SITE_URL}${DEFAULT_OG_IMAGE.url}`,

  // Département + communes où des chantiers ont été réalisés
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Pyrénées-Orientales",
    },
    ...Array.from(new Set(realisations.map((item) => item.city))).map(
      (city) => ({
        "@type": "City",
        name: city,
      })
    ),
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-extrabold focus:text-slate-950 focus:shadow-xl"
        >
          Aller au contenu
        </a>

        <Header />

        <div id="contenu" tabIndex={-1} className="outline-none">
          {children}
        </div>

        <Footer />
        <MobileCTA />
        <CookieBanner />

        <JsonLd data={localBusinessJsonLd} />

        <Analytics />
        <SpeedInsights />
        <GoogleAdsTag />
      </body>
    </html>
  );
}