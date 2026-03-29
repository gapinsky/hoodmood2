import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  href: string;
  blank?: boolean;
};
export const buttonPrimaryStyes =
  "relative inline-flex text-nowrap  min-w-24 w-fit place-self-end items-center justify-center gap-2 overflow-hidden rounded-full border border-white/[0.08] bg-[linear-gradient(180deg,var(--brand-600),var(--brand-800))] px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-white ring-1 ring-inset ring-white/[0.10] shadow-md transition-all duration-300 hover:-translate-y-[1px] hover:bg-[linear-gradient(180deg,var(--brand-500),var(--brand-700))] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/35 active:scale-[0.985] disabled:pointer-events-none disabled:opacity-50 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1/2 before:bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0))] after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_55%)] [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0";
export default function ButtonPrimary({ children, href, blank }: Props) {
  return (
    <Link
      href={`${href}`}
      target={blank ? "_blank" : "_self"}
      className={buttonPrimaryStyes}
    >
      {children}
    </Link>
  );
}
