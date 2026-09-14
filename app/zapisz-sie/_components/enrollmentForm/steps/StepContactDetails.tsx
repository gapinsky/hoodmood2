import { Mail, Phone, User } from "lucide-react";
import { useFormContext } from "react-hook-form";

import type { EnrollmentFormData } from "@/lib/schemas/enrollmentSchema";
import FormTextField from "@/myComponents/forms/fields/FormTextField";
import FormTextareaField from "@/myComponents/forms/fields/FormTextareaField";

import { sanitizeNameInput } from "../utils";

export default function StepContactDetails() {
  const {
    register,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useFormContext<EnrollmentFormData>();
  const phoneValue = watch("phone");

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

      <FormTextField
        id="phone"
        label="Numer telefonu"
        type="tel"
        placeholder="Wpisz numer telefonu"
        icon={Phone}
        registration={register("phone", {
          onChange: (event) => {
            const value = event.target.value.replace(/\D/g, "").slice(0, 9);
            setValue("phone", value, {
              shouldDirty: true,
              shouldTouch: true,
              shouldValidate: true,
            });
          },
        })}
        error={errors.phone}
        disabled={isSubmitting}
        inputMode="numeric"
        pattern="[0-9]*"
        value={phoneValue}
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
