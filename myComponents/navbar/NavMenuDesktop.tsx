"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { NAV as navLinks } from "../navbar/data";

const desktopNavListStyles = "flex items-center gap-1";

const desktopNavTriggerStyles =
  "group inline-flex py-2 items-center text-[14px] justify-center  rounded-lg px-4  font-bold uppercase tracking-[0.14em] text-[#1c1c1c]/98 transition-all duration-200 hover:bg-black/[0.04] hover:text-[#1c1c1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c1c1c]/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-white/78 dark:hover:bg-white/[0.06] dark:hover:text-white dark:focus-visible:ring-white/80 dark:focus-visible:ring-offset-[#1c1c1c] data-[state=open]:bg-black/[0.05] data-[state=open]:text-[#1c1c1c] dark:data-[state=open]:bg-white/[0.08] dark:data-[state=open]:text-white";

const desktopNavLinkStyles =
  "inline-flex py-2 items-center justify-center rounded-full px-4  text-[14px] font-semibold uppercase tracking-[0.14em] text-[#1c1c1c]/98 transition-all duration-200 hover:bg-black/[0.04] hover:text-[#1c1c1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c1c1c]/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-white/78 dark:hover:bg-white/[0.06] dark:hover:text-white dark:focus-visible:ring-white/80 dark:focus-visible:ring-offset-[#1c1c1c]";

const desktopDropdownContentStyles =
  "min-w-[220px] rounded-xs  border border-black/[0.08] bg-white/92 p-2 dark:bg-[#1c1c1c]/98  shadow-[0_18px_48px_rgba(0,0,0,0.16)] backdrop-blur-xl dark:border-white/[0.10]  dark:shadow-[0_18px_48px_rgba(0,0,0,0.32)]";

const desktopDropdownItemStyles =
  "flex w-full items-center rounded-2xl px-4 py-3  font-semibold text-[12px] uppercase tracking-[0.12em] text-[#1c1c1c]/98 transition-colors duration-200 hover:bg-black/[0.04] hover:text-[#1c1c1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c1c1c]/20 dark:text-white/82 dark:hover:bg-white/[0.08] dark:hover:text-white dark:focus-visible:ring-white/80";

export default function NavMenuDesktop() {
  return (
    <div className="hidden xl:flex justify-center ">
      <NavigationMenu viewport={false}>
        <NavigationMenuList className={desktopNavListStyles}>
          {navLinks.map((item) =>
            item.dropdown ? (
              <NavigationMenuItem key={item.label} className="relative text-md">
                <NavigationMenuTrigger className={desktopNavTriggerStyles}>
                  {item.label}
                </NavigationMenuTrigger>

                <NavigationMenuContent
                  className={`${desktopDropdownContentStyles} left-0 w-full min-w-0`}
                >
                  <div className="flex w-full flex-col gap-1">
                    {item.items.map((link) => (
                      <NavigationMenuLink key={link.label} asChild>
                        <Link
                          href={link.href}
                          className={desktopDropdownItemStyles}
                        >
                          {link.label}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink asChild>
                  <Link href={item.href} className={desktopNavLinkStyles}>
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ),
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

{
  /* <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Oferta</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/oferta">Koszalin</Link>
              </NavigationMenuLink>{" "}
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/oferta">Polanów</Link>
              </NavigationMenuLink>{" "}
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/oferta">Biały Bór</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Grafik</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/oferta">Koszalin</Link>
              </NavigationMenuLink>{" "}
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/docs">Polanów</Link>
              </NavigationMenuLink>{" "}
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/docs">Biały Bór</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Cennik</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/docs">Koszalin</Link>
              </NavigationMenuLink>{" "}
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/docs">Polanów</Link>
              </NavigationMenuLink>{" "}
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/docs">Biały Bór</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/docs">Kadra</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/docs">Kolonie</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/docs">Aktualności</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */
}
