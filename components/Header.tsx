"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  FileText,
  Menu,
  Phone,
  X,
} from "lucide-react";

const services = [
  {
    name: "Couverture",
    description: "Travaux et rénovation de toiture",
    href: "/couverture",
  },
  {
    name: "Fuites",
    description: "Recherche et réparation d'infiltrations",
    href: "/fuites",
  },
  {
    name: "Réparations",
    description: "Remise en état de votre toiture",
    href: "/reparations",
  },
  {
    name: "Zinguerie",
    description: "Gouttières et évacuation des eaux",
    href: "/zinguerie",
  },
  {
    name: "Nettoyage",
    description: "Démoussage et traitement hydrofuge",
    href: "/nettoyage",
  },
  {
    name: "Charpente",
    description: "Rénovation et travaux de charpente",
    href: "/charpente",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);

  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  const trackPhone = (source: string) => {
  track("clic_telephone", {
    source,
  });
};

const trackQuote = (source: string) => {
  track("clic_devis", {
    source,
  });
};

  /*
   * Fermeture du dropdown desktop :
   * - clic à l'extérieur
   * - touche Escape
   */
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenus();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /*
   * Bloque le scroll de la page lorsque
   * le menu mobile plein écran est ouvert.
   */
  useEffect(() => {
  if (mobileOpen) {
    document.body.style.overflow = "hidden";
    document.body.dataset.mobileMenuOpen = "true";
  } else {
    document.body.style.overflow = "";
    delete document.body.dataset.mobileMenuOpen;
  }

  return () => {
    document.body.style.overflow = "";
    delete document.body.dataset.mobileMenuOpen;
  };
}, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md">
      {/* =====================================================
          HEADER
      ====================================================== */}
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMenus}
          aria-label="Couverture Catalane - Accueil"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/logo1.png"
            alt="Couverture Catalane"
            width={72}
            height={72}
            priority
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* =====================================================
            NAVIGATION DESKTOP
        ====================================================== */}
        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-1 lg:flex"
        >
          <Link
            href="/"
            className="rounded-lg px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50 hover:text-orange-600"
          >
            Accueil
          </Link>

          {/* DROPDOWN SERVICES */}
          <div ref={servicesRef} className="relative">
            <button
              type="button"
              onClick={() =>
                setServicesOpen((current) => !current)
              }
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50 hover:text-orange-600"
            >
              Services

              <ChevronDown
                size={16}
                aria-hidden="true"
                className={`transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-[calc(100%+12px)] w-[520px] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10">
                <div className="grid grid-cols-2 gap-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={closeMenus}
                      className="group rounded-xl p-4 transition hover:bg-orange-50"
                    >
                      <span className="block font-extrabold text-slate-950 transition group-hover:text-orange-600">
                        {service.name}
                      </span>

                      <span className="mt-1 block text-xs leading-relaxed text-slate-500">
                        {service.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/a-propos"
            className="rounded-lg px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50 hover:text-orange-600"
          >
            À propos
          </Link>

          <Link
            href="/contact"
            className="rounded-lg px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50 hover:text-orange-600"
          >
            Contact
          </Link>
        </nav>

        {/* =====================================================
            CTA DESKTOP
        ====================================================== */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+33662125611"
            onClick={() => trackPhone("header")}
            aria-label="Appeler Couverture Catalane au 06 62 12 56 11"
            className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-extrabold text-slate-900 transition hover:bg-slate-50 hover:text-orange-600"
          >
            <Phone
              size={18}
              aria-hidden="true"
              className="text-orange-600"
            />

            <span>06 62 12 56 11</span>
          </a>

          <Link
            href="/contact"
            onClick={() => trackQuote("header")}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-orange-600 px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-orange-600/15 transition hover:bg-orange-500"
          >
            <FileText size={18} aria-hidden="true" />

            Demander un devis
          </Link>
        </div>

        {/* =====================================================
            MOBILE : TÉLÉPHONE + HAMBURGER
        ====================================================== */}
        <div className="flex items-center gap-1 lg:hidden">
          <a
            href="tel:+33662125611"
            onClick={() => trackPhone("header_mobile")}
            aria-label="Appeler Couverture Catalane au 06 62 12 56 11"
            className="flex h-11 w-11 items-center justify-center rounded-full text-orange-600 transition active:bg-orange-50"
          >
            <Phone size={22} aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() =>
              setMobileOpen((current) => !current)
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={
              mobileOpen
                ? "Fermer le menu de navigation"
                : "Ouvrir le menu de navigation"
            }
            className="flex h-11 w-11 items-center justify-center rounded-full text-slate-900 transition active:bg-slate-100"
          >
            {mobileOpen ? (
              <X size={27} aria-hidden="true" />
            ) : (
              <Menu size={27} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* =====================================================
          MENU MOBILE PLEIN ÉCRAN
      ====================================================== */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navigation mobile"
          className="absolute inset-x-0 top-full h-[calc(100dvh-80px)] overflow-y-auto overscroll-contain border-t border-slate-200 bg-white lg:hidden"
        >
          <div className="mx-auto flex min-h-full max-w-7xl flex-col px-5 py-6">
            {/* PARTIE HAUTE */}
            <div>
              <Link
                href="/"
                onClick={closeMenus}
                className="block rounded-xl px-4 py-3 text-lg font-extrabold text-slate-950 transition active:bg-slate-50 active:text-orange-600"
              >
                Accueil
              </Link>

              {/* SERVICES */}
              <div className="mt-5">
                <p className="px-4 pb-3 text-xs font-black uppercase tracking-[0.16em] text-orange-600">
                  Nos services
                </p>

                <div className="grid gap-1 sm:grid-cols-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={closeMenus}
                      className="group rounded-xl px-4 py-3 transition active:bg-orange-50"
                    >
                      <span className="block font-extrabold text-slate-900 transition group-active:text-orange-600">
                        {service.name}
                      </span>

                      <span className="mt-1 block text-xs leading-relaxed text-slate-500">
                        {service.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="my-5 border-t border-slate-200" />

              <Link
                href="/a-propos"
                onClick={closeMenus}
                className="block rounded-xl px-4 py-3 font-extrabold text-slate-950 transition active:bg-slate-50 active:text-orange-600"
              >
                À propos
              </Link>

              <Link
                href="/contact"
                onClick={closeMenus}
                className="block rounded-xl px-4 py-3 font-extrabold text-slate-950 transition active:bg-slate-50 active:text-orange-600"
              >
                Contact
              </Link>
            </div>

            {/* =================================================
                CTA EN BAS DU MENU
            ================================================== */}
            <div className="mt-auto pt-8">
              <div className="rounded-3xl bg-slate-950 p-5 text-white">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-400">
                  Un projet de toiture ?
                </p>

                <p className="mt-2 text-xl font-black">
                  Contactez Couverture Catalane
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <a
                    href="tel:+33662125611"
                    onClick={() => {
                      trackPhone("mobile_menu");
                      closeMenus();
                    }}
                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 font-extrabold text-white transition active:bg-white/20"
                  >
                    <Phone size={19} aria-hidden="true" />

                    06 62 12 56 11
                  </a>

                  <Link
                    href="/contact"
                    onClick={() => {
                      trackQuote("mobile_menu");
                      closeMenus();
                    }}
                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-orange-600 px-5 py-3 font-extrabold text-white transition active:bg-orange-500"
                  >
                    <FileText size={19} aria-hidden="true" />

                    Demander un devis
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}