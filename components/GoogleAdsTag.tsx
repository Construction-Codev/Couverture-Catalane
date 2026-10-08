import Script from "next/script";

import { GOOGLE_ADS_ID } from "@/lib/conversions";

/*
 * Balise Google Ads (gtag.js), chargée une seule fois depuis le layout racine.
 *
 * Consent Mode v2 : tout est refusé par défaut. Google Ads ne dépose donc
 * aucun cookie et n'envoie que des signaux sans cookie, tant qu'un outil de
 * consentement n'appelle pas gtag("consent", "update", { ... "granted" }).
 * Aucune conversion n'est déclenchée au chargement des pages.
 */
const initScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});
gtag('set', 'ads_data_redaction', true);
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');
`;

export default function GoogleAdsTag() {
  return (
    <>
      <Script id="google-ads-init" strategy="afterInteractive">
        {initScript}
      </Script>
      <Script
        id="google-ads-gtag"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}
