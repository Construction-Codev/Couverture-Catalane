"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import type { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  className?: string;
  source: string;
  ariaLabel?: string;
};

type TrackedPhoneProps = BaseProps & {
  phone: string;
};

type TrackedQuoteProps = BaseProps & {
  href?: string;
};

export function TrackedPhone({
  phone,
  source,
  children,
  className,
  ariaLabel,
}: TrackedPhoneProps) {
  return (
    <a
      href={`tel:${phone}`}
      aria-label={ariaLabel}
      className={className}
      onClick={() => {
        track("clic_telephone", {
          source,
        });
      }}
    >
      {children}
    </a>
  );
}

export function TrackedQuote({
  href = "/contact",
  source,
  children,
  className,
  ariaLabel,
}: TrackedQuoteProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={className}
      onClick={() => {
        track("clic_devis", {
          source,
        });
      }}
    >
      {children}
    </Link>
  );
}