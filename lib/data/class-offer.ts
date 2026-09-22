import { classList } from "@/data/classess";
import type { CitySlug } from "@/data/locations";
import { trainers, type TrainerId } from "@/data/trainers";
import type { ClassOffer, OfferInstructor } from "@/myComponents/pages/offer/types";
import { getPricingCategory } from "./class-pricing";

function getInstructors(ids: TrainerId[]): OfferInstructor[] {
  return ids.map((id) => {
    const trainer = trainers[id];
    return {
      id,
      name: trainer.name,
      href: trainer.active ? `/kadra/${trainer.slug}` : undefined,
    };
  });
}

export function getClassOffers(city: CitySlug): ClassOffer[] {
  const offers: ClassOffer[] = classList
    .filter((item) => item.active && item.locationId === city && getPricingCategory(item) !== "pakiety-zajec")
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((item) => ({
      id: item.id,
      name: item.name,
      image: item.image,
      logo: city === "szczecinek" ? {
        src: "/assets/optimized/branding/sapik-transparent.webp",
        alt: "Logo SAPIK Szczecinek",
      } : undefined,
      description: item.description || item.shortInfo,
      minAge: item.minAge,
      maxAge: item.maxAge,
      level: item.level,
      sortOrder: item.sortOrder,
      enrollmentEnabled: item.enrollmentEnabled,
      instructors: getInstructors(item.trainerIds),
      specialInstructors: getInstructors(item.specialTrainerIds),
      scheduleSrc: `/grafik/${city}`,
      ...(item.id === "szczecinek-lekcje-indywidualne" ? {
        scheduleSrc: undefined,
        ageLabel: "Wiek do ustalenia",
        priceLabel: "120 zł / 60 min",
        enrollmentLabel: "Umów lekcję",
      } : {}),
      pricingSrc: city === "koszalin" ? `/cennik/${city}/${getPricingCategory(item)}` : `/cennik/${city}`,
    }));

  return offers;
}
