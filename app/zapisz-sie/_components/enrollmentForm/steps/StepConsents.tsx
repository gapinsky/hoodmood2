import { useFormContext } from "react-hook-form";
import type { EnrollmentFormData } from "@/lib/schemas/enrollmentSchema";
import FormCheckboxField from "@/myComponents/forms/fields/FormCheckboxField";

export default function StepConsents() {
  const {
    control,
    formState: { errors, isSubmitting },
  } = useFormContext<EnrollmentFormData>();

  return (
    <div className="space-y-4">
      <FormCheckboxField<EnrollmentFormData>
        control={control}
        name="termsAccepted"
        id="terms-accepted"
        error={errors.termsAccepted}
        disabled={isSubmitting}
        label={
          <p>
            Akceptuję{" "}
            <a href="/regulamin" className="underline" target="_blank" rel="noopener">
              regulamin
            </a>
            .
          </p>
        }
      />

      <FormCheckboxField<EnrollmentFormData>
        control={control}
        name="privacyAccepted"
        id="privacy-accepted"
        error={errors.privacyAccepted}
        disabled={isSubmitting}
        label={
          <p>
            Akceptuję{" "}
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