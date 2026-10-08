/**
 * Maillage interne entre pages services, réalisations et conseils.
 */

type ServiceInfo = {
  /** Intitulé de la prestation (sert d'ancre vers la page service). */
  label: string;
  /** Rappel factuel de la prestation, affiché sur les fiches réalisations. */
  summary: string;
};

export const services: Record<string, ServiceInfo> = {
  "/couverture": {
    label: "Couverture et rénovation de toiture",
    summary:
      "Lorsqu’une couverture est vieillissante ou dégradée sur une large surface, une réfection permet de remettre en état l’ensemble des éléments concernés plutôt que de multiplier les réparations ponctuelles.",
  },
  "/reparations": {
    label: "Réparation de toiture",
    summary:
      "Une réparation de toiture cible les éléments endommagés : tuiles cassées, déplacées ou envolées, zone détériorée ou point d’étanchéité. Elle permet de remettre en état la partie concernée sans refaire toute la couverture lorsque ce n’est pas nécessaire.",
  },
  "/fuites": {
    label: "Recherche et réparation de fuite",
    summary:
      "Après des intempéries, la priorité est de limiter les entrées d’eau dans l’habitation, puis d’identifier l’origine de l’infiltration avant de réaliser la réparation adaptée.",
  },
  "/zinguerie": {
    label: "Zinguerie et gouttières",
    summary:
      "Les ouvrages de zinguerie (gouttières, descentes d’eau, raccords) collectent et évacuent les eaux pluviales. Leur bon état participe directement à l’étanchéité de la toiture.",
  },
  "/nettoyage": {
    label: "Nettoyage et démoussage de toiture",
    summary:
      "Le nettoyage et le démoussage retirent les mousses, lichens et salissures présents sur la couverture. C’est aussi l’occasion d’observer l’état des tuiles.",
  },
  "/charpente": {
    label: "Travaux de charpente",
    summary:
      "La charpente supporte l’ensemble de la couverture. Une intervention peut être nécessaire lorsqu’un élément est détérioré ou à l’occasion d’une rénovation de toiture.",
  },
};

/**
 * Articles conseils liés à chaque page service.
 */
export const articlesByService: Record<string, string[]> = {
  "/couverture": [
    "reparer-ou-refaire-toiture-comment-decider",
    "tuiles-cassees-deplacees-envolees-que-faire",
  ],
  "/reparations": [
    "tuiles-cassees-deplacees-envolees-que-faire",
    "toiture-endommagee-apres-tempete-que-faire",
    "reparer-ou-refaire-toiture-comment-decider",
  ],
  "/fuites": [
    "fuite-toiture-comment-trouver-origine",
    "toiture-endommagee-apres-tempete-que-faire",
  ],
  "/nettoyage": [
    "quand-demousser-toiture",
    "hydrofuge-toiture-utilite-quand-appliquer",
  ],
};
