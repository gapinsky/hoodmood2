"use client";

import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

export default function TrialClassBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside className="fixed inset-x-0 top-18 z-40 border-y border-[#c4587b]/25 bg-[#f8e8ee]/95 px-10 py-2.5 text-[#552437] shadow-sm backdrop-blur-md dark:border-[#c4587b]/30 dark:bg-[#2a171e]/95 dark:text-[#f4d9e2] xl:top-19">
      <div className="mx-auto flex max-w-380 flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-xs sm:text-sm">
        <p className="font-bold uppercase tracking-[0.06em]">
          Sprawdź swój vibe — dowolne zajęcia próbne tylko 40 zł
        </p>
        <span className="hidden opacity-40 sm:inline">•</span>
        <p className="opacity-75">Jedno wejście próbne na osobę</p>
        <Link
          href="/regulamin-wejscia-probnego"
          className="group inline-flex shrink-0 items-center gap-1 font-semibold underline decoration-current/35 underline-offset-4 transition hover:decoration-current"
        >
          Regulamin
          <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        aria-label="Zamknij informację o wejściu próbnym"
        className="absolute right-2 top-1/2 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-full transition hover:bg-black/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a23f63] dark:hover:bg-white/10 sm:right-4"
      >
        <X className="size-4" />
      </button>
    </aside>
  );
}
