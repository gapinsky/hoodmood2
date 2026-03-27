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
    <div className="flex h-full flex-col gap-4 md:gap-5 ">
      <section className="rounded-xl border border-white/10 bg-white/4 p-4 ">
        {/* <h3 className="mb-3 text-base font-semibold text-white/95 xl:mb-0">
          Uczestnik
        </h3> */}
        <div className="grid grid-cols-1 gap-3 text-sm leading-6 text-white/75 md:grid-cols-3">
          <div className="flex flex-col">
            <span className="text-white/45 text-xs">Imię i nazwisko:</span>{" "}
            {values.participantFullName}
          </div>
          <div className="flex flex-col">
            <span className="text-white/45 text-xs">Grupa:</span>{" "}
            {participantTypeLabel}
          </div>
          <div className="flex flex-col">
            <span className="text-white/45 text-xs">Wiek:</span>{" "}
            {values.participantType === "adult"
              ? "Dorosły"
              : values.participantAge}
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-white/10 bg-white/[0.04] p-4 ">
        {/* <h3 className="mb-3 text-base font-semibold text-white/95 xl:mb-0">
          Dane kontaktowe
        </h3> */}
        <div className="grid grid-cols-1 gap-3 text-sm leading-6 text-white/75 md:grid-cols-3">
          <div className="flex flex-col">
            <span className="text-white/45 text-wrap text-xs">
              Osoba kontaktowa:
            </span>{" "}
            {values.parentFullName} lorem32
          </div>
          <div className="flex flex-col">
            <span className="text-white/45 text-xs">E-mail:</span>{" "}
            {values.email}
          </div>
          <div className="flex flex-col">
            <span className="text-white/45 text-xs">Telefon:</span>{" "}
            {values.phone}
          </div>
        </div>

        {values.notes ? (
          <div className="mt-3 text-sm leading-6 text-white/75 flex flex-col">
            <span className="text-white/45 text-xs">Uwagi:</span> {values.notes}
          </div>
        ) : null}
      </section>

      <section className="rounded-xl border border-white/10 bg-white/[0.04] p-4 md:p-5">
        {/* <h3 className="mb-3 text-base font-semibold text-white/95">
          Wybrane zajęcia
        </h3> */}

        <div className="space-y-3 max-h-5 overflow-y-scroll">
          {values.selectedClasses.map((item) => (
            <div
              key={item.clientId}
              className="flex flex-col justify-between gap-2   md:flex-row md:items-center"
            >
              <div>
                <div className="text-sm font-semibold text-white">
                  {item.classTypeName}
                </div>
                <div className="text-xs leading-5 text-white/55">
                  {item.locationName} • {item.timeLabel}
                </div>
              </div>

              <div className="text-sm font-semibold text-[#f07ea4]">
                {item.price.toFixed(2).replace(".", ",")} zł
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
          <span className="text-sm text-white/60">Razem:</span>
          <span className="text-base font-semibold text-white">
            {total.toFixed(2).replace(".", ",")} zł{" "}
            <span className="text-xs font-normal text-white/45">
              / miesięcznie
            </span>
          </span>
        </div>
      </section>

      {showConsents ? <StepConsents /> : null}
    </div>
  );
}
