"use client";

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { Clock, Info, User } from "lucide-react";

type ClassItem = {
  name: string;
  time: string;
  instructor: string;
  info: string;
  age: string;
};

type DayKey = "poniedziałek" | "wtorek" | "środa" | "czwartek" | "piątek";

type ClassesByDay = Record<DayKey, ClassItem[]>;

type Props = {
  classesByDay: ClassesByDay;
};

const dayOrder: DayKey[] = [
  "poniedziałek",
  "wtorek",
  "środa",
  "czwartek",
  "piątek",
];

const daySectionStyles =
  "h-fit rounded-xl bg-white/[0.22] p-4 backdrop-blur-xl dark:bg-white/[0.04]";
const classCardStyles =
  "group w-full rounded-lg bg-white/[0.10] p-4 text-left transition-colors duration-300 hover:bg-white/[0.8] dark:bg-white/[0.06] dark:hover:bg-white/[0.10]";

const infoButtonStyles =
  "inline-flex size-8 items-center justify-center rounded-full border border-black/[0.08] bg-white/80 text-black/45 shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-200 hover:bg-white hover:text-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#21191d]/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/[0.10] dark:bg-white/[0.08] dark:text-white/45 dark:shadow-[0_4px_12px_rgba(0,0,0,0.16)] dark:hover:bg-white/[0.14] dark:hover:text-white/75 dark:focus-visible:ring-white/80 dark:focus-visible:ring-offset-[#21191d]";

const hoverCardContentStyles =
  "max-w-[260px] rounded-2xl border border-black/[0.08] bg-white/92 p-4 text-sm text-[#21191d] shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl dark:border-white/[0.10] dark:bg-[#1c1c1c]/98 dark:text-white/92 dark:shadow-[0_16px_40px_rgba(0,0,0,0.35)]";

export default function ScheduleGrid({ classesByDay }: Props) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-5">
        {dayOrder.map((dayKey) => {
          const items = classesByDay[dayKey];
          const headingId = `day-${dayKey}-heading`;

          return (
            <section
              key={dayKey}
              aria-labelledby={headingId}
              className={daySectionStyles}
            >
              <header className="mb-4 px-1">
                <h3
                  id={headingId}
                  className="text-base font-semibold uppercase tracking-[0.12em] text-[#21191d] dark:text-white/92"
                >
                  {dayKey}
                </h3>
              </header>

              <ul className="grid grid-cols-1 gap-4">
                {items.map((c, idx) => (
                  <li key={`${dayKey}-${c.name}-${c.time}-${idx}`}>
                    <article className={classCardStyles}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="text-sm font-bold text-[#21191d] dark:text-white/92">
                            {c.name}
                          </div>

                          <div className="mt-1 text-xs text-black/55 dark:text-white/55 flex items-center gap-1">
                            <Clock className="w-4" /> {c.time}
                          </div>

                          <div className="mt-1 text-xs text-black/55 dark:text-white/55 flex items-center gap-1">
                            <User className="w-4" />{" "}
                            {c.age.length > 10 ? c.age : `${c.age} lat`}
                          </div>
                        </div>

                        <div className="flex shrink-0 flex-col items-end gap-2">
                          <HoverCard openDelay={20} closeDelay={20}>
                            <HoverCardTrigger asChild>
                              <button
                                type="button"
                                className={infoButtonStyles}
                                aria-label={`Pokaż informacje o zajęciach ${c.name}`}
                              >
                                <Info className="size-4" />
                              </button>
                            </HoverCardTrigger>

                            <HoverCardContent
                              className={`${hoverCardContentStyles} md:hidden`}
                            >
                              {c.info}
                            </HoverCardContent>

                            <HoverCardContent
                              className={`${hoverCardContentStyles} hidden md:block`}
                              side="bottom"
                              align="end"
                              sideOffset={8}
                            >
                              {c.info}
                            </HoverCardContent>
                          </HoverCard>
                        </div>
                      </div>

                      <div className="mt-4 text-xs text-black/65 dark:text-white/65">
                        Instruktor: {c.instructor}
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
