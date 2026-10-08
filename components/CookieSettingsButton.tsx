"use client";

import { openConsentBanner } from "@/lib/consent";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function CookieSettingsButton({ className, children }: Props) {
  return (
    <button
      type="button"
      onClick={openConsentBanner}
      className={className}
    >
      {children ?? "Gestion des cookies"}
    </button>
  );
}
