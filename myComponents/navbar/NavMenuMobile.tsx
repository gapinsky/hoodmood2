"use client";

import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  "absolute left-0 right-0 shadow-md top-full z-40 overflow-hidden border-t border-black/6 bg-white backdrop-blur-xl transition-[max-height,opacity] duration-300 dark:border-white/8 dark:bg-[#1c1c1c]/99";

const mobileAccordionItemStyles =
  "border-b border-black/6 py-1 dark:border-white/8";

const mobileAccordionTriggerStyles =
  "ui-nav-link w-full justify-between rounded-2xl py-4 text-left text-[13px] font-bold";

const mobileSubLinkStyles =
  "ui-nav-link block w-full rounded-2xl px-4 py-3 text-[12px] font-bold tracking-[0.12em]";

const mobileMainLinkStyles =
  "ui-nav-link flex w-full rounded-2xl px-4 py-4 text-left text-[13px] font-bold";

export default function NavMenuMobile({ isOpen, handleOpenNav }: Props) {
  const pathname = usePathname();
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const closeNavOnClick = () => {
    handleOpenNav(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    lastFocusedRef.current = document.activeElement as HTMLElement | null;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleOpenNav(false);
        lastFocusedRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleOpenNav, isOpen]);

  return (
    <div
      id="mobile-navigation"
      aria-hidden={!isOpen}
      inert={!isOpen}
      data-state={isOpen ? "open" : "closed"}
      className={[
        mobileNavPanelStyles,
        isOpen
          ? "pointer-events-auto max-h-[80vh] opacity-100"
          : "pointer-events-none max-h-0 opacity-0",
      ].join(" ")}
    >
      {isOpen ? (
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
                                aria-current={pathname === link.href ? "page" : undefined}
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
                      className="border-b py-1 last:border-b-0"
                    >
                      <Link
                        href={item.href}
                        onClick={closeNavOnClick}
                        className={mobileMainLinkStyles}
                        aria-current={pathname === item.href ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ),
              )}
            </ul>

            <div className="mt-4 flex justify-end gap-3 pb-6 pt-4">
              <ButtonSecondary href="/kontakt" onClick={closeNavOnClick}>
                Kontakt
              </ButtonSecondary>
              <ButtonPrimary href="/zapisz-sie" onClick={closeNavOnClick}>
                Zapisz się
              </ButtonPrimary>
            </div>
          </div>
        </Container>
      ) : null}
    </div>
  );
}
