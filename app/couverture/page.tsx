import type { Metadata } from "next";

import Breadcrumb from "@/components/Breadcrumb";
import SectionBanner from "@/components/SectionBanner";
import ServiceContent from "@/components/ServiceContent";
import ServiceGallery from "@/components/ServiceGallery";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Travaux de couverture à Perpignan",
  description:
    "Travaux de couverture à Perpignan et dans les Pyrénées-Orientales : rénovation de toiture, remplacement de tuiles, réparation et étanchéité.",

  alternates: {
    canonical: "/couverture",
  },

  openGraph: {
    title: "Travaux de couverture à Perpignan | Couverture Catalane",
    description:
      "Couverture, rénovation et réparation de toiture à Perpignan et dans les Pyrénées-Orientales.",
    url: "/couverture",
    type: "website",
  },
};

export default function CouverturePage() {
  const images = [
    {
      image: "/couverture.png",
      alt: "Travaux de couverture sur une toiture",
    },
    {
      image: "/couverture2.png",
      alt: "Travaux sur une toiture en tuiles",
    },
    {
      image: "/couverture3.png",
      alt: "Rénovation d'une couverture de toiture",
    },
  ];

  return (
    <>
      <SectionBanner
        title="Travaux de couverture à Perpignan"
        subtitle="Rénovation, réparation et travaux de toiture dans les Pyrénées-Orientales"
        backgroundImage="/couverture.png"
        imageAlt="Travaux de couverture sur une toiture dans les Pyrénées-Orientales"
      />

      <Breadcrumb
        items={[{ label: "Couverture" }]}
        currentPath="/couverture"
      />

      <ServiceContent
        eyebrow="Couverture & toiture"
        title="Des travaux adaptés à l'état de votre toiture"
        intro="Couverture Catalane intervient à Perpignan et dans les Pyrénées-Orientales pour différents travaux de couverture. La nature de l'intervention dépend de la configuration du toit, de son état et du problème constaté."
        items={[
          {
            title: "Rénovation de toiture",
            description:
              "Intervention sur une couverture vieillissante ou dégradée afin de remettre en état les éléments concernés.",
          },
          {
            title: "Tuiles endommagées",
            description:
              "Remplacement ou remise en place des éléments de couverture détériorés ou déplacés.",
          },
          {
            title: "Étanchéité",
            description:
              "Recherche des points pouvant favoriser les infiltrations et intervention sur les éléments concernés.",
          },
          {
            title: "Entretien de la couverture",
            description:
              "Travaux permettant d'entretenir la toiture et d'identifier les éléments nécessitant une intervention.",
          },
        ]}
      />

      <ServiceGallery
        title="Travaux de couverture"
        description="Quelques illustrations des travaux liés à la couverture et à la rénovation de toiture."
        images={images}
      />

      <ServiceContent
        eyebrow="Entretien & réparation"
        title="Quand une toiture nécessite-t-elle une intervention ?"
        intro="Une tuile déplacée, une infiltration, une couverture vieillissante ou une évacuation des eaux pluviales défectueuse peuvent être des signes qu'une partie de la toiture doit être examinée. Identifier l'origine du problème permet de déterminer l'intervention adaptée."
        items={[
          {
            title: "Tuiles déplacées ou cassées",
            description:
              "Des éléments détériorés peuvent exposer certaines parties de la toiture aux intempéries.",
          },
          {
            title: "Traces d'infiltration",
            description:
              "L'apparition d'humidité ou de traces d'eau peut signaler un défaut à rechercher au niveau de la toiture.",
          },
          {
            title: "Couverture vieillissante",
            description:
              "L'état général des tuiles et des différents éléments de toiture peut nécessiter une rénovation.",
          },
          {
            title: "Zinguerie et évacuation d'eau",
            description:
              "Les éléments assurant l'évacuation des eaux pluviales participent au bon fonctionnement de la toiture.",
          },
        ]}
        relatedServices={[
          {
            title: "Fuites de toiture",
            description:
              "Recherche et réparation des problèmes d'infiltration.",
            href: "/fuites",
          },
          {
            title: "Réparations",
            description:
              "Interventions sur les éléments endommagés de la toiture.",
            href: "/reparations",
          },
          {
            title: "Zinguerie",
            description:
              "Travaux liés à l'étanchéité et à l'évacuation des eaux pluviales.",
            href: "/zinguerie",
          },
        ]}
      />
      <FAQ
  title="Questions fréquentes sur les travaux de couverture"
  intro="Les principales questions à se poser avant des travaux de toiture à Perpignan ou dans les Pyrénées-Orientales."
  items={[
    {
      question: "Quand faut-il envisager des travaux de couverture ?",
      answer:
        "Des tuiles cassées ou déplacées, des traces d'infiltration ou une dégradation visible de la couverture peuvent justifier un examen de la toiture afin d'identifier les travaux nécessaires.",
    },
    {
      question: "Intervenez-vous pour une toiture qui fuit ?",
      answer:
        "Oui. Couverture Catalane intervient également pour rechercher l'origine d'une fuite ou d'une infiltration et réaliser les travaux adaptés au problème identifié.",
    },
    {
      question: "Réalisez-vous aussi des travaux de zinguerie ?",
      answer:
        "Oui. Les travaux de zinguerie font partie des prestations proposées par Couverture Catalane, notamment pour les éléments liés à l'étanchéité et à l'évacuation des eaux pluviales.",
    },
    {
      question: "Dans quel secteur intervenez-vous ?",
      answer:
        "Couverture Catalane est basée à Pia et intervient à Perpignan ainsi que dans les Pyrénées-Orientales selon la nature et la localisation des travaux.",
    },
    {
      question: "Comment demander un devis pour ma toiture ?",
      answer:
        "Vous pouvez présenter votre projet depuis la page contact ou appeler directement Couverture Catalane au 06 62 12 56 11.",
    },
  ]}
/>
    </>
  );
}