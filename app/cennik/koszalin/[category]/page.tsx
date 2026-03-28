import { notFound } from "next/navigation";
import {
  koszalinPricingContent,
  type PricingCategory,
} from "@/data/pricingData";
import PricingPage from "./PricingPage";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(koszalinPricingContent).map((category) => ({
    category,
  }));
}

export default async function Page({ params }: Props) {
  const { category } = await params;

  const content = koszalinPricingContent[category as PricingCategory];

  if (!content) {
    notFound();
  }

  return <PricingPage {...content} />;
}
