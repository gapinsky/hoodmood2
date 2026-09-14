import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { buttonSecondaryStyles } from "./buttonStyles";

export { buttonSecondaryStyles } from "./buttonStyles";

type Props = {
  children: ReactNode;
  href: string;
  blank?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  className?: string;
};

export default function ButtonSecondary({ children, href, blank, onClick, className }: Props) {
  return (
    <Link
      href={href}
      target={blank ? "_blank" : undefined}
      rel={blank ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={cn(buttonSecondaryStyles, className)}
    >
      {children}
    </Link>
  );
}
