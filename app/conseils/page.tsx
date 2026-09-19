import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Clock,
} from "lucide-react";

import Breadcrumb from "@/components/Breadcrumb";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Conseils toiture à Perpignan",
  description:
    "Conseils pratiques sur l’entretien, la réparation et la rénovation de toiture : fuites, tuiles, démoussage, hydrofuge et dégâts après intempéries.",
  alternates: {
    canonical: "/conseils",
  },
};

export default function ConseilsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-slate-950 px-4 py-12 text-white sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb
            items={[{ label: "Conseils" }]}
            currentPath="/conseils"
          />

          <div className="mt-8 max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-bold text-orange-400">
              <BookOpen className="h-4 w-4" />
              Conseils toiture
            </div>

            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Conseils pour entretenir et protéger votre toiture
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
              Fuite, tuiles endommagées, mousse, intempéries ou
              réfection : retrouvez nos guides pour mieux comprendre
              votre toiture, identifier les signes à surveiller et
              savoir quand une intervention peut être nécessaire.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO SEO */}
      <section className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            Comprendre sa toiture avant d’intervenir
          </h2>

          <div className="mt-5 space-y-4 text-base leading-8 text-slate-700">
            <p>
              Une trace d’humidité au plafond, quelques tuiles
              déplacées ou l’apparition de mousse ne nécessitent pas
              forcément les mêmes travaux. Avant d’envisager une
              réparation ou un entretien, il est utile de comprendre
              l’origine du problème et le rôle des différents éléments
              de la toiture.
            </p>

            <p>
              Couverture Catalane rassemble ici des conseils consacrés
              à la couverture, aux fuites, aux réparations, au
              nettoyage et à l’entretien des toitures. Ces contenus
              répondent aux questions régulièrement rencontrées par les
              propriétaires de maisons à Perpignan et dans les
              Pyrénées-Orientales.
            </p>

            <p>
              Ces guides ont vocation à informer. Lorsqu’un diagnostic
              nécessite d’accéder à la toiture ou lorsqu’un élément
              présente un risque, une vérification sur place reste
              nécessaire.
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Guides pratiques
            </p>

            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              Nos derniers conseils toiture
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Des réponses détaillées aux questions que vous pouvez
              vous poser avant une réparation, un entretien ou des
              travaux de toiture.
            </p>
          </div>

          <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-orange-300 hover:shadow-md"
              >
                {article.image ? (
                  <Link
                    href={`/conseils/${article.slug}`}
                    className="relative block aspect-[16/9] overflow-hidden bg-slate-100"
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </Link>
                ) : (
                  <div className="flex aspect-[16/9] items-center justify-center bg-slate-100">
                    <BookOpen className="h-10 w-10 text-slate-300" />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold text-orange-600">
                      {article.category}
                    </span>

                    <span className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readingTime}
                    </span>
                  </div>

                  <h2 className="mt-4 text-xl font-black leading-snug text-slate-950">
                    <Link
                      href={`/conseils/${article.slug}`}
                      className="transition group-hover:text-orange-600"
                    >
                      {article.title}
                    </Link>
                  </h2>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                    {article.description}
                  </p>

                  <Link
                    href={`/conseils/${article.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-600 transition hover:text-orange-700"
                  >
                    Lire le guide
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MAILLAGE SERVICES */}
      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
            <p className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Besoin d’aller plus loin ?
            </p>

            <h2 className="mt-3 text-2xl font-black sm:text-3xl">
              Découvrez nos services de couverture
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              Vous avez identifié un problème sur votre toiture ?
              Retrouvez nos prestations de réparation, recherche de
              fuite, couverture, zinguerie, nettoyage et charpente
              dans les Pyrénées-Orientales.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/reparations"
                className="rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                Réparations
              </Link>

              <Link
                href="/fuites"
                className="rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-bold transition hover:bg-slate-800"
              >
                Fuites
              </Link>

              <Link
                href="/nettoyage"
                className="rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-bold transition hover:bg-slate-800"
              >
                Nettoyage
              </Link>

              <Link
                href="/couverture"
                className="rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-bold transition hover:bg-slate-800"
              >
                Couverture
              </Link>

              <Link
                href="/zinguerie"
                className="rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-bold transition hover:bg-slate-800"
              >
                Zinguerie
              </Link>

              <Link
                href="/charpente"
                className="rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-bold transition hover:bg-slate-800"
              >
                Charpente
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-slate-200 bg-slate-50 px-4 py-12 text-center sm:px-6 sm:py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">
            Un problème avec votre toiture ?
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Décrivez-nous votre situation pour échanger sur les
            travaux à envisager à Perpignan ou dans les
            Pyrénées-Orientales.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            Demander un devis
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}