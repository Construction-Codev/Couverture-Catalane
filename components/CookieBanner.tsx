"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  type ConsentValue,
  onConsentBannerOpen,
  readConsent,
  saveConsent,
} from "@/lib/consent";

/*
 * Bandeau de consentement compact, non bloquant :
 * - pas de fond assombri ni de modal, le site reste utilisable ;
 * - à droite sur grand écran, à l'écart des boutons du hero ;
 * - sur mobile, posé au-dessus de la barre « Appeler / Demander un devis »
 *   pour ne jamais la masquer ;
 * - « Accepter » et « Refuser » ont exactement le même style.
 */
export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Lecture après le montage : le choix n'existe que dans le navigateur.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (readConsent() === null) setOpen(true);

    return onConsentBannerOpen(() => setOpen(true));
  }, []);

  if (!open) return null;

  const choose = (value: ConsentValue) => {
    saveConsent(value);
    setOpen(false);
  };

  const buttonClass =
    "inline-flex min-h-10 flex-1 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white px-5 text-sm font-extrabold text-slate-950 transition hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 sm:flex-none";

  return (
    <section
      aria-label="Gestion des cookies"
      className="
        fixed
        inset-x-3
        bottom-[calc(5.5rem+env(safe-area-inset-bottom))]
        z-30
        rounded-2xl
        bg-slate-950/95
        px-4
        py-3
        text-white
        shadow-2xl
        shadow-slate-950/30
        backdrop-blur-md
        sm:inset-x-auto
        sm:right-4
        sm:max-w-md
        lg:bottom-4
      "
    >
      <p className="text-xs leading-snug text-slate-200 sm:text-sm sm:leading-relaxed">
        Avec votre accord, des cookies Google Ads mesurent l&apos;efficacité
        de nos annonces. Refuser ne change rien à votre visite.{" "}
        <Link
          href="/confidentialite#cookies"
          className="font-bold text-orange-300 underline underline-offset-2 hover:text-orange-200"
        >
          En savoir plus
        </Link>
      </p>

      <div className="mt-2.5 flex gap-2">
        <button
          type="button"
          onClick={() => choose("denied")}
          className={buttonClass}
        >
          Refuser
        </button>

        <button
          type="button"
          onClick={() => choose("granted")}
          className={buttonClass}
        >
          Accepter
        </button>
      </div>
    </section>
  );
}
