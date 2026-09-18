import type { Metadata } from "next";

import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import SectionBanner from "@/components/SectionBanner";
import ServiceContent from "@/components/ServiceContent";
import ServiceGallery from "@/components/ServiceGallery";

export const metadata: Metadata = {
  title: "Réparation de toiture à Perpignan",

  description:
    "Réparation de toiture à Perpignan et dans les Pyrénées-Orientales : tuiles endommagées, éléments de couverture, étanchéité et remise en état.",

  alternates: {
    canonical: "/reparations",
  },

  openGraph: {
    title: "Réparation de toiture à Perpignan | Couverture Catalane",
    description:
      "Travaux de réparation et remise en état de toiture à Perpignan et dans les Pyrénées-Orientales.",
    url: "/reparations",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Réparation de toiture à Perpignan | Couverture Catalane",
    description:
      "Réparation de toiture, tuiles et éléments endommagés à Perpignan et dans les Pyrénées-Orientales.",
  },
};

export default function ReparationsPage() {
  const images = [
    {
      image: "/reparations2.png",
      alt: "Travaux de réparation sur une toiture",
    },
    {
      image: "/reparations.png",
      alt: "Remise en état d'une couverture de toiture",
    },
    {
      image: "/reparations3.png",
      alt: "Intervention sur des éléments de toiture endommagés",
    },
  ];

  return (
    <>
      <SectionBanner
        title="Réparation de toiture à Perpignan"
        subtitle="Remise en état des tuiles et éléments de toiture endommagés dans les Pyrénées-Orientales"
        backgroundImage="/reparations.png"
        imageAlt="Travaux de réparation d'une toiture"
      />

      <Breadcrumb
        items={[
          {
            label: "Réparation de toiture",
          },
        ]}
      />

      <ServiceContent
        eyebrow="Réparation de toiture"
        title="Remettre en état les éléments endommagés de votre toiture"
        intro="Couverture Catalane intervient à Perpignan et dans les Pyrénées-Orientales lorsqu'une toiture présente des éléments détériorés ou nécessite une remise en état. L'intervention dépend de la partie concernée et de l'état général de la couverture."
        items={[
          {
            title: "Tuiles cassées",
            description:
              "Les tuiles cassées ou fortement détériorées peuvent nécessiter un remplacement afin de remettre en état la zone concernée.",
          },
          {
            title: "Tuiles déplacées",
            description:
              "Des éléments de couverture déplacés peuvent nécessiter une remise en place ou une intervention adaptée à leur état.",
          },
          {
            title: "Éléments détériorés",
            description:
              "Certaines parties de la toiture peuvent se dégrader et nécessiter une réparation ciblée.",
          },
          {
            title: "Points d'étanchéité",
            description:
              "Lorsque la dégradation concerne un point participant à l'étanchéité, une reprise de la zone concernée peut être nécessaire.",
          },
        ]}
      />

      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-400">
                État de la toiture
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Quels dommages peuvent nécessiter une réparation ?
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Les intempéries, l&apos;usure ou la détérioration d&apos;un
                élément peuvent affecter une partie de la couverture. La nature
                de la réparation dépend du dommage constaté et de la
                configuration de la toiture.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Éléments cassés",
                  text: "Une tuile ou un autre élément de couverture peut être cassé ou détérioré.",
                },
                {
                  number: "02",
                  title: "Éléments déplacés",
                  text: "Certaines parties de la couverture peuvent avoir bougé et nécessiter une remise en état.",
                },
                {
                  number: "03",
                  title: "Usure localisée",
                  text: "Une zone particulière de la toiture peut présenter une dégradation plus importante que le reste de la couverture.",
                },
                {
                  number: "04",
                  title: "Défaut d'étanchéité",
                  text: "La détérioration d'un élément peut parfois affecter l'étanchéité de la toiture.",
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
        title="Travaux de réparation de toiture"
        description="Illustrations d'interventions liées à la remise en état et à la réparation d'éléments de toiture."
        images={images}
      />

      <ServiceContent
        eyebrow="Remise en état"
        title="Réparer la zone concernée selon le problème constaté"
        intro="Une réparation de toiture ne correspond pas nécessairement à une rénovation complète. Lorsque le problème est localisé, les travaux peuvent concerner uniquement les éléments détériorés ou la zone nécessitant une remise en état."
        items={[
          {
            title: "Réparation localisée",
            description:
              "Une zone détériorée peut nécessiter une intervention ciblée lorsque le reste de la couverture n'est pas concerné.",
          },
          {
            title: "Remplacement d'éléments",
            description:
              "Certains éléments endommagés peuvent nécessiter un remplacement selon leur état.",
          },
          {
            title: "Vérification de la zone",
            description:
              "L'état de la zone concernée permet de déterminer la nature des travaux à envisager.",
          },
          {
            title: "Travaux associés",
            description:
              "Selon le problème constaté, l'intervention peut également concerner l'étanchéité ou la zinguerie.",
          },
        ]}
        relatedServices={[
          {
            title: "Fuites de toiture",
            description:
              "Une infiltration ? Découvrez la page consacrée à la recherche et à la réparation des fuites.",
            href: "/fuites",
          },
          {
            title: "Couverture",
            description:
              "Pour des travaux plus importants de couverture ou de rénovation de toiture.",
            href: "/couverture",
          },
          {
            title: "Zinguerie",
            description:
              "Pour les éléments liés à la zinguerie et à l'évacuation des eaux pluviales.",
            href: "/zinguerie",
          },
        ]}
      />

      <FAQ
        title="Questions fréquentes sur la réparation de toiture"
        intro="Quelques informations utiles lorsqu'une partie de votre toiture est endommagée."
        items={[
          {
            question: "Une tuile cassée doit-elle être remplacée ?",
            answer:
              "Une tuile cassée ou fortement détériorée peut nécessiter un remplacement. Il faut également vérifier l'état de la zone concernée afin de déterminer si d'autres éléments sont affectés.",
          },
          {
            question:
              "Faut-il refaire toute la toiture pour une zone endommagée ?",
            answer:
              "Pas nécessairement. La nature des travaux dépend de l'étendue des dommages et de l'état général de la couverture. Certaines situations peuvent permettre une réparation localisée.",
          },
          {
            question:
              "Quelle différence entre réparation de toiture et recherche de fuite ?",
            answer:
              "La réparation concerne la remise en état d'un ou plusieurs éléments détériorés. La recherche de fuite consiste d'abord à identifier l'origine d'une infiltration avant de déterminer la réparation nécessaire.",
          },
          {
            question:
              "Intervenez-vous pour les réparations de toiture à Perpignan ?",
            answer:
              "Oui. Couverture Catalane intervient à Perpignan et dans les Pyrénées-Orientales pour différents travaux de réparation de toiture.",
          },
          {
            question: "Comment présenter mon problème de toiture ?",
            answer:
              "Vous pouvez contacter Couverture Catalane au 06 62 12 56 11 ou transmettre les informations concernant votre toiture depuis le formulaire de contact.",
          },
        ]}
      />
    </>
  );
}