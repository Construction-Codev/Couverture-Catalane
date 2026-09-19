import type { Metadata } from "next";

import Breadcrumb from "@/components/Breadcrumb";
import RealisationGrid from "@/components/RealisationGrid";

import realisationsData from "@/data/realisations.json";
import type { Realisation } from "@/types/realisation";

const realisations = realisationsData as Realisation[];

export const metadata: Metadata = {
  title: "Nos réalisations",
  description:
    "Découvrez les réalisations de Couverture Catalane en couverture, réparation, zinguerie, nettoyage de toiture et charpente dans les Pyrénées-Orientales.",
  alternates: {
    canonical: "/realisations",
  },
};

export default function RealisationsPage() {
  return (
    <main>
      <section className="bg-slate-950 px-4 py-14 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb
            items={[
              {
                label: "Réalisations",
              },
            ]}
            currentPath="/realisations"
          />

          <div className="mt-8 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-orange-400">
              Nos chantiers
            </p>

            <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
              Nos réalisations dans les Pyrénées-Orientales
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Retrouvez une sélection de travaux réalisés par Couverture
              Catalane : interventions sur toiture, réparations, réfections,
              zinguerie, nettoyage et charpente.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <RealisationGrid realisations={realisations} />
        </div>
      </section>
    </main>
  );
}