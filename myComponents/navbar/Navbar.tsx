"use client";

import { useState } from "react";
import MenuButton from "./MenuButton";
import NavMenuDesktop from "./NavMenuDesktop";
import NavMenuMobile from "./NavMenuMobile";
import ButtonSecondary from "../common/ButtonSecondary";
import ButtonPrimary from "../common/ButtonPrimary";
import { Switch } from "../themeSwitch/switch";
import Image from "next/image";
import logo from "../../public/assets/svg/mainLogo/logo.svg";
import Link from "next/link";
import Container from "../common/Container";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full border-b border-black dark:border-white p-4 ">
      <Container>
        <div className="flex  items-center w-full">
          {/* LEFT */}
          <div className=" w-full ">
            <Link
              href="/"
              className="w-fit  flex font-anton tracking-widest text-xl"
            >
              HOODMOOD
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

        {isOpen && <NavMenuMobile />}
      </Container>
    </nav>
  );
}
