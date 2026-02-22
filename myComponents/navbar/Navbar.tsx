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
    <nav className="sticky top-0 w-full border-b border-black dark:border-white p-4 bg-background">
      <Container>
        <div className="flex  items-center w-full">
          {/* LEFT */}
          <div className=" w-full ">
            <Link href="/">
              <img src="/assets/svg/mainLogo/logo.svg" className="max-h-12" />
            </Link>
          </div>

          {/* CENTER */}
          <div className="flex flex-1 justify-center  ">
            <NavMenuDesktop />
          </div>

          {/* RIGHT */}
          <div className="flex w-full items-center gap-3 justify-end ">
            <Switch className="md:hidden" />
            <MenuButton menuState={isOpen} menuHandler={setIsOpen} />
            <div className="hidden md:flex items-center gap-3">
              <Switch />
              <ButtonSecondary />
              <ButtonPrimary />
            </div>
          </div>
        </div>

        <NavMenuMobile handleOpenNav={setIsOpen} isOpen={isOpen} />
      </Container>
    </nav>
  );
}
