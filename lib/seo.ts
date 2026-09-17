import type { Metadata } from "next";

// NEXT_PUBLIC_SITE_URL must contain the public production origin, even in previews.
const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://hoodmood.pl");
if (!["https:", "http:"].includes(siteUrl.protocol) || siteUrl.username || siteUrl.password) {
  throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP(S) origin without credentials");
}
export const SITE_URL = siteUrl.origin;

export function absoluteUrl(path: string = "/"): string {
  return path === "/" ? SITE_URL : new URL(path, `${SITE_URL}/`).toString();
}

export const defaultSocialImage = {
  url: absoluteUrl("/assets/images/realLife/teamFreaky.jpg"),
  width: 2048,
  height: 1366,
  alt: "Ekipa Hoodmood — szkoła tańca i akrobatyki",
};

export function truncateDescription(value: string, maxLength = 160): string {
  const text = value.replace(/\s+/g, " ").trim();
  if (text.length <= maxLength) return text;
  const candidate = text.slice(0, maxLength - 1);
  const boundary = candidate.lastIndexOf(" ");
  return `${(boundary > 0 ? candidate.slice(0, boundary) : candidate).replace(/[ ,;:.!?–-]+$/, "")}…`;
}

export function createMetadata({ path, title, description }: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  const fullTitle = `${title} | Hoodmood`;
  const summary = truncateDescription(description);
  return {
    title: { absolute: fullTitle },
    description: summary,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: fullTitle,
      description: summary,
      url: absoluteUrl(path),
      siteName: "Hoodmood",
      type: "website",
      locale: "pl_PL",
      images: [defaultSocialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: summary,
      images: [defaultSocialImage],
    },
  };
}
