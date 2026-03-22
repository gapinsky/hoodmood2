"use client";

import { useState } from "react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { buttonPrimaryStyes } from "@/myComponents/common/ButtonPrimary";
import { inputStyles } from "@/myComponents/pages/pricing/PricingFilterBar";
import { Mail, MessageSquareText, Phone, User } from "lucide-react";

import { contactFormSchema } from "@/lib/schemas/contactSchema";
import type { ContactFormData } from "@/lib/schemas/contactSchema";
import { submitContactForm } from "../actions";

type SubmitStatus = {
  type: "success" | "error" | null;
  message: string;
};

const defaultValues: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
  termsAccepted: false,
};

export default function Form() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: null,
    message: "",
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onSubmit",
  });

  const watchedValues = watch();

  const clearSubmitStatus = () => {
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus({ type: null, message: "" });

    try {
      const validatedData = contactFormSchema.parse(data);
      const response = await submitContactForm(validatedData);

      if (response.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Wiadomość wysłana pomyślnie! Skontaktujemy się z Tobą wkrótce.",
        });
        reset(defaultValues);
        return;
      }

      setSubmitStatus({
        type: "error",
        message:
          response.message ||
          "Nie udało się wysłać wiadomości. Spróbuj ponownie.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        setSubmitStatus({
          type: "error",
          message: "Formularz zawiera błędy. Popraw pola i spróbuj ponownie.",
        });
        return;
      }

      setSubmitStatus({
        type: "error",
        message: "Coś poszło nie tak. Spróbuj ponownie.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8" noValidate>
      {submitStatus.type && (
        <div
          className={`rounded-lg border p-4 ${
            submitStatus.type === "success"
              ? "border-green-200 bg-green-50 text-green-900"
              : "border-red-200 bg-red-50 text-red-900"
          }`}
          aria-live="polite"
        >
          {submitStatus.message}
        </div>
      )}

      <Field className="flex flex-col gap-2.5">
        <FieldLabel
          htmlFor="input-field-fullname"
          className="pl-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/55 dark:text-white/55"
        >
          Imię i nazwisko
        </FieldLabel>
        <InputGroup className={inputStyles}>
          <InputGroupInput
            id="input-field-fullname"
            type="text"
            placeholder="Wprowadź imię i nazwisko"
            disabled={isSubmitting}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName", {
              onChange: () => clearSubmitStatus(),
            })}
          />
          <InputGroupAddon>
            <User className="text-black/35 dark:text-white/35" />
          </InputGroupAddon>
        </InputGroup>
        {errors.fullName && (
          <span
            id="fullName-error"
            className="pl-1 text-xs text-red-600 dark:text-red-400"
          >
            {errors.fullName.message}
          </span>
        )}
      </Field>

      <div className="flex flex-col gap-8 md:flex-row">
        <Field className="flex flex-1 flex-col gap-2.5">
          <FieldLabel
            htmlFor="input-field-email"
            className="pl-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/55 dark:text-white/55"
          >
            Adres e-mail
          </FieldLabel>
          <InputGroup className={inputStyles}>
            <InputGroupInput
              id="input-field-email"
              type="email"
              placeholder="Wpisz swój adres e-mail"
              disabled={isSubmitting}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email", {
                onChange: () => clearSubmitStatus(),
              })}
            />
            <InputGroupAddon>
              <Mail className="text-black/35 dark:text-white/35" />
            </InputGroupAddon>
          </InputGroup>
          {errors.email && (
            <span
              id="email-error"
              className="pl-1 text-xs text-red-600 dark:text-red-400"
            >
              {errors.email.message}
            </span>
          )}
        </Field>

        <Field className="flex flex-1 flex-col gap-2.5">
          <FieldLabel
            htmlFor="input-field-phone"
            className="pl-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/55 dark:text-white/55"
          >
            Numer telefonu
          </FieldLabel>
          <InputGroup className={inputStyles}>
            <InputGroupInput
              id="input-field-phone"
              type="tel"
              placeholder="Wpisz numer telefonu"
              disabled={isSubmitting}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              {...register("phone", {
                onChange: () => clearSubmitStatus(),
              })}
            />
            <InputGroupAddon>
              <Phone className="text-black/35 dark:text-white/35" />
            </InputGroupAddon>
          </InputGroup>
          {errors.phone && (
            <span
              id="phone-error"
              className="pl-1 text-xs text-red-600 dark:text-red-400"
            >
              {errors.phone.message}
            </span>
          )}
        </Field>
      </div>

      <Field className="flex flex-col gap-2.5">
        <FieldLabel
          htmlFor="input-field-textarea"
          className="pl-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/55 dark:text-white/55"
        >
          Wiadomość
        </FieldLabel>
        <InputGroup className={inputStyles}>
          <InputGroupTextarea
            id="input-field-textarea"
            placeholder="Treść wiadomości"
            className="min-h-[200px]"
            disabled={isSubmitting}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message", {
              onChange: () => clearSubmitStatus(),
            })}
          />
          <InputGroupAddon align="block-start" className="border-b">
            <MessageSquareText className="text-black/35 dark:text-white/35" />
          </InputGroupAddon>
        </InputGroup>
        {errors.message && (
          <span
            id="message-error"
            className="pl-1 text-xs text-red-600 dark:text-red-400"
          >
            {errors.message.message}
          </span>
        )}
      </Field>

      <FieldGroup>
        <Field orientation="horizontal">
          <Controller
            name="termsAccepted"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="terms-checkbox"
                checked={field.value}
                onCheckedChange={(checked) => {
                  clearSubmitStatus();
                  field.onChange(checked === true);
                }}
                disabled={isSubmitting}
                aria-invalid={!!errors.termsAccepted}
                aria-describedby={
                  errors.termsAccepted ? "termsAccepted-error" : undefined
                }
              />
            )}
          />

          <FieldLabel
            htmlFor="terms-checkbox"
            className="inline-flex max-w-full text-wrap"
          >
            <p>
              Zapoznałem się z{" "}
              <a
                href="/regulamin"
                className="underline"
                target="_blank"
                rel="noopener"
              >
                regulaminem
              </a>{" "}
              i akceptuję{" "}
              <a
                className="underline"
                href="/polityka-prywatnosci"
                target="_blank"
                rel="noopener"
              >
                politykę prywatności
              </a>
            </p>
          </FieldLabel>
        </Field>

        {errors.termsAccepted && (
          <span
            id="termsAccepted-error"
            className="pl-1 text-xs text-red-600 dark:text-red-400"
          >
            {errors.termsAccepted.message}
          </span>
        )}
      </FieldGroup>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`${buttonPrimaryStyes} transition-opacity hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50`}
      >
        {isSubmitting ? "Wysyłanie..." : "Wyślij"}
      </button>
    </form>
  );
}