export type CitySlug = "bialy-bor" | "koszalin" | "polanow" | "szczecinek";

export interface LocationVenue {
  id: string;
  img: string;
  hoverImg: string;
  // Brak osobnego adresu oznacza użycie głównego adresu lokalizacji.
  address?: string;
  name?: string;
}

export interface Location {
  id: CitySlug;
  name: string;
  logo: string;
  logoAlt: string;
  venues: readonly LocationVenue[];
  address: {
    street: string;
    postalCode: string;
    city: string;
  };
}
export const mainContact = {
  phone: "+48 577 198 599",
  phoneHref: "tel:+48577198599",
  email: "hoodmood.recepcja@gmail.com",
};


export const legalEntity = {
  name: "Talita Jarzęcka Centrum Rozwoju Dzieci i Młodzieży",
  address: "ul. Wenedów 18F/5, 75-847 Koszalin",
  nip: "6692557695",
  regon: "38646988",
};


export function studioAddress(location: Location): string {
  return [location.address.street ? `ul. ${location.address.street}` : "", [location.address.postalCode, location.address.city].filter(Boolean).join(" ")].filter(Boolean).join(", ");
}
export function mapsUrl(location: Location, venue?: LocationVenue): string {
  const destination = venue?.address
    ? [venue.name, venue.address, location.address.city].filter(Boolean).join(", ")
    : studioAddress(location);
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}

export const locations = {
  koszalin: {
    id: "koszalin",
    name: "Koszalin",
    logo: "/assets/optimized/home/hoodmood-logo-transparent.webp",
    logoAlt: "Logo Hoodmood",
    venues: [{
      id: "koszalin",
      img: "/assets/images/localizations/koszalinOutside.png",
      hoverImg: "/assets/images/localizations/koszalinMain.png",
    }],
    address: {
      street: "Zwycięstwa 115",
      postalCode: "75-211",
      city: "Koszalin",
    },
  },

  polanow: {
    id: "polanow",
    name: "Polanów",
    logo: "/assets/optimized/home/hoodmood-logo-transparent.webp",
    logoAlt: "Logo Hoodmood",
    venues: [{
      id: "polanow",
      img: "/assets/images/localizations/polanowMain.png",
      hoverImg: "/assets/images/localizations/polanowMain.png",
    }],
    address: {
      street: "Gradowe Wzgórze 5",
      postalCode: "76-010",
      city: "Polanów",
    },
  },

  bialyBor: {
    id: "bialy-bor",
    name: "Biały Bór",
    logo: "/assets/optimized/home/hoodmood-logo-transparent.webp",
    logoAlt: "Logo Hoodmood",
    venues: [{
      id: "bialy-bor",
      img: "/assets/images/localizations/bialyBorOutside.png",
      hoverImg: "/assets/images/localizations/bialyBorMain.png",
    }],
    address: {
      street: "Tamka 3",
      postalCode: "78-425",
      city: "Biały Bór",
    },
  },
  szczecinek: {
    id: "szczecinek",
    name: "Szczecinek",
    logo: "/assets/optimized/branding/sapik-transparent.webp",
    logoAlt: "Logo SAPIK Szczecinek",
    venues: [
      {
        id: "szczecinek-dworcowa",
        address: "ul. Dworcowa 1",
        img: "/assets/optimized/localizations/szczecinek-dworcowa.webp",
        hoverImg: "/assets/optimized/localizations/szczecinek-dworcowa.webp",
      },
      {
        id: "szczecinek-wazow",
        name: "SP 1",
        address: "Plac Wazów 1",
        img: "/assets/optimized/localizations/szczecinek-wazow.webp",
        hoverImg: "/assets/optimized/localizations/szczecinek-wazow.webp",
      },
    ],
    address: {
      street: "",
      postalCode: "",
      city: "Szczecinek",
    },
  },
} as const satisfies Record<string, Location>;

export const locationList = Object.values(locations);

export function isCitySlug(value: string): value is CitySlug {
  return locationList.some((location) => location.id === value);
}
