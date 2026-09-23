import type { Metadata } from "next";
import type { Trainer } from "@/data/trainers";
import { absoluteUrl } from "@/lib/seo";

type Props = {
  metadata: Metadata;
  trainer?: Trainer;
  pageType?: "WebPage" | "ContactPage" | "CollectionPage";
};

export default function PageStructuredData({ metadata, trainer, pageType = "WebPage" }: Props) {
  const canonical = metadata.alternates?.canonical;
  const url = typeof canonical === "string" ? canonical
    : canonical instanceof URL ? canonical.href : canonical?.url.toString();
  const title = typeof metadata.title === "string" ? metadata.title
    : metadata.title && "absolute" in metadata.title ? metadata.title.absolute : undefined;
  if (!url || !title) return null;

  const breadcrumbs = [
    { name: "Hoodmood", item: absoluteUrl("/") },
    ...(trainer ? [{ name: "Kadra", item: absoluteUrl("/kadra") }] : []),
    { name: title.replace(/ \| Hoodmood$/, ""), item: url },
  ];
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": trainer ? "ProfilePage" : pageType,
        "@id": `${url}#webpage`,
        url,
        name: title,
        description: metadata.description,
        inLanguage: "pl-PL",
        breadcrumb: { "@id": `${url}#breadcrumbs` },
        ...(trainer ? {
          mainEntity: {
            "@type": "Person",
            "@id": `${url}#person`,
            name: trainer.name,
            url,
            jobTitle: trainer.role,
            description: trainer.bio,
            ...(trainer.image ? { image: absoluteUrl(trainer.image) } : {}),
            ...(trainer.instagram && trainer.instagram !== "TBA" ? { sameAs: [trainer.instagram] } : {}),
          },
        } : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem", position: index + 1, ...item,
        })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
