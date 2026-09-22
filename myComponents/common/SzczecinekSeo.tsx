import { absoluteUrl } from "@/lib/seo";
import { szczecinekSeo } from "@/lib/seo-szczecinek";
import { trainers } from "@/data/trainers";

export default function SzczecinekSeo({ page }: { page: keyof typeof szczecinekSeo }) {
  const content = szczecinekSeo[page];
  const url = absoluteUrl(content.path);
  const breadcrumbs = [
    { name: "Hoodmood", item: absoluteUrl("/") },
    ...(page === "trainer" ? [{ name: "Kadra", item: absoluteUrl("/kadra") }] : []),
    { name: content.title, item: url },
  ];
  const julia = trainers["julia-kaczmarzyk"];
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": page === "trainer" ? "ProfilePage" : "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: content.title,
        description: content.description,
        inLanguage: "pl-PL",
        breadcrumb: { "@id": `${url}#breadcrumbs` },
        ...(page === "trainer" ? {
          mainEntity: {
            "@type": "Person",
            "@id": `${url}#person`,
            name: julia.name,
            url,
            jobTitle: julia.role,
            description: julia.bio,
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
