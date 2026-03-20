import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  href: string;
  blank?: boolean;
};
export const buttonPrimaryStyes =
  "  relative inline-flex items-center justify-center gap-2  overflow-hidden  whitespace-nowrap uppercase  rounded-full py-2 px-5  text-[12px] font-semibold tracking-[0.15em]  text-white  border border-white/[0.08]  bg-[linear-gradient(180deg,var(--brand-600),var(--brand-800))]  ring-1 ring-inset ring-white/[0.10]  shadow-[0_10px_24px_rgba(131,57,79,0.32),0_6px_16px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.18)]  transition-all duration-300  hover:-translate-y-[1px]  hover:bg-[linear-gradient(180deg,var(--brand-500),var(--brand-700))]  hover:shadow-[0_14px_32px_rgba(131,57,79,0.38),0_8px_22px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.22)]  active:translate-y-0 active:scale-[0.985]  outline-none  focus-visible:outline-none  focus-visible:ring-4  focus-visible:ring-white/85  focus-visible:ring-offset-2  focus-visible:ring-offset-[rgba(131,57,79,0.45)]  disabled:pointer-events-none disabled:opacity-50  before:absolute before:inset-x-0 before:top-0 before:h-1/2  before:bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0))]  before:pointer-events-none  after:absolute after:inset-0 after:rounded-full  after:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_55%)]  after:pointer-events-none  [&_svg]:pointer-events-none  [&_svg:not([class*='size-'])]:size-4  [&_svg]:shrink-0 w-fit place-self-end  min-w-24   ";
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
