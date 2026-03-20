"use client";

import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ButtonSecondary from "../common/ButtonSecondary";
import ButtonPrimary from "../common/ButtonPrimary";
import { NAV as navLinks } from "../navbar/data";
import Container from "../common/Container";

type Props = {
  isOpen: boolean;
  handleOpenNav: Dispatch<SetStateAction<boolean>>;
};

const mobileNavPanelStyles =
  "absolute left-0 right-0 shadow-md top-full z-40 overflow-hidden border-t border-black/[0.06] bg-white backdrop-blur-xl transition-[max-height,opacity] duration-300 dark:border-white/[0.08] dark:bg-[#1c1c1c]/99";

const mobileAccordionItemStyles =
  "border-b border-black/[0.06] py-1  dark:border-white/[0.08]";

const mobileAccordionTriggerStyles =
  "w-full rounded-2xl  py-4 text-left text-[13px] font-bold uppercase tracking-[0.14em] text-[#1c1c1c]/92 transition-colors duration-200 hover:bg-black/[0.04] hover:text-[#1c1c1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c1c1c]/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-white/82 dark:hover:bg-white/[0.06] dark:hover:text-white dark:focus-visible:ring-white/80 dark:focus-visible:ring-offset-[#1c1c1c]";

const mobileSubLinkStyles =
  "block w-full rounded-2xl px-4 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-[#1c1c1c]/92 transition-colors duration-200 hover:bg-black/[0.04] hover:text-[#1c1c1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c1c1c]/20 dark:text-white/72 dark:hover:bg-white/[0.08] dark:hover:text-white dark:focus-visible:ring-white/80";

const mobileMainLinkStyles =
  "flex w-full rounded-2xl px-4 py-4 text-left text-[13px] font-bold uppercase tracking-[0.14em] text-[#1c1c1c]/92 transition-colors duration-200 hover:bg-black/[0.04] hover:text-[#1c1c1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c1c1c]/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-white/82 dark:hover:bg-white/[0.06] dark:hover:text-white dark:focus-visible:ring-white/80 dark:focus-visible:ring-offset-[#1c1c1c]";

export default function NavMenuMobile({ isOpen, handleOpenNav }: Props) {
  const closeNavOnClick = () => {
    handleOpenNav(false);
  };

  return (
    <div
      data-state={isOpen ? "open" : "closed"}
      className={[
        mobileNavPanelStyles,
        isOpen
          ? "max-h-[80vh] pointer-events-auto opacity-100"
          : "max-h-0 pointer-events-none opacity-0",
      ].join(" ")}
    >
      <Container>
        <div className="py-3">
          <Accordion type="single" collapsible className="w-full">
            {navLinks.map(
              (item) =>
                item.dropdown && (
                  <AccordionItem
                    value={item.label}
                    key={item.label}
                    className={mobileAccordionItemStyles}
                  >
                    <AccordionTrigger className={mobileAccordionTriggerStyles}>
                      {item.label}
                    </AccordionTrigger>

                    <AccordionContent className="px-1 pb-2">
                      <ul className="space-y-1">
                        {item.items.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className={mobileSubLinkStyles}
                              onClick={closeNavOnClick}
                              scroll
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ),
            )}
          </Accordion>

          <ul className="mt-1 flex flex-col">
            {navLinks.map(
              (item) =>
                !item.dropdown && (
                  <li
                    key={item.label}
                    className="border-b  py-1 last:border-b-0 "
                  >
                    <Link
                      href={item.href}
                      onClick={closeNavOnClick}
                      className={mobileMainLinkStyles}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
            )}
          </ul>

          <div className="mt-4 flex  gap-3  pt-4 pb-6 justify-end">
            <ButtonSecondary href="/kontakt">Kontakt</ButtonSecondary>
            <ButtonPrimary href="/zapisz-sie">Zapisz się</ButtonPrimary>
          </div>
        </div>
      </Container>
    </div>
  );
}
