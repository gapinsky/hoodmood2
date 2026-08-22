import {
  bialyBorPricingTableData,
  koszalinPricingContent,
  polanowPricingTableData,
} from "@/data/pricingData";

type EnrollmentLocationId = "koszalin" | "polanow" | "bialy-bor";

export type EnrollmentClassItem = {
  id: string;
  locationId: EnrollmentLocationId;
  locationName: string;
  type: "class" | "package";
  billingPeriod: "monthly" | "one-time";
  name: string;
  price: number;
  frequency: string;
  frequencyDescription?: string;
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
  { id: "koszalin", label: "Koszalin", locativeLabel: "Koszalin" },
  { id: "polanow", label: "Polanów", locativeLabel: "Polanów" },
  { id: "bialy-bor", label: "Biały Bór", locativeLabel: "Biały Bór" },
];

const parsePrice = (value: string) => {
  const normalized = value.replace(",", ".").match(/\d+(?:\.\d+)?/)?.[0] ?? "";
  const parsed = Number.parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
};

const koszalinClasses = koszalinPricingContent.zajecia.tableData.map(
  (item, index) => ({
    id: `koszalin-${item.category}-${index}`,
    locationId: "koszalin" as const,
    locationName: "Koszalin",
    type: "class" as const,
    billingPeriod: "monthly" as const,
    name: item.name,
    price: parsePrice(item.price),
    frequency: item.frequency,
    frequencyDescription: item.frequencyDescription,
    minAge: item.minAge,
    maxAge: item.maxAge,
    category: item.category,
  }),
);

const koszalinPackages = koszalinPricingContent["pakiety-zajec"].tableData.map(
  (item, index) => ({
    id: `koszalin-package-${item.category}-${index}`,
    locationId: "koszalin" as const,
    locationName: "Koszalin",
    type: "package" as const,
    billingPeriod: "monthly" as const,
    name: item.name,
    price: parsePrice(item.price),
    frequency: item.frequency,
    frequencyDescription: item.frequencyDescription,
    minAge: item.minAge,
    maxAge: item.maxAge,
    category: item.category,
  }),
);

const polanowClasses = polanowPricingTableData.map((item, index) => ({
  id: `polanow-${item.category}-${index}`,
  locationId: "polanow" as const,
  type: "class" as const,
  billingPeriod: "monthly" as const,
  locationName: "Polanów",
  name: item.name,
  price: parsePrice(item.price),
  frequency: item.frequency,
  frequencyDescription: item.frequencyDescription,
  minAge: item.minAge,
  maxAge: item.maxAge,
  category: item.category,
}));

const bialyBorClasses = bialyBorPricingTableData.map((item, index) => ({
  id: `bialy-bor-${item.category}-${index}`,
  locationId: "bialy-bor" as const,
  type: "class" as const,
  billingPeriod: "monthly" as const,
  locationName: "Biały Bór",
  name: item.name,
  price: parsePrice(item.price),
  frequency: item.frequency,
  frequencyDescription: item.frequencyDescription,
  minAge: item.minAge,
  maxAge: item.maxAge,
  category: item.category,
}));

export const enrollmentClasses: EnrollmentClassItem[] = [
  ...koszalinClasses,
  ...koszalinPackages,
  ...koszalinPricingContent["zajecia-indywidualne"].tableData.map(
    (item, index) => ({
      id: `koszalin-individual-${item.category}-${index}`,
      locationId: "koszalin" as const,
      locationName: "Koszalin",
      type: "class" as const,
      billingPeriod: "one-time" as const,
      name: item.name,
      price: parsePrice(item.price),
      frequency: item.frequency,
      frequencyDescription: item.frequencyDescription,
      minAge: item.minAge,
      maxAge: item.maxAge,
      category: item.category,
    }),
  ),
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
