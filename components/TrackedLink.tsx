"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import type { ComponentProps, ReactNode } from "react";

type Props = Omit<ComponentProps<typeof Link>, "onClick"> & {
  children: ReactNode;
  eventName: string;
  eventSource: string;
};

export default function TrackedLink({
  children,
  eventName,
  eventSource,
  ...props
}: Props) {
  return (
    <Link
      {...props}
      onClick={() => {
        track(eventName, {
          source: eventSource,
        });
      }}
    >
      {children}
    </Link>
  );
}