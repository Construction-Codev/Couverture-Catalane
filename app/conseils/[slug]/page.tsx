import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  Phone,
} from "lucide-react";

import Breadcrumb from "@/components/Breadcrumb";
import { articles } from "@/data/articles";

const SITE_URL = "https://www.couverture-catalane.fr";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return {};
  }

  const canonical = `/conseils/${article.slug}`;

  return {
    title: article.title,
    description: article.description,

    alternates: {
      canonical,
    },

    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: canonical,
      publishedTime: article.publishedAt,
      modifiedTime:
        article.updatedAt || article.publishedAt,
      images: article.image
        ? [
            {
              url: article.image,
              alt: article.title,
            },
          ]
        : undefined,
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: article.image
        ? [article.image]
        : undefined,
    },
  };
}

export default async function ArticlePage({
  params,
}: Props) {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  const articleUrl = `${SITE_URL}/conseils/${article.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,

    headline: article.title,
    description: article.description,

    datePublished: article.publishedAt,
    dateModified:
      article.updatedAt || article.publishedAt,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },

    author: {
      "@type": "Organization",
      name: "Couverture Catalane",
      url: `${SITE_URL}/a-propos`,
    },

    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#business`,
      name: "Couverture Catalane",
      url: SITE_URL,
    },

    ...(article.image
      ? {
          image: `${SITE_URL}${article.image}`,
        }
      : {}),
  };

  const relatedArticles = articles
    .filter((item) => item.slug !== article.slug)
    .filter(
      (item) =>
        item.category === article.category
    )
    .slice(0, 2);

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      {/* HERO */}
      <section className="bg-slate-950 px-4 py-10 text-white sm:px-6 sm:py-14">
        <div className="mx-auto max-w-4xl">
          <Breadcrumb
            items={[
              {
                label: "Conseils",
                href: "/conseils",
              },
              {
                label: article.title,
              },
            ]}
            currentPath={`/conseils/${article.slug}`}
          />

          <Link
            href="/conseils"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-orange-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Tous nos conseils
          </Link>

          <div className="mt-7">
            <span className="inline-flex rounded-full bg-orange-500/10 px-3 py-1.5 text-xs font-bold text-orange-400">
              {article.category}
            </span>

            <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              {article.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-orange-400" />

                <time dateTime={article.publishedAt}>
                  {new Date(
                    `${article.publishedAt}T12:00:00`
                  ).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </span>

              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-orange-400" />
                {article.readingTime} de lecture
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE PRINCIPALE */}
      {article.image && (
        <section className="px-4 pt-8 sm:px-6 sm:pt-12">
          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-slate-100">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* ARTICLE */}
      <article className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-3xl">
          {/* INTRODUCTION */}
          <div className="space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
            {article.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* SOMMAIRE */}
          <nav
            aria-label="Sommaire de l'article"
            className="my-10 rounded-2xl border border-slate-200 bg-slate-50 p-6"
          >
            <p className="font-bold text-slate-950">
              Dans cet article
            </p>

            <ol className="mt-4 space-y-2">
              {article.sections.map(
                (section, index) => (
                  <li key={section.title}>
                    <a
                      href={`#section-${index + 1}`}
                      className="text-sm leading-6 text-slate-600 transition hover:text-orange-600"
                    >
                      {index + 1}. {section.title}
                    </a>
                  </li>
                )
              )}
            </ol>
          </nav>

          {/* SECTIONS */}
          <div className="space-y-12">
            {article.sections.map(
              (section, index) => (
                <section
                  key={section.title}
                  id={`section-${index + 1}`}
                  className="scroll-mt-28"
                >
                  <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                    {section.title}
                  </h2>

                  <div className="mt-5 space-y-5 text-base leading-8 text-slate-700">
                    {section.paragraphs.map(
                      (paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>
                          {paragraph}
                        </p>
                      )
                    )}
                  </div>

                  {section.bullets &&
                    section.bullets.length > 0 && (
                      <ul className="mt-6 space-y-3">
                        {section.bullets.map(
                          (bullet) => (
                            <li
                              key={bullet}
                              className="flex gap-3 text-base leading-7 text-slate-700"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-orange-500"
                              />

                              <span>{bullet}</span>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                </section>
              )
            )}
          </div>

          {/* CTA INTERMÉDIAIRE */}
          <aside className="my-14 rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
            <p className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Couverture Catalane
            </p>

            <h2 className="mt-3 text-2xl font-black">
              Besoin d’un couvreur dans les
              Pyrénées-Orientales ?
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Vous avez constaté un problème sur votre
              toiture ou souhaitez faire examiner votre
              couverture ? Présentez-nous votre situation
              pour déterminer l’intervention adaptée.
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
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-sm font-bold transition hover:bg-slate-800"
              >
                <Phone className="h-4 w-4" />
                06 62 12 56 11
              </a>
            </div>
          </aside>

          {/* QUESTIONS */}
          {article.questions.length > 0 && (
            <section className="border-t border-slate-200 pt-12">
              <p className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Questions fréquentes
              </p>

              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Les questions que l’on se pose souvent
              </h2>

              <div className="mt-7 space-y-4">
                {article.questions.map(
                  (item) => (
                    <details
                      key={item.question}
                      className="group rounded-2xl border border-slate-200 bg-white"
                    >
                      <summary className="cursor-pointer list-none px-5 py-5 font-bold text-slate-950">
                        <span className="flex items-start justify-between gap-4">
                          {item.question}

                          <span
                            aria-hidden="true"
                            className="text-xl text-orange-500 transition group-open:rotate-45"
                          >
                            +
                          </span>
                        </span>
                      </summary>

                      <div className="px-5 pb-5 text-sm leading-7 text-slate-600">
                        {item.answer}
                      </div>
                    </details>
                  )
                )}
              </div>
            </section>
          )}

          {/* SERVICE ASSOCIÉ */}
          <section className="mt-12 rounded-2xl border border-orange-200 bg-orange-50 p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
              En savoir plus
            </p>

            <h2 className="mt-2 text-xl font-bold text-slate-950">
              Une prestation liée à votre situation
            </h2>

            <Link
              href={article.relatedService.href}
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-orange-700 transition hover:text-orange-800"
            >
              {article.relatedService.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>

          {/* DATE DE MISE À JOUR */}
          {article.updatedAt &&
            article.updatedAt !==
              article.publishedAt && (
              <p className="mt-8 text-xs text-slate-500">
                Article mis à jour le{" "}
                <time dateTime={article.updatedAt}>
                  {new Date(
                    `${article.updatedAt}T12:00:00`
                  ).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                .
              </p>
            )}
        </div>
      </article>

      {/* ARTICLES ASSOCIÉS */}
      {relatedArticles.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-black text-slate-950">
              À lire également
            </h2>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {relatedArticles.map(
                (relatedArticle) => (
                  <Link
                    key={relatedArticle.slug}
                    href={`/conseils/${relatedArticle.slug}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-orange-300 hover:shadow-sm"
                  >
                    <span className="text-xs font-bold text-orange-600">
                      {relatedArticle.category}
                    </span>

                    <h3 className="mt-3 text-lg font-bold text-slate-950 transition group-hover:text-orange-600">
                      {relatedArticle.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                      {relatedArticle.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-600">
                      Lire l’article
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                )
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}