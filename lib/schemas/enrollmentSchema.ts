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

export const enrollmentSchema = z
  .object({
    participantFullName: z
      .string()
      .min(2, "Imię i nazwisko uczestnika musi mieć co najmniej 2 znaki."),
    participantType: z.enum(["youth", "adult"], {
      message: "Wybierz grupę wiekową uczestnika.",
    }),
    participantAge: z.string(),
    selectedClasses: z
      .array(selectedClassSchema)
      .min(1, "Wybierz co najmniej jedne zajęcia."),
    parentFullName: z
      .string()
      .min(2, "Imię i nazwisko opiekuna musi mieć co najmniej 2 znaki."),
    email: z.string().email("Podaj poprawny adres e-mail."),
    phone: z.string().min(9, "Podaj poprawny numer telefonu."),
    notes: z.string().optional(),
    termsAccepted: z.boolean(),
    privacyAccepted: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (data.participantType === "youth") {
      if (data.participantAge.trim().length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Podaj wiek uczestnika.",
          path: ["participantAge"],
        });
      } else {
        const age = Number.parseInt(data.participantAge, 10);

        if (!Number.isFinite(age) || age <= 0) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Podaj poprawny wiek uczestnika.",
            path: ["participantAge"],
          });
        } else if (age > 18) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Zmień kategorię: Dorosły",
            path: ["participantAge"],
          });
        }
      }
    }

    if (!data.termsAccepted) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Musisz zaakceptować regulamin.",
        path: ["termsAccepted"],
      });
    }

    if (!data.privacyAccepted) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Musisz zaakceptować politykę prywatności.",
        path: ["privacyAccepted"],
      });
    }
  });

export type SelectedClassItem = z.infer<typeof selectedClassSchema>;
export type EnrollmentFormData = z.infer<typeof enrollmentSchema>;
