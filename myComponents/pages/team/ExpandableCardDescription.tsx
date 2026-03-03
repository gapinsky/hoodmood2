"use client";
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
        className="text-(--brand-700) underline hover:cursor-pointer ml-1"
      >
        {isExpanded ? "Zwiń opis" : "Rozwiń opis"}
      </button>
    </>
  );
}
