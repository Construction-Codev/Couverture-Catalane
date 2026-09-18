import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  Clock,
  Database,
  Eye,
  LockKeyhole,
  Mail,
  Server,
  UserCheck,
} from "lucide-react";

import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de Couverture Catalane : données du formulaire de contact, utilisation, conservation, mesure d’audience et droits relatifs aux données personnelles.",
  alternates: {
    canonical: "/confidentialite",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const sections = [
  {
    title: "Données transmises via le formulaire",
    icon: Database,
    content: (
      <>
        Lorsque vous utilisez le formulaire de contact, Couverture Catalane
        reçoit les informations que vous renseignez : nom, adresse e-mail,
        numéro de téléphone et contenu de votre message.
      </>
    ),
  },
  {
    title: "Pourquoi ces données sont-elles utilisées ?",
    icon: Eye,
    content: (
      <>
        Ces informations sont utilisées pour prendre connaissance de votre
        demande, vous recontacter et échanger avec vous au sujet de votre
        projet ou de vos travaux de toiture.
      </>
    ),
  },
  {
    title: "Transmission du formulaire",
    icon: Server,
    content: (
      <>
        Les demandes envoyées depuis le formulaire sont transmises par
        l&apos;infrastructure technique du site et par le service utilisé pour
        l&apos;envoi des e-mails. Ces prestataires techniques peuvent traiter
        les données nécessaires au fonctionnement de leurs services.
      </>
    ),
  },
  {
    title: "Durée de conservation",
    icon: Clock,
    content: (
      <>
        Les données sont conservées pendant une durée adaptée à la finalité
        pour laquelle elles ont été collectées et, lorsque cela est nécessaire,
        pendant les durées permettant de respecter les obligations légales ou
        administratives applicables.
      </>
    ),
  },
  {
    title: "Mesure d’audience et performances",
    icon: BarChart3,
    content: (
      <>
        Le site utilise des outils de mesure d&apos;audience et de performance
        afin de comprendre son utilisation, mesurer certaines actions telles
        que les clics sur les boutons de contact et améliorer ses performances.
        Aucune information saisie dans les champs du formulaire — nom, e-mail,
        téléphone ou message — n&apos;est volontairement envoyée dans les
        événements de mesure d&apos;audience configurés sur ce site.
      </>
    ),
  },
  {
    title: "Vos droits",
    icon: UserCheck,
    content: (
      <>
        Selon la réglementation applicable et votre situation, vous pouvez
        notamment demander l&apos;accès à vos données, leur rectification ou
        leur effacement, ainsi que l&apos;exercice des autres droits prévus par
        la réglementation sur la protection des données. Pour toute demande,
        vous pouvez écrire à{" "}
        <a
          href="mailto:contact@couverture-catalane.fr"
          className="font-extrabold text-orange-600 transition hover:text-orange-500 hover:underline"
        >
          contact@couverture-catalane.fr
        </a>
        .
      </>
    ),
  },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="w-full bg-slate-50 text-slate-900">
      {/* =====================================================
          EN-TÊTE
      ====================================================== */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-14 pt-32 sm:px-8 lg:pb-16 lg:pt-36">
          <Breadcrumb
            items={[{ label: "Politique de confidentialité" }]}
          />

          <div className="mt-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-orange-700">
              <LockKeyhole size={15} aria-hidden="true" />
              Protection des données
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Politique de confidentialité
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Cette page explique quelles informations peuvent être traitées
              lorsque vous utilisez le site de Couverture Catalane et comment
              nous les utilisons.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENU
      ====================================================== */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-20">
        <div className="space-y-5">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <section
                key={section.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                    <Icon size={21} aria-hidden="true" />
                  </div>

                  <div className="min-w-0">
                    <h2 className="text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                      {section.title}
                    </h2>

                    <div className="mt-3 leading-relaxed text-slate-600">
                      {section.content}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* =====================================================
            SÉCURITÉ
        ====================================================== */}
        <section className="mt-10 rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-600">
              <LockKeyhole size={21} aria-hidden="true" />
            </div>

            <div>
              <h2 className="text-xl font-black">
                Sécurité des échanges
              </h2>

              <p className="mt-3 leading-relaxed text-slate-300">
                Le site est accessible en HTTPS afin de chiffrer les échanges
                entre votre navigateur et le site pendant leur transmission.
                Des mesures techniques adaptées sont utilisées pour limiter les
                risques liés au traitement des informations transmises.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ====================================================== */}
        <section className="mt-10 rounded-3xl border border-orange-100 bg-orange-50 p-7 sm:p-9">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-orange-600">
              <Mail size={21} aria-hidden="true" />
            </div>

            <div>
              <h2 className="text-xl font-black text-slate-950">
                Une question sur vos données ?
              </h2>

              <p className="mt-3 leading-relaxed text-slate-600">
                Vous pouvez contacter Couverture Catalane à l&apos;adresse{" "}
                <a
                  href="mailto:contact@couverture-catalane.fr"
                  className="font-extrabold text-orange-600 hover:underline"
                >
                  contact@couverture-catalane.fr
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <div className="mt-10 text-center">
          <Link
            href="/mentions-legales"
            className="text-sm font-extrabold text-slate-600 transition hover:text-orange-600"
          >
            Consulter les mentions légales →
          </Link>
        </div>
      </section>
    </main>
  );
}