import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  TrackedPhone,
  TrackedQuote,
} from "@/components/TrackedCTA";

const services = [
  { name: "Couverture", href: "/couverture" },
  { name: "Réparation de toiture", href: "/reparations" },
  { name: "Fuites & infiltrations", href: "/fuites" },
  { name: "Zinguerie", href: "/zinguerie" },
  { name: "Nettoyage & hydrofuge", href: "/nettoyage" },
  { name: "Charpente", href: "/charpente" },
];

const discover = [
  { name: "Réalisations", href: "/realisations" },
  { name: "Conseils toiture", href: "/conseils" },
  { name: "À propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
];

const legal = [
  { name: "Mentions légales", href: "/mentions-legales" },
  { name: "Conditions générales", href: "/conditions-generales" },
  {
    name: "Politique de confidentialité",
    href: "/confidentialite",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-white">
      {/* =====================================================
          CTA PRINCIPAL
      ====================================================== */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
          <div className="flex flex-col gap-8 rounded-3xl bg-orange-600 p-7 shadow-2xl shadow-black/10 sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:p-10">
            <div className="max-w-2xl">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-white/80">
                Un projet de toiture ?
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Parlons de vos travaux
              </h2>

              <p className="mt-4 max-w-xl leading-relaxed text-orange-50">
                Couverture, réparation, fuite, zinguerie, nettoyage,
                hydrofuge ou charpente à Perpignan et dans les
                Pyrénées-Orientales.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <TrackedPhone
                phone="+33662125611"
                source="footer"
                ariaLabel="Appeler Couverture Catalane au 06 62 12 56 11"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 font-extrabold text-white transition hover:bg-white/20"
              >
                <Phone size={19} aria-hidden="true" />
                06 62 12 56 11
              </TrackedPhone>

              <TrackedQuote
                source="footer"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-extrabold text-slate-950 transition hover:bg-orange-50"
              >
                <FileText
                  size={19}
                  aria-hidden="true"
                  className="text-orange-600"
                />
                Demander un devis
              </TrackedQuote>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          CONTENU PRINCIPAL
      ====================================================== */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1fr] lg:gap-10">
          {/* ENTREPRISE */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="Couverture Catalane - Accueil"
              className="inline-flex"
            >
              <Image
                src="/logo2.png"
                alt="Couverture Catalane"
                width={180}
                height={180}
                className="h-auto w-[150px] object-contain brightness-0 invert"
              />
            </Link>

            <p className="mt-5 max-w-sm leading-relaxed text-slate-300">
              Travaux de toiture à Perpignan et dans les
              Pyrénées-Orientales : couverture, réparation, recherche de
              fuite, zinguerie, nettoyage, hydrofuge et charpente.
            </p>

            <Link
              href="/a-propos"
              className="mt-6 inline-flex items-center gap-2 font-extrabold text-orange-400 transition hover:text-orange-300"
            >
              Découvrir Couverture Catalane
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          {/* SERVICES */}
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-white">
              Nos services
            </h2>

            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="inline-flex text-sm font-semibold leading-relaxed text-slate-300 transition hover:text-orange-400"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DÉCOUVRIR */}
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-white">
              Découvrir
            </h2>

            <ul className="mt-6 space-y-3">
              {discover.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex text-sm font-semibold leading-relaxed text-slate-300 transition hover:text-orange-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-white">
              Nous contacter
            </h2>

            <div className="mt-6 space-y-5">
              <TrackedPhone
                phone="+33662125611"
                source="footer_contact"
                ariaLabel="Appeler Couverture Catalane au 06 62 12 56 11"
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-orange-400 transition group-hover:bg-orange-600 group-hover:text-white">
                  <Phone size={18} aria-hidden="true" />
                </span>

                <span>
                  <span className="block text-xs font-bold uppercase tracking-wide text-slate-500">
                    Téléphone
                  </span>

                  <span className="mt-1 block font-extrabold text-white transition group-hover:text-orange-400">
                    06 62 12 56 11
                  </span>
                </span>
              </TrackedPhone>

              <a
                href="mailto:contact@couverture-catalane.fr"
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-orange-400 transition group-hover:bg-orange-600 group-hover:text-white">
                  <Mail size={18} aria-hidden="true" />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-wide text-slate-500">
                    E-mail
                  </span>

                  <span className="mt-1 block break-all text-sm font-extrabold text-white transition group-hover:text-orange-400">
                    contact@couverture-catalane.fr
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-orange-400">
                  <MapPin size={18} aria-hidden="true" />
                </span>

                <span>
                  <span className="block text-xs font-bold uppercase tracking-wide text-slate-500">
                    Zone d&apos;intervention
                  </span>

                  <span className="mt-1 block text-sm font-extrabold leading-relaxed text-white">
                    Perpignan &amp;
                    <br />
                    Pyrénées-Orientales
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

     {/* =====================================================
          BAS DU FOOTER
      ====================================================== */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-7 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <p className="text-center text-xs font-semibold leading-relaxed text-slate-400 md:text-left">
              © {currentYear}{" "}
              <span className="font-extrabold text-white">
                Couverture Catalane
              </span>
              . Tous droits réservés.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              {legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs font-semibold text-slate-400 transition hover:text-orange-400"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <a
              href="https://code-v.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-slate-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              Réalisé par
              <span className="font-black text-orange-400 transition group-hover:text-orange-300">
                Codev
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}