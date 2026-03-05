"use client";
import { cn } from "@/lib/utils";
import { a11y } from "@/public/styles";
import { useState } from "react";

type Props = {
  shortBio: string;
  description: string;
};

export default function ExpandableCardDescription({
  description,
  shortBio,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      {isExpanded ? description : shortBio}
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className={cn(
          "text-(--brand-700) underline hover:cursor-pointer ml-1",
          a11y,
        )}
      >
        {isExpanded ? "Zwiń opis" : "Rozwiń opis"}
      </button>
    </>
  );
}
