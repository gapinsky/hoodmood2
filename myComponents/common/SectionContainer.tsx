import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};
export default function SectionContainer({ children, className }: Props) {
  return (
    <section
      className={cn(
        "mx-auto flex max-w-380 flex-col gap-[clamp(4rem,8vw,5rem)] overflow-hidden px-4 py-1 sm:px-6 lg:px-12 xl:px-16",
        className,
      )}
    >
      {children}
    </section>
  );
}
