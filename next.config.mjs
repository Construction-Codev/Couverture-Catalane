/**
 * Photos converties de PNG en JPG lors de l'optimisation des images :
 * les anciennes URL (déjà indexées par Google Images ou partagées)
 * sont redirigées de façon permanente vers la nouvelle version.
 */
const convertedImages = [
  "banner",
  "charpente",
  "charpente2",
  "charpente3",
  "couverture",
  "couverture2",
  "couverture3",
  "fuites",
  "fuites2",
  "fuites3",
  "hero-couvreur-perpignan",
  "nettoyage",
  "nettoyage2",
  "nettoyage3",
  "reparations",
  "reparations2",
  "reparations3",
  "zinguerie",
  "zinguerie2",
  "zinguerie3",
  "articles/casser",
  "articles/demoussage",
  "articles/fuites",
  "articles/hydrofuge",
  "articles/reparer",
  "articles/tuiles",
];

// Images supprimées sans équivalent direct : photo la plus proche du même service.
const replacedImages = {
  charpente4: "charpente3",
  zinguerie4: "zinguerie3",
};

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
    // Les photos du dossier public changent rarement : on garde
    // les versions optimisées en cache 31 jours.
    minimumCacheTTL: 2678400,
  },

  async redirects() {
    return [
      ...convertedImages.map((name) => ({
        source: `/${name}.png`,
        destination: `/${name}.jpg`,
        permanent: true,
      })),
      ...Object.entries(replacedImages).map(([from, to]) => ({
        source: `/${from}.png`,
        destination: `/${to}.jpg`,
        permanent: true,
      })),
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
