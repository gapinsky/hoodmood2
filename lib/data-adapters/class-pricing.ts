import { classList, type BillingUnit, type DanceClass, type PriceVariant } from "@/data/classess";
import { locationList, type CitySlug } from "@/data/locations";
import type { PricingCategory, PricingItem, PricingPageContent } from "@/myComponents/pricing/types";

const categoryContent: Record<PricingCategory, { title: string; description: string }> = {
  zajecia: {
    title: "cennik",
    description: "Sprawdź ceny zajęć tanecznych i akrobatycznych. Wybierz zajęcia dopasowane do wieku, poziomu i zainteresowań uczestnika.",
  },
  "pakiety-zajec": {
    title: "cennik pakietów zajęć",
    description: "Sprawdź pakiety łączące kilka treningów w korzystniejszej cenie. Ceny pakietów rozliczane są miesięcznie.",
  },
  "zajecia-indywidualne": {
    title: "cennik zajęć indywidualnych",
    description: "Wybierz trening solo, w duecie lub małej grupie. Ceny podane są za godzinę; przy duetach i trio obowiązuje opłata od osoby.",
  },
};

const billingLabels: Record<BillingUnit, string> = {
  month: "/ miesiąc",
  class: "/ zajęcia",
  hour: "/ godz.",
  person: "/ osoba",
  "one-time": "jednorazowo",
};

export function getPricingCategory(item: DanceClass): PricingCategory {
  // Katalog rozpoznaje pakiety po prefiksie ID, lekcje indywidualne po rozliczeniu godzinowym.
  if (item.id.startsWith(`${item.locationId}-pakiet-`)) return "pakiety-zajec";
  if (item.pricing.billingUnit === "hour") return "zajecia-indywidualne";
  return "zajecia";
}

function getFrequency(item: DanceClass): string {
  if (item.frequency.sessionsPerWeek !== undefined) return String(item.frequency.sessionsPerWeek);
  if (item.pricing.billingUnit === "hour") {
    return item.frequency.durationMinutes ? `1 wejście · ${item.frequency.durationMinutes} min` : "1 wejście";
  }
  return item.frequency.description?.split(". ")[0]
    || (item.frequency.durationMinutes ? `${item.frequency.durationMinutes} min` : "Termin do ustalenia");
}

function toPricingItem(item: DanceClass, variant: PriceVariant): PricingItem {
  const individual = getPricingCategory(item) === "zajecia-indywidualne";
  const label = variant.label?.split(" — ")[0];
  const name = individual && label ? label
    : variant.id !== "standard" && label ? `${item.name} — ${label}` : item.name;

  return {
    id: `${item.id}:${variant.id}`,
    classId: item.id,
    name,
    price: variant.amount,
    // W obecnym schemacie informacja „od osoby” znajduje się w etykiecie wariantu.
    priceUnit: `${billingLabels[item.pricing.billingUnit]}${variant.label?.includes("od osoby") && item.pricing.billingUnit !== "person" ? " od osoby" : ""}`,
    frequency: getFrequency(item),
    frequencyDescription: item.frequency.description,
    minAge: item.minAge,
    maxAge: item.maxAge,
    enrollmentEnabled: item.enrollmentEnabled,
  };
}

export function getClassPricing(city: CitySlug, category: PricingCategory = "zajecia"): PricingItem[] {
  return classList
    .filter((item) => item.active && item.locationId === city && getPricingCategory(item) === category)
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .flatMap((item) => {
      const member = item.pricing.variants.find((variant) => variant.id === "member");
      const nonMember = item.pricing.variants.find((variant) => variant.id === "non-member");
      const membershipVariant = member ?? nonMember;
      const rows = item.pricing.variants
        .filter((variant) => variant.id !== "member" && variant.id !== "non-member")
        .map((variant) => toPricingItem(item, variant));

      if (membershipVariant) {
        rows.unshift({
          ...toPricingItem(item, membershipVariant),
          id: item.id,
          name: item.name,
          memberPrice: member?.amount,
          nonMemberPrice: nonMember?.amount,
        });
      }
      return rows;
    });
}

export function getPricingPageContent(city: CitySlug, category: PricingCategory = "zajecia"): PricingPageContent {
  const location = locationList.find((location) => location.id === city)!;
  const content = categoryContent[category];
  return {
    title: `Hoodmood ${location.name} - ${content.title}`,
    description: content.description,
    tableData: getClassPricing(city, category),
  };
}
