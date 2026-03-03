type ClassItem = {
  name: string;
  time: string;
  instructor: string;
  info: string;
  age: string;
};

type ClassesByDay = Record<
  "monday" | "tuesday" | "wednesday" | "thursday" | "friday",
  ClassItem[]
>;

type Props = {
  classesByDay: ClassesByDay;
  dayLabelsPl: Record<keyof ClassesByDay, string>;
};

const dayOrder: (keyof ClassesByDay)[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
];

export default function ScheduleGrid({ classesByDay, dayLabelsPl }: Props) {
  return (
    <div className="w-full rounded-2xl border  dark:bg-white/5 p-4 backdrop-blur">
      {/* mobile: 1 kolumna, tablet: 2, desktop: 5 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {dayOrder.map((dayKey) => {
          const label = dayLabelsPl[dayKey];
          const items = classesByDay[dayKey];
          const headingId = `day-${dayKey}-heading`;

          return (
            <section key={dayKey} aria-labelledby={headingId} className="">
              <header className="mb-4">
                <h3 id={headingId}>{label}</h3>
              </header>

              <ul className="space-y-3">
                {items.map((c, idx) => {
                  const descId = `class-${dayKey}-${idx}-desc`;

                  return (
                    <li key={`${dayKey}-${c.name}-${c.time}-${idx}`}>
                      {/* Focusowalny "kafelek" bez JS */}
                      <article
                        tabIndex={0}
                        aria-describedby={descId}
                        className="group w-full rounded-xl border  p-3 text-left transition hover:border-white/20 hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="truncate text-sm font-semibold ">
                              {c.name}
                            </div>

                            <div className="mt-1 text-xs ">{c.time}</div>
                          </div>

                          <div className="flex shrink-0 flex-col items-end gap-2">
                            <span className="rounded-full  px-2 py-0.5 text-[11px] ">
                              {c.age}
                            </span>
                            <span
                              aria-hidden="true"
                              className="text-xs group-hover:/60"
                            >
                              ⓘ
                            </span>
                          </div>
                        </div>

                        <div className="mt-2 text-xs">
                          Prowadzący: {c.instructor}
                        </div>

                        {/* A11y opis zamiast title */}
                        <span id={descId} className="sr-only">
                          Opis zajęć: {c.info}
                        </span>
                      </article>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
