/**
 * Google Analytics 4 — identifiant public du flux Web.
 *
 * Renseigné via la variable Vercel NEXT_PUBLIC_GA4_MEASUREMENT_ID (Production + Preview).
 * Sans identifiant valide (G-XXXXXXXXXX), aucun script ni événement GA4 n'est émis.
 * La variable est lue au build : un redéploiement est nécessaire après modification.
 */
const configuredId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim() ?? "";

export const GA4_MEASUREMENT_ID: string | null = /^G-[A-Z0-9]{6,16}$/.test(configuredId)
  ? configuredId
  : null;

type Gtag = (...args: unknown[]) => void;
type GoogleWindow = Window & { dataLayer?: unknown[]; gtag?: Gtag };

/** Vrai uniquement lorsque GA4 est chargé ET que le visiteur a accepté la mesure d'audience. */
let ga4Active = false;

export function setGA4Active(active: boolean): void {
  ga4Active = active;
}

/** Renvoie la fonction gtag (créée si besoin, en file d'attente dataLayer). */
export function ensureGtag(): Gtag {
  const w = window as GoogleWindow;
  w.dataLayer = w.dataLayer || [];
  if (typeof w.gtag !== "function") {
    w.gtag = function gtag() {
      // gtag.js attend l'objet `arguments`, pas un tableau.
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments);
    };
  }
  return w.gtag;
}

export function getGtag(): Gtag | null {
  if (typeof window === "undefined") return null;
  const w = window as GoogleWindow;
  return typeof w.gtag === "function" ? w.gtag : null;
}

/**
 * Événement GA4 sans donnée personnelle (jamais de nom, e-mail, téléphone, message…).
 * Ignoré sans consentement, sans identifiant ou si un bloqueur empêche Google.
 */
export function trackGA4Event(event: string, params: Record<string, string> = {}): boolean {
  if (!GA4_MEASUREMENT_ID || !ga4Active) return false;
  if (!/^[a-z][a-z0-9_]{1,39}$/.test(event)) return false;
  const gtag = getGtag();
  if (!gtag) return false;
  try {
    gtag("event", event, { ...params, send_to: GA4_MEASUREMENT_ID });
    return true;
  } catch {
    return false;
  }
}
