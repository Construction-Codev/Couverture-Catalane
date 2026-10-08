"use client";

import Link from "next/link";
import { trackPhoneClick, trackQuoteClick } from "@/lib/conversions";
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
        trackPhoneClick(source);
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
        trackQuoteClick(source);
      }}
    >
      {children}
    </Link>
  );
}