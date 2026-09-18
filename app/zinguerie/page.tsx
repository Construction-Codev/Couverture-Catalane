import type { Metadata } from "next";

import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import SectionBanner from "@/components/SectionBanner";
import ServiceContent from "@/components/ServiceContent";
import ServiceGallery from "@/components/ServiceGallery";

export const metadata: Metadata = {
  title: "Zinguerie et gouttières à Perpignan",

  description:
    "Travaux de zinguerie et gouttières à Perpignan et dans les Pyrénées-Orientales : pose, réparation et évacuation des eaux pluviales.",

  alternates: {
    canonical: "/zinguerie",
  },

  openGraph: {
    title: "Zinguerie et gouttières à Perpignan | Couverture Catalane",
    description:
      "Travaux de zinguerie, gouttières et évacuation des eaux pluviales à Perpignan et dans les Pyrénées-Orientales.",
    url: "/zinguerie",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zinguerie et gouttières à Perpignan | Couverture Catalane",
    description:
      "Travaux de zinguerie et gouttières à Perpignan et dans les Pyrénées-Orientales.",
  },
};

export default function ZingueriePage() {
  const images = [
    {
      image: "/zinguerie2.png",
      alt: "Travaux sur une gouttière de toiture",
    },
    {
      image: "/zinguerie.png",
      alt: "Éléments de zinguerie sur une toiture",
    },
    {
      image: "/zinguerie3.png",
      alt: "Intervention sur une gouttière",
    },
  ];

  return (
    <>
      <SectionBanner
        title="Zinguerie et gouttières à Perpignan"
        subtitle="Travaux liés à l'étanchéité et à l'évacuation des eaux pluviales dans les Pyrénées-Orientales"
        backgroundImage="/zinguerie.png"
        imageAlt="Travaux de zinguerie et gouttière sur une toiture"
      />

      <Breadcrumb
        items={[
          {
            label: "Zinguerie et gouttières",
          },
        ]}
      />

      <ServiceContent
        eyebrow="Zinguerie"
        title="Des éléments essentiels au fonctionnement de votre toiture"
        intro="Couverture Catalane intervient à Perpignan et dans les Pyrénées-Orientales pour des travaux de zinguerie et de gouttières. Ces éléments participent notamment à l'étanchéité de certaines zones de la toiture et à l'évacuation des eaux pluviales."
        items={[
          {
            title: "Gouttières",
            description:
              "Les gouttières recueillent l'eau provenant de la toiture afin de permettre son évacuation.",
          },
          {
            title: "Descentes d'eau",
            description:
              "Les descentes permettent d'acheminer les eaux pluviales collectées par les gouttières.",
          },
          {
            title: "Raccords de toiture",
            description:
              "Certaines zones de raccord nécessitent des éléments adaptés afin de participer à l'étanchéité de la couverture.",
          },
          {
            title: "Réparation",
            description:
              "Un élément détérioré ou présentant un défaut peut nécessiter une remise en état ou un remplacement selon sa situation.",
          },
        ]}
      />

      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-400">
                Eaux pluviales
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Le rôle des gouttières et de la zinguerie
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                La toiture reçoit directement les eaux de pluie. Les éléments
                de collecte et d&apos;évacuation permettent de guider cette eau
                vers les évacuations prévues et participent au bon
                fonctionnement de l&apos;ensemble de la toiture.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Collecter l'eau",
                  text: "La gouttière récupère une partie des eaux qui s'écoulent depuis la couverture.",
                },
                {
                  number: "02",
                  title: "Évacuer les eaux",
                  text: "Les descentes permettent d'acheminer les eaux collectées vers leur évacuation.",
                },
                {
                  number: "03",
                  title: "Protéger les raccords",
                  text: "Certains éléments de zinguerie participent à l'étanchéité des zones particulières de la toiture.",
                },
                {
                  number: "04",
                  title: "Maintenir l'ensemble",
                  text: "Un élément déformé, détérioré ou mal positionné peut nécessiter une intervention.",
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

      <ServiceGallery
        title="Travaux de zinguerie et gouttières"
        description="Illustrations de travaux liés aux gouttières et aux éléments de zinguerie d'une toiture."
        images={images}
      />

      <ServiceContent
        eyebrow="Entretien & réparation"
        title="Quand intervenir sur une gouttière ou un élément de zinguerie ?"
        intro="Une gouttière ou un élément de zinguerie détérioré peut perturber l'évacuation de l'eau ou affecter une zone de la toiture. L'état de l'élément concerné permet de déterminer la nature des travaux à envisager."
        items={[
          {
            title: "Gouttière détériorée",
            description:
              "Une gouttière endommagée ou déformée peut nécessiter une réparation ou le remplacement de la partie concernée.",
          },
          {
            title: "Écoulement anormal",
            description:
              "Un débordement ou un écoulement inhabituel peut indiquer qu'un élément du système d'évacuation doit être examiné.",
          },
          {
            title: "Raccord endommagé",
            description:
              "Les raccords et certaines zones particulières de la toiture peuvent nécessiter une intervention lorsqu'ils sont détériorés.",
          },
          {
            title: "Infiltration",
            description:
              "Lorsque de l'eau pénètre dans le bâtiment, la zinguerie peut faire partie des éléments à examiner pour rechercher l'origine du problème.",
          },
        ]}
        relatedServices={[
          {
            title: "Fuites de toiture",
            description:
              "Pour rechercher l'origine d'une infiltration ou d'une entrée d'eau.",
            href: "/fuites",
          },
          {
            title: "Réparation de toiture",
            description:
              "Pour remettre en état les éléments détériorés de votre couverture.",
            href: "/reparations",
          },
          {
            title: "Couverture",
            description:
              "Pour vos travaux de couverture et de rénovation de toiture.",
            href: "/couverture",
          },
        ]}
      />

      <FAQ
        title="Questions fréquentes sur la zinguerie et les gouttières"
        intro="Quelques informations utiles concernant l'évacuation des eaux pluviales et les éléments de zinguerie d'une toiture."
        items={[
          {
            question: "À quoi sert la zinguerie d'une toiture ?",
            answer:
              "Les éléments de zinguerie peuvent avoir plusieurs fonctions selon leur emplacement, notamment participer à l'étanchéité de certaines zones et à la collecte ou à l'évacuation des eaux pluviales.",
          },
          {
            question: "Quand faut-il faire vérifier une gouttière ?",
            answer:
              "Une gouttière déformée ou détériorée, un débordement ou un écoulement inhabituel peuvent indiquer qu'une vérification de l'installation est nécessaire.",
          },
          {
            question: "Une gouttière peut-elle être à l'origine d'une infiltration ?",
            answer:
              "Un problème d'évacuation des eaux peut contribuer à l'apparition d'humidité ou d'infiltrations dans certaines situations. L'origine doit être recherchée avant de déterminer la réparation nécessaire.",
          },
          {
            question: "Réparez-vous également les gouttières ?",
            answer:
              "Couverture Catalane intervient pour des travaux liés aux gouttières et à la zinguerie. La nature de l'intervention dépend de l'état de l'élément concerné.",
          },
          {
            question: "Intervenez-vous à Perpignan pour la zinguerie ?",
            answer:
              "Oui. Couverture Catalane intervient à Perpignan et dans les Pyrénées-Orientales pour des travaux de zinguerie et de gouttières.",
          },
        ]}
      />
    </>
  );
}