"use client";

import type { MouseEvent, ReactNode } from "react";

type SmoothScrollLinkProps = {
  children: ReactNode;
  className?: string;
  href: `#${string}`;
};

export default function SmoothScrollLink({
  children,
  className,
  href,
}: SmoothScrollLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const target = document.querySelector(href);

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
