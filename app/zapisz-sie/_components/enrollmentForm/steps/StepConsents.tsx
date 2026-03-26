import { useFormContext } from "react-hook-form";

import type { EnrollmentFormData } from "@/lib/schemas/enrollmentSchema";
import FormCheckboxField from "@/myComponents/forms/fields/FormCheckboxField";

export default function StepConsents() {
  const {
    control,
    formState: { errors, isSubmitting },
  } = useFormContext<EnrollmentFormData>();

  return (
    <div>
      <FormCheckboxField<EnrollmentFormData>
        control={control}
        name="consentsAccepted"
        id="consents-accepted"
        error={errors.consentsAccepted}
        disabled={isSubmitting}
        label={
          <p>
            Akceptuję{" "}
            <a href="/regulamin" className="underline" target="_blank" rel="noopener">
              regulamin
            </a>{" "}
            i{" "}
            <a
              href="/polityka-prywatnosci"
              className="underline"
              target="_blank"
              rel="noopener"
            >
              politykę prywatności
            </a>
            .
          </p>
        }
      />
    </div>
  );
}
