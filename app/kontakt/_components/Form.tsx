"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MessageSquareText, User } from "lucide-react";
import { toast } from "sonner";
import FormPhoneField from "@/myComponents/forms/fields/FormPhoneField";

import ButtonPrimary from "@/myComponents/common/buttons/ButtonPrimary";
import { contactFormSchema } from "@/lib/schemas/contactSchema";
import type { ContactFormInput } from "@/lib/schemas/contactSchema";
import { submitContactForm } from "../actions";
import FormTextField from "@/myComponents/forms/fields/FormTextField";
import FormCheckboxField from "@/myComponents/forms/fields/FormCheckboxField";
import FormTextareaField from "@/myComponents/forms/fields/FormTextareaField";

const defaultValues: ContactFormInput = {
  fullName: "",
  email: "",
  phone: "",
  phoneCountry: "PL",
  message: "",
  termsAccepted: false,
};

export default function ContactForm() {
  const {
    register,
    watch,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onSubmit",
  });

  const onSubmit = async (data: ContactFormInput) => {
    try {
      const validatedData = contactFormSchema.parse(data);
      const response = await submitContactForm(validatedData);

      if (response.success) {
        toast.success(
          "Wiadomość wysłana pomyślnie! Skontaktujemy się z Tobą wkrótce.",
        );
        reset(defaultValues);
        return;
      }

      toast.error(
        response.message || "Nie udało się wysłać wiadomości. Spróbuj ponownie.",
      );
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error("Formularz zawiera błędy. Popraw pola i spróbuj ponownie.");
        return;
      }

      toast.error("Coś poszło nie tak. Spróbuj ponownie.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
      noValidate
    >
      <FormTextField
        id="input-field-fullname"
        label="Imię i nazwisko"
        placeholder="Wprowadź imię i nazwisko"
        icon={User}
        disabled={isSubmitting}
        error={errors.fullName}
        registration={register("fullName")}
      />

      <FormTextField
        id="input-field-email"
        label="Adres e-mail"
        type="email"
        placeholder="Wpisz swój adres e-mail"
        icon={Mail}
        disabled={isSubmitting}
        error={errors.email}
        wrapperClassName="flex min-w-0 flex-col gap-2.5"
        registration={register("email")}
      />

      <FormPhoneField
        id="input-field-phone"
        country={watch("phoneCountry")}
        countryRegistration={register("phoneCountry")}
        phoneRegistration={register("phone")}
        countryError={errors.phoneCountry}
        phoneError={errors.phone}
        disabled={isSubmitting}
      />

      <FormTextareaField
        id="input-field-textarea"
        label="Wiadomość"
        placeholder="Treść wiadomości"
        icon={MessageSquareText}
        disabled={isSubmitting}
        error={errors.message}
        registration={register("message")}
      />

      <FormCheckboxField<ContactFormInput>
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

      <ButtonPrimary
        type="submit"
        disabled={isSubmitting}
        className="transition-opacity hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
      </ButtonPrimary>
    </form>
  );
}
