import type { Metadata } from "next";

import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact & devis toiture à Perpignan",

  description:
    "Contactez Couverture Catalane pour votre projet de toiture à Perpignan et dans les Pyrénées-Orientales : couverture, réparation, fuite, zinguerie, nettoyage, hydrofuge et charpente.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact & devis toiture à Perpignan | Couverture Catalane",
    description:
      "Contactez Couverture Catalane pour vos travaux de toiture à Perpignan et dans les Pyrénées-Orientales.",
    url: "/contact",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact & devis toiture à Perpignan | Couverture Catalane",
    description:
      "Contactez Couverture Catalane pour vos travaux de toiture à Perpignan et dans les Pyrénées-Orientales.",
  },
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}