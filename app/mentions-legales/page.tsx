import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Copyright,
  Database,
  Globe,
  Mail,
  Shield,
  User,
} from "lucide-react";

import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site Couverture Catalane : éditeur, responsable de publication, hébergement, propriété intellectuelle et données personnelles.",
  alternates: {
    canonical: "/mentions-legales",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return (
    <main className="w-full bg-slate-50 text-slate-900">
      {/* =====================================================
          EN-TÊTE
      ====================================================== */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-14 pt-32 sm:px-8 lg:pb-16 lg:pt-36">
          <Breadcrumb items={[{ label: "Mentions légales" }]} />

          <div className="mt-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-slate-700">
              <Shield size={15} aria-hidden="true" />
              Informations légales
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Mentions légales
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Informations relatives à l&apos;éditeur, à la publication et à
              l&apos;hébergement du site Couverture Catalane.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENU
      ====================================================== */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-20">
        <div className="space-y-5">
          {/* ÉDITEUR */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <Building2 size={21} aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <h2 className="text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                  Éditeur du site
                </h2>

                <div className="mt-4 space-y-2 leading-relaxed text-slate-600">
                  <p>
                    <strong className="text-slate-950">
                      Couverture Catalane
                    </strong>
                  </p>

                  <p>Entreprise individuelle (EI)</p>

                  <p>
                    Entrepreneur :{" "}
                    <strong className="text-slate-950">
                      Gregory Roblès
                    </strong>
                  </p>

                  <p>
                    88 chemin des Charrettes
                    <br />
                    66380 Pia
                    <br />
                    France
                  </p>

                  <p>
                    SIRET :{" "}
                    <strong className="text-slate-950">
                      834 799 751 00013
                    </strong>
                  </p>

                  <p>
                    Téléphone :{" "}
                    <a
                      href="tel:+33662125611"
                      className="font-bold text-orange-600 hover:underline"
                    >
                      06 62 12 56 11
                    </a>
                  </p>

                  <p>
                    E-mail :{" "}
                    <a
                      href="mailto:contact@couverture-catalane.fr"
                      className="break-all font-bold text-orange-600 hover:underline"
                    >
                      contact@couverture-catalane.fr
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* RESPONSABLE PUBLICATION */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <User size={21} aria-hidden="true" />
              </div>

              <div>
                <h2 className="text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                  Responsable de la publication
                </h2>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Gregory Roblès
                </p>

                <a
                  href="mailto:contact@couverture-catalane.fr"
                  className="mt-2 inline-block break-all font-bold text-orange-600 hover:underline"
                >
                  contact@couverture-catalane.fr
                </a>
              </div>
            </div>
          </section>

          {/* HÉBERGEMENT */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <Globe size={21} aria-hidden="true" />
              </div>

              <div>
                <h2 className="text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                  Hébergement
                </h2>

                <div className="mt-4 space-y-2 leading-relaxed text-slate-600">
                  <p>
                    Le site est hébergé par{" "}
                    <strong className="text-slate-950">
                      Vercel Inc.
                    </strong>
                    .
                  </p>

                  <p>
                    340 S Lemon Ave #4133
                    <br />
                    Walnut, CA 91789
                    <br />
                    États-Unis
                  </p>

                  <p>
                    Pour les informations et coordonnées actualisées de
                    l&apos;hébergeur, consultez son site officiel.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* PROPRIÉTÉ INTELLECTUELLE */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <Copyright size={21} aria-hidden="true" />
              </div>

              <div>
                <h2 className="text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                  Propriété intellectuelle
                </h2>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Les éléments présents sur ce site peuvent être protégés par
                  les droits de propriété intellectuelle applicables. Toute
                  reproduction ou utilisation d&apos;un élément protégé doit
                  respecter les droits de son titulaire et les dispositions
                  légales applicables.
                </p>
              </div>
            </div>
          </section>

          {/* DONNÉES */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <Database size={21} aria-hidden="true" />
              </div>

              <div>
                <h2 className="text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                  Données personnelles
                </h2>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Le site permet notamment de transmettre une demande à
                  Couverture Catalane par l&apos;intermédiaire du formulaire
                  de contact. Les modalités relatives au traitement des
                  données personnelles et à la mesure d&apos;audience sont
                  détaillées dans la politique de confidentialité.
                </p>

                <Link
                  href="/confidentialite"
                  className="mt-4 inline-flex font-extrabold text-orange-600 transition hover:text-orange-500 hover:underline"
                >
                  Consulter la politique de confidentialité →
                </Link>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section className="rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-600">
                <Mail size={21} aria-hidden="true" />
              </div>

              <div>
                <h2 className="text-xl font-black">
                  Contact
                </h2>

                <p className="mt-3 leading-relaxed text-slate-300">
                  Pour toute question concernant le site ou son contenu,
                  vous pouvez contacter Couverture Catalane à :
                </p>

                <a
                  href="mailto:contact@couverture-catalane.fr"
                  className="mt-3 inline-block break-all font-extrabold text-orange-400 hover:underline"
                >
                  contact@couverture-catalane.fr
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}