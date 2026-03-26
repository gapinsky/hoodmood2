import { useFormContext } from "react-hook-form";

import type { EnrollmentFormData } from "@/lib/schemas/enrollmentSchema";

import StepConsents from "./StepConsents";

type StepSummaryProps = {
  showConsents?: boolean;
};

export default function StepSummary({
  showConsents = false,
}: StepSummaryProps) {
  const { getValues } = useFormContext<EnrollmentFormData>();
  const values = getValues();

  const total = values.selectedClasses.reduce(
    (sum, item) => sum + item.price,
    0,
  );
  const participantTypeLabel =
    values.participantType === "adult" ? "Dorośli" : "Dzieci i młodzież";

  return (
    <div className="  flex flex-col justify-between h-full ">
      <section className="rounded-2xl py-2 border-2">
        <p className="mb-3 text-base  text-white font-semibold opacity-90">
          Uczestnik
        </p>
        <div className="grid grid-cols-1 gap-3 text-sm text-white/75 md:grid-cols-3">
          <div>
            <span className="text-white/45">Imię i nazwisko:</span>{" "}
            {values.participantFullName}
          </div>
          <div>
            <span className="text-white/45">Grupa:</span> {participantTypeLabel}
          </div>
          <div>
            <span className="text-white/45">Wiek:</span>{" "}
            {values.participantType === "adult"
              ? "Nie dotyczy"
              : values.participantAge}
          </div>
        </div>
      </section>

      <section className="rounded-2xl py-2 border-2">
        <p className="mb-3 text-base  text-white font-semibold opacity-90">
          Dane kontaktowe
        </p>
        <div className="grid grid-cols-1 gap-3 text-sm text-white/75 md:grid-cols-3">
          <div>
            <span className="text-white/45">Imię i nazwisko:</span>{" "}
            {values.parentFullName}
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

      <section className="rounded-2xl py-2 border-2">
        <p className="mb-3 text-base  text-white font-semibold opacity-90 font-roboto">
          Wybrane zajęcia
        </p>

        <div className="space-y-3 max-h-[120px] overflow-y-scroll">
          {values.selectedClasses.map((item) => (
            <div
              key={item.clientId}
              className="flex flex-col justify-between gap-2 rounded-2xl border border-white/8 bg-black/10 p-3.5 md:flex-row md:items-center"
            >
              <div>
                <div className="font-sm text-white">{item.classTypeName}</div>
                <div className="text-xs text-white/55">
                  {item.locationName} • {item.timeLabel}
                </div>
              </div>

              <div className=" text-[#f07ea4]">
                {item.price.toFixed(2).replace(".", ",")} zł
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-between rounded-2xl border-2">
          <span className="text-sm text-white/60">Razem: </span>
          <span className=" text-white">
            {total.toFixed(2).replace(".", ",")} zł{" "}
            <span className="text-xs opacity-50">/ miesięcznie</span>
          </span>
        </div>
      </section>

      {showConsents ? <StepConsents /> : null}
    </div>
  );
}
