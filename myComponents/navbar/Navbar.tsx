"use client";

import { useState } from "react";
import MenuButton from "./MenuButton";
import NavMenuDesktop from "./NavMenuDesktop";
import NavMenuMobile from "./NavMenuMobile";
import ButtonSecondary from "../common/ButtonSecondary";
import ButtonPrimary from "../common/ButtonPrimary";
import { Switch } from "../themeSwitch/switch";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0  ">
      <div className="flex w-full items-center ">
        {/* LEFT */}
        <div className=" w-full bg-red-500">hej</div>

        {/* CENTER */}
        <div className="flex flex-1 justify-center border border-blue-500">
          <NavMenuDesktop />
        </div>

        {/* RIGHT */}
        <div className="flex w-full items-center gap-3 justify-end border bg-blue-500 ">
          <Switch className="xl:hidden" />
          <MenuButton menuState={isOpen} menuHandler={setIsOpen} />
          <div className="hidden xl:flex items-center gap-3">
            <Switch />
            <ButtonSecondary />
            <ButtonPrimary />
          </div>
        </div>
      </div>

      {isOpen && <NavMenuMobile />}
    </nav>
  );
}
