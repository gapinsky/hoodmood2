"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonPrimaryStyes } from "./ButtonPrimary";
import { buttonSecondaryStyles } from "./ButtonSecondary";

type Item = {
  label: string;
  href: string;
};

export type TabsProps = {
  tabs: Item[];
};
export default function ToggleButtons({ tabs }: TabsProps) {
  const activeSegment = usePathname();

  return (
    <div className="w-full overflow-x-auto md:overflow-visible flex items-center">
      <div className="flex min-w-max gap-4 px-1 pb-2 md:min-w-0 md:flex-wrap md:justify-center mx-auto ">
        {tabs.map((tab) => {
          const isActive = activeSegment === tab.href;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              scroll
              className={`${isActive ? buttonPrimaryStyes : buttonSecondaryStyles}`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
