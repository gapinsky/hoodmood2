import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import ButtonSecondary from "../common/ButtonSecondary";
import ButtonPrimary from "../common/ButtonPrimary";
import { Dispatch, SetStateAction } from "react";
import { NAV as navLinks } from "../navbar/data";
import Container from "../common/Container";

type Props = {
  isOpen: boolean;
  handleOpenNav: Dispatch<SetStateAction<boolean>>;
};

export default function NavMenuMobile({ isOpen, handleOpenNav }: Props) {
  const closeNavOnClick = () => {
    handleOpenNav((prev: boolean) => !prev);
  };

  return (
    <div
      data-state={isOpen ? "open" : "closed"}
      className={[
        "absolute top-full left-0 right-0 xl:hidden bg-background overflow-hidden data-[state=open]:animate-(--animate-mobile-nav-in) transition-[max-height] duration-300 data-[state=closed]:animate-(--animate-mobile-nav-out)",
        isOpen
          ? "max-h-[80vh] pointer-events-auto"
          : "max-h-0 pointer-events-none",
      ].join(" ")}
    >
      <Container>
        <Accordion type="single" collapsible>
          {navLinks.map(
            (item) =>
              item.dropdown && (
                <AccordionItem value={item.label} key={item.label}>
                  <AccordionTrigger>{item.label}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1">
                      {item.items.map((link) => (
                        <li key={link.label} className=" flex">
                          <Link
                            href={link.href}
                            className=" w-full py-1"
                            onClick={() => closeNavOnClick()}
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
        <ul className="flex flex-col ">
          {navLinks.map(
            (item) =>
              !item.dropdown && (
                <li key={item.label} className="px-4  border-b last:border-b-0">
                  <Link
                    href={item.href}
                    onClick={() => closeNavOnClick()}
                    className=" flex flex-1 font-roboto focus-visible:border-ring uppercase  focus-visible:ring-ring/50  gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] "
                  >
                    {item.label}
                  </Link>
                </li>
              ),
          )}
        </ul>
        <div className=" flex justify-end items-center gap-2 p-2 pb-8">
          <ButtonSecondary href="/kontakt">Kontakt</ButtonSecondary>
          <ButtonPrimary href="/zapisy">Zapisz się</ButtonPrimary>
        </div>
      </Container>
    </div>
  );
}
