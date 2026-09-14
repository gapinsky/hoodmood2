"use client";

import { Menu, X } from "lucide-react";

interface Props {
  menuHandler: React.Dispatch<React.SetStateAction<boolean>>;
  menuState: boolean;
}

const menuButtonStyles =
  "inline-flex size-11 items-center justify-center rounded-full border border-black/8 bg-white/80 text-[#21191d] shadow-[0_8px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.65)] ring-1 ring-inset ring-black/3 backdrop-blur-lg transition-all duration-200 hover:scale-[0.98] hover:bg-white/95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#21191d]/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-[0.96] dark:border-white/10 dark:bg-white/6 dark:text-white/92 dark:shadow-[0_8px_20px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] dark:ring-white/5 dark:hover:bg-white/12 dark:focus-visible:ring-white/85 dark:focus-visible:ring-offset-[#21191d] xl:hidden";

const MenuButton = ({ menuState, menuHandler }: Props) => {
  return (
    <button
      type="button"
      className={menuButtonStyles}
      onClick={() => menuHandler((prev) => !prev)}
      aria-label={menuState ? "Zamknij menu" : "Otwórz menu"}
      aria-expanded={menuState}
      aria-controls="mobile-navigation"
      aria-haspopup="menu"
    >
      {menuState ? <X className="size-5" /> : <Menu className="size-5" />}
    </button>
  );
};

export default MenuButton;
