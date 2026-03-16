import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  href: string;
};

export default function ButtonPrimary({ children, href }: Props) {
  return (
    <Link
      href={`${href}`}
      className="whitespace-nowrap uppercase rounded-full  text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-(--brand-700) text-slate-50 hover:bg-(--brand-900) h-9 px-4 py-2 has-[>svg]:px-3 w-fit place-self-end"
    >
      {children}
    </Link>
  );
}
