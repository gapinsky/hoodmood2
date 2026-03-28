import type { MetadataRoute } from "next";
import { instructors } from "./kadra/data";
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hoodmood.vercel.app";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/kadra`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kolonie`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/aktualnosci`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cennik`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/zapisz-sie`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/regulamin`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/polityka-prywatnosci`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const citySlugs = ["koszalin", "polanow", "bialy-bor"];

  const cityPages: MetadataRoute.Sitemap = citySlugs.flatMap((city) => [
    {
      url: `${baseUrl}/oferta/${city}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/grafik/${city}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ]);

  const trainerPages: MetadataRoute.Sitemap = instructors.map(
    (member: { id: string }) => ({
      url: `${baseUrl}/kadra/${member.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  //   const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
  //     url: `${baseUrl}/aktualnosci/${post.slug}`,
  //     lastModified: post.updatedAt ?? post.publishedAt ?? now,
  //     changeFrequency: "monthly",
  //     priority: 0.6,
  //   }));

  return [...staticPages, ...cityPages, ...trainerPages];
}
