import type { Metadata } from "next";

import { pageOpenGraph } from "@/lib/seo";

import Banner from "@/components/Banner";
import Services from "@/components/Services";
import LocalExpertise from "@/components/LocalExpertise";
import HomeRealisations from "@/components/HomeRealisations";
import HomeFAQ from "@/components/HomeFAQ";

export const metadata: Metadata = {
  title: {
    absolute: "Couvreur à Perpignan et dans le 66 | Couverture Catalane",
  },

  description:
    "Couvreur basé à Pia, Couverture Catalane intervient à Perpignan et dans le 66 : rénovation et réparation de toiture, fuites, zinguerie. Demandez votre devis.",

  alternates: {
    canonical: "/",
  },

  openGraph: pageOpenGraph({
    title: "Couvreur à Perpignan | Couverture Catalane",
    description:
      "Travaux de couverture, réparation de toiture, zinguerie, charpente et nettoyage à Perpignan et dans les Pyrénées-Orientales.",
    url: "/",
    type: "website",
  }),

  twitter: {
    card: "summary_large_image",
    title: "Couvreur à Perpignan | Couverture Catalane",
    description:
      "Travaux de couverture, réparation, zinguerie, charpente et nettoyage à Perpignan et dans les Pyrénées-Orientales.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-red-500 selection:text-white">
      <main className="flex w-full flex-col">
        <Banner />
        <Services />
        <LocalExpertise />
        <HomeRealisations />
        <HomeFAQ />
      </main>
    </div>
  );
}