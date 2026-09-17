import { locations, mapsUrl } from "@/data/locations";

export const data = {
  badge: "lokalizacje",
  title: "Hoodmood jest bliżej, niż myślisz",
  description:
    "Prowadzimy zajęcia w Koszalinie, Polanowie i Białym Borze. Niezależnie od tego, którą lokalizację wybierzesz, czeka na Ciebie ta sama energia, dobra zabawa i ludzie z zajawką. Znajdź swoje miejsce i wpadaj na salę.",
};
export const localizations = [
  {
    title: locations.polanow.name,
    description: `ul. ${locations.polanow.address.street}`,
    hoverImg: "/assets/images/localizations/polanowMain.png",
    img: "/assets/images/localizations/polanowMain.png",
    slug: locations.polanow.id,
    mapsUrl: mapsUrl(locations.polanow),
  },
  {
    title: locations.koszalin.name,
    description: `ul. ${locations.koszalin.address.street}`,
    hoverImg: "/assets/images/localizations/koszalinMain.png",
    img: "/assets/images/localizations/koszalinOutside.png",
    slug: locations.koszalin.id,
    mapsUrl: mapsUrl(locations.koszalin),
  },
  {
    title: locations.bialyBor.name,
    description: `ul. ${locations.bialyBor.address.street}`,
    hoverImg: "/assets/images/localizations/bialyBorMain.png",
    img: "/assets/images/localizations/bialyBorOutside.png",
    slug: locations.bialyBor.id,
    mapsUrl: mapsUrl(locations.bialyBor),
  },
];
