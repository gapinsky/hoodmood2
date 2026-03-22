import { z } from "zod";

export const selectedClassSchema = z.object({
  clientId: z.string(),
  locationId: z.string(),
  locationName: z.string(),
  classTypeId: z.string(),
  classTypeName: z.string(),
  scheduleId: z.string(),
  dayLabel: z.string(),
  timeLabel: z.string(),
  price: z.number().min(0),
  currency: z.literal("PLN"),
});

export const enrollmentSchema = z.object({
  participantFullName: z
    .string()
    .min(2, "Imię i nazwisko uczestnika musi mieć co najmniej 2 znaki."),
  participantAge: z
    .string()
    .min(1, "Podaj wiek uczestnika."),
  participantLevel: z
    .string()
    .min(1, "Wybierz poziom uczestnika."),
  selectedClasses: z
    .array(selectedClassSchema)
    .min(1, "Wybierz co najmniej jedne zajęcia."),
  parentFullName: z
    .string()
    .min(2, "Imię i nazwisko opiekuna musi mieć co najmniej 2 znaki."),
  email: z
    .string()
    .email("Podaj poprawny adres e-mail."),
  phone: z
    .string()
    .min(9, "Podaj poprawny numer telefonu."),
  notes: z
    .string()
    .optional(),
  termsAccepted: z.literal(true, {
    errorMap: () => ({
      message: "Musisz zaakceptować regulamin.",
    }),
  }),
  privacyAccepted: z.literal(true, {
    errorMap: () => ({
      message: "Musisz zaakceptować politykę prywatności.",
    }),
  }),
});

export type SelectedClassItem = z.infer<typeof selectedClassSchema>;
export type EnrollmentFormData = z.infer<typeof enrollmentSchema>;