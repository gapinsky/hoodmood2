import { locationList } from "@/data/locations";

type LocationSection = "oferta" | "grafik" | "cennik";

type LocationLink = {
  label: string;
  href: `/${string}`;
  segment: `/${string}`;
};

export function getLocationLinks(section: LocationSection): LocationLink[] {
  return locationList.map(({ id, name }) => ({
    label: name,
    href: section === "cennik" && id === "koszalin"
      ? "/cennik/koszalin/zajecia"
      : `/${section}/${id}`,
    segment: `/${section}/${id}`,
  }));
}
