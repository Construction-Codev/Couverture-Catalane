import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

type SectionBannerProps = {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  imageAlt?: string;
  showActions?: boolean;
};

export default function SectionBanner({
  title,
  subtitle,
  backgroundImage,
  imageAlt,
  showActions = true,
}: SectionBannerProps) {
  return (
    <section className="relative isolate flex min-h-[520px] w-full items-center overflow-hidden bg-slate-950 sm:min-h-[560px]">
      {/* Image */}
      <Image
        src={backgroundImage}
        alt={imageAlt ?? title}
        fill
        priority
        sizes="100vw"
        quality={75}
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30"
        aria-hidden="true"
      />

      {/* Contenu */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
            Couverture Catalane · Perpignan & Pyrénées-Orientales
          </p>

          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl">
              {subtitle}
            </p>
          )}

          {showActions && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-orange-600 px-7 py-4 text-base font-extrabold text-white shadow-xl shadow-orange-950/30 transition hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
              >
                Demander un devis
                <ArrowRight size={19} aria-hidden="true" />
              </Link>

              <a
                href="tel:+33662125611"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-base font-extrabold text-white backdrop-blur-md transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <Phone size={19} aria-hidden="true" />
                06 62 12 56 11
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}