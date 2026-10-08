"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

import {
  type ConsentValue,
  clearAdsCookies,
  onConsentChange,
  readConsent,
} from "@/lib/consent";
import { GOOGLE_ADS_IDS } from "@/lib/conversions";

const DENIED = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
} as const;

const GRANTED = {
  ad_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted",
  analytics_storage: "granted",
} as const;

/**
 * Prépare la file gtag avec le Consent Mode v2 : refus par défaut, puis
 * accord explicite. Exécuté une seule fois, juste avant le chargement
 * de gtag.js (qui traite ensuite la file dans l'ordre).
 */
function initGtag() {
  if (window.gtag) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js attend l'objet `arguments`, pas un tableau.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };

  window.gtag("consent", "default", DENIED);
  window.gtag("set", "ads_data_redaction", true);
  window.gtag("consent", "update", GRANTED);
  window.gtag("js", new Date());
  // Les deux comptes Google Ads partagent la même balise gtag.js.
  for (const id of GOOGLE_ADS_IDS) {
    window.gtag("config", id);
  }
}

/*
 * Balise Google Ads (gtag.js) : chargée uniquement après acceptation
 * des cookies, une seule fois par visite. Aucune conversion n'est
 * déclenchée au chargement des pages.
 */
export default function GoogleAdsTag() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const apply = (value: ConsentValue | null) => {
      if (value === "granted") {
        if (window.gtag) {
          window.gtag("consent", "update", GRANTED);
        } else {
          initGtag();
        }
        setLoad(true);
        return;
      }

      // Retrait du consentement : gtag.js déjà chargé passe en mode
      // refusé (plus de cookie lu ni écrit) et ses cookies sont supprimés.
      if (window.gtag) {
        window.gtag("consent", "update", DENIED);
      }
      clearAdsCookies();
    };

    const stored = readConsent();
    if (stored === "granted") apply(stored);

    return onConsentChange(apply);
  }, []);

  if (!load) return null;

  return (
    <Script
      id="google-ads-gtag"
      src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_IDS[0]}`}
      strategy="afterInteractive"
    />
  );
}
