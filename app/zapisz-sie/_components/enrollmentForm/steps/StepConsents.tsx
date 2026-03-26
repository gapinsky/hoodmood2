import { useFormContext } from "react-hook-form";

import type { EnrollmentFormData } from "@/lib/schemas/enrollmentSchema";
import FormCheckboxField from "@/myComponents/forms/fields/FormCheckboxField";

export default function StepConsents() {
  const {
    control,
    formState: { errors, isSubmitting },
  } = useFormContext<EnrollmentFormData>();

  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 md:p-5">
      <h3 className="mb-3 text-base font-semibold text-white/95">Wymagane zgody</h3>

      <FormCheckboxField<EnrollmentFormData>
        control={control}
        name="consentsAccepted"
        id="consents-accepted"
        error={errors.consentsAccepted}
        disabled={isSubmitting}
        label={
          <p className="text-sm leading-6 text-white/80">
            Akceptuję{" "}
            <a href="/regulamin" className="underline decoration-white/35 underline-offset-4" target="_blank" rel="noopener">
              regulamin
            </a>{" "}
            i{" "}
            <a
              href="/polityka-prywatnosci"
              className="underline decoration-white/35 underline-offset-4"
              target="_blank"
              rel="noopener"
            >
              politykę prywatności
            </a>
            .
          </p>
        }
      />
    </section>
  );
}
