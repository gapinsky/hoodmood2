"use client";

import Link from "next/link";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function TrialClassMessage() {
  const [isOpen, setIsOpen] = useState(true);
  const [hasUnreadMessage, setHasUnreadMessage] = useState(false);

  const closeMessage = () => {
    setIsOpen(false);
    setHasUnreadMessage(true);
  };

  const toggleMessage = () => {
    if (isOpen) {
      closeMessage();
      return;
    }
    setIsOpen(true);
    setHasUnreadMessage(false);
  };

  return (
    <div className="pointer-events-none fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <aside
        id="trial-class-message"
        role="dialog"
        aria-label="Informacja o wejściu próbnym"
        aria-hidden={!isOpen}
        className={`ui-outline relative w-[min(calc(100vw-2rem),360px)] origin-bottom-right rounded-2xl border border-black/[0.08] bg-white/92 p-5 pr-12 text-left text-[#21191d] shadow-[0_18px_48px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none dark:border-white/[0.10] dark:bg-[#1c1c1c]/98 dark:text-white/92 dark:shadow-[0_18px_48px_rgba(0,0,0,0.32)] ${
          isOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0"
        }`}
      >
          <button
            type="button"
            onClick={closeMessage}
            tabIndex={isOpen ? 0 : -1}
            aria-label="Zamknij wiadomość"
            className="ui-focus-ring absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-full text-foreground/60 transition hover:bg-black/6 hover:text-foreground dark:hover:bg-white/8"
          >
            <X className="size-4" />
          </button>
          <p className="font-anton text-xl uppercase leading-tight tracking-wide">
            Sprawdź swój vibe
          </p>
          <p className="mt-2 text-sm leading-6 text-foreground/75">
            Wpadnij na dowolne zajęcia próbne za jedyne{" "}
            <strong className="whitespace-nowrap text-foreground">40 zł</strong>.
            Promocja
            obowiązuje jeden raz na osobę. Szczegóły znajdziesz w{" "}
            <Link
              href="/regulamin-wejscia-probnego"
              tabIndex={isOpen ? 0 : -1}
              className="font-semibold text-[var(--brand-700)] underline decoration-[var(--brand-500)]/60 underline-offset-4 dark:text-[var(--brand-300)]"
            >
              regulaminie promocji
            </Link>
            .
          </p>
      </aside>

      <button
        type="button"
        onClick={toggleMessage}
        aria-expanded={isOpen}
        aria-controls="trial-class-message"
        aria-label={
          isOpen
            ? "Zamknij wiadomość o promocji"
            : "Otwórz wiadomość o promocji"
        }
        className="ui-focus-ring ui-pressable pointer-events-auto relative inline-flex size-14 items-center justify-center rounded-full border border-white/15 bg-[linear-gradient(180deg,var(--brand-600),var(--brand-800))] text-white shadow-[0_14px_34px_rgba(87,35,52,0.35)] sm:size-16"
      >
        <MessageCircle className="size-6 sm:size-7" />
        {hasUnreadMessage && !isOpen ? (
          <span className="absolute -right-1 -top-1 inline-flex size-6 animate-in items-center justify-center rounded-full border-2 border-background bg-[var(--brand-600)] text-xs font-bold text-white shadow-md zoom-in-50 duration-200">
            1
          </span>
        ) : null}
      </button>
    </div>
  );
}
