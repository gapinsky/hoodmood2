import { locationList } from "./locations";

export const scheduleTabs = locationList.map(({ id, name }) => ({
  label: name, href: `/grafik/${id}`, segment: `/grafik/${id}`,
}));
export const offerTabs = locationList.map(({ id, name }) => ({
  label: name, href: `/oferta/${id}`, segment: `/oferta/${id}`,
}));
export const pricingTabs = locationList.map(({ id, name }) => ({
  label: name,
  href: id === "koszalin" ? "/cennik/koszalin/zajecia" : `/cennik/${id}`,
  segment: `/cennik/${id}`,
}));
