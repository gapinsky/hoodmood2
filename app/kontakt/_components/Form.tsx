"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MessageSquareText, Phone, User } from "lucide-react";

import { buttonPrimaryStyes } from "@/myComponents/common/ButtonPrimary";
import { contactFormSchema } from "@/lib/schemas/contactSchema";
import type { ContactFormData } from "@/lib/schemas/contactSchema";
import { submitContactForm } from "../actions";
import FormStatusMessage from "@/myComponents/forms/shared/FormStatusMessage";
import FormTextField from "@/myComponents/forms/fields/FormTextField";
import FormCheckboxField from "@/myComponents/forms/fields/FormCheckboxField";
import FormTextareaField from "@/myComponents/forms/fields/FormTextareaField";

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

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: null,
    message: "",
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onSubmit",
  });

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8"
      noValidate
    >
      {submitStatus.type && (
        <FormStatusMessage
          type={submitStatus.type}
          message={submitStatus.message}
        />
      )}

      <FormTextField
        id="input-field-fullname"
        label="Imię i nazwisko"
        placeholder="Wprowadź imię i nazwisko"
        icon={User}
        disabled={isSubmitting}
        error={errors.fullName}
        registration={register("fullName", {
          onChange: clearSubmitStatus,
        })}
      />

      <div className="flex flex-col gap-8 md:flex-row">
        <FormTextField
          id="input-field-email"
          label="Adres e-mail"
          type="email"
          placeholder="Wpisz swój adres e-mail"
          icon={Mail}
          disabled={isSubmitting}
          error={errors.email}
          wrapperClassName="flex flex-1 flex-col gap-2.5"
          registration={register("email", {
            onChange: clearSubmitStatus,
          })}
        />

        <FormTextField
          id="input-field-phone"
          label="Numer telefonu"
          type="tel"
          placeholder="Wpisz numer telefonu"
          icon={Phone}
          disabled={isSubmitting}
          error={errors.phone}
          wrapperClassName="flex flex-1 flex-col gap-2.5"
          registration={register("phone", {
            onChange: clearSubmitStatus,
          })}
        />
      </div>

      <FormTextareaField
        id="input-field-textarea"
        label="Wiadomość"
        placeholder="Treść wiadomości"
        icon={MessageSquareText}
        disabled={isSubmitting}
        error={errors.message}
        registration={register("message", {
          onChange: clearSubmitStatus,
        })}
      />

      <FormCheckboxField<ContactFormData>
        control={control}
        name="termsAccepted"
        id="terms-checkbox"
        disabled={isSubmitting}
        error={errors.termsAccepted}
        label={
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
        }
      />

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
