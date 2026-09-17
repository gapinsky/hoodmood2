import { z } from "zod";
import { phoneFields, validatePhoneFields } from "@/lib/phone";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Imię i nazwisko musi zawierać minimum 2 znaki"),
  email: z.string().email("Podaj prawidłowy adres e-mail"),
  ...phoneFields,
  message: z.string().min(10, "Wiadomość musi zawierać minimum 10 znaków"),
  termsAccepted: z
    .boolean()
    .refine(
      (val) => val === true,
      "Musisz zaakceptować regulamin i politykę prywatności",
    ),
}).superRefine(validatePhoneFields);

export type ContactFormInput = z.input<typeof contactFormSchema>;
export type ContactFormData = z.output<typeof contactFormSchema>;
