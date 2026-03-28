"use client";

import { useState } from "react";
import Link from "next/link";
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

  return (
    <nav
      className={cn(
        isOpen
          ? "bg-white dark:bg-[#1c1c1c] "
          : "bg-white/50 dark:bg-black/42 shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.20)] ",
        "fixed inset-x-0 top-0 z-50   backdrop-blur-xl   ",
      )}
    >
      <Container>
        <div className="flex min-h-18 items-center gap-4 xl:min-h-19 ">
          {/* LEFT */}
          <div className="flex min-w-0 flex-1 items-center">
            <Link
              href="/"
              className="
                inline-flex items-center rounded-2xl
                outline-none transition-transform duration-200
                hover:scale-[0.98]
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-[#21191d]/20
                focus-visible:ring-offset-2 focus-visible:ring-offset-white
                dark:focus-visible:ring-white/80
                dark:focus-visible:ring-offset-[#21191d]
              "
              aria-label="Przejdź do strony głównej"
            >
              <img
                src="/assets/svg/mainLogo/logo.svg"
                alt="Hoodmood"
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
