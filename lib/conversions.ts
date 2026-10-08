import { track } from "@vercel/analytics";

import { hasAdsConsent } from "@/lib/consent";

export const GOOGLE_ADS_ID = "AW-18366446985";

/*
 * Libellés de conversion Google Ads (Outils > Conversions > « Configurer
 * la balise » > envoi d'événement : send_to = "AW-18366446985/<libellé>").
 * Tant qu'un libellé n'est pas renseigné dans les variables d'environnement
 * Vercel, aucune conversion Google Ads n'est envoyée pour cette action.
 */
const ADS_PHONE_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL;
const ADS_FORM_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_FORM_LABEL;

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: unknown[];
  }
}

function sendAdsConversion(label: string | undefined) {
  // Conversion envoyée seulement si : libellé configuré, cookies
  // publicitaires acceptés et balise Google Ads chargée.
  if (!label || !hasAdsConsent() || !window.gtag) return;

  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
  });
}

/** Clic sur un numéro de téléphone (Vercel Analytics + conversion Google Ads). */
export function trackPhoneClick(source: string) {
  track("clic_telephone", { source });
  sendAdsConversion(ADS_PHONE_LABEL);
}

/** Clic vers la page de devis (Vercel Analytics uniquement). */
export function trackQuoteClick(source: string) {
  track("clic_devis", { source });
}

/** Formulaire envoyé avec succès (Vercel Analytics + conversion Google Ads). */
export function trackFormSuccess(source: string) {
  track("devis_envoye", { source });
  sendAdsConversion(ADS_FORM_LABEL);
}
