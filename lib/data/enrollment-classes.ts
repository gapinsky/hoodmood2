import { pricingContent } from "@/app/cennik/koszalin/[category]/data";
import { pricingData as bialyBorPricingData } from "@/app/cennik/bialy-bor/data";
import { pricingData as polanowPricingData } from "@/app/cennik/polanow/data";

type EnrollmentLocationId = "koszalin" | "polanow" | "bialy-bor";

export type EnrollmentClassItem = {
  id: string;
  locationId: EnrollmentLocationId;
  locationName: string;
  name: string;
  price: number;
  frequency: string;
  minAge: number | null;
  maxAge: number | null;
  category: string;
};

type EnrollmentLocationOption = {
  id: EnrollmentLocationId;
  label: string;
  locativeLabel: string;
};

export const enrollmentLocationOptions: EnrollmentLocationOption[] = [
  { id: "koszalin", label: "Koszalin", locativeLabel: "Koszalinie" },
  { id: "polanow", label: "Polanów", locativeLabel: "Polanowie" },
  { id: "bialy-bor", label: "Biały Bór", locativeLabel: "Białym Borze" },
];

const parseAge = (value: string) => {
  const parsed = Number.parseInt(value.trim(), 10);
  return Number.isFinite(parsed) ? parsed : null;
};

const parsePrice = (value: string) => {
  const normalized = value.replace(",", ".").replace(/[^\d.]/g, "");
  const parsed = Number.parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
};

const koszalinClasses = pricingContent.zajecia.tableData.map((item, index) => ({
  id: `koszalin-${item.category}-${index}`,
  locationId: "koszalin" as const,
  locationName: "Koszalin",
  name: item.name,
  price: parsePrice(item.price),
  frequency: item.frequency,
  minAge: parseAge(item.minAge),
  maxAge: parseAge(item.maxAge),
  category: item.category,
}));

const polanowClasses = polanowPricingData.map((item, index) => ({
  id: `polanow-${item.category}-${index}`,
  locationId: "polanow" as const,
  locationName: "Polanów",
  name: item.name,
  price: parsePrice(item.price),
  frequency: item.frequency,
  minAge: parseAge(item.minAge),
  maxAge: parseAge(item.maxAge),
  category: item.category,
}));

const bialyBorClasses = bialyBorPricingData.map((item, index) => ({
  id: `bialy-bor-${item.category}-${index}`,
  locationId: "bialy-bor" as const,
  locationName: "Biały Bór",
  name: item.name,
  price: parsePrice(item.price),
  frequency: item.frequency,
  minAge: parseAge(item.minAge),
  maxAge: parseAge(item.maxAge),
  category: item.category,
}));

export const enrollmentClasses: EnrollmentClassItem[] = [
  ...koszalinClasses,
  ...polanowClasses,
  ...bialyBorClasses,
];

export const getClassAgeLabel = (item: EnrollmentClassItem) => {
  if (item.minAge === null && item.maxAge === null) {
    return "Bez ograniczenia wieku";
  }

  if (item.minAge !== null && item.maxAge !== null) {
    return `${item.minAge}-${item.maxAge} lat`;
  }

  if (item.minAge !== null) {
    return `${item.minAge}+ lat`;
  }

  return `Do ${item.maxAge} lat`;
};

export const isAdultClass = (item: EnrollmentClassItem) =>
  item.category === "adults" ||
  item.name.toLowerCase().includes("doros") ||
  (item.minAge !== null && item.minAge >= 18);
