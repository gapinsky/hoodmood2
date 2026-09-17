import FormPhoneField from "@/myComponents/forms/fields/FormPhoneField";
import { Mail, User } from "lucide-react";
import { useFormContext } from "react-hook-form";

import type { EnrollmentFormData } from "@/lib/schemas/enrollmentSchema";
import FormTextField from "@/myComponents/forms/fields/FormTextField";
import FormTextareaField from "@/myComponents/forms/fields/FormTextareaField";

import { sanitizeNameInput } from "../utils";

export default function StepContactDetails() {
  const {
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useFormContext<EnrollmentFormData>();


  return (
    <div className="grid grid-cols-1  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5">
        <FormTextField
          id="parent-full-name"
          label="Osoba kontaktowa"
          placeholder="Wprowadź imię i nazwisko"
          icon={User}
          registration={register("parentFullName", {
            onChange: (event) => {
              event.target.value = sanitizeNameInput(event.target.value);
            },
          })}
          error={errors.parentFullName}
          disabled={isSubmitting}
        />

        <FormTextField
          id="email"
          label="Adres e-mail"
          type="email"
          placeholder="Wpisz adres e-mail"
          icon={Mail}
          registration={register("email")}
          error={errors.email}
          disabled={isSubmitting}
        />
      </div>

      <FormPhoneField
        id="phone"
        country={watch("phoneCountry")}
        countryRegistration={register("phoneCountry")}
        phoneRegistration={register("phone")}
        countryError={errors.phoneCountry}
        phoneError={errors.phone}
        disabled={isSubmitting}
      />

      <FormTextareaField
        id="notes"
        label="Dodatkowe informacje"
        placeholder="Np. informacje zdrowotne, uwagi organizacyjne"
        registration={register("notes")}
        error={errors.notes}
        disabled={isSubmitting}
        textareaClassName="min-h-30"
      />
    </div>
  );
}
