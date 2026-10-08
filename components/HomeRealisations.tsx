import Link from "next/link";
import { ArrowRight, BookOpen, MapPin } from "lucide-react";

import realisationsData from "@/data/realisations.json";
import { services } from "@/lib/maillage";
import type { Realisation } from "@/types/realisation";

const realisations = realisationsData as Realisation[];

/**
 * Sélection de chantiers réels couvrant chaque type de travaux
 * et plusieurs communes du département.
 */
const featuredSlugs = [
  "refection-toiture-perpignan",
  "remplacement-tuiles-cabestany",
  "mise-hors-eau-toiture-pia",
  "travaux-zinguerie-perpignan",
  "tuiles-envolees-tempete-argeles-sur-mer",
  "demoussage-toiture-saleilles",
];

const featured = featuredSlugs
  .map((slug) => realisations.find((item) => item.slug === slug))
  .filter((item) => item !== undefined);

export default function HomeRealisations() {
  return (
    <section
      aria-labelledby="home-realisations-title"
      className="border-t border-slate-200 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
            Nos chantiers
          </p>

          <h2
            id="home-realisations-title"
            className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Des chantiers de toiture menés dans tout le département
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            À Perpignan, Pia, Cabestany, Saleilles ou Argelès-sur-Mer :
            quelques interventions réalisées par Couverture Catalane, de la
            réparation après une tempête à la réfection d&apos;une toiture.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/realisations/${project.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-orange-300 hover:shadow-md"
              >
                <span className="flex items-center gap-1.5 text-sm font-bold text-orange-600">
                  <MapPin size={16} aria-hidden="true" />
                  {project.city}
                </span>

                <span className="mt-3 text-lg font-black leading-snug text-slate-950 transition group-hover:text-orange-600">
                  {project.title}
                </span>

                <span className="mt-2 text-sm text-slate-600">
                  {services[project.service]?.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-8">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 font-extrabold text-orange-600 transition hover:text-orange-700"
          >
            Voir toutes nos réalisations
            <ArrowRight size={18} aria-hidden="true" />
          </Link>

          <Link
            href="/conseils"
            className="inline-flex items-center gap-2 font-extrabold text-slate-700 transition hover:text-orange-600"
          >
            <BookOpen size={18} aria-hidden="true" />
            Nos conseils pour votre toiture
          </Link>
        </div>
      </div>
    </section>
  );
}
