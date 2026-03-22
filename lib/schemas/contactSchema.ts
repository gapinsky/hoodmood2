import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Imię i nazwisko musi zawierać minimum 2 znaki"),
  email: z.string().email("Podaj prawidłowy adres e-mail"),
  phone: z.string().regex(/^(\+48|0)?[\d\s\-\(\)]{7,}$/, "Podaj prawidłowy numer telefonu"),
  message: z.string().min(10, "Wiadomość musi zawierać minimum 10 znaków"),
  termsAccepted: z.boolean().refine((val) => val === true, "Musisz zaakceptować regulamin i politykę prywatności"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;