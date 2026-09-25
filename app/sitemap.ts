import type { MetadataRoute } from "next";
import { activeTrainers } from "@/data/trainers";
import { pricingCategories } from "@/myComponents/pages/pricing/types";
import { getLocationLinks } from "@/myComponents/navigation/locationLinks";
import { absoluteUrl } from "@/lib/seo";
import { staticSeoPages } from "@/lib/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...Object.keys(staticSeoPages),
    ...getLocationLinks("oferta").map((link) => link.href),
    ...getLocationLinks("grafik").map((link) => link.href),
    ...pricingCategories.map((category) => `/cennik/koszalin/${category}`),
    ...activeTrainers.map((trainer) => `/kadra/${trainer.slug}`),
  ];
  return paths.map((path) => ({ url: absoluteUrl(path) }));
}
