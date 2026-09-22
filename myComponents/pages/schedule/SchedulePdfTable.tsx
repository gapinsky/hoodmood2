"use client";

import { Clock, User } from "lucide-react";
import type { RefObject } from "react";

import { getDayVenues, getScheduleDays, type ClassesByDay } from "./types";

type Props = {
  pdfRef: RefObject<HTMLDivElement | null>;
  classesByDay: ClassesByDay;
  brandName?: string;
  brandUrl?: string;
};

export default function SchedulePdfTable({
  pdfRef,
  classesByDay,
  brandUrl = "www.hoodmood.pl",
}: Props) {
  const days = getScheduleDays(classesByDay);
  const maxRows = Math.max(
    ...days.map((day) => classesByDay[day]?.length ?? 0),
    0,
  );

  return (
    <div
      id="pdf-root"
      ref={pdfRef}
      className="box-border w-[1600px] bg-white p-10 text-zinc-900"
    >
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="m-0 text-sm text-zinc-600">{brandUrl}</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-300">
        <table className="w-full table-fixed border-collapse text-left">
          <thead>
            <tr>
              {days.map((day) => (
                <th
                  key={day}
                  className="border-b border-r border-zinc-300 bg-zinc-100 p-4 text-base font-bold last:border-r-0"
                >
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                  {getDayVenues(classesByDay[day]).map((venue) => (
                    <p key={venue} className="mb-0 mt-2 text-sm font-normal leading-5 text-zinc-700">{venue}</p>
                  ))}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: maxRows }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {days.map((day) => {
                  const item = classesByDay[day]?.[rowIndex];

                  return (
                    <td
                      key={`${day}-${rowIndex}`}
                      className="h-37.5 align-top border-b border-r border-zinc-300 p-4 last:border-r-0"
                    >
                      {item ? (
                        <div>
                          <p className="m-0 text-[15px] font-bold leading-[1.35] text-zinc-900">
                            {item.name}
                          </p>

                          <p className="mb-0 mt-2 text-sm text-zinc-700 flex items-center gap-1">
                            <Clock className="w-4" /> {item.time}
                          </p>

                          <p className="mb-0 mt-1.5 text-[13px] leading-[1.4] text-zinc-600 flex items-center gap-1">
                            <User className="w-4" />{" "}
                            {item.age.length > 10
                              ? item.age
                              : `${item.age} lat`}
                          </p>
                          <p className="mb-0 mt-2 text-[13px] leading-[1.4] text-zinc-600">
                            Instruktor: {item.instructor}
                          </p>
                          {item.specialInstructors && (
                            <p className="mb-0 mt-2 text-[13px] leading-[1.4] text-zinc-600">
                              Gościnnie: {item.specialInstructors}
                            </p>
                          )}
                          {item.frequencyDescription && (
                            <p className="mb-0 mt-2 text-xs leading-[1.4] text-zinc-600">
                              {item.frequencyDescription}
                            </p>
                          )}
                        </div>
                      ) : null}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
