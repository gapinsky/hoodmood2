
import { User } from "lucide-react";
import { useFormContext } from "react-hook-form";
import type { EnrollmentFormData } from "@/lib/schemas/enrollmentSchema";
import { participantLevelOptions } from "@/lib/data/enrollment-options";
import FormTextField from "@/myComponents/forms/fields/FormTextField";
import FormSelectField from "@/myComponents/forms/enrollmentForm/FormSelectField";

export default function StepParticipant() {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext<EnrollmentFormData>();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <FormTextField
        id="participant-full-name"
        label="Imię i nazwisko uczestnika"
        placeholder="Wprowadź imię i nazwisko"
        icon={User}
        registration={register("participantFullName")}
        error={errors.participantFullName}
        disabled={isSubmitting}
      />

      <FormTextField
        id="participant-age"
        label="Wiek uczestnika"
        placeholder="Np. 8"
        icon={User}
        registration={register("participantAge")}
        error={errors.participantAge}
        disabled={isSubmitting}
      />

      <div className="md:col-span-2">
        <FormSelectField
          id="participant-level"
          label="Poziom uczestnika"
          registration={register("participantLevel")}
          options={participantLevelOptions}
          error={errors.participantLevel}
          disabled={isSubmitting}
          placeholder="Wybierz poziom"
        />
      </div>
    </div>
  );
}