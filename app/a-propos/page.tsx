import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Home,
  Mail,
  MapPin,
  Phone,
  Search,
  Wrench,
} from "lucide-react";

import Breadcrumb from "@/components/Breadcrumb";
import {
  TrackedPhone,
  TrackedQuote,
} from "@/components/TrackedCTA";

export const metadata: Metadata = {
  title: "À propos | Couvreur à Perpignan",
  description:
    "Découvrez Couverture Catalane, entreprise de couverture basée à Pia et intervenant à Perpignan et dans les Pyrénées-Orientales pour vos travaux de toiture.",
  alternates: {
    canonical: "/a-propos",
  },
  openGraph: {
    title: "À propos de Couverture Catalane",
    description:
      "Couverture Catalane intervient à Perpignan et dans les Pyrénées-Orientales pour vos travaux de couverture, réparation, fuite, zinguerie, nettoyage et charpente.",
    url: "/a-propos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos de Couverture Catalane",
    description:
      "Découvrez Couverture Catalane et ses services de toiture à Perpignan et dans les Pyrénées-Orientales.",
  },
};

const services = [
  {
    title: "Couverture",
    description:
      "Travaux de couverture et rénovation de toiture selon les besoins du bâtiment.",
    href: "/couverture",
    icon: Home,
  },
  {
    title: "Réparations",
    description:
      "Remise en état des éléments endommagés ou dégradés de la toiture.",
    href: "/reparations",
    icon: Wrench,
  },
  {
    title: "Fuites & infiltrations",
    description:
      "Recherche de l'origine d'une infiltration et intervention sur la toiture.",
    href: "/fuites",
    icon: Search,
  },
  {
    title: "Zinguerie",
    description:
      "Travaux liés aux gouttières, évacuations des eaux pluviales et raccords.",
    href: "/zinguerie",
    icon: Wrench,
  },
  {
    title: "Nettoyage & hydrofuge",
    description:
      "Nettoyage, démoussage et traitement hydrofuge lorsque l'état de la toiture le permet.",
    href: "/nettoyage",
    icon: Home,
  },
  {
    title: "Charpente",
    description:
      "Travaux de rénovation et d'intervention sur la structure de la toiture.",
    href: "/charpente",
    icon: Wrench,
  },
];

export default function AProposPage() {
  return (
    <main className="w-full bg-slate-50 text-slate-900">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-20 lg:pt-36">
          <Breadcrumb items={[{ label: "À propos" }]} />

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
                Couverture Catalane
              </p>

              <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Votre couvreur à Perpignan et dans les Pyrénées-Orientales
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                Basée à Pia, Couverture Catalane intervient pour vos
                travaux de toiture à Perpignan et dans les
                Pyrénées-Orientales : couverture, réparation, recherche
                de fuite, zinguerie, nettoyage, hydrofuge et charpente.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <TrackedPhone
                  phone="+33662125611"
                  source="a_propos"
                  ariaLabel="Appeler Couverture Catalane au 06 62 12 56 11"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-3 font-extrabold text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-500"
                >
                  <Phone size={19} aria-hidden="true" />
                  06 62 12 56 11
                </TrackedPhone>

                <TrackedQuote
                  source="a_propos"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-6 py-3 font-extrabold text-slate-950 transition hover:border-orange-200 hover:bg-orange-50"
                >
                  <FileText size={19} aria-hidden="true" />
                  Demander un devis
                </TrackedQuote>
              </div>
            </div>

            {/* CARTE LOCALE */}
            <div className="rounded-3xl bg-slate-950 p-7 text-white shadow-2xl shadow-slate-900/15 sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-600">
                <MapPin size={26} aria-hidden="true" />
              </div>

              <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-orange-400">
                Entreprise locale
              </p>

              <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                Basée à Pia, au cœur du 66
              </h2>

              <p className="mt-4 leading-relaxed text-slate-300">
                Couverture Catalane intervient à Perpignan et dans les
                Pyrénées-Orientales pour différents besoins liés à la
                toiture et à son entretien.
              </p>

              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-sm font-bold text-slate-400">
                  Zone d&apos;intervention
                </p>

                <p className="mt-2 font-extrabold text-white">
                  Perpignan &amp; Pyrénées-Orientales
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRÉSENTATION
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
              Notre activité
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Des travaux de toiture adaptés à chaque situation
            </h2>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            <p>
              Une toiture peut nécessiter différents types
              d&apos;interventions selon son état : réparation
              d&apos;éléments endommagés, recherche d&apos;une
              infiltration, entretien, travaux de zinguerie ou
              rénovation plus importante.
            </p>

            <p>
              Couverture Catalane propose plusieurs prestations autour
              de la toiture afin d&apos;étudier le besoin et
              d&apos;orienter les travaux vers une solution adaptée à
              la situation rencontrée.
            </p>

            <p>
              Pour un projet ou un problème de toiture, vous pouvez
              prendre contact directement afin de présenter votre
              demande.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
              Nos métiers
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Les prestations de Couverture Catalane
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Retrouvez les principales interventions proposées pour
              votre toiture à Perpignan et dans les
              Pyrénées-Orientales.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50/50 hover:shadow-xl hover:shadow-slate-900/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <Icon size={22} aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-slate-950 transition group-hover:text-orange-600">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-orange-600">
                    En savoir plus
                    <ArrowRight
                      size={17}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROXIMITÉ
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid overflow-hidden rounded-3xl bg-slate-950 lg:grid-cols-2">
          <div className="p-8 text-white sm:p-10 lg:p-14">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-400">
              Perpignan &amp; Pyrénées-Orientales
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Un interlocuteur pour votre projet de toiture
            </h2>

            <p className="mt-5 leading-relaxed text-slate-300">
              Expliquez votre besoin, qu&apos;il s&apos;agisse
              d&apos;une fuite, d&apos;une réparation, d&apos;un
              nettoyage ou d&apos;un projet plus général concernant
              votre toiture.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 bg-orange-600 p-8 sm:p-10 lg:p-14">
            <TrackedPhone
              phone="+33662125611"
              source="a_propos_bottom"
              ariaLabel="Appeler Couverture Catalane au 06 62 12 56 11"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-6 py-3 font-extrabold text-slate-950 transition hover:bg-orange-50"
            >
              <Phone
                size={20}
                aria-hidden="true"
                className="text-orange-600"
              />
              06 62 12 56 11
            </TrackedPhone>

            <TrackedQuote
              source="a_propos_bottom"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3 font-extrabold text-white transition hover:bg-white/20"
            >
              <FileText size={20} aria-hidden="true" />
              Demander un devis
            </TrackedQuote>

            <a
              href="mailto:contact@couverture-catalane.fr"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              <Mail size={19} aria-hidden="true" />
              contact@couverture-catalane.fr
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}