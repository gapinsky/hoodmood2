"use client";

import type { RefObject } from "react";
import type { ClassItem, DayKey } from "@/app/grafik/koszalin/data";

type Props = {
  pdfRef: RefObject<HTMLDivElement | null>;
  classesByDay: Record<DayKey, ClassItem[]>;
  dayLabels: Record<DayKey, string>;
  title?: string;
  brandName?: string;
  brandUrl?: string;
};

export default function SchedulePdfTable({
  pdfRef,
  classesByDay,
  dayLabels,
  title,
  brandName = "Hoodmood",
  brandUrl = "www.hoodmood.pl",
}: Props) {
  const dayKeys = Object.keys(classesByDay) as DayKey[];
  const maxRows = Math.max(
    ...dayKeys.map((day) => classesByDay[day].length),
    0,
  );

  return (
    <div
      id="pdf-root"
      ref={pdfRef}
      style={{
        width: "1600px",
        backgroundColor: "#ffffff",
        color: "#111111",
        padding: "40px",
        fontFamily: "Arial, Helvetica, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "32px",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "30px",
              lineHeight: 1.2,
              color: "#111111",
            }}
          >
            {title}
          </h1>

          <p
            style={{
              marginTop: "8px",
              marginBottom: 0,
              fontSize: "14px",
              color: "#525252",
            }}
          >
            {brandUrl}
          </p>
        </div>
      </div>

      <div
        style={{
          overflow: "hidden",
          borderRadius: "16px",
          border: "1px solid #d4d4d4",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: "fixed",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              {dayKeys.map((day, dayIndex) => {
                const isLastColumn = dayIndex === dayKeys.length - 1;

                return (
                  <th
                    key={day}
                    style={{
                      backgroundColor: "#f5f5f5",
                      borderBottom: "1px solid #d4d4d4",
                      borderRight: isLastColumn ? "none" : "1px solid #d4d4d4",
                      padding: "16px",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#111111",
                    }}
                  >
                    {dayLabels[day]}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: maxRows }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {dayKeys.map((day, dayIndex) => {
                  const item = classesByDay[day][rowIndex];
                  const isLastColumn = dayIndex === dayKeys.length - 1;

                  return (
                    <td
                      key={`${day}-${rowIndex}`}
                      style={{
                        height: "150px",
                        width: `${100 / dayKeys.length}%`,
                        verticalAlign: "top",
                        borderBottom: "1px solid #d4d4d4",
                        borderRight: isLastColumn
                          ? "none"
                          : "1px solid #d4d4d4",
                        padding: "16px",
                        boxSizing: "border-box",
                      }}
                    >
                      {item ? (
                        <div>
                          <p
                            style={{
                              margin: 0,
                              fontSize: "15px",
                              fontWeight: 700,
                              lineHeight: 1.35,
                              color: "#111111",
                            }}
                          >
                            {item.name}
                          </p>

                          <p
                            style={{
                              marginTop: "8px",
                              marginBottom: 0,
                              fontSize: "14px",
                              color: "#404040",
                            }}
                          >
                            {item.time}
                          </p>

                          <p
                            style={{
                              marginTop: "8px",
                              marginBottom: 0,
                              fontSize: "13px",
                              color: "#525252",
                              lineHeight: 1.4,
                            }}
                          >
                            Prowadzący: {item.instructor}
                          </p>

                          <p
                            style={{
                              marginTop: "6px",
                              marginBottom: 0,
                              fontSize: "13px",
                              color: "#525252",
                              lineHeight: 1.4,
                            }}
                          >
                            Wiek: {item.age}
                          </p>
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
