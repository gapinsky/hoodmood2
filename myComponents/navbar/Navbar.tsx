"use client";

import { useState } from "react";
import MenuButton from "./MenuButton";
import NavMenuDesktop from "./NavMenuDesktop";
import NavMenuMobile from "./NavMenuMobile";
import ButtonSecondary from "../common/ButtonSecondary";
import ButtonPrimary from "../common/ButtonPrimary";
import { Switch } from "../themeSwitch/switch";
import Link from "next/link";
import Container from "../common/Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full  py-4 xl:py-2 bg-background z-1000 ">
      <Container>
        <div className="flex  items-center w-full ">
          {/* LEFT */}
          <div className=" w-full ">
            <Link href="/">
              <img
                src="/assets/svg/mainLogo/logo.svg"
                className="max-h-12 lg:max-h-18"
              />
            </Link>
          </div>

          {/* CENTER */}
          <div className="flex flex-1 justify-center  ">
            <NavMenuDesktop />
          </div>

          {/* RIGHT */}
          <div className="flex w-full items-center gap-3 justify-end ">
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
