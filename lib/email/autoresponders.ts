import "server-only";

import type { ContactFormData } from "@/lib/schemas/contactSchema";
import type { EnrollmentFormData } from "@/lib/schemas/enrollmentSchema";

const SITE_URL = "https://hoodmood.pl";
const LOGO_URL = `${SITE_URL}/assets/optimized/home/logo.png`;
const PRIVACY_URL = `${SITE_URL}/polityka-prywatnosci`;
const TERMS_URL = `${SITE_URL}/regulamin`;
const DATA_CONTROLLER =
  "Talita Jarzęcka Centrum Rozwoju Dzieci i Młodzieży";

export function escapeHtml(value: string): string {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };

  return value.replace(/[&<>"']/g, (character) => entities[character]);
}

function textWithLineBreaks(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, "<br />");
}

function firstName(fullName: string): string {
  return fullName.trim().split(/\s+/)[0] ?? "";
}

function detailRow(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:6px 12px 6px 0;color:#6b5c62;font-size:14px;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td>
      <td style="padding:6px 0;color:#211a1d;font-size:14px;vertical-align:top;">${value}</td>
    </tr>`;
}

type EmailLayoutOptions = {
  previewText: string;
  greetingName: string;
  message: string;
  summaryTitle: string;
  summaryHtml: string;
  includeTerms?: boolean;
  signoff?: string;
};

function emailLayout({
  previewText,
  greetingName,
  message,
  summaryTitle,
  summaryHtml,
  includeTerms = false,
  signoff = "Do zobaczenia!",
}: EmailLayoutOptions): string {
  const greeting = greetingName ? `Cześć ${escapeHtml(greetingName)}!` : "Cześć!";
  const footerLinks = includeTerms
    ? `<a href="${PRIVACY_URL}" style="color:#a23f63;text-decoration:underline;">Polityka prywatności</a><span style="color:#b8aeb2;"> &bull; </span><a href="${TERMS_URL}" style="color:#a23f63;text-decoration:underline;">Regulamin</a>`
    : `<a href="${PRIVACY_URL}" style="color:#a23f63;text-decoration:underline;">Polityka prywatności</a>`;

  return `<!doctype html>
<html lang="pl">
  <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
  <body style="margin:0;padding:0;background:#f7f4f5;color:#211a1d;font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(previewText)}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;background:#f7f4f5;">
      <tr><td align="center" style="padding:24px 12px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:600px;background:#ffffff;border:1px solid #eee5e8;border-radius:16px;">
          <tr><td style="padding:30px 30px 12px;">
            <img src="${LOGO_URL}" width="132" alt="Hoodmood Dance Studio" style="display:block;width:132px;max-width:100%;height:auto;border:0;">
          </td></tr>
          <tr><td style="padding:18px 30px 8px;">
            <h1 style="margin:0 0 18px;color:#211a1d;font-size:28px;line-height:1.2;font-weight:700;">${greeting}</h1>
            <p style="margin:0;color:#4f4348;font-size:16px;line-height:1.7;">${escapeHtml(message)}</p>
            <p style="margin:22px 0 0;color:#4f4348;font-size:16px;line-height:1.7;">${escapeHtml(signoff)}<br><strong>Hoodmood Dance Studio</strong></p>
          </td></tr>
          <tr><td style="padding:24px 30px;">
            <div style="height:3px;width:44px;background:#c4587b;border-radius:3px;margin-bottom:18px;"></div>
            <h2 style="margin:0 0 14px;color:#211a1d;font-size:19px;line-height:1.3;">${escapeHtml(summaryTitle)}</h2>
            ${summaryHtml}
          </td></tr>
          <tr><td style="padding:22px 30px 30px;border-top:1px solid #eee5e8;color:#75686d;font-size:12px;line-height:1.6;">
            <p style="margin:0 0 8px;"><strong style="color:#4f4348;">Hoodmood Dance Studio</strong><br><a href="${SITE_URL}" style="color:#a23f63;text-decoration:none;">hoodmood.pl</a></p>
            <p style="margin:0 0 8px;">${footerLinks}</p>
            <p style="margin:0;">Administratorem Twoich danych osobowych jest ${DATA_CONTROLLER}. Dane przekazane za pośrednictwem formularza przetwarzamy w celu obsługi Twojej wiadomości lub zgłoszenia.</p>
            <p style="margin:8px 0 0;">&copy; Hoodmood Dance Studio</p>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;
}

