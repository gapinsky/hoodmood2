export const pricingCategories = ["zajecia", "pakiety-zajec", "zajecia-indywidualne"] as const;

export type PricingCategory = (typeof pricingCategories)[number];

export function isPricingCategory(value: string): value is PricingCategory {
  return pricingCategories.some((category) => category === value);
}

export type PricingItem = {
  id: string;
  classId: string;
  name: string;
  price: number;
  memberPrice?: number;
  nonMemberPrice?: number;
  priceUnit: string;
  frequency: string;
  frequencyDescription?: string;
  minAge: number;
  maxAge: number | null;
  enrollmentEnabled: boolean;
};

export type PricingPageContent = {
  title: string;
  description: string;
  tableData: PricingItem[];
};
