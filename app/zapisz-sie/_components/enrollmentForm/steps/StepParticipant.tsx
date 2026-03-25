import { User } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { Field, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import type { EnrollmentFormData } from "@/lib/schemas/enrollmentSchema";
import FormTextField from "@/myComponents/forms/fields/FormTextField";
import { inputStyles } from "@/myComponents/pages/pricing/PricingFilterBar";

const participantTypeOptions = [
  {
    value: "youth" as const,
    label: "Dzieci i młodzież",
  },
  {
    value: "adult" as const,
    label: "Dorosły",
  },
];

export default function StepParticipant() {
  const {
    register,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useFormContext<EnrollmentFormData>();

  const participantType = watch("participantType");
  const participantAge = watch("participantAge");
  const isYouthParticipant = participantType === "youth";
  const ageErrorId = errors.participantAge ? "participant-age-error" : undefined;

  return (
    <div className="grid grid-cols-1 gap-6">
      <FormTextField
        id="participant-full-name"
        label="Imię i nazwisko uczestnika"
        placeholder="Wpisz imię i nazwisko"
        icon={User}
        registration={register("participantFullName")}
        error={errors.participantFullName}
        disabled={isSubmitting}
      />

      <div className="flex flex-col gap-3">
        <span className="pl-1 text-xs font-semibold uppercase tracking-[0.16em] text-black/55 dark:text-white/55">
          Wiek uczestnika
        </span>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {participantTypeOptions.map((option) => {
            const isActive = participantType === option.value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setValue("participantType", option.value, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true,
                  });

                  if (option.value === "adult") {
                    setValue("participantAge", "", {
                      shouldDirty: true,
                      shouldTouch: true,
                      shouldValidate: true,
                    });
                  }
                }}
                disabled={isSubmitting}
                className={`flex min-h-12 items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition ${
                  isActive
                    ? "border-[#ac4967] bg-[#ac4967]/14 text-white"
                    : "border-white/10 bg-white/[0.04] text-white/75 hover:border-white/25"
                }`}
              >
                <span>{option.label}</span>
                <span
                  className={`flex h-4 w-4 rounded-full border ${
                    isActive
                      ? "border-[#f07ea4] bg-[#f07ea4]"
                      : "border-white/30 bg-transparent"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {errors.participantType && (
          <span className="pl-1 text-xs text-red-600 dark:text-red-400">
            {errors.participantType.message}
          </span>
        )}
      </div>

      <Field className={`flex flex-col gap-2.5 ${!isYouthParticipant ? "opacity-50" : ""}`}>
        <FieldLabel
          htmlFor="participant-age"
          className="pl-1 text-xs font-semibold uppercase tracking-[0.16em] text-black/55 dark:text-white/55"
        >
          Wiek uczestnika
        </FieldLabel>

        <InputGroup className={inputStyles}>
          <InputGroupInput
            id="participant-age"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder={isYouthParticipant ? "Np. 8" : "Tylko dla dzieci i młodzieży"}
            disabled={isSubmitting || !isYouthParticipant}
            aria-invalid={!!errors.participantAge}
            aria-describedby={ageErrorId}
            value={participantAge}
            {...register("participantAge", {
              onChange: (event) => {
                const value = event.target.value.replace(/\D/g, "").slice(0, 2);
                setValue("participantAge", value, {
                  shouldDirty: true,
                  shouldTouch: true,
                  shouldValidate: true,
                });
              },
            })}
          />
          <InputGroupAddon>
            <User className="text-black/35 dark:text-white/35" />
          </InputGroupAddon>
        </InputGroup>

        {errors.participantAge && (
          <span
            id={ageErrorId}
            className="pl-1 text-xs text-red-600 dark:text-red-400"
          >
            {errors.participantAge.message}
          </span>
        )}
      </Field>
    </div>
  );
}
