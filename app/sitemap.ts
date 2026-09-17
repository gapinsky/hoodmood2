import type { MetadataRoute } from "next";
import { activeTrainers } from "@/data/trainers";
import { pricingCategories } from "@/myComponents/pages/pricing/types";
import { offerTabs, scheduleTabs } from "@/data/tabs";
import { absoluteUrl } from "@/lib/seo";
import { staticSeoPages } from "@/lib/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...Object.keys(staticSeoPages),
    ...offerTabs.map((tab) => tab.href),
    ...scheduleTabs.map((tab) => tab.href),
    ...pricingCategories.map((category) => `/cennik/koszalin/${category}`),
    ...activeTrainers.map((trainer) => `/kadra/${trainer.slug}`),
  ];
  return paths.map((path) => ({ url: absoluteUrl(path) }));
}
