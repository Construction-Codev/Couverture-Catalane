"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { onConsentChange, readConsent } from "@/lib/consent";
import { GA4_MEASUREMENT_ID, getGtag, trackGA4Event } from "@/lib/ga4";

const ALLOWED_PARAMS = new Set([
  "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gbraid", "wbraid",
]);

/**
 * GA4 : pages vues (initiale + navigations Next.js) et clics tel:/mailto:.
 * La balise gtag.js et la configuration GA4 sont gérées par GoogleAdsTag, après consentement.
 * Aucune donnée personnelle : paramètres d'URL libres retirés, numéro/adresse jamais transmis.
 */
export default function GA4PageViews() {
  const pathname = usePathname();
  const [granted, setGranted] = useState(false);
  const lastLocation = useRef<string | null>(null);

  useEffect(() => {
    setGranted(readConsent() === "granted");
    return onConsentChange((value) => setGranted(value === "granted"));
  }, []);

  useEffect(() => {
    if (!granted || !GA4_MEASUREMENT_ID) {
      lastLocation.current = null;
      return;
    }
    const gtag = getGtag();
    if (!gtag) return;
    const url = new URL(window.location.href);
    for (const key of [...url.searchParams.keys()]) {
      if (!ALLOWED_PARAMS.has(key)) url.searchParams.delete(key);
    }
    url.hash = "";
    const location = url.toString();
    if (lastLocation.current === location) return;
    lastLocation.current = location;
    gtag("event", "page_view", {
      send_to: GA4_MEASUREMENT_ID,
      page_location: location,
      page_path: pathname,
      page_title: document.title,
    });
  }, [granted, pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!event.isTrusted || !(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href^="tel:"], a[href^="mailto:"]');
      if (!link) return;
      const isPhone = link.getAttribute("href")?.startsWith("tel:") ?? false;
      const placement = link.closest("header") ? "header" : link.closest("footer") ? "footer" : "content";
      trackGA4Event(isPhone ? "phone_click" : "email_click", { placement });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
