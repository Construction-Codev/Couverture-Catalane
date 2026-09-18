import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

type ServiceItem = {
  title: string;
  description: string;
};

type RelatedService = {
  title: string;
  description: string;
  href: string;
};

type ServiceContentProps = {
  eyebrow: string;
  title: string;
  intro: string;
  items: ServiceItem[];
  relatedServices?: RelatedService[];
};

export default function ServiceContent({
  eyebrow,
  title,
  intro,
  items,
  relatedServices = [],
}: ServiceContentProps) {
  return (
    <>
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
              {eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              {title}
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-orange-600 px-7 py-4 font-extrabold text-white transition hover:bg-orange-500"
              >
                Demander un devis
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <a
                href="tel:+33662125611"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-slate-300 px-7 py-4 font-extrabold text-slate-900 transition hover:bg-slate-50"
              >
                <Phone size={18} aria-hidden="true" />
                06 62 12 56 11
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <CheckCircle2
                  size={24}
                  aria-hidden="true"
                  className="text-orange-600"
                />

                <h3 className="mt-4 text-xl font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="bg-slate-950 py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-400">
                Services associés
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Votre toiture nécessite une autre intervention ?
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-orange-500/50 hover:bg-white/10"
                >
                  <h3 className="text-xl font-black">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-slate-300">
                    {service.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 font-extrabold text-orange-400">
                    Découvrir
                    <ArrowRight
                      size={18}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}