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
        "mx-auto flex max-w-380 flex-col gap-16 overflow-hidden px-8 lg:px-12 xl:px-16",
        className,
      )}
    >
      {children}
    </section>
  );
}
