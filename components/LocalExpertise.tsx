import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";

export default function LocalExpertise() {
  return (
    <section
      aria-labelledby="local-expertise-title"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-12">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-orange-600">
            <MapPin size={17} aria-hidden="true" />
            Entreprise locale
          </div>

          <h2
            id="local-expertise-title"
            className="max-w-3xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Votre couvreur à Perpignan et dans les Pyrénées-Orientales
          </h2>

          <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed text-slate-600">
            <p>
              Couverture Catalane intervient à Perpignan et dans les
              Pyrénées-Orientales pour les travaux liés à la toiture :
              couverture, réparation, recherche de fuite, zinguerie,
              nettoyage et charpente.
            </p>

            <p>
              Une toiture peut nécessiter une intervention à la suite d&apos;une
              infiltration, de tuiles endommagées, d&apos;un problème
              d&apos;étanchéité ou simplement dans le cadre de son entretien.
              L&apos;objectif est d&apos;identifier le besoin avant de réaliser
              les travaux adaptés à la situation de la couverture.
            </p>

            <p>
              Pour un projet de rénovation, une réparation ou un problème de
              toiture, vous pouvez contacter directement Couverture Catalane
              afin de présenter votre besoin.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/a-propos"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 font-extrabold text-white transition hover:bg-slate-800"
            >
              Découvrir Couverture Catalane
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <a
              href="tel:+33662125611"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 font-extrabold text-slate-900 transition hover:bg-slate-50"
              aria-label="Appeler Couverture Catalane au 06 62 12 56 11"
            >
              <Phone size={18} aria-hidden="true" />
              06 62 12 56 11
            </a>
          </div>
        </div>

        <aside className="rounded-3xl bg-slate-950 p-7 text-white shadow-2xl sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-400">
            Zone d&apos;intervention
          </p>

          <h3 className="mt-4 text-2xl font-black sm:text-3xl">
            Perpignan & Pyrénées-Orientales
          </h3>

          <p className="mt-4 leading-relaxed text-slate-300">
            Couverture Catalane est basée à Pia et intervient pour des travaux
            de toiture à Perpignan et dans le département des
            Pyrénées-Orientales.
          </p>

          <div className="mt-8 border-t border-white/10 pt-7">
            <p className="font-bold text-white">
              Vous avez un projet ou un problème de toiture ?
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 font-extrabold text-orange-400 transition hover:text-orange-300"
            >
              Présenter votre demande
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}