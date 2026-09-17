import { getCountries, parsePhoneNumberFromString, type CountryCode } from "libphonenumber-js/max";
import { z } from "zod";

export const phoneCountrySchema = z.enum(getCountries(), { message: "Wybierz prawidłowy kraj telefonu." });
export const phoneFields = { phoneCountry: phoneCountrySchema, phone: z.string() };

export function normalizePhoneNumber(phone: string, country: CountryCode): string | null {
  if (!phoneCountrySchema.safeParse(country).success) return null;
  const parsed = parsePhoneNumberFromString(phone, { defaultCountry: country, extract: false });
  // Wklejony pełny numer musi odpowiadać krajowi wybranemu przez użytkownika.
  if (!parsed?.isValid() || parsed.country !== country || parsed.ext) return null;
  return parsed.number;
}

export function validatePhoneFields(data: { phone: string; phoneCountry: CountryCode }, ctx: z.RefinementCtx) {
  if (!normalizePhoneNumber(data.phone, data.phoneCountry)) {
    ctx.addIssue({ code: "custom", path: ["phone"], message: "Podaj prawidłowy numer telefonu dla wybranego kraju." });
  }
}
