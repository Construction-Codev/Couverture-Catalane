"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import type {
  Realisation,
  RealisationCategory,
} from "@/types/realisation";

type Props = {
  realisations: Realisation[];
};

type Filter = "all" | RealisationCategory;

const filters: {
  value: Filter;
  label: string;
}[] = [
  { value: "all", label: "Toutes" },
  { value: "urgence", label: "Urgences" },
  { value: "reparation", label: "Réparations" },
  { value: "refection", label: "Réfection de toiture" },
  { value: "nettoyage", label: "Nettoyage & démoussage" },
  { value: "zinguerie", label: "Zinguerie" },
  { value: "charpente", label: "Charpente" },
];

const categoryLabels: Record<RealisationCategory, string> = {
  urgence: "Urgence",
  reparation: "Réparation",
  refection: "Réfection de toiture",
  nettoyage: "Nettoyage & démoussage",
  zinguerie: "Zinguerie",
  charpente: "Charpente",
};

export default function RealisationGrid({
  realisations,
}: Props) {
  const [activeFilter, setActiveFilter] =
    useState<Filter>("all");

  const filteredRealisations =
    activeFilter === "all"
      ? realisations
      : realisations.filter(
          (item) => item.category === activeFilter
        );

  return (
    <div>
      <div
        className="mb-10 flex flex-wrap justify-center gap-2"
        aria-label="Filtrer les réalisations"
      >
        {filters.map((filter) => {
          const active = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              aria-pressed={active}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                active
                  ? "bg-orange-500 text-white"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-orange-300 hover:text-orange-600"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {filteredRealisations.map((item) => (
          <article
            key={item.slug}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
          >
            {item.image && (
              <Link
                href={`/realisations/${item.slug}`}
                className="relative block aspect-video overflow-hidden bg-slate-100"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} à ${item.city}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            )}

            <div className="p-6">
              <div className="mb-4 flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full bg-orange-50 px-3 py-1 font-bold text-orange-700">
                  {categoryLabels[item.category]}
                </span>

                <span className="flex items-center gap-1 text-slate-500">
                  <MapPin className="h-3.5 w-3.5" />
                  {item.city}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900">
                <Link
                  href={`/realisations/${item.slug}`}
                  className="transition hover:text-orange-600"
                >
                  {item.title}
                </Link>
              </h2>

              <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                {item.summary}
              </p>

              <Link
                href={`/realisations/${item.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-600 transition hover:text-orange-700"
              >
                Découvrir cette réalisation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filteredRealisations.length === 0 && (
        <p className="py-12 text-center text-sm text-slate-500">
          Aucune réalisation dans cette catégorie pour le moment.
        </p>
      )}
    </div>
  );
}