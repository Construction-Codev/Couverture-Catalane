import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.couverture-catalane.fr";

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
  },

  twitter: {
    card: "summary_large_image",
    title: "Couverture Catalane | Couvreur à Perpignan et dans le 66",
    description:
      "Travaux de couverture, réparation, fuite, zinguerie, nettoyage et charpente à Perpignan et dans les Pyrénées-Orientales.",
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

  areaServed: {
    "@type": "AdministrativeArea",
    name: "Pyrénées-Orientales",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={geistSans.variable}>
        <Header />

        {children}

        <Footer />
        <MobileCTA />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}