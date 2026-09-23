"use server";

import { normalizePhoneNumber } from "@/lib/phone";
import { mainContact } from "@/data/locations";
import { resolveEnrollmentSelection } from "@/lib/data-adapters/enrollment-classes";

import { Resend } from "resend";

import {
  enrollmentRequestSchema,
  type EnrollmentRequest,
} from "@/lib/schemas/enrollmentSchema";
import {
  enrollmentConfirmationEmail,
  escapeHtml,
} from "@/lib/email/autoresponders";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitEnrollmentForm(data: EnrollmentRequest) {
  try {
    const request = enrollmentRequestSchema.parse(data);
    const selectedClasses = resolveEnrollmentSelection(request);
    if (!selectedClasses) {
      return {
        success: false,
        message: "Wybrane zajęcia nie są już dostępne lub nie pasują do uczestnika i lokalizacji. Wróć do wyboru zajęć i sprawdź zgłoszenie.",
      };
    }
    const validatedData = { ...request, selectedClasses, phone: normalizePhoneNumber(request.phone, request.phoneCountry)! };
    const monthlyTotal = validatedData.selectedClasses
      .filter((item) => item.billingPeriod === "monthly")
      .reduce((sum, item) => sum + item.price, 0);
    const oneTimeTotal = validatedData.selectedClasses
      .filter((item) => item.billingPeriod === "one-time")
      .reduce((sum, item) => sum + item.price, 0);

    const classesHtml = validatedData.selectedClasses
      .map(
        (item) => `
          <li style="margin-bottom: 12px;">
            <strong>${escapeHtml(item.classTypeName)}</strong><br />
            ${escapeHtml(item.locationName)} | ${escapeHtml(item.timeLabel)}<br />
            ${escapeHtml(item.scheduleLabel)}<br />
            ${item.instructorLabel ? `Prowadzący: ${escapeHtml(item.instructorLabel)}<br />` : ""}
            ${item.specialInstructorLabel ? `Gościnnie: ${escapeHtml(item.specialInstructorLabel)}<br />` : ""}
            ${item.price.toFixed(2).replace(".", ",")} ${escapeHtml(item.currency)} ${escapeHtml(item.priceUnit)}
          </li>
        `,
      )
      .join("");

    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "zapisy@kontakt.hoodmood.pl",
      to:
        process.env.RESEND_ENROLLMENT_TO_EMAIL || mainContact.email,
      subject: `Nowe zgłoszenie: ${validatedData.participantFullName}`,
      replyTo: validatedData.email,
      html: `
        <h2>Nowe zgłoszenie z formularza zapisów</h2>

        <h3>Uczestnik</h3>
        <p><strong>Imię i nazwisko:</strong> ${escapeHtml(validatedData.participantFullName)}</p>
        <p><strong>Grupa wiekowa:</strong> ${validatedData.participantType === "adult" ? "Dorosły" : "Dziecko / młodzież"}</p>
        <p><strong>Wiek:</strong> ${escapeHtml(validatedData.participantAge)}</p>
        <p><strong>Lokalizacja:</strong> ${escapeHtml(selectedClasses[0].locationName)}</p>

        <p><strong>Aktywny kursant Hoodmood:</strong> ${validatedData.isHoodmoodMember ? "Tak" : "Nie"}</p>

        <h3>Dane kontaktowe</h3>
        <p><strong>Osoba kontaktowa:</strong> ${escapeHtml(validatedData.parentFullName)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(validatedData.email)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(validatedData.phone)}</p>

        <h3>Wybrane zajęcia</h3>
        <ul style="padding-left: 20px;">${classesHtml}</ul>

        <p><strong>Suma miesięczna:</strong> ${monthlyTotal.toFixed(2).replace(".", ",")} PLN</p>
        ${oneTimeTotal > 0 ? `<p><strong>Suma jednorazowa:</strong> ${oneTimeTotal.toFixed(2).replace(".", ",")} PLN</p>` : ""}

        ${
          validatedData.notes?.trim()
            ? `<h3>Uwagi</h3><p>${escapeHtml(validatedData.notes).replace(/\n/g, "<br />")}</p>`
            : ""
        }
      `,
    });

    if (result.error) {
      console.error("Resend enrollment error:", result.error);
      return {
        success: false,
        message: "Nie udało się wysłać zgłoszenia. Spróbuj ponownie później.",
      };
    }

    try {
      const confirmation = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "zapisy@kontakt.hoodmood.pl",
        to: validatedData.email,
        replyTo: mainContact.email,
        subject: "Dzięki za zapis! 💗",
        html: enrollmentConfirmationEmail(validatedData),
      });

      if (confirmation.error) {
        console.error("Enrollment autoresponder delivery failed");
      }
    } catch {
      console.error("Enrollment autoresponder delivery failed");
    }

    return {
      success: true,
      message:
        "Zgłoszenie zostało wysłane pomyślnie. Skontaktujemy się z Tobą wkrótce.",
    };
  } catch (error) {
    console.error("Enrollment form submission error:", error);
    return {
      success: false,
      message: "Coś poszło nie tak. Spróbuj ponownie.",
    };
  }
}
