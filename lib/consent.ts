/*
 * Consentement aux cookies publicitaires (Google Ads).
 *
 * - Le choix est conservé 6 mois dans le navigateur (localStorage),
 *   puis redemandé, conformément aux recommandations de la CNIL.
 * - Tant qu'aucun choix « accepté » n'est enregistré, la balise Google Ads
 *   n'est pas chargée du tout : aucune requête publicitaire, aucun cookie.
 * - Vercel Analytics et Speed Insights fonctionnent sans cookie et ne
 *   dépendent pas de ce choix.
 */

export type ConsentValue = "granted" | "denied";

type StoredConsent = {
  value: ConsentValue;
  date: number;
  version: number;
};

const STORAGE_KEY = "cc-consent";
const CONSENT_VERSION = 1;
export const CONSENT_MAX_AGE_MS = 182 * 24 * 60 * 60 * 1000; // ~6 mois

const CHANGE_EVENT = "cc-consent-change";
const OPEN_EVENT = "cc-consent-open";

export function readConsent(): ConsentValue | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const stored = JSON.parse(raw) as Partial<StoredConsent>;

    if (
      stored.version !== CONSENT_VERSION ||
      (stored.value !== "granted" && stored.value !== "denied") ||
      typeof stored.date !== "number" ||
      Date.now() - stored.date > CONSENT_MAX_AGE_MS
    ) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return stored.value;
  } catch {
    return null;
  }
}

export function saveConsent(value: ConsentValue) {
  try {
    const stored: StoredConsent = {
      value,
      date: Date.now(),
      version: CONSENT_VERSION,
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // Stockage indisponible (navigation privée stricte) : le choix
    // s'applique à la page en cours seulement.
  }

  window.dispatchEvent(
    new CustomEvent<ConsentValue>(CHANGE_EVENT, { detail: value })
  );
}

export function hasAdsConsent(): boolean {
  return typeof window !== "undefined" && readConsent() === "granted";
}

export function onConsentChange(
  listener: (value: ConsentValue) => void
): () => void {
  const handler = (event: Event) =>
    listener((event as CustomEvent<ConsentValue>).detail);

  window.addEventListener(CHANGE_EVENT, handler);
  return () => window.removeEventListener(CHANGE_EVENT, handler);
}

/** Rouvre le bandeau (lien « Gestion des cookies »). */
export function openConsentBanner() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onConsentBannerOpen(listener: () => void): () => void {
  window.addEventListener(OPEN_EVENT, listener);
  return () => window.removeEventListener(OPEN_EVENT, listener);
}

/**
 * Supprime les cookies Google Ads déjà déposés (_gcl_*, _gac_*)
 * lors d'un retrait du consentement.
 */
export function clearAdsCookies() {
  const names = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0]?.trim())
    .filter(
      (name): name is string =>
        !!name && (name.startsWith("_gcl_") || name.startsWith("_gac_"))
    );

  const host = window.location.hostname;
  const parts = host.split(".");
  const domains = new Set(["", host, `.${host}`]);

  if (parts.length > 2) {
    domains.add(`.${parts.slice(-2).join(".")}`);
  }

  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${
        domain ? `; domain=${domain}` : ""
      }`;
    }
  }
}
