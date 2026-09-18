import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertCircle,
  FileCheck2,
  FileText,
  Mail,
  Scale,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Conditions générales",
  description:
    "Informations générales relatives aux prestations et devis de Couverture Catalane pour les travaux de toiture.",
  alternates: {
    canonical: "/conditions-generales",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ConditionsGeneralesPage() {
  return (
    <main className="w-full bg-slate-50 text-slate-900">
      {/* =====================================================
          EN-TÊTE
      ====================================================== */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-14 pt-32 sm:px-8 lg:pb-16 lg:pt-36">
          <Breadcrumb items={[{ label: "Conditions générales" }]} />

          <div className="mt-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-slate-700">
              <Scale size={15} aria-hidden="true" />
              Informations contractuelles
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Conditions générales
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Cette page présente les principes généraux applicables aux
              demandes et prestations de Couverture Catalane. Les conditions
              particulières d&apos;un chantier sont précisées dans les
              documents contractuels correspondants.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENU
      ====================================================== */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-20">
        <div className="space-y-5">
          {/* 1 */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <FileText size={21} aria-hidden="true" />
              </div>

              <div>
                <h2 className="text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                  1. Objet
                </h2>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Les présentes informations concernent les prestations
                  proposées par Couverture Catalane dans le domaine de la
                  toiture et des travaux associés.
                </p>
              </div>
            </div>
          </section>

          {/* 2 */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <Wrench size={21} aria-hidden="true" />
              </div>

              <div>
                <h2 className="text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                  2. Prestations
                </h2>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Couverture Catalane intervient notamment pour des travaux de
                  couverture, réparation de toiture, recherche de fuite,
                  zinguerie, nettoyage, traitement hydrofuge et charpente.
                </p>

                <p className="mt-4 leading-relaxed text-slate-600">
                  La nature exacte des travaux à réaliser est déterminée selon
                  le besoin du client et les caractéristiques du chantier, puis
                  précisée dans les documents établis pour la prestation.
                </p>
              </div>
            </div>
          </section>

          {/* 3 */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <FileCheck2 size={21} aria-hidden="true" />
              </div>

              <div>
                <h2 className="text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                  3. Devis et conditions de la prestation
                </h2>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Les caractéristiques de la prestation, son prix et les
                  conditions particulières applicables au chantier sont
                  précisés dans le devis ou les documents contractuels remis
                  au client.
                </p>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Le client est invité à prendre connaissance de ces
                  informations avant d&apos;accepter la prestation.
                </p>
              </div>
            </div>
          </section>

          {/* 4 */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <ShieldCheck size={21} aria-hidden="true" />
              </div>

              <div>
                <h2 className="text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                  4. Exécution des travaux
                </h2>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Les modalités d&apos;exécution propres à chaque chantier
                  sont déterminées en fonction des travaux prévus et des
                  conditions précisées dans les documents contractuels
                  applicables.
                </p>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Lorsque des circonstances nécessitent une adaptation de la
                  prestation initialement prévue, les modalités correspondantes
                  doivent être examinées avec le client.
                </p>
              </div>
            </div>
          </section>

          {/* 5 */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <AlertCircle size={21} aria-hidden="true" />
              </div>

              <div>
                <h2 className="text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                  5. Rétractation et annulation
                </h2>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Lorsque la réglementation prévoit un droit de rétractation,
                  celui-ci s&apos;exerce dans les conditions et délais prévus
                  par les dispositions légales applicables.
                </p>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Les éventuelles conditions particulières d&apos;annulation,
                  de report ou de commencement des travaux sont précisées dans
                  les documents contractuels applicables à la prestation.
                </p>
              </div>
            </div>
          </section>

          {/* 6 */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <Scale size={21} aria-hidden="true" />
              </div>

              <div>
                <h2 className="text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                  6. Réclamation et règlement des litiges
                </h2>

                <p className="mt-4 leading-relaxed text-slate-600">
                  En cas de difficulté concernant une prestation, le client
                  est invité à contacter en premier lieu Couverture Catalane
                  afin de rechercher une solution amiable.
                </p>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Pour adresser une réclamation :
                </p>

                <a
                  href="mailto:contact@couverture-catalane.fr"
                  className="mt-2 inline-block break-all font-extrabold text-orange-600 hover:underline"
                >
                  contact@couverture-catalane.fr
                </a>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Les voies de recours et règles de compétence applicables
                  sont celles prévues par la réglementation en vigueur.
                </p>
              </div>
            </div>
          </section>
        </div>

       

        {/* =====================================================
            CONTACT
        ====================================================== */}
        <section className="mt-8 rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-600">
              <Mail size={21} aria-hidden="true" />
            </div>

            <div>
              <h2 className="text-xl font-black">
                Une question sur ces conditions ?
              </h2>

              <p className="mt-3 leading-relaxed text-slate-300">
                Contactez Couverture Catalane pour toute question relative à
                votre devis ou à votre prestation.
              </p>

              <a
                href="mailto:contact@couverture-catalane.fr"
                className="mt-3 inline-block break-all font-extrabold text-orange-400 hover:underline"
              >
                contact@couverture-catalane.fr
              </a>

              <div className="mt-5">
                <Link
                  href="/mentions-legales"
                  className="text-sm font-bold text-slate-300 transition hover:text-white hover:underline"
                >
                  Consulter les mentions légales →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}