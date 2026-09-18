import type { Metadata } from "next";

import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import SectionBanner from "@/components/SectionBanner";
import ServiceContent from "@/components/ServiceContent";
import ServiceGallery from "@/components/ServiceGallery";

export const metadata: Metadata = {
  title: "Travaux de charpente à Perpignan",

  description:
    "Travaux de charpente à Perpignan et dans les Pyrénées-Orientales : rénovation, réparation, renforcement et intervention sur la structure de toiture.",

  alternates: {
    canonical: "/charpente",
  },

  openGraph: {
    title: "Travaux de charpente à Perpignan | Couverture Catalane",
    description:
      "Rénovation, réparation et travaux de charpente à Perpignan et dans les Pyrénées-Orientales.",
    url: "/charpente",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Travaux de charpente à Perpignan | Couverture Catalane",
    description:
      "Travaux de charpente, rénovation et réparation à Perpignan et dans les Pyrénées-Orientales.",
  },
};

export default function CharpentePage() {
  const images = [
    {
      image: "/charpente.png",
      alt: "Structure d'une charpente de toiture",
    },
    {
      image: "/charpente2.png",
      alt: "Travaux sur une charpente",
    },
    {
      image: "/charpente3.png",
      alt: "Éléments en bois d'une charpente de maison",
    },
  ];

  return (
    <>
      {/* HERO */}
      <SectionBanner
        title="Travaux de charpente à Perpignan"
        subtitle="Rénovation, réparation et intervention sur la structure de votre toiture dans les Pyrénées-Orientales"
        backgroundImage="/charpente3.png"
        imageAlt="Structure en bois d'une charpente de toiture"
      />

      {/* FIL D'ARIANE */}
      <Breadcrumb
        items={[
          {
            label: "Travaux de charpente",
          },
        ]}
      />

      {/* INTRODUCTION */}
      <ServiceContent
        eyebrow="Charpente"
        title="Intervenir sur la structure qui supporte votre toiture"
        intro="Couverture Catalane intervient à Perpignan et dans les Pyrénées-Orientales pour différents travaux de charpente. La nature de l'intervention dépend de la structure existante, de son état et des travaux envisagés sur la toiture."
        items={[
          {
            title: "Rénovation de charpente",
            description:
              "Une charpente existante peut nécessiter des travaux de rénovation lorsque certains de ses éléments présentent des dégradations.",
          },
          {
            title: "Réparation",
            description:
              "Une intervention peut être réalisée sur les éléments de charpente concernés par une détérioration.",
          },
          {
            title: "Renforcement",
            description:
              "Selon l'état et la configuration de la structure, certains éléments peuvent nécessiter un renforcement.",
          },
          {
            title: "Travaux liés à la toiture",
            description:
              "Des travaux de couverture peuvent nécessiter une intervention préalable ou complémentaire sur la charpente.",
          },
        ]}
      />

      {/* RÔLE DE LA CHARPENTE */}
      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-400">
                Structure de toiture
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Quel est le rôle de la charpente ?
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                La charpente constitue la structure sur laquelle repose la
                couverture. Son état et sa configuration sont donc directement
                liés aux travaux pouvant être réalisés sur la toiture.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Structure",
                  text: "La charpente constitue une partie essentielle de la structure de la toiture.",
                },
                {
                  number: "02",
                  title: "Support de couverture",
                  text: "Elle supporte les différents éléments qui composent la couverture.",
                },
                {
                  number: "03",
                  title: "Éléments en bois",
                  text: "Les différentes pièces de la charpente travaillent ensemble pour former la structure du toit.",
                },
                {
                  number: "04",
                  title: "État général",
                  text: "Une dégradation visible d'un élément peut nécessiter un examen de la structure concernée.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <span className="text-sm font-black text-orange-400">
                    {item.number}
                  </span>

                  <h3 className="mt-3 text-xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-slate-300">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <ServiceGallery
        title="Travaux de charpente"
        description="Illustrations de structures et de travaux liés à la charpente d'une toiture."
        images={images}
      />

      {/* QUAND INTERVENIR */}
      <ServiceContent
        eyebrow="Rénovation & réparation"
        title="Quand une charpente peut-elle nécessiter des travaux ?"
        intro="Une intervention sur la charpente peut être envisagée lorsqu'un élément présente une dégradation visible, lors d'une rénovation de toiture ou lorsque des travaux nécessitent une intervention sur la structure existante."
        items={[
          {
            title: "Élément détérioré",
            description:
              "Une pièce de charpente présentant une dégradation peut nécessiter une réparation ou une intervention adaptée.",
          },
          {
            title: "Rénovation de toiture",
            description:
              "L'état de la charpente peut être pris en compte dans le cadre de travaux plus importants sur la couverture.",
          },
          {
            title: "Modification de la structure",
            description:
              "Certains projets peuvent nécessiter une intervention sur des éléments existants de la charpente.",
          },
          {
            title: "Remise en état",
            description:
              "La nature des travaux dépend de l'état des éléments concernés et de la configuration de la structure.",
          },
        ]}
        relatedServices={[
          {
            title: "Couverture",
            description:
              "Pour vos travaux de couverture et de rénovation de toiture.",
            href: "/couverture",
          },
          {
            title: "Réparation de toiture",
            description:
              "Pour la remise en état des éléments endommagés de votre toiture.",
            href: "/reparations",
          },
          {
            title: "Fuites de toiture",
            description:
              "Pour rechercher l'origine d'une infiltration ou d'une entrée d'eau.",
            href: "/fuites",
          },
        ]}
      />

      {/* FAQ */}
      <FAQ
        title="Questions fréquentes sur les travaux de charpente"
        intro="Quelques informations utiles concernant la rénovation et la réparation d'une charpente."
        items={[
          {
            question: "Quel est le rôle d'une charpente ?",
            answer:
              "La charpente constitue la structure qui supporte la couverture et participe à la constitution générale de la toiture.",
          },
          {
            question: "Quand faut-il envisager des travaux de charpente ?",
            answer:
              "Des travaux peuvent être envisagés lorsqu'un élément présente une dégradation, dans le cadre d'une rénovation de toiture ou lorsqu'une intervention sur la structure existante est nécessaire.",
          },
          {
            question:
              "Peut-on réparer seulement une partie d'une charpente ?",
            answer:
              "La nature de l'intervention dépend de l'état de la structure et des éléments concernés. Certaines situations peuvent nécessiter une intervention localisée tandis que d'autres peuvent demander des travaux plus importants.",
          },
          {
            question:
              "La charpente doit-elle être examinée lors d'une rénovation de toiture ?",
            answer:
              "Lorsque des travaux importants sont envisagés sur une toiture, l'état de la structure qui supporte la couverture peut également être pris en compte afin de déterminer les travaux nécessaires.",
          },
          {
            question:
              "Intervenez-vous pour les travaux de charpente à Perpignan ?",
            answer:
              "Oui. Couverture Catalane intervient à Perpignan et dans les Pyrénées-Orientales pour différents travaux de charpente.",
          },
          {
            question: "Comment demander un devis pour une charpente ?",
            answer:
              "Vous pouvez présenter votre projet à Couverture Catalane depuis le formulaire de contact ou appeler directement le 06 62 12 56 11.",
          },
        ]}
      />
    </>
  );
}