export function contactConfirmationEmail(data: ContactFormData): string {
  const safeEmail = escapeHtml(data.email);
  const summaryHtml = `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;border-collapse:collapse;">
      ${detailRow("Imię i nazwisko", escapeHtml(data.fullName))}
      ${detailRow("Email", `<a href="mailto:${safeEmail}" style="color:#a23f63;text-decoration:underline;">${safeEmail}</a>`)}
      ${detailRow("Telefon", escapeHtml(data.phone))}
    </table>
    <p style="margin:18px 0 8px;color:#6b5c62;font-size:14px;">Wiadomość</p>
    <div style="padding:16px;background:#faf6f7;border-left:3px solid #c4587b;border-radius:8px;color:#392f33;font-size:14px;line-height:1.65;">${textWithLineBreaks(data.message)}</div>`;

  return emailLayout({
    previewText: "Otrzymaliśmy Twoją wiadomość.",
    greetingName: firstName(data.fullName),
    message:
      "Dzięki za kontakt! Twoja wiadomość właśnie do nas wpadła. Przeczytamy ją i odezwiemy się do Ciebie tak szybko, jak to możliwe.",
    summaryTitle: "Twoja wiadomość",
    summaryHtml,
  });
}

export function enrollmentConfirmationEmail(data: EnrollmentFormData): string {
  const safeEmail = escapeHtml(data.email);
  const participantType =
    data.participantType === "adult" ? "Dorosły" : "Dziecko / młodzież";
  const location = data.selectedClasses[0]?.locationName;
  const classes = data.selectedClasses
    .map(
      (item) =>
        `<li style="margin:0 0 12px;"><strong>${escapeHtml(item.classTypeName)}</strong><br><span style="color:#6b5c62;">${escapeHtml(item.locationName)} &bull; ${escapeHtml(item.timeLabel)}</span><br><span style="color:#6b5c62;">Częstotliwość: ${escapeHtml(frequencyLabel(item.dayLabel))}</span></li>`,
    )
    .join("");

  const rows = [
    detailRow("Uczestnik", escapeHtml(data.participantFullName)),
    detailRow("Grupa wiekowa", participantType),
    data.participantType === "youth"
      ? detailRow("Wiek", `${escapeHtml(data.participantAge)} lat`)
      : "",
    location ? detailRow("Lokalizacja", escapeHtml(location)) : "",
    detailRow("Osoba kontaktowa", escapeHtml(data.parentFullName)),
    detailRow(
      "Email",
      `<a href="mailto:${safeEmail}" style="color:#a23f63;text-decoration:underline;">${safeEmail}</a>`,
    ),
    detailRow("Telefon", escapeHtml(data.phone)),
  ].join("");

  const notes = data.notes?.trim()
    ? `<p style="margin:18px 0 8px;color:#6b5c62;font-size:14px;">Dodatkowe uwagi</p><div style="padding:16px;background:#faf6f7;border-left:3px solid #c4587b;border-radius:8px;color:#392f33;font-size:14px;line-height:1.65;">${textWithLineBreaks(data.notes.trim())}</div>`
    : "";

  return emailLayout({
    previewText: "Otrzymaliśmy Twoje zgłoszenie do Hoodmood.",
    greetingName: firstName(data.parentFullName),
    message:
      "Dziękujemy za zapis do Hoodmood! Twoje zgłoszenie już do nas dotarło. Nasza recepcja wkrótce skontaktuje się z Tobą i przekaże najważniejsze informacje dotyczące zajęć. Do zobaczenia na sali!",
    summaryTitle: "Twoje zgłoszenie",
    summaryHtml: `
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;border-collapse:collapse;">${rows}</table>
      <p style="margin:18px 0 8px;color:#6b5c62;font-size:14px;">Wybrane zajęcia</p>
      <ul style="margin:0;padding:16px 16px 8px 34px;background:#faf6f7;border-radius:8px;color:#392f33;font-size:14px;line-height:1.55;">${classes}</ul>
      ${notes}`,
    includeTerms: true,
    signoff: "Pozdrawiamy!",
  });
}

function frequencyLabel(frequency: string): string {
  const normalized = frequency.trim();

  if (/^\d+$/.test(normalized)) {
    return `${normalized}x w tygodniu`;
  }

  return normalized;
}
