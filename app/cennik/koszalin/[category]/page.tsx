import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { getPricingPageContent } from "@/lib/data/class-pricing";
import { isPricingCategory, pricingCategories } from "@/myComponents/pages/pricing/types";
import PricingPage from "./PricingPage";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export function generateStaticParams() {
  return pricingCategories.map((category) => ({
    category,
  }));
}

function getContent(category: string) {
  if (!isPricingCategory(category)) notFound();
  return getPricingPageContent("koszalin", category);
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const content = getContent(category);
  return createMetadata({
    path: `/cennik/koszalin/${category}`,
    title: content.title.replace(/^Hoodmood\s*/, "").trim(),
    description: `Cennik Hoodmood w Koszalinie. ${content.description}`,
  });
}

export default async function Page({ params }: Props) {
  const { category } = await params;

  const content = getContent(category);

  if (!content) {
    notFound();
  }

  return <PricingPage {...content} />;
}
