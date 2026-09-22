import { absoluteUrl } from "./seo";

export const szczecinekSocialImage = {
  url: absoluteUrl("/assets/optimized/localizations/szczecinek-dworcowa.webp"),
  width: 1192,
  height: 751,
  alt: "Sala zajęć w Szczecinku przy ul. Dworcowej 1",
};

export const szczecinekSeo = {
  offer: {
    path: "/oferta/szczecinek",
    title: "Taniec Szczecinek — oferta REBELIA, SAPIK",
    description: "Poznaj grupy REBELIA w SAPIK Szczecinek: Mikrusy, Minimki, Rebelia 3, Rebelia Junior i Rebelia 15+. Sprawdź ofertę i zapisz się na taniec.",
  },
  schedule: {
    path: "/grafik/szczecinek",
    title: "Grafik tańca Szczecinek — REBELIA, SAPIK",
    description: "Grafik REBELII w Szczecinku: zajęcia od środy do piątku. Sprawdź godziny, grupy wiekowe i sale przy Dworcowej 1 oraz w SP 1 przy Placu Wazów 1.",
  },
  pricing: {
    path: "/cennik/szczecinek",
    title: "Cennik tańca Szczecinek — REBELIA, SAPIK",
    description: "Cennik REBELII w Szczecinku: grupy 4–9 lat — 120 zł/mies., 10–14 lat — 130 zł/mies., 15+ — 140 zł/mies. Lekcje indywidualne: 120 zł/60 min.",
  },
  trainer: {
    path: "/kadra/julia-kaczmarzyk",
    title: "Julia Kaczmarzyk — REBELIA, SAPIK Szczecinek",
    description: "Julia Kaczmarzyk prowadzi zespół REBELIA w SAPIK Szczecinek. Poznaj jej grupy taneczne dla dzieci i młodzieży. Pełny profil i zdjęcie już wkrótce.",
  },
} as const;
