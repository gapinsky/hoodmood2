"use server";

import {
  ContactFormData,
  contactFormSchema,
} from "@/lib/schemas/contactSchema";
import { Resend } from "resend";
import {
  contactConfirmationEmail,
  escapeHtml,
} from "@/lib/email/autoresponders";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate on server
    const validatedData = contactFormSchema.parse(data);

    // Send email with Resend
    const result = await resend.emails.send({
      from: "formularz@kontakt.hoodmood.pl",
      to: "hoodmood.recepcja@gmail.com",
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

    try {
      const confirmation = await resend.emails.send({
        from: "formularz@kontakt.hoodmood.pl",
        to: validatedData.email,
        replyTo: "hoodmood.recepcja@gmail.com",
        subject: "Dzięki za wiadomość! 💗",
        html: contactConfirmationEmail(validatedData),
      });

      if (confirmation.error) {
        console.error("Contact autoresponder delivery failed");
      }
    } catch {
      console.error("Contact autoresponder delivery failed");
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
