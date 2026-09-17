import { Clock, User, ChevronDown } from "lucide-react";

import { getScheduleDays, type ClassesByDay } from "./types";

type Props = {
  classesByDay: ClassesByDay;
};

export default function ScheduleGrid({ classesByDay }: Props) {
  const days = getScheduleDays(classesByDay);

  return (
    <section aria-labelledby="schedule-title" className="w-full space-y-8">
      <div className="flex items-end justify-between gap-4 border-b border-foreground/10 pb-5">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">02 / Plan tygodnia</p>
          <h2 id="schedule-title" className="font-anton text-3xl uppercase sm:text-4xl">Znajdź czas na ruch</h2>
        </div>
      </div>
      <nav aria-label="Przejdź do dnia tygodnia" className="flex flex-wrap gap-2 xl:hidden">
        {days.map((day) => (
          <a key={day} href={`#day-${day}`} className="ui-focus-ring rounded-full border border-foreground/10 px-4 py-2 text-sm capitalize transition-colors hover:bg-foreground/5">{day}</a>
        ))}
      </nav>
      <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-4">
        {days.map((dayKey, index) => {
          const items = classesByDay[dayKey];
          const headingId = `day-${dayKey}-heading`;
          return (
            <section key={dayKey} id={`day-${dayKey}`} aria-labelledby={headingId} className="min-w-0 scroll-mt-28 space-y-4">
              <header className="flex items-center justify-between gap-2 border-b border-foreground/10 pb-4">
                <h3 id={headingId} className="font-anton text-xl uppercase">{dayKey}</h3>
                <span aria-hidden="true" className="text-xs tabular-nums text-muted-foreground">0{index + 1}</span>
              </header>
              {items.length === 0 && (
                <p className="rounded-md border border-dashed border-foreground/10 px-4 py-6 text-sm text-muted-foreground">Brak zajęć w tym dniu.</p>
              )}
              <ul className="space-y-3">
                {items.map((c) => (
                  <li key={c.id}>
                    <article className="rounded-md border border-foreground/10 bg-foreground/2.5 p-4 text-left transition-colors hover:bg-foreground/5">
                      <p className="mb-3 flex items-center gap-2 text-sm font-medium tabular-nums text-(--brand-700) dark:text-(--brand-400)">
                        <Clock className="size-4 shrink-0" aria-hidden="true" />{c.time}
                      </p>
                      <p className="text-base font-medium leading-6 text-foreground">{c.name}</p>
                      <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="size-4 shrink-0" aria-hidden="true" />
                        {c.age.length > 10 ? c.age : `${c.age} lat`}
                      </p>
                      <div className="mt-4 border-t border-foreground/10 pt-3">
                        <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Prowadzący</p>
                        <p className="mt-1 text-sm leading-5 text-foreground">{c.instructor}</p>
                        {c.specialInstructors && (
                          <p className="mt-2 text-sm leading-5 text-muted-foreground">Gościnnie: {c.specialInstructors}</p>
                        )}
                      </div>
                      {c.frequencyDescription && (
                        <p className="mt-3 text-xs leading-5 text-muted-foreground">{c.frequencyDescription}</p>
                      )}
                      {c.info && (
                        <details className="group mt-4">
                          <summary className="ui-focus-ring flex cursor-pointer list-none items-center justify-between gap-2 rounded-sm py-1 text-xs text-muted-foreground transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden">
                            Szczegóły zajęć
                            <ChevronDown className="size-4 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
                          </summary>
                          <p className="whitespace-pre-line pt-3 text-sm leading-6 text-muted-foreground">{c.info}</p>
                        </details>
                      )}
                    </article>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </section>
  );
}
