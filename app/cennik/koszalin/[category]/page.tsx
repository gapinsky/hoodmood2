import { notFound } from "next/navigation";
import PricingPage from "./PricingPage";
import { pricingContent, type PricingCategory } from "./data";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(pricingContent).map((category) => ({
    category,
  }));
}

export default async function Page({ params }: Props) {
  const { category } = await params;

  const content = pricingContent[category as PricingCategory];

  if (!content) {
    notFound();
  }

  return <PricingPage {...content} />;
}
