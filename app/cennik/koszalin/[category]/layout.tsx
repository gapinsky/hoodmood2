import { PricingFiltersProvider } from "@/myComponents/pricing/PricingFiltersProvider";

export default function PricingCategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PricingFiltersProvider>{children}</PricingFiltersProvider>;
}
