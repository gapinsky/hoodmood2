import { useFormContext } from "react-hook-form";
import type { EnrollmentFormData } from "@/lib/schemas/enrollmentSchema";

export default function StepSummary() {
  const { getValues } = useFormContext<EnrollmentFormData>();
  const values = getValues();

  const total = values.selectedClasses.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
        <h3 className="mb-4 text-lg font-semibold text-white">Uczestnik</h3>
        <div className="grid grid-cols-1 gap-3 text-sm text-white/75 md:grid-cols-2">
          <div>
            <span className="text-white/45">Imię i nazwisko:</span>{" "}
            {values.participantFullName}
          </div>
          <div>
            <span className="text-white/45">Wiek:</span> {values.participantAge}
          </div>
          <div>
            <span className="text-white/45">Poziom:</span> {values.participantLevel}
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
        <h3 className="mb-4 text-lg font-semibold text-white">Dane kontaktowe</h3>
        <div className="grid grid-cols-1 gap-3 text-sm text-white/75 md:grid-cols-2">
          <div>
            <span className="text-white/45">Opiekun:</span> {values.parentFullName}
          </div>
          <div>
            <span className="text-white/45">E-mail:</span> {values.email}
          </div>
          <div>
            <span className="text-white/45">Telefon:</span> {values.phone}
          </div>
        </div>

        {values.notes ? (
          <div className="mt-4 text-sm text-white/75">
            <span className="text-white/45">Uwagi:</span> {values.notes}
          </div>
        ) : null}
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
        <h3 className="mb-4 text-lg font-semibold text-white">Wybrane zajęcia</h3>

        <div className="space-y-3">
          {values.selectedClasses.map((item) => (
            <div
              key={item.clientId}
              className="flex flex-col justify-between gap-2 rounded-2xl border border-white/8 bg-black/10 p-4 md:flex-row md:items-center"
            >
              <div>
                <div className="font-medium text-white">{item.classTypeName}</div>
                <div className="text-sm text-white/55">
                  {item.locationName} · {item.dayLabel}, {item.timeLabel}
                </div>
              </div>

              <div className="font-semibold text-[#f07ea4]">
                {item.price} zł
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <span className="text-sm text-white/60">Razem</span>
          <span className="font-semibold text-white">{total} zł / mies.</span>
        </div>
      </section>
    </div>
  );
}