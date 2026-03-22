"use server";

import { ContactFormData, contactFormSchema } from "@/lib/schemas/contactSchema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate on server
    const validatedData = contactFormSchema.parse(data);

    // Send email with Resend
    const result = await resend.emails.send({
      from: "noreply@hoodmood.pl",
      to: "contact@hoodmood.pl",
      subject: `Nowa wiadomość od ${validatedData.fullName}`,
      html: `
        <h2>Nowa wiadomość z formularza kontaktowego</h2>
        <p><strong>Imię i nazwisko:</strong> ${escapeHtml(validatedData.fullName)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(validatedData.email)}</p>
        <p><strong>Numer telefonu:</strong> ${escapeHtml(validatedData.phone)}</p>
        <hr style="margin: 20px 0;" />
        <h3>Wiadomość:</h3>
        <p>${escapeHtml(validatedData.message).replace(/\n/g, "<br />")}</p>
      `,
      replyTo: validatedData.email,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return {
        success: false,
        message: "Nie udało się wysłać wiadomości. Spróbuj ponownie później.",
      };
    }

    return {
      success: true,
      message: "Wiadomość wysłana pomyślnie!",
    };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      message: "Coś poszło nie tak. Spróbuj ponownie.",
    };
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}