import { useMemo, useState } from "react";
import { enrollmentLocations } from "@/lib/data/enrollment-options";
import type { SelectedClassItem } from "@/lib/schemas/enrollmentSchema";

type ClassConfiguratorProps = {
  onAdd: (item: SelectedClassItem) => void;
};

export default function ClassConfigurator({ onAdd }: ClassConfiguratorProps) {
  const [locationId, setLocationId] = useState("");
  const [classTypeId, setClassTypeId] = useState("");
  const [scheduleId, setScheduleId] = useState("");
  const [localError, setLocalError] = useState("");

  const selectedLocation = useMemo(
    () => enrollmentLocations.find((location) => location.id === locationId),
    [locationId],
  );

  const classOptions = selectedLocation?.classTypes ?? [];

  const selectedClassType = useMemo(
    () => classOptions.find((item) => item.id === classTypeId),
    [classOptions, classTypeId],
  );

  const scheduleOptions = selectedClassType?.schedules ?? [];

  const handleAdd = () => {
    if (!selectedLocation || !selectedClassType || !scheduleId) {
      setLocalError("Wybierz lokalizację, rodzaj zajęć i termin.");
      return;
    }

    const selectedSchedule = scheduleOptions.find(
      (schedule) => schedule.id === scheduleId,
    );

    if (!selectedSchedule) {
      setLocalError("Nie udało się odnaleźć wybranego terminu.");
      return;
    }

    setLocalError("");

    onAdd({
      clientId: crypto.randomUUID(),
      locationId: selectedLocation.id,
      locationName: selectedLocation.name,
      classTypeId: selectedClassType.id,
      classTypeName: selectedClassType.name,
      scheduleId: selectedSchedule.id,
      dayLabel: selectedSchedule.dayLabel,
      timeLabel: selectedSchedule.timeLabel,
      price: selectedSchedule.price,
      currency: "PLN",
    });

    setClassTypeId("");
    setScheduleId("");
  };

  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
      <div className="mb-5">
        <h3 className="font-[var(--anton)] text-2xl text-white">
          Wybierz lokalizację i zajęcia
        </h3>
        <p className="mt-2 text-sm leading-7 text-white/60">
          Dodaj jedne lub kilka zajęć. Po każdej akcji panel po prawej zaktualizuje podsumowanie i cenę.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2.5">
          <label className="pl-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
            Lokalizacja
          </label>
          <select
            value={locationId}
            onChange={(e) => {
              setLocationId(e.target.value);
              setClassTypeId("");
              setScheduleId("");
              setLocalError("");
            }}
            className="h-12 rounded-2xl border border-white/10 bg-white/[0.06] px-4 text-white"
          >
            <option value="">Wybierz lokalizację</option>
            {enrollmentLocations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2.5">
          <label className="pl-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
            Rodzaj zajęć
          </label>
          <select
            value={classTypeId}
            onChange={(e) => {
              setClassTypeId(e.target.value);
              setScheduleId("");
              setLocalError("");
            }}
            disabled={!selectedLocation}
            className="h-12 rounded-2xl border border-white/10 bg-white/[0.06] px-4 text-white disabled:opacity-50"
          >
            <option value="">Wybierz zajęcia</option>
            {classOptions.map((classType) => (
              <option key={classType.id} value={classType.id}>
                {classType.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2.5">
        <label className="pl-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
          Termin
        </label>

        <div className="flex flex-wrap gap-3">
          {scheduleOptions.length === 0 ? (
            <div className="text-sm text-white/45">
              Najpierw wybierz lokalizację i rodzaj zajęć.
            </div>
          ) : (
            scheduleOptions.map((schedule) => {
              const isActive = schedule.id === scheduleId;

              return (
                <button
                  key={schedule.id}
                  type="button"
                  onClick={() => {
                    setScheduleId(schedule.id);
                    setLocalError("");
                  }}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    isActive
                      ? "border-[#f07ea4] bg-[#f07ea4]/15 text-white"
                      : "border-white/10 bg-white/[0.04] text-white/75 hover:border-white/25"
                  }`}
                >
                  {schedule.dayLabel} · {schedule.timeLabel} · {schedule.price} zł
                </button>
              );
            })
          )}
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <button
          type="button"
          onClick={handleAdd}
          className="w-fit rounded-full bg-[#ac4967] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Dodaj zajęcia
        </button>

        <span
          className={`min-h-6 text-sm text-red-400 ${
            localError ? "visible" : "invisible"
          }`}
        >
          {localError || "\u00A0"}
        </span>
      </div>
    </div>
  );
}