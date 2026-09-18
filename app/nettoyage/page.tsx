import type { Metadata } from "next";

import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import SectionBanner from "@/components/SectionBanner";
import ServiceContent from "@/components/ServiceContent";
import ServiceGallery from "@/components/ServiceGallery";

export const metadata: Metadata = {
  title: "Nettoyage, démoussage & hydrofuge toiture à Perpignan",

  description:
    "Nettoyage, démoussage et traitement hydrofuge de toiture à Perpignan et dans les Pyrénées-Orientales. Entretien de votre couverture par Couverture Catalane.",

  alternates: {
    canonical: "/nettoyage",
  },

  openGraph: {
    title:
      "Nettoyage & hydrofuge toiture à Perpignan | Couverture Catalane",
    description:
      "Nettoyage, démoussage et traitement hydrofuge de toiture à Perpignan et dans les Pyrénées-Orientales.",
    url: "/nettoyage",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Nettoyage & hydrofuge toiture à Perpignan | Couverture Catalane",
    description:
      "Nettoyage, démoussage et traitement hydrofuge de toiture à Perpignan et dans les Pyrénées-Orientales.",
  },
};

export default function NettoyagePage() {
  const images = [
    {
      image: "/nettoyage.png",
      alt: "Nettoyage d'une toiture",
    },
    {
      image: "/nettoyage2.png",
      alt: "Démoussage et entretien d'une toiture",
    },
    {
      image: "/nettoyage3.png",
      alt: "Toiture après une opération de nettoyage",
    },
  ];

  return (
    <>
      {/* HERO */}
      <SectionBanner
        title="Nettoyage et hydrofuge de toiture à Perpignan"
        subtitle="Nettoyage, démoussage et traitement hydrofuge dans les Pyrénées-Orientales"
        backgroundImage="/nettoyage2.png"
        imageAlt="Nettoyage et entretien d'une toiture"
      />

      {/* FIL D'ARIANE */}
      <Breadcrumb
        items={[
          {
            label: "Nettoyage de toiture",
          },
        ]}
      />

      {/* PRÉSENTATION */}
      <ServiceContent
        eyebrow="Nettoyage & protection"
        title="Nettoyage, démoussage et traitement hydrofuge de toiture"
        intro="Couverture Catalane intervient à Perpignan et dans les Pyrénées-Orientales pour le nettoyage, le démoussage et le traitement hydrofuge des toitures. La prestation est adaptée à l'état de la couverture et aux dépôts présents."
        items={[
          {
            title: "Nettoyage de toiture",
            description:
              "Le nettoyage permet de retirer les salissures et dépôts accumulés sur la surface de la couverture.",
          },
          {
            title: "Démoussage",
            description:
              "Le démoussage concerne le retrait des mousses, lichens et végétations présents sur la toiture.",
          },
          {
            title: "Traitement hydrofuge",
            description:
              "Un traitement hydrofuge peut être appliqué sur une couverture adaptée afin de limiter la pénétration de l'eau dans le matériau.",
          },
          {
            title: "Entretien de la couverture",
            description:
              "L'intervention permet également d'observer l'état visible des éléments de toiture et de repérer d'éventuelles détériorations.",
          },
        ]}
      />

      {/* POURQUOI ENTRETENIR LA TOITURE */}
      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-400">
                Entretien
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Pourquoi entretenir régulièrement une toiture ?
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Une toiture est exposée toute l&apos;année aux intempéries,
                aux poussières et aux dépôts naturels. Son entretien permet
                notamment de retirer les salissures accumulées et
                d&apos;observer l&apos;état visible de la couverture.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Mousses",
                  text: "Des mousses peuvent progressivement se développer sur certaines parties de la couverture.",
                },
                {
                  number: "02",
                  title: "Lichens",
                  text: "Des lichens et autres dépôts naturels peuvent apparaître avec le temps sur les matériaux de toiture.",
                },
                {
                  number: "03",
                  title: "Salissures",
                  text: "Poussières, feuilles et différents résidus peuvent s'accumuler sur la toiture.",
                },
                {
                  number: "04",
                  title: "État de la couverture",
                  text: "L'entretien est également l'occasion d'observer les éléments visibles de la toiture et de repérer une éventuelle détérioration.",
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

      {/* HYDROFUGE */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
              Traitement de toiture
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Traitement hydrofuge de toiture à Perpignan
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-600">
              <p>
                Après le nettoyage et selon l&apos;état de la couverture, un
                traitement hydrofuge peut être envisagé. Il est appliqué sur
                le matériau de couverture afin de réduire son absorption
                d&apos;eau.
              </p>

              <p>
                L&apos;hydrofuge complète l&apos;entretien d&apos;une toiture
                lorsque son état et son matériau permettent l&apos;application
                du traitement.
              </p>

              <p>
                Un traitement hydrofuge ne remplace toutefois pas une
                réparation. Si une tuile est cassée, qu&apos;une infiltration
                est présente ou qu&apos;un élément de toiture est détérioré,
                le problème doit être traité indépendamment.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-orange-50 p-7 sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
              La prestation
            </p>

            <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              Nettoyage, démoussage et hydrofuge
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              Selon l&apos;état et les besoins de la couverture,
              l&apos;intervention peut associer plusieurs étapes.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  number: "01",
                  text: "Observation de l'état de la couverture",
                },
                {
                  number: "02",
                  text: "Nettoyage des salissures et dépôts",
                },
                {
                  number: "03",
                  text: "Démoussage de la toiture",
                },
                {
                  number: "04",
                  text: "Traitement hydrofuge lorsque la couverture s'y prête",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="flex items-start gap-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-600 text-sm font-black text-white">
                    {item.number}
                  </span>

                  <p className="pt-1.5 font-bold leading-relaxed text-slate-800">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <ServiceGallery
        title="Nettoyage et entretien de toiture"
        description="Illustrations de travaux liés au nettoyage, au démoussage et à l'entretien d'une couverture."
        images={images}
      />

      {/* ÉTAT / MÉTHODE */}
      <ServiceContent
        eyebrow="État de la toiture"
        title="Un entretien adapté à la couverture"
        intro="La méthode d'entretien dépend de l'état de la toiture, du matériau de couverture et de la nature des dépôts présents. L'objectif est d'intervenir sur les zones concernées en tenant compte de la configuration du toit."
        items={[
          {
            title: "État des tuiles",
            description:
              "L'état visible de la couverture doit être pris en compte avant et pendant les travaux d'entretien.",
          },
          {
            title: "Nature des dépôts",
            description:
              "Mousses, lichens et salissures ne se présentent pas nécessairement de la même manière sur toutes les toitures.",
          },
          {
            title: "Configuration du toit",
            description:
              "La pente, les différents éléments de couverture et la configuration générale influencent l'intervention.",
          },
          {
            title: "Éléments détériorés",
            description:
              "Si une tuile ou une autre partie de la toiture apparaît endommagée, des travaux distincts de réparation peuvent être nécessaires.",
          },
        ]}
        relatedServices={[
          {
            title: "Réparation de toiture",
            description:
              "Pour les tuiles ou éléments de couverture nécessitant une remise en état.",
            href: "/reparations",
          },
          {
            title: "Couverture",
            description:
              "Pour des travaux de couverture ou de rénovation plus importants.",
            href: "/couverture",
          },
          {
            title: "Zinguerie",
            description:
              "Pour les gouttières et les éléments liés à l'évacuation des eaux pluviales.",
            href: "/zinguerie",
          },
        ]}
      />

      {/* FAQ */}
      <FAQ
        title="Questions fréquentes sur le nettoyage et l'hydrofuge de toiture"
        intro="Quelques informations utiles avant un nettoyage, un démoussage ou un traitement hydrofuge de toiture."
        items={[
          {
            question: "Pourquoi nettoyer une toiture ?",
            answer:
              "Avec le temps, des mousses, lichens, poussières et autres dépôts peuvent s'accumuler sur une couverture. Le nettoyage permet de retirer ces éléments et d'entretenir l'aspect général de la toiture.",
          },
          {
            question:
              "Quelle différence entre nettoyage et démoussage ?",
            answer:
              "Le nettoyage concerne plus largement les salissures et dépôts présents sur la couverture. Le démoussage vise plus particulièrement les mousses et végétations qui se sont développées sur la toiture.",
          },
          {
            question:
              "Qu'est-ce qu'un traitement hydrofuge de toiture ?",
            answer:
              "Un traitement hydrofuge est appliqué sur une couverture adaptée afin de limiter la pénétration de l'eau dans le matériau. Il ne remplace pas une réparation lorsque la toiture présente une fuite ou un élément endommagé.",
          },
          {
            question:
              "Faut-il nettoyer la toiture avant un traitement hydrofuge ?",
            answer:
              "Le traitement est réalisé sur une couverture préparée et dont l'état a été pris en compte. Le nettoyage et le démoussage permettent notamment de retirer les dépôts présents avant d'envisager l'application du traitement.",
          },
          {
            question:
              "À quelle fréquence faut-il nettoyer une toiture ?",
            answer:
              "Il n'existe pas une fréquence identique pour toutes les toitures. L'exposition, l'environnement, le matériau et l'état de la couverture influencent l'apparition des mousses et salissures.",
          },
          {
            question:
              "Le nettoyage permet-il de repérer une tuile endommagée ?",
            answer:
              "L'entretien peut permettre d'observer des dégradations visibles sur la couverture. Lorsqu'un élément est endommagé, une réparation distincte peut être nécessaire.",
          },
          {
            question:
              "Intervenez-vous pour le nettoyage et l'hydrofuge à Perpignan ?",
            answer:
              "Oui. Couverture Catalane intervient à Perpignan et dans les Pyrénées-Orientales pour le nettoyage, le démoussage et le traitement hydrofuge de toiture.",
          },
        ]}
      />
    </>
  );
}