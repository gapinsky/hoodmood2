import { normalizePhoneNumber } from "@/lib/phone";
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

  const monthlyTotal = values.selectedClasses
    .filter((item) => item.billingPeriod === "monthly")
    .reduce((sum, item) => sum + item.price, 0);
  const oneTimeTotal = values.selectedClasses
    .filter((item) => item.billingPeriod === "one-time")
    .reduce((sum, item) => sum + item.price, 0);
  const participantTypeLabel =
    values.participantType === "adult" ? "Dorośli" : "Dzieci i młodzież";

  return (
    <div className="flex min-w-0 flex-col gap-4 wrap-anywhere">
      <section className="rounded-md border border-foreground/10 bg-white/4 p-4 ">
        <h3 className="mb-3 text-sm font-semibold text-foreground dark:text-white/95 ">
          Uczestnik
        </h3>
        <p className="mb-3 text-sm text-muted-foreground">
          Aktywny kursant Hoodmood: {values.isHoodmoodMember ? "Tak" : "Nie"}
        </p>
        <div className="grid grid-cols-1 gap-3 text-sm leading-6 text-black/72 md:grid-cols-3 dark:text-white/75">
          <div className="flex flex-col">
            <span className="ui-muted-label text-xs dark:text-white/45">
              Imię i nazwisko:
            </span>{" "}
            {values.participantFullName}
          </div>
          <div className="flex flex-col">
            <span className="ui-muted-label text-xs dark:text-white/45">
              Grupa:
            </span>{" "}
            {participantTypeLabel}
          </div>
          <div className="flex flex-col">
            <span className="ui-muted-label text-xs dark:text-white/45">
              Wiek:
            </span>{" "}
            {values.participantAge}
          </div>
        </div>
      </section>

      <section className="rounded-md border border-foreground/10 bg-white/4 p-4 ">
        <h3 className="mb-3 text-sm font-semibold text-foreground dark:text-white/95 ">
          Dane kontaktowe
        </h3>
        <div className="grid grid-cols-1 gap-3 text-sm leading-6 text-black/72 md:grid-cols-3 dark:text-white/75">
          <div className="flex flex-col">
            <span className="ui-muted-label text-wrap text-xs dark:text-white/45">
              Osoba kontaktowa:
            </span>{" "}
            {values.parentFullName}
          </div>
          <div className="flex flex-col">
            <span className="ui-muted-label text-xs dark:text-white/45">
              E-mail:
            </span>{" "}
            {values.email}
          </div>
          <div className="flex flex-col">
            <span className="ui-muted-label text-xs dark:text-white/45">
              Telefon:
            </span>{" "}
            {normalizePhoneNumber(values.phone, values.phoneCountry) ?? values.phone}
          </div>
        </div>

        {values.notes ? (
          <div className="mt-3 text-sm leading-6 text-black/72 flex flex-col dark:text-white/75">
            <span className="ui-muted-label text-xs dark:text-white/45">
              Uwagi:
            </span>{" "}
            {values.notes}
          </div>
        ) : null}
      </section>

      <section className="rounded-md border border-foreground/10 bg-white/4 p-4 md:p-5">
        <h3 className="mb-3 text-sm font-semibold text-foreground dark:text-white/95">
          Wybrane zajęcia
        </h3>

        <div className="space-y-3 ">
          {values.selectedClasses.map((item) => (
            <div
              key={item.clientId}
              className="flex flex-col justify-between gap-2   md:flex-row md:items-center"
            >
              <div>
                <div className="text-sm text-foreground dark:text-white">
                  {item.classTypeName}
                </div>
                <div className="ui-muted-label text-xs leading-5 dark:text-white/55">
                  {item.locationName} {item.timeLabel}
                </div>
                <p className="text-xs leading-5 text-muted-foreground">{item.scheduleLabel}</p>
                {item.instructorLabel && <p className="text-xs leading-5 text-muted-foreground">Prowadzący: {item.instructorLabel}</p>}
                {item.specialInstructorLabel && <p className="text-xs leading-5 text-muted-foreground">Gościnnie: {item.specialInstructorLabel}</p>}
              </div>

              <div className="text-sm font-semibold text-foreground">
                {item.price.toFixed(2).replace(".", ",")} zł
                <span className="ml-1 text-xs font-normal">
                  {item.priceUnit}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-3 items-center justify-between rounded-md border border-foreground/10 bg-white/4 px-4 py-3">
          <span className="ui-muted-label text-sm dark:text-white/60">
            Razem:
          </span>
          <div className="flex flex-wrap items-start gap-4 text-right">
            {oneTimeTotal > 0 ? (
              <div>
                <div className="text-sm font-semibold text-foreground dark:text-white">
                  {oneTimeTotal.toFixed(2).replace(".", ",")} zł
                </div>
                <div className="ui-muted-label text-xs font-normal text-black/55 dark:text-white/45">
                  jednorazowo
                </div>
              </div>
            ) : null}
            <div>
              <div className="text-sm font-semibold text-foreground dark:text-white">
                {monthlyTotal.toFixed(2).replace(".", ",")} zł
              </div>
              <div className="ui-muted-label text-xs font-normal text-black/55 dark:text-white/45">
                miesięcznie
              </div>
            </div>
          </div>
        </div>
      </section>

      {showConsents ? <StepConsents /> : null}
    </div>
  );
}
