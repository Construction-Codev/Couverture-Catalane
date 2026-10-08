import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen, MapPin } from "lucide-react";

import Breadcrumb from "@/components/Breadcrumb";
import { TrackedPhone, TrackedQuote } from "@/components/TrackedCTA";
import {
  PHONE_DISPLAY,
  PHONE_E164,
  inCity,
  pageOpenGraph,
} from "@/lib/seo";
import { articles } from "@/data/articles";
import realisationsData from "@/data/realisations.json";
import { articlesByService, services } from "@/lib/maillage";
import type {
  Realisation,
  RealisationCategory,
} from "@/types/realisation";

const realisations = realisationsData as Realisation[];

const categoryLabels: Record<RealisationCategory, string> = {
  urgence: "Urgence",
  reparation: "Réparation",
  refection: "Réfection de toiture",
  nettoyage: "Nettoyage & démoussage",
  zinguerie: "Zinguerie",
  charpente: "Charpente",
};

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return realisations.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = realisations.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {};
  }

  const description = `${project.summary} Par Couverture Catalane, couvreur dans les Pyrénées-Orientales.`;

  return {
    title: `${project.title} ${inCity(project.city)}`,
    description,
    alternates: {
      canonical: `/realisations/${project.slug}`,
    },
    openGraph: pageOpenGraph({
      title: `${project.title} ${inCity(project.city)} | Couverture Catalane`,
      description,
      url: `/realisations/${project.slug}`,
      ...(project.image
        ? {
            images: [
              {
                url: project.image,
                alt: `${project.title} ${inCity(project.city)}`,
              },
            ],
          }
        : {}),
    }),
  };
}

export default async function RealisationPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = realisations.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  const service = services[project.service];

  const serviceArticles = (articlesByService[project.service] ?? [])
    .map((slug) => articles.find((article) => article.slug === slug))
    .filter((article) => article !== undefined)
    .slice(0, 2);

  // Même type de chantier d'abord, puis chantiers dans la même commune.
  const otherProjects = realisations.filter(
    (item) => item.slug !== project.slug
  );

  const relatedProjects = [
    ...otherProjects.filter((item) => item.category === project.category),
    ...otherProjects.filter(
      (item) =>
        item.category !== project.category && item.city === project.city
    ),
  ].slice(0, 3);

  return (
    <main className="bg-slate-50">
      <section className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-5xl">
          <Breadcrumb
            items={[
                {
                label: "Réalisations",
                href: "/realisations",
                },
                {
                label: project.title,
                },
            ]}
            currentPath={`/realisations/${project.slug}`}
          />

          <Link
            href="/realisations"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-orange-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Toutes les réalisations
          </Link>

          <article className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="p-6 sm:p-10">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-700">
                  {categoryLabels[project.category]}
                </span>

                <span className="flex items-center gap-1.5 text-sm text-slate-500">
                  <MapPin className="h-4 w-4 text-orange-500" />
                  {project.city}
                </span>

                {project.date && (
                  <span className="text-sm text-slate-500">
                    {project.date}
                  </span>
                )}
              </div>

              <h1 className="max-w-3xl text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                {project.title} {inCity(project.city)}
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                {project.summary}
              </p>
            </div>

            {project.image && (
              <div className="relative aspect-video w-full bg-slate-100">
                <Image
                  src={project.image}
                  alt={`${project.title} ${inCity(project.city)}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-6 sm:p-10">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-bold text-slate-950">
                  Détail de l’intervention
                </h2>

                <p className="mt-4 whitespace-pre-line leading-7 text-slate-600">
                  {project.description}
                </p>
              </div>

              {service && (
                <div className="mt-10 max-w-3xl border-t border-slate-200 pt-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Prestation associée
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-slate-950">
                    {service.label}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.summary}
                  </p>

                  <Link
                    href={project.service}
                    className="mt-4 inline-flex items-center gap-2 font-bold text-orange-600 transition hover:text-orange-700"
                  >
                    {service.label} : notre approche
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  {serviceArticles.length > 0 && (
                    <ul className="mt-6 space-y-3">
                      {serviceArticles.map((article) => (
                        <li key={article.slug}>
                          <Link
                            href={`/conseils/${article.slug}`}
                            className="group flex items-start gap-3 text-slate-700 transition hover:text-orange-600"
                          >
                            <BookOpen
                              className="mt-1 h-4 w-4 shrink-0 text-orange-600"
                              aria-hidden="true"
                            />
                            <span className="font-semibold">
                              {article.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              <div className="mt-10 rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
                <p className="text-sm font-semibold text-orange-400">
                  Besoin similaire ?
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  Un projet de toiture {inCity(project.city)} ou dans
                  les environs ?
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                  Contactez Couverture Catalane pour présenter votre
                  projet et vos besoins.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <TrackedQuote
                    source="realisation"
                    className="inline-flex min-h-12 items-center rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-500"
                  >
                    Demander un devis
                  </TrackedQuote>

                  <TrackedPhone
                    phone={PHONE_E164}
                    source="realisation"
                    ariaLabel={`Appeler Couverture Catalane au ${PHONE_DISPLAY}`}
                    className="inline-flex min-h-12 items-center rounded-xl border border-slate-700 px-5 py-3 text-sm font-bold transition hover:bg-slate-800"
                  >
                    {PHONE_DISPLAY}
                  </TrackedPhone>
                </div>
              </div>
            </div>
          </article>

          {relatedProjects.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-slate-950">
                Autres chantiers de la région
              </h2>

              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProjects.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/realisations/${item.slug}`}
                    className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-orange-300 hover:shadow-sm"
                  >
                    <span className="flex items-center gap-1.5 text-xs font-bold text-orange-600">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {item.city}
                    </span>

                    <h3 className="mt-2 font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
                      {item.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </main>
  );
}