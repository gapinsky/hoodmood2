import { absoluteUrl } from "./seo";
import { locations } from "@/data/locations";

export const szczecinekSocialImage = {
  ...locations.szczecinek.offer.socialImage,
  url: absoluteUrl(locations.szczecinek.offer.socialImage.url),
};

export const szczecinekSeo = {
  schedule: {
    path: "/grafik/szczecinek",
    title: "Grafik zajęć tanecznych — Szczecinek",
    description: "Grafik REBELII w Szczecinku: zajęcia od środy do piątku. Sprawdź godziny, grupy wiekowe i sale przy Dworcowej 1 oraz w SP 1 przy Placu Wazów 1.",
  },
  pricing: {
    path: "/cennik/szczecinek",
    title: "Cennik zajęć — Szczecinek",
    description: "Cennik REBELII w Szczecinku: grupy 4–9 lat — 120 zł/mies., 10–14 lat — 130 zł/mies., 15+ — 140 zł/mies. Lekcje indywidualne: 120 zł/60 min.",
  },
  trainer: {
    path: "/kadra/julia-kaczmarzyk",
    title: "Julia Kaczmarzyk — REBELIA, SAPIK Szczecinek",
    description: "Julia Kaczmarzyk — dyplomowana tancerka i choreografka, absolwentka AHE w Łodzi. Poznaj prowadzącą zespół REBELIA w SAPIK Szczecinek.",
  },
} as const;
