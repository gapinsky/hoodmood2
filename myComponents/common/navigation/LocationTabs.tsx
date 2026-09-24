"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin } from "lucide-react";
import { getLocationLinks } from "@/lib/navigation/locationLinks";

type Props = {
  label: string;
};

export default function LocationTabs({ label }: Props) {
  const pathname = usePathname();
  const section = pathname.split("/")[1];
  const tabs = section === "oferta" || section === "grafik" || section === "cennik"
    ? getLocationLinks(section)
    : [];

  return (
        <nav aria-label={label} className="flex flex-wrap gap-3">
          {tabs.map((tab) => {
            const active = (pathname === tab.segment || pathname.startsWith(`${tab.segment}/`));
            return (
              <Link
                key={tab.href}
                href={tab.href}
                aria-current={active ? "page" : undefined}
                className={`ui-focus-ring inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm transition-colors ${active ? "border-foreground bg-foreground text-background" : "border-foreground/10 bg-foreground/2.5 hover:bg-foreground/[0.07]"}`}
              >
                <MapPin className="size-4" aria-hidden="true" />
                {tab.label}
              </Link>
            );
          })}
        </nav>
  );
}
