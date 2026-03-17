"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = {
  label: string;
  href: string;
  segment: string;
};


type Props = {
  tabs: Item[];
}
export default function TabsNav({tabs}: Props) {
  const activeSegment = usePathname();

  return (
    <div className="flex gap-4 w-fit mx-auto flex-wrap">
      {tabs.map((tab) => {
        const isActive = activeSegment === tab.segment;

        return (
          <Link
            key={tab.segment}
            href={tab.href}
            className={`whitespace-nowrap uppercase rounded-full border-2   text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive    h-9 px-4 py-2 has-[>svg]:px-3 w-fit  ${
              isActive
                ? "bg-(--brand-700) border-transparent text-white"
                : "bg-none border-2 hover:border-transparent hover:bg-black/5 dark:hover:bg-white/10"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
