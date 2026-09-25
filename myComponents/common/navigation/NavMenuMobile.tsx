"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ButtonSecondary from "@/myComponents/common/buttons/ButtonSecondary";
import ButtonPrimary from "@/myComponents/common/buttons/ButtonPrimary";
import { NAV as navLinks } from "./navigationData";
import Container from "@/myComponents/common/Container";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const dropdownItems = navLinks.filter((item) => item.dropdown);
const directLinks = navLinks.filter((item) => !item.dropdown);

export default function NavMenuMobile({ isOpen, onClose }: Props) {
  const pathname = usePathname();

  return (
    <div
      id="mobile-navigation"
      aria-hidden={!isOpen}
      inert={!isOpen}
      data-state={isOpen ? "open" : "closed"}
      className={cn(
        "absolute left-0 right-0 shadow-md top-full z-40 overflow-hidden border-t border-black/6 bg-white backdrop-blur-xl transition-[max-height,opacity] duration-300 dark:border-white/8 dark:bg-[#1c1c1c]/99",
        isOpen
          ? "pointer-events-auto max-h-[80vh] opacity-100"
          : "pointer-events-none max-h-0 opacity-0",
      )}
    >
      {isOpen ? (
        <Container>
          <div className="py-3">
            <Accordion type="single" collapsible className="w-full">
              {dropdownItems.map((item) => (
                <AccordionItem
                  value={item.label}
                  key={item.label}
                  className="border-b border-black/6 py-1 dark:border-white/8"
                >
                  <AccordionTrigger className="ui-nav-link w-full justify-between rounded-2xl py-4 text-left text-[13px] font-bold">
                    {item.label}
                  </AccordionTrigger>

                  <AccordionContent className="px-1 pb-2">
                    <ul className="space-y-1">
                      {item.items.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="ui-nav-link block w-full rounded-2xl px-4 py-3 text-[12px] font-bold tracking-[0.12em]"
                            onClick={onClose}
                            aria-current={pathname === link.href ? "page" : undefined}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <ul className="mt-1 flex flex-col">
              {directLinks.map((item) => (
                <li
                  key={item.label}
                  className="border-b py-1 last:border-b-0"
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="ui-nav-link flex w-full rounded-2xl px-4 py-4 text-left text-[13px] font-bold"
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex justify-end gap-3 pb-6 pt-4">
              <ButtonSecondary href="/kontakt" onClick={onClose}>
                Kontakt
              </ButtonSecondary>
              <ButtonPrimary href="/zapisz-sie" onClick={onClose}>
                Zapisz się
              </ButtonPrimary>
            </div>
          </div>
        </Container>
      ) : null}
    </div>
  );
}
