"use server";

import { Resend } from "resend";

import {
  enrollmentSchema,
  type EnrollmentFormData,
} from "@/lib/schemas/enrollmentSchema";
import {
  enrollmentConfirmationEmail,
  escapeHtml,
} from "@/lib/email/autoresponders";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitEnrollmentForm(data: EnrollmentFormData) {
  try {
    const validatedData = enrollmentSchema.parse(data);
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
            ${item.price.toFixed(2).replace(".", ",")} ${escapeHtml(item.currency)} / ${item.billingPeriod === "one-time" ? "jednorazowo" : "miesięcznie"}
          </li>
        `,
      )
      .join("");

    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "zapisy@kontakt.hoodmood.pl",
      to:
        process.env.RESEND_ENROLLMENT_TO_EMAIL || "hoodmood.recepcja@gmail.com",
      subject: `Nowe zgłoszenie: ${validatedData.participantFullName}`,
      replyTo: validatedData.email,
      html: `
        <h2>Nowe zgłoszenie z formularza zapisów</h2>

        <h3>Uczestnik</h3>
        <p><strong>Imię i nazwisko:</strong> ${escapeHtml(validatedData.participantFullName)}</p>
        <p><strong>Grupa wiekowa:</strong> ${validatedData.participantType === "adult" ? "Dorosły" : "Dziecko / młodzież"}</p>
        <p><strong>Wiek:</strong> ${validatedData.participantType === "adult" ? "Dorosły" : escapeHtml(validatedData.participantAge)}</p>
        <p><strong>Lokalizacja:</strong> ${escapeHtml(validatedData.selectedLocationId)}</p>

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
        replyTo: "hoodmood.recepcja@gmail.com",
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
