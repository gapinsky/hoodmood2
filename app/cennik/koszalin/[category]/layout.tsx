import { PricingFiltersProvider } from "@/myComponents/pages/pricing/PricingFiltersProvider";

export default function PricingCategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PricingFiltersProvider>{children}</PricingFiltersProvider>;
}
