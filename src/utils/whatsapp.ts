const WHATSAPP_PHONE = "5353166388";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`;

export function getWhatsAppUrl(message: string): string {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message?: string): void {
  window.open(
    message ? getWhatsAppUrl(message) : WHATSAPP_URL,
    "_blank",
    "noopener,noreferrer",
  );
}