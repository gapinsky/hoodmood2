import { locations, mapsUrl } from "@/data/locations";

export const data = {
  badge: "lokalizacje",
  title: "Hoodmood jest bliżej, niż myślisz",
  description:
    "Prowadzimy zajęcia w Koszalinie, Polanowie, Białym Borze i Szczecinku. Niezależnie od tego, którą lokalizację wybierzesz, czeka na Ciebie ta sama energia, dobra zabawa i ludzie z zajawką. Znajdź swoje miejsce i wpadaj na salę.",
};
export const localizations = [
  {
    title: locations.polanow.name,
    description: `ul. ${locations.polanow.address.street}`,
    hoverImg: "/assets/images/localizations/polanowMain.png",
    img: "/assets/images/localizations/polanowMain.png",
    logo: "/assets/optimized/home/hoodmood-logo-transparent.webp",
    logoAlt: "Logo Hoodmood",
    slug: locations.polanow.id,
    mapsUrl: mapsUrl(locations.polanow),
  },
  {
    title: locations.koszalin.name,
    description: `ul. ${locations.koszalin.address.street}`,
    hoverImg: "/assets/images/localizations/koszalinMain.png",
    img: "/assets/images/localizations/koszalinOutside.png",
    logo: "/assets/optimized/home/hoodmood-logo-transparent.webp",
    logoAlt: "Logo Hoodmood",
    slug: locations.koszalin.id,
    mapsUrl: mapsUrl(locations.koszalin),
  },
  {
    title: locations.bialyBor.name,
    description: `ul. ${locations.bialyBor.address.street}`,
    hoverImg: "/assets/images/localizations/bialyBorMain.png",
    img: "/assets/images/localizations/bialyBorOutside.png",
    logo: "/assets/optimized/home/hoodmood-logo-transparent.webp",
    logoAlt: "Logo Hoodmood",
    slug: locations.bialyBor.id,
    mapsUrl: mapsUrl(locations.bialyBor),
  },
  {
    title: locations.szczecinek.name,
    description: "ul. Dworcowa 1",
    hoverImg: "/assets/optimized/localizations/szczecinek-dworcowa.webp",
    img: "/assets/optimized/localizations/szczecinek-dworcowa.webp",
    logo: "/assets/optimized/branding/sapik-transparent.webp",
    logoAlt: "Logo SAPIK Szczecinek",
    slug: "szczecinek-dworcowa",
    mapsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("ul. Dworcowa 1, Szczecinek")}`,
  },
  {
    title: locations.szczecinek.name,
    description: "SP 1 · Plac Wazów 1",
    hoverImg: "/assets/optimized/localizations/szczecinek-wazow.webp",
    img: "/assets/optimized/localizations/szczecinek-wazow.webp",
    logo: "/assets/optimized/branding/sapik-transparent.webp",
    logoAlt: "Logo SAPIK Szczecinek",
    slug: "szczecinek-wazow",
    mapsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("SP 1, Plac Wazów 1, Szczecinek")}`,
  },
];
