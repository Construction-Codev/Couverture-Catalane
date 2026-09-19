import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  currentPath?: string;
};

const BASE_URL = "https://www.couverture-catalane.fr";

export default function Breadcrumb({
  items,
  currentPath,
}: BreadcrumbProps) {
  const breadcrumbItems = [
    {
      label: "Accueil",
      href: "/",
    },
    ...items,
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => {
      const isLast = index === breadcrumbItems.length - 1;

      const href =
        item.href || (isLast ? currentPath : undefined);

      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        ...(href
          ? {
              item: `${BASE_URL}${href}`,
            }
          : {}),
      };
    }),
  };

  return (
    <>
      <nav
        aria-label="Fil d’Ariane"
        className="border-b border-slate-200 bg-white"
      >
        <div className="mx-auto flex w-full max-w-7xl items-center px-6 py-4 sm:px-8 lg:px-12">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <li>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 font-semibold transition hover:text-orange-600"
              >
                <Home size={15} aria-hidden="true" />
                Accueil
              </Link>
            </li>

            {items.map((item) => (
              <li
                key={`${item.label}-${item.href ?? "current"}`}
                className="flex items-center gap-2"
              >
                <ChevronRight
                  size={15}
                  aria-hidden="true"
                  className="text-slate-400"
                />

                {item.href ? (
                  <Link
                    href={item.href}
                    className="font-semibold transition hover:text-orange-600"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="font-semibold text-slate-900"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />
    </>
  );
}