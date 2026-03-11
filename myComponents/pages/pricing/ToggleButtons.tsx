"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const tabs = [
  {
    label: "ZAJĘCIA",
    href: "/cennik/koszalin/zajecia",
    segment: "zajecia",
  },
  {
    label: "PAKIETY ZAJĘĆ",
    href: "/cennik/koszalin/pakiety-zajec",
    segment: "pakiety-zajec",
  },
  {
    label: "ZAJĘCIA INDYWIDUALNE",
    href: "/cennik/koszalin/zajecia-indywidualne",
    segment: "zajecia-indywidualne",
  },
];

export default function TabsNav() {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <div className="flex gap-4">
      {tabs.map((tab) => {
        const isActive = activeSegment === tab.segment;

        return (
          <Link
            key={tab.segment}
            href={tab.href}
            className={`rounded-full px-6 py-3 transition ${
              isActive
                ? "bg-red-500 text-black"
                : "bg-neutral-200 text-black hover:bg-neutral-300"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
