import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  href: string;
  blank?: boolean;
};

export const buttonSecondaryStyles =
  "ui-surface-soft ui-outline relative inline-flex w-fit items-center justify-center gap-2 overflow-hidden rounded-full border border-black/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(245,241,243,0.92))] px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:-translate-y-[1px] hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(240,234,237,0.98))] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/35 active:scale-[0.985] disabled:pointer-events-none disabled:opacity-50 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1/2 before:bg-[linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0))] after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_55%)] dark:border-white/[0.10] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.05))] dark:text-white/92 dark:hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.07))] dark:before:bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0))] dark:after:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)] [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0";

export default function ButtonSecondary({ children, href, blank }: Props) {
  return (
    <Link
      href={`${href}`}
      target={blank ? "_blank" : "_self"}
      scroll
      className={buttonSecondaryStyles}
    >
      {children}
    </Link>
  );
}
