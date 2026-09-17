import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Remove blocking stylesheet round trips before the SSR hero can paint.
    // Measurements and HTML/cache trade-offs: docs/audits/2026-09-16-critical-css.md
    inlineCss: true,
  },
  images: {
    qualities: [55, 60, 75, 85, 90],
  },
  async headers() {
    // Keep local asset edits immediately visible while developing.
    if (process.env.NODE_ENV !== "production") return [];

    return [
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            // These URLs are not fingerprinted, so do not mark them immutable.
            value: "public, max-age=3600, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
