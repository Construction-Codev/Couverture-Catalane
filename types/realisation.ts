export type RealisationCategory =
  | "urgence"
  | "reparation"
  | "refection"
  | "nettoyage"
  | "zinguerie"
  | "charpente";

export interface Realisation {
  slug: string;
  title: string;
  city: string;
  category: RealisationCategory;
  service: string;
  date?: string;
  image?: string;
  summary: string;
  description: string;
}