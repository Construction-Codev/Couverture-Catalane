"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Phone } from "lucide-react";
import { track } from "@vercel/analytics";

export default function MobileCTA() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handlePhoneClick = () => {
    track("clic_telephone", {
      source: "mobile_cta",
    });
  };

  const handleQuoteClick = () => {
    track("clic_devis", {
      source: "mobile_cta",
    });
  };

  return (
    <div
      id="mobile-cta"
      data-footer-visible={footerVisible ? "true" : "false"}
      className="
        fixed
        inset-x-0
        bottom-0
        z-40
        border-t
        border-slate-200
        bg-white/95
        px-3
        pb-[max(0.75rem,env(safe-area-inset-bottom))]
        pt-3
        shadow-[0_-8px_30px_rgba(15,23,42,0.12)]
        backdrop-blur-md
        transition-all
        duration-200
        lg:hidden
      "
    >
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        {/* TÉLÉPHONE */}
        <a
          href="tel:+33662125611"
          onClick={handlePhoneClick}
          aria-label="Appeler Couverture Catalane au 06 62 12 56 11"
          className="
            inline-flex
            min-h-14
            items-center
            justify-center
            gap-2
            rounded-full
            border-2
            border-slate-200
            bg-white
            px-3
            text-sm
            font-extrabold
            text-slate-950
            transition
            active:bg-slate-50
          "
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">
            <Phone size={19} aria-hidden="true" />
          </span>

          <span>Appeler</span>
        </a>

      {/* DEVIS */}
        {isContactPage ? (
          <a
            href="#formulaire-devis"
            onClick={() => {
              track("clic_devis", {
                source: "mobile_cta_contact",
              });
            }}
            className="
              inline-flex
              min-h-14
              items-center
              justify-center
              gap-2
              rounded-full
              bg-orange-600
              px-3
              text-sm
              font-extrabold
              text-white
              shadow-lg
              shadow-orange-600/20
              transition
              active:bg-orange-500
            "
          >
            <FileText size={19} aria-hidden="true" />
            <span>Remplir le formulaire</span>
          </a>
        ) : (
          <Link
            href="/contact"
            onClick={handleQuoteClick}
            className="
              inline-flex
              min-h-14
              items-center
              justify-center
              gap-2
              rounded-full
              bg-orange-600
              px-3
              text-sm
              font-extrabold
              text-white
              shadow-lg
              shadow-orange-600/20
              transition
              active:bg-orange-500
            "
          >
            <FileText size={19} aria-hidden="true" />
            <span>Demander un devis</span>
          </Link>
        )}
      </div>
    </div>
  );
}