import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";

import Breadcrumb from "@/components/Breadcrumb";
import realisations from "@/data/realisations.json";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

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

  return {
    title: `${project.title} à ${project.city}`,
    description: project.summary,
    alternates: {
      canonical: `/realisations/${project.slug}`,
    },
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

  const relatedProjects = realisations
    .filter(
      (item) =>
        item.category === project.category &&
        item.slug !== project.slug
    )
    .slice(0, 2);

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
                  {project.category}
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
                {project.title} à {project.city}
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                {project.summary}
              </p>
            </div>

            {project.image && (
              <div className="relative aspect-video w-full bg-slate-100">
                <Image
                  src={project.image}
                  alt={`${project.title} à ${project.city}`}
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

              <div className="mt-10 rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
                <p className="text-sm font-semibold text-orange-400">
                  Besoin similaire ?
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  Vous avez un projet de toiture dans les
                  Pyrénées-Orientales ?
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                  Contactez Couverture Catalane pour présenter votre
                  projet et vos besoins.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                  >
                    Demander un devis
                  </Link>

                  <a
                    href="tel:+33662125611"
                    className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-bold transition hover:bg-slate-800"
                  >
                    06 62 12 56 11
                  </a>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-8">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Prestation associée
                </p>

                <Link
                  href={project.service}
                  className="mt-3 inline-flex items-center gap-2 font-bold text-orange-600 transition hover:text-orange-700"
                >
                  Découvrir ce service
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>

          {relatedProjects.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-slate-950">
                Autres réalisations similaires
              </h2>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {relatedProjects.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/realisations/${item.slug}`}
                    className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-orange-300 hover:shadow-sm"
                  >
                    <span className="text-xs font-bold text-orange-600">
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