"use client";

import NavbarLogo from "./NavbarLogo";
import { useMobileNavigation } from "./useMobileNavigation";
import MenuButton from "./MenuButton";
import NavMenuDesktop from "./NavMenuDesktop";
import NavMenuMobile from "./NavMenuMobile";
import ButtonSecondary from "@/myComponents/common/ButtonSecondary";
import ButtonPrimary from "@/myComponents/common/ButtonPrimary";
import { Switch } from "@/myComponents/themeSwitch/switch";
import Container from "@/myComponents/common/Container";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { navRef, isOpen, toggleMenu, closeMenu } = useMobileNavigation();

  return (
    <nav
      ref={navRef}
      className={cn(
        isOpen
          ? "bg-white/94 shadow-[0_10px_32px_rgba(0,0,0,0.08)] dark:bg-[#1c1c1c]/96 dark:shadow-[0_10px_32px_rgba(0,0,0,0.26)] "
          : "bg-white/58 shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:bg-black/42 dark:shadow-[0_8px_30px_rgba(0,0,0,0.20)] ",
        "ui-interactive fixed inset-x-0 top-0 z-50 backdrop-blur-xl",
      )}
    >
      <Container>
        <div className="flex min-h-18 items-center gap-4 xl:min-h-19 ">
          <div className="flex min-w-0 flex-1 items-center">
            <NavbarLogo />
          </div>

          <div className="hidden xl:flex flex-1 justify-center">
            <NavMenuDesktop />
          </div>

          <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3">
            <Switch className="xl:hidden" />
            <MenuButton isOpen={isOpen} onToggle={toggleMenu} />

            <div className="hidden xl:flex items-center gap-3">
              <Switch />
              <ButtonSecondary href="/kontakt">kontakt</ButtonSecondary>
              <ButtonPrimary href="/zapisz-sie">Zapisz się</ButtonPrimary>
            </div>
          </div>
        </div>

        <NavMenuMobile isOpen={isOpen} onClose={closeMenu} />
      </Container>
    </nav>
  );
}
