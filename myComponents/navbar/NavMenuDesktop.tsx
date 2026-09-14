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
import { usePathname } from "next/navigation";
import { NAV as navLinks } from "../navbar/data";

const desktopNavListStyles = "flex items-center gap-1";

const desktopNavTriggerStyles =
  "ui-nav-link group rounded-lg font-bold text-[#1c1c1c]/98 data-[state=open]:text-[#1c1c1c] dark:text-white dark:data-[state=open]:text-white";

const desktopNavLinkStyles = "ui-nav-link text-[#1c1c1c]/98 dark:text-white";

const desktopDropdownContentStyles =
  "min-w-55 rounded-xs  border border-black/8 bg-white/92 p-2 dark:bg-[#1c1c1c]/98  shadow-[0_18px_48px_rgba(0,0,0,0.16)] backdrop-blur-xl dark:border-white/10  dark:shadow-[0_18px_48px_rgba(0,0,0,0.32)]";

export default function NavMenuDesktop() {
  const pathname = usePathname();

  return (
    <div className="hidden justify-center xl:flex">
      <NavigationMenu viewport={false}>
        <NavigationMenuList className={desktopNavListStyles}>
          {navLinks.map((item) =>
            item.dropdown ? (
              <NavigationMenuItem key={item.label} className="relative text-md">
                <NavigationMenuTrigger className={desktopNavTriggerStyles}>
                  {item.label}
                </NavigationMenuTrigger>

                <NavigationMenuContent
                  className={`${desktopDropdownContentStyles} left-0 w-full min-w-0 font-semibold `}
                >
                  <div className="flex w-full flex-col gap-1">
                    {item.items.map((link) => (
                      <NavigationMenuLink key={link.label} asChild>
                        <Link
                          href={link.href}
                          className="flex justify-center py-2 text-center items-center hover:bg-black/3 dark:hover:bg-white/8 "
                          aria-current={pathname === link.href ? "page" : undefined}
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
                  <Link
                    href={item.href}
                    className={desktopNavLinkStyles}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
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
