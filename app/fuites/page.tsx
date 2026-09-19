import type { Metadata } from "next";

import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import SectionBanner from "@/components/SectionBanner";
import ServiceContent from "@/components/ServiceContent";
import ServiceGallery from "@/components/ServiceGallery";

export const metadata: Metadata = {
  title: "Réparation de fuite de toiture à Perpignan",

  description:
    "Recherche et réparation de fuites de toiture à Perpignan et dans les Pyrénées-Orientales : infiltrations, tuiles endommagées, étanchéité et zinguerie.",

  alternates: {
    canonical: "/fuites",
  },

  openGraph: {
    title:
      "Réparation de fuite de toiture à Perpignan | Couverture Catalane",
    description:
      "Recherche de l'origine des infiltrations et réparation de fuites de toiture à Perpignan et dans les Pyrénées-Orientales.",
    url: "/fuites",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Réparation de fuite de toiture à Perpignan | Couverture Catalane",
    description:
      "Recherche et réparation de fuites et infiltrations de toiture à Perpignan et dans les Pyrénées-Orientales.",
  },
};

export default function FuitesPage() {
  const images = [
    {
      image: "/fuites2.png",
      alt: "Recherche d'une fuite sur une toiture",
    },
    {
      image: "/fuites.png",
      alt: "Intervention sur une toiture présentant une infiltration",
    },
    {
      image: "/fuites3.png",
      alt: "Travaux de réparation sur une toiture",
    },
  ];

  return (
    <>
      <SectionBanner
        title="Réparation de fuite de toiture à Perpignan"
        subtitle="Recherche de l'origine des infiltrations et réparation de toiture dans les Pyrénées-Orientales"
        backgroundImage="/fuites.png"
        imageAlt="Intervention sur une toiture présentant une fuite"
      />

      <Breadcrumb
        items={[{ label: "Fuites" }]}
        currentPath="/fuites"
      />

      <ServiceContent
        eyebrow="Fuite & infiltration"
        title="Identifier l'origine d'une fuite avant de réparer"
        intro="Une infiltration d'eau peut avoir plusieurs origines. Couverture Catalane intervient à Perpignan et dans les Pyrénées-Orientales pour rechercher le point à l'origine du problème et déterminer les travaux à réaliser sur la toiture."
        items={[
          {
            title: "Tuiles endommagées",
            description:
              "Une tuile cassée, déplacée ou détériorée peut laisser l'eau pénétrer sous la couverture.",
          },
          {
            title: "Défaut d'étanchéité",
            description:
              "Certains raccords ou points particuliers de la toiture peuvent être à l'origine d'une infiltration.",
          },
          {
            title: "Éléments de zinguerie",
            description:
              "Les éléments métalliques participant à l'étanchéité de la toiture peuvent nécessiter une vérification ou une intervention.",
          },
          {
            title: "Évacuation des eaux",
            description:
              "Un problème lié aux gouttières ou à l'évacuation des eaux pluviales peut également contribuer à l'apparition d'infiltrations.",
          },
        ]}
      />

      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-400">
                Signes à surveiller
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Comment repérer un problème d&apos;infiltration ?
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Une fuite de toiture n&apos;est pas toujours visible directement
                depuis l&apos;extérieur. Certains signes à l&apos;intérieur du
                bâtiment peuvent indiquer la présence d&apos;une infiltration.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Traces d'humidité",
                  text: "Des traces ou auréoles peuvent apparaître sur un plafond ou un mur.",
                },
                {
                  number: "02",
                  title: "Écoulement d'eau",
                  text: "La présence d'eau pendant ou après des précipitations peut signaler une infiltration.",
                },
                {
                  number: "03",
                  title: "Tuiles déplacées",
                  text: "Des éléments de couverture déplacés ou cassés peuvent exposer la toiture aux intempéries.",
                },
                {
                  number: "04",
                  title: "Dégradation visible",
                  text: "Une détérioration de certains éléments de toiture peut nécessiter un examen plus précis.",
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
        title="Recherche et réparation de fuites"
        description="Illustrations d'interventions liées à la recherche d'infiltrations et aux réparations de toiture."
        images={images}
      />

      <ServiceContent
        eyebrow="Réparation de toiture"
        title="Une intervention adaptée à l'origine de l'infiltration"
        intro="Une fois l'origine du problème identifiée, la réparation dépend de l'élément concerné. Il peut s'agir d'intervenir sur la couverture, un point d'étanchéité, la zinguerie ou l'évacuation des eaux pluviales."
        items={[
          {
            title: "Remplacement de tuiles",
            description:
              "Les éléments de couverture cassés ou détériorés peuvent être remplacés lorsque le problème provient de cette zone.",
          },
          {
            title: "Reprise d'étanchéité",
            description:
              "Un point présentant un défaut d'étanchéité peut nécessiter une intervention ciblée.",
          },
          {
            title: "Travaux de zinguerie",
            description:
              "Une intervention peut concerner les éléments de zinguerie lorsqu'ils participent à l'origine de l'infiltration.",
          },
          {
            title: "Gouttières et évacuation",
            description:
              "Les éléments d'évacuation des eaux peuvent être concernés lorsque leur état ou leur fonctionnement contribue au problème.",
          },
        ]}
        relatedServices={[
          {
            title: "Réparation de toiture",
            description:
              "Découvrir les interventions sur les éléments endommagés d'une toiture.",
            href: "/reparations",
          },
          {
            title: "Couverture",
            description:
              "Travaux de couverture et rénovation de toiture à Perpignan et dans le 66.",
            href: "/couverture",
          },
          {
            title: "Zinguerie",
            description:
              "Travaux liés aux éléments de zinguerie et à l'évacuation des eaux pluviales.",
            href: "/zinguerie",
          },
        ]}
      />

      <FAQ
        title="Questions fréquentes sur les fuites de toiture"
        intro="Quelques réponses utiles lorsqu'une infiltration ou un problème d'étanchéité apparaît sur une toiture."
        items={[
          {
            question: "Comment savoir d'où vient une fuite de toiture ?",
            answer:
              "L'endroit où l'eau apparaît à l'intérieur ne correspond pas nécessairement exactement au point d'entrée sur la toiture. L'origine peut notamment être liée à une tuile endommagée, un défaut d'étanchéité, un élément de zinguerie ou l'évacuation des eaux pluviales.",
          },
          {
            question: "Une tuile cassée peut-elle provoquer une infiltration ?",
            answer:
              "Une tuile cassée, déplacée ou fortement détériorée peut exposer une partie de la couverture à l'eau. La toiture doit néanmoins être examinée afin de déterminer l'origine réelle de l'infiltration.",
          },
          {
            question: "Que faire lorsque de l'eau apparaît au plafond ?",
            answer:
              "La présence d'eau ou d'une auréole peut signaler une infiltration. Il est utile de rechercher l'origine du problème au niveau de la toiture afin de déterminer la réparation nécessaire.",
          },
          {
            question:
              "Intervenez-vous pour les fuites de toiture à Perpignan ?",
            answer:
              "Oui. Couverture Catalane intervient à Perpignan et dans les Pyrénées-Orientales pour la recherche et la réparation de problèmes de fuite et d'infiltration de toiture.",
          },
          {
            question: "Comment demander une intervention ?",
            answer:
              "Vous pouvez contacter Couverture Catalane au 06 62 12 56 11 ou transmettre votre demande depuis le formulaire de contact du site.",
          },
        ]}
      />
    </>
  );
}