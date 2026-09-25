import { getLocationLinks } from "./locationLinks";

export type NavLinkItem = {
  dropdown: false;
  label: string;
  href: `/${string}`;
};

export type NavDropdownItem = {
  dropdown: true;
  label: string;
  items: Array<{
    label: string;
    href: `/${string}`;
  }>;
};

export type NavItem = NavLinkItem | NavDropdownItem;

export const NAV: NavItem[] = [
  {
    dropdown: true,
    label: "Oferta",
    items: getLocationLinks("oferta"),
  },
  {
    dropdown: true,
    label: "Grafik",
    items: getLocationLinks("grafik"),
  },
  {
    dropdown: true,
    label: "Cennik",
    items: getLocationLinks("cennik"),
  },
  { dropdown: false, label: "Kadra", href: "/kadra" },
  { dropdown: false, label: "Kolonie", href: "/kolonie" },
  { dropdown: false, label: "Aktualności", href: "/aktualnosci" },
];
