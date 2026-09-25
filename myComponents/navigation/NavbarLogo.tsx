"use client";

import type { MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarLogo() {
  const pathname = usePathname();

  function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname !== "/") {
      return;
    }

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Link
      href="/"
      onClick={handleLogoClick}
      className="
        ui-focus-ring ui-interactive inline-flex items-center rounded-2xl
        motion-safe:hover:scale-[0.985] motion-safe:hover:opacity-92
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-[#21191d]/20
        focus-visible:ring-offset-2 focus-visible:ring-offset-white
        dark:focus-visible:ring-white/80
        dark:focus-visible:ring-offset-[#21191d]
      "
      aria-label="Przejdź do strony głównej"
    >
      <Image
        src="/assets/images/branding/logo.png"
        alt="Hoodmood"
        width={320}
        height={259}
        sizes="160px"
        className="h-auto max-h-11 w-auto xl:max-h-14"
      />
    </Link>
  );
}
