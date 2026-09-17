import { z } from "zod";
import { phoneFields, validatePhoneFields } from "@/lib/phone";
import { locationList } from "@/data/locations";

const locationIdSchema = z.enum(locationList.map((location) => location.id), {
  message: "Wybierz lokalizację.",
});

export const selectedClassSchema = z.object({
  clientId: z.string(),
  locationId: locationIdSchema,
  locationName: z.string(),
  classTypeId: z.string(),
  classTypeName: z.string(),
  billingPeriod: z.enum(["monthly", "one-time"]),
  scheduleId: z.string(),
  dayLabel: z.string(),
  timeLabel: z.string(),
  price: z.number().min(0),
  priceUnit: z.string(),
  scheduleLabel: z.string(),
  instructorLabel: z.string(),
  specialInstructorLabel: z.string(),
  currency: z.literal("PLN"),
});

const namePattern = /^[\p{L}\s-]+$/u;

const enrollmentBaseSchema = z
  .object({
    participantFullName: z
      .string()
      .regex(
        namePattern,
        "Imię i nazwisko uczestnika może zawierać tylko litery.",
      )
      .min(2, "Imię i nazwisko uczestnika musi mieć co najmniej 2 znaki."),
    participantType: z.enum(["youth", "adult"], {
      message: "Wybierz grupę wiekową uczestnika.",
    }),
    participantAge: z.string(),
    isHoodmoodMember: z.boolean(),
    selectedLocationId: locationIdSchema,
    parentFullName: z
      .string()
      .regex(
        namePattern,
        "Imię i nazwisko opiekuna może zawierać tylko litery.",
      )
      .min(2, "Imię i nazwisko opiekuna musi mieć co najmniej 2 znaki."),
    email: z.string().email("Podaj poprawny adres e-mail."),
    ...phoneFields,
    notes: z.string().optional(),
    consentsAccepted: z.boolean(),
  })
  .superRefine((data, ctx) => {
    validatePhoneFields(data, ctx);
    const age = Number(data.participantAge);
    if (!/^\d+$/.test(data.participantAge) || !Number.isSafeInteger(age) || age <= 0) {
      ctx.addIssue({ code: "custom", path: ["participantAge"], message: "Podaj poprawny wiek uczestnika." });
    } else if (data.participantType === "adult" ? age < 18 : age > 18) {
      ctx.addIssue({ code: "custom", path: ["participantAge"], message: "Wiek nie pasuje do wybranej grupy uczestnika." });
    }

    if (!data.consentsAccepted) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Musisz zaakceptować regulamin i politykę prywatności.",
        path: ["consentsAccepted"],
      });
    }
  });

export const enrollmentSchema = enrollmentBaseSchema.safeExtend({
  selectedClasses: z.array(selectedClassSchema).min(1, "Wybierz co najmniej jedne zajęcia."),
});

// ID wiersza katalogu uwzględnia wariant cenowy; szczegóły odtwarza serwer.
export const enrollmentRequestSchema = enrollmentBaseSchema.safeExtend({
  selectedClasses: z.array(z.object({ classId: z.string().min(1) })).min(1),
});
export type EnrollmentRequest = z.infer<typeof enrollmentRequestSchema>;

export type SelectedClassItem = z.infer<typeof selectedClassSchema>;
export type EnrollmentFormData = z.infer<typeof enrollmentSchema>;
