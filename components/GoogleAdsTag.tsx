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
import { GA4_MEASUREMENT_ID, setGA4Active } from "@/lib/ga4";

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
  // GA4 partage la même balise ; pages vues envoyées par GA4PageViews (navigation Next.js).
  if (GA4_MEASUREMENT_ID) {
    window.gtag("config", GA4_MEASUREMENT_ID, { send_page_view: false });
  }
}

/** Supprime les cookies Google Analytics (_ga, _ga_*) lors d'un retrait du consentement. */
function clearAnalyticsCookies() {
  const names = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0]?.trim())
    .filter((name): name is string => !!name && (name === "_ga" || name.startsWith("_ga_") || name === "_gid"));
  const host = window.location.hostname;
  const parts = host.split(".");
  const domains = new Set(["", host, `.${host}`]);
  if (parts.length >= 2) domains.add(`.${parts.slice(-2).join(".")}`);
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
    }
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
        setGA4Active(true);
        setLoad(true);
        return;
      }

      // Retrait du consentement : gtag.js déjà chargé passe en mode
      // refusé (plus de cookie lu ni écrit) et ses cookies sont supprimés.
      if (window.gtag) {
        window.gtag("consent", "update", DENIED);
      }
      setGA4Active(false);
      clearAdsCookies();
      clearAnalyticsCookies();
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
