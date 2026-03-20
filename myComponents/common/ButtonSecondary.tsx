import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  href: string;
  blank?: boolean;
};

export const buttonSecondaryStyles =
  "  relative inline-flex items-center justify-center gap-2 font-bold overflow-hidden  whitespace-nowrap uppercase  rounded-full  py-2 px-5  text-[12px] font-semibold tracking-[0.15em]  text-black dark:text-white/92  border border-black/[0.08] dark:border-white/[0.10]  bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(245,241,243,0.92))]  dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.05))]  backdrop-blur-lg  ring-1 ring-inset ring-black/[0.04] dark:ring-white/[0.08]  shadow-md   transition-all duration-300  hover:-translate-y-[1px]  hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(240,234,237,0.98))] dark:hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.07))]  hover:border-black/[0.12] dark:hover:border-white/[0.14]   active:translate-y-0 active:scale-[0.985]  outline-none  focus-visible:outline-none  focus-visible:ring-4  focus-visible:ring-[#21191d]/30 dark:focus-visible:ring-white/85  focus-visible:ring-offset-2  focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#21191d]  disabled:pointer-events-none disabled:opacity-50  before:absolute before:inset-x-0 before:top-0 before:h-1/2  before:bg-[linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0))]  dark:before:bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0))]  before:pointer-events-none  after:absolute after:inset-0 after:rounded-full  after:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_55%)]  dark:after:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]  after:pointer-events-none  [&_svg]:pointer-events-none  [&_svg:not([class*='size-'])]:size-4  [&_svg]:shrink-0";

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
