import { User } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { Field, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { enrollmentLocationOptions } from "@/lib/data/enrollment-classes";
import type { EnrollmentFormData } from "@/lib/schemas/enrollmentSchema";
import FormTextField from "@/myComponents/forms/fields/FormTextField";
import {
  inputStyles,
  selectContentStyles,
  selectItemStyles,
  selectTriggerStyles,
} from "@/myComponents/pages/pricing/PricingFilterBar";

import { sanitizeNameInput } from "../utils";

const participantTypeOptions = [
  {
    value: "youth" as const,
    label: "Dzieci i młodzież",
  },
  {
    value: "adult" as const,
    label: "Dorośli",
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
  const selectedLocationId = watch("selectedLocationId");
  const isYouthParticipant = participantType === "youth";
  const ageErrorId = errors.participantAge ? "participant-age-error" : undefined;
  const locationErrorId = errors.selectedLocationId
    ? "participant-location-error"
    : undefined;

  const handleClassesReset = () => {
    setValue("selectedClasses", [], {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: false,
    });
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <FormTextField
        id="participant-full-name"
        label="Imię i nazwisko uczestnika"
        placeholder="Wpisz imię i nazwisko"
        icon={User}
        registration={register("participantFullName", {
          onChange: (event) => {
            event.target.value = sanitizeNameInput(event.target.value);
          },
        })}
        error={errors.participantFullName}
        disabled={isSubmitting}
      />

      <div className="flex flex-col gap-2.5">
        <span className="pl-1 text-xs font-semibold uppercase tracking-[0.16em] text-black/55 dark:text-white/55">
          Grupa uczestnika
        </span>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8">
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
                  handleClassesReset();

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

        <span
          className={`min-h-5 pl-1 text-xs text-red-600 dark:text-red-400 ${
            errors.participantType ? "visible" : "invisible"
          }`}
        >
          {errors.participantType?.message || "\u00A0"}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
        <Field
          className={`flex flex-col gap-2.5 ${!isYouthParticipant ? "opacity-50" : ""}`}
        >
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
                  handleClassesReset();
                },
              })}
            />
            <InputGroupAddon>
              <User className="text-black/35 dark:text-white/35" />
            </InputGroupAddon>
          </InputGroup>

          <span
            id={ageErrorId}
            className={`min-h-5 pl-1 text-xs text-red-600 dark:text-red-400 ${
              errors.participantAge ? "visible" : "invisible"
            }`}
          >
            {errors.participantAge?.message || "\u00A0"}
          </span>
        </Field>

        <Field className="flex flex-col gap-2.5">
          <FieldLabel
            htmlFor="participant-location"
            className="pl-1 text-xs font-semibold uppercase tracking-[0.16em] text-black/55 dark:text-white/55"
          >
            Lokalizacja
          </FieldLabel>

          <Select
            value={selectedLocationId}
            onValueChange={(value) => {
              setValue("selectedLocationId", value as EnrollmentFormData["selectedLocationId"], {
                shouldDirty: true,
                shouldTouch: true,
                shouldValidate: true,
              });
              handleClassesReset();
            }}
            disabled={isSubmitting}
          >
            <SelectTrigger
              id="participant-location"
              aria-invalid={!!errors.selectedLocationId}
              aria-describedby={locationErrorId}
              className={`${selectTriggerStyles} w-full rounded-2xl border-white/10 bg-white/[0.06] text-white`}
            >
              <SelectValue placeholder="Wybierz lokalizację" />
            </SelectTrigger>
            <SelectContent className={selectContentStyles}>
              <SelectGroup>
                {enrollmentLocationOptions.map((location) => (
                  <SelectItem
                    key={location.id}
                    value={location.id}
                    className={selectItemStyles}
                  >
                    {location.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <span
            id={locationErrorId}
            className={`min-h-5 pl-1 text-xs text-red-600 dark:text-red-400 ${
              errors.selectedLocationId ? "visible" : "invisible"
            }`}
          >
            {errors.selectedLocationId?.message || "\u00A0"}
          </span>
        </Field>
      </div>
    </div>
  );
}
