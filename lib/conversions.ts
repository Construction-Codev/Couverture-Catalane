import { track } from "@vercel/analytics";

import { hasAdsConsent } from "@/lib/consent";

/*
 * Actions de conversion Google Ads (Outils > Conversions > « Configurer
 * la balise » > envoi d'événement). Les deux actions appartiennent à deux
 * comptes Google Ads différents (identifiants AW- distincts) : chacune
 * n'est visible, et utilisable pour l'optimisation, que dans son compte.
 */
const ADS_PHONE_CONVERSION = "AW-18366446985/yGpHCMjW0docEIn75rVE";
const ADS_FORM_CONVERSION = "AW-17906846752/-T76CKKf1JUdEKCY09pC";

/** Comptes à configurer dans gtag.js (une seule balise chargée pour les deux). */
export const GOOGLE_ADS_IDS = [
  ADS_PHONE_CONVERSION.split("/")[0],
  ADS_FORM_CONVERSION.split("/")[0],
];

const PHONE_SENT_KEY = "cc-ads-phone-sent";
let phoneSentInMemory = false;

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: unknown[];
  }
}

function sendAdsConversion(params: Record<string, unknown>) {
  // Conversion envoyée seulement si les cookies publicitaires sont
  // acceptés et la balise Google Ads chargée.
  if (!hasAdsConsent() || !window.gtag) return false;

  window.gtag("event", "conversion", params);
  return true;
}

/*
 * Un appel = un prospect : une seule conversion téléphone par visite,
 * même si le visiteur clique plusieurs fois sur un numéro.
 */
function phoneConversionAlreadySent() {
  try {
    return window.sessionStorage.getItem(PHONE_SENT_KEY) === "1";
  } catch {
    return phoneSentInMemory;
  }
}

function markPhoneConversionSent() {
  phoneSentInMemory = true;
  try {
    window.sessionStorage.setItem(PHONE_SENT_KEY, "1");
  } catch {
    // Stockage indisponible : la mémoire de la page suffit.
  }
}

function uniqueId() {
  try {
    return window.crypto.randomUUID();
  } catch {
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
}

/** Clic sur un numéro de téléphone (Vercel Analytics + conversion Google Ads). */
export function trackPhoneClick(source: string) {
  track("clic_telephone", { source });

  if (phoneConversionAlreadySent()) return;

  if (sendAdsConversion({ send_to: ADS_PHONE_CONVERSION })) {
    markPhoneConversionSent();
  }
}

/** Clic vers la page de devis (Vercel Analytics uniquement). */
export function trackQuoteClick(source: string) {
  track("clic_devis", { source });
}

/** Formulaire envoyé avec succès (Vercel Analytics + conversion Google Ads). */
export function trackFormSuccess(source: string) {
  track("devis_envoye", { source });

  // L'identifiant de transaction permet à Google Ads d'ignorer un
  // éventuel doublon de la même demande.
  sendAdsConversion({
    send_to: ADS_FORM_CONVERSION,
    value: 1.0,
    currency: "EUR",
    transaction_id: uniqueId(),
  });
}
