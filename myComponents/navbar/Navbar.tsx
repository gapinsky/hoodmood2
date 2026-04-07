"use client";

import type { MouseEvent } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuButton from "./MenuButton";
import NavMenuDesktop from "./NavMenuDesktop";
import NavMenuMobile from "./NavMenuMobile";
import ButtonSecondary from "../common/ButtonSecondary";
import ButtonPrimary from "../common/ButtonPrimary";
import { Switch } from "../themeSwitch/switch";
import Container from "../common/Container";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname !== "/") {
      return;
    }

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <nav
      className={cn(
        isOpen
          ? "bg-white/94 shadow-[0_10px_32px_rgba(0,0,0,0.08)] dark:bg-[#1c1c1c]/96 dark:shadow-[0_10px_32px_rgba(0,0,0,0.26)] "
          : "bg-white/58 shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:bg-black/42 dark:shadow-[0_8px_30px_rgba(0,0,0,0.20)] ",
        "ui-interactive fixed inset-x-0 top-0 z-50 backdrop-blur-xl",
      )}
    >
      <Container>
        <div className="flex min-h-18 items-center gap-4 xl:min-h-19 ">
          {/* LEFT */}
          <div className="flex min-w-0 flex-1 items-center">
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
                src="/assets/optimized/home/logo.png"
                alt="Hoodmood"
                width={320}
                height={259}
                sizes="160px"
                className="h-auto max-h-11 w-auto xl:max-h-14"
              />
            </Link>
          </div>

          {/* CENTER */}
          <div className="hidden xl:flex flex-1 justify-center">
            <NavMenuDesktop />
          </div>

          {/* RIGHT */}
          <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3">
            <Switch className="xl:hidden" />
            <MenuButton menuState={isOpen} menuHandler={setIsOpen} />

            <div className="hidden xl:flex items-center gap-3">
              <Switch />
              <ButtonSecondary href="/kontakt">kontakt</ButtonSecondary>
              <ButtonPrimary href="/zapisz-sie">Zapisz się</ButtonPrimary>
            </div>
          </div>
        </div>

        <NavMenuMobile handleOpenNav={setIsOpen} isOpen={isOpen} />
      </Container>
    </nav>
  );
}
