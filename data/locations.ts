export type CitySlug = "bialy-bor" | "koszalin" | "polanow" | "szczecinek";

interface Location {
  id: CitySlug;
  name: string;
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
export function mapsUrl(location: Location): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(studioAddress(location))}`;
}

export const locations = {
  koszalin: {
    id: "koszalin",
    name: "Koszalin",
    address: {
      street: "Zwycięstwa 115",
      postalCode: "75-211",
      city: "Koszalin",
    },
  },

  polanow: {
    id: "polanow",
    name: "Polanów",
    address: {
      street: "Gradowe Wzgórze 5",
      postalCode: "76-010",
      city: "Polanów",
    },
  },

  bialyBor: {
    id: "bialy-bor",
    name: "Biały Bór",
    address: {
      street: "Tamka 3",
      postalCode: "78-425",
      city: "Biały Bór",
    },
  },
  szczecinek: {
    id: "szczecinek",
    name: "Szczecinek",
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
