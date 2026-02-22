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
    items: [
      { label: "Koszalin", href: "/oferta/koszalin" },
      { label: "Polanów", href: "/oferta/polanow" },
      { label: "Biały Bór", href: "/oferta/bialy-bor" },
    ],
  },
  {
    dropdown: true,
    label: "Grafik",
    items: [
      { label: "Koszalin", href: "/grafik/koszalin" },
      { label: "Polanów", href: "/grafik/polanow" },
      { label: "Biały Bór", href: "/grafik/bialy-bor" },
    ],
  },
  {
    dropdown: true,
    label: "Cennik",
    items: [
      { label: "Koszalin", href: "/cennik/koszalin" },
      { label: "Polanów", href: "/cennik/polanow" },
      { label: "Biały Bór", href: "/cennik/bialy-bor" },
    ],
  },
  { dropdown: false, label: "Kadra", href: "/kadra" },
  { dropdown: false, label: "Kolonie", href: "/kolonie" },
  { dropdown: false, label: "Aktualności", href: "/aktualnosci" },
];
