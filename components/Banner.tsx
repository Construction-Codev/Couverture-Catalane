import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  MapPin,
  Phone,
} from "lucide-react";

export default function Banner() {
  return (
    <section className="relative isolate flex min-h-[720px] w-full items-center overflow-hidden bg-slate-950 lg:min-h-[780px]">
      {/* Image principale */}
      <Image
        src="/hero-couvreur-perpignan.png"
        alt="Travaux de couverture à Perpignan dans les Pyrénées-Orientales"
        fill
        priority
        sizes="100vw"
        quality={75}
        className="object-cover object-[65%_center] sm:object-center"
      />

      {/* Overlays */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/35"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30"
        aria-hidden="true"
      />

      {/* Contenu */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          {/* Zone géographique */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-bold text-orange-300 backdrop-blur-sm">
            <MapPin size={16} aria-hidden="true" />
            Perpignan & Pyrénées-Orientales
          </div>

          {/* H1 SEO */}
          <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Couvreur à Perpignan pour vos travaux de{" "}
            <span className="text-orange-500">toiture</span>
          </h1>

          {/* Proposition de valeur */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl">
            Couverture Catalane intervient à Perpignan et dans les
            Pyrénées-Orientales pour vos travaux de couverture, réparation,
            recherche de fuite, zinguerie, nettoyage et charpente.
          </p>

          {/* Services / réassurance factuelle */}
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-200 sm:text-base">
            <span className="flex items-center gap-2">
              <CheckCircle2
                size={18}
                className="text-orange-400"
                aria-hidden="true"
              />
              Couverture
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2
                size={18}
                className="text-orange-400"
                aria-hidden="true"
              />
              Réparation & fuites
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2
                size={18}
                className="text-orange-400"
                aria-hidden="true"
              />
              Zinguerie
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2
                size={18}
                className="text-orange-400"
                aria-hidden="true"
              />
              Charpente
            </span>
          </div>

          {/* CTA */}
          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="tel:+33662125611"
              className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-orange-600 px-7 py-4 text-base font-extrabold text-white shadow-xl shadow-orange-950/30 transition hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400 sm:w-auto"
              aria-label="Appeler Couverture Catalane au 06 62 12 56 11"
            >
              <Phone size={20} aria-hidden="true" />
              06 62 12 56 11
            </a>

            <Link
              href="/contact"
              className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-base font-extrabold text-slate-950 shadow-xl transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              <FileText size={20} aria-hidden="true" />
              Demander un devis
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          {/* Micro-copy */}
          <p className="mt-5 text-sm text-slate-400">
            Besoin d&apos;un couvreur ? Appelez directement ou décrivez votre
            projet via le formulaire de contact.
          </p>
        </div>
      </div>
    </section>
  );
}