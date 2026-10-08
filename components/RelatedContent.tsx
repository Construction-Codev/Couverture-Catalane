import Link from "next/link";
import { ArrowRight, BookOpen, MapPin } from "lucide-react";

import { articles } from "@/data/articles";
import realisationsData from "@/data/realisations.json";
import { articlesByService } from "@/lib/maillage";
import { inCity } from "@/lib/seo";
import type { Realisation } from "@/types/realisation";

const realisations = realisationsData as Realisation[];

type RelatedContentProps = {
  service: string;
  serviceName: string;
};

export default function RelatedContent({
  service,
  serviceName,
}: RelatedContentProps) {
  const serviceProjects = realisations.filter(
    (item) => item.service === service
  );

  const relatedProjects = serviceProjects.slice(0, 3);

  // "à Perpignan, à Cabestany et au Barcarès"
  const cities = Array.from(
    new Set(serviceProjects.map((item) => inCity(item.city)))
  );
  const citiesText =
    cities.length > 1
      ? `${cities.slice(0, -1).join(", ")} et ${cities[cities.length - 1]}`
      : cities[0];

  const relatedArticles = (articlesByService[service] ?? [])
    .map((slug) => articles.find((article) => article.slug === slug))
    .filter((article) => article !== undefined);

  if (relatedProjects.length === 0 && relatedArticles.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="related-content-title"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
          Pour aller plus loin
        </p>

        <h2
          id="related-content-title"
          className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
        >
          {serviceName} : chantiers et conseils
        </h2>

        {citiesText && (
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            Couverture Catalane est notamment intervenu {citiesText} pour ce
            type de travaux.
          </p>
        )}

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {relatedProjects.length > 0 && (
            <div>
              <h3 className="text-lg font-black text-slate-950">
                Nos réalisations
              </h3>

              <ul className="mt-5 space-y-3">
                {relatedProjects.map((project) => (
                  <li key={project.slug}>
                    <Link
                      href={`/realisations/${project.slug}`}
                      className="group flex items-start gap-3 rounded-2xl border border-slate-200 p-5 transition hover:border-orange-200 hover:shadow-md"
                    >
                      <MapPin
                        size={20}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-orange-600"
                      />

                      <span>
                        <span className="block font-extrabold text-slate-950 transition group-hover:text-orange-600">
                          {project.title}
                        </span>

                        <span className="mt-1 block text-sm text-slate-600">
                          {project.city}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="/realisations"
                className="mt-5 inline-flex items-center gap-2 font-extrabold text-orange-600 transition hover:text-orange-700"
              >
                Toutes nos réalisations
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          )}

          {relatedArticles.length > 0 && (
            <div>
              <h3 className="text-lg font-black text-slate-950">
                Nos conseils
              </h3>

              <ul className="mt-5 space-y-3">
                {relatedArticles.map((article) => (
                  <li key={article.slug}>
                    <Link
                      href={`/conseils/${article.slug}`}
                      className="group flex items-start gap-3 rounded-2xl border border-slate-200 p-5 transition hover:border-orange-200 hover:shadow-md"
                    >
                      <BookOpen
                        size={20}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-orange-600"
                      />

                      <span className="font-extrabold text-slate-950 transition group-hover:text-orange-600">
                        {article.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
