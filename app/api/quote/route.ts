import { NextResponse } from "next/server";
import { quoteForm } from "@/data/site";
import { EMAIL_RE, escapeHtml as e, isNonEmpty, sendTelegramMessage, timestamp } from "@/lib/telegram";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field
  if (isNonEmpty(data.website)) return NextResponse.json({ ok: true });

  const errors: string[] = [];
  if (!isNonEmpty(data.fullName, 120)) errors.push("Full name is required.");
  if (!isNonEmpty(data.email, 160) || !EMAIL_RE.test(String(data.email))) errors.push("A valid email is required.");
  if (!isNonEmpty(data.phone, 40)) errors.push("Phone / WhatsApp is required.");
  if (!quoteForm.businessTypes.includes(String(data.businessType))) errors.push("Please select a business type.");
  const services = Array.isArray(data.services)
    ? data.services.filter((s): s is string => typeof s === "string" && quoteForm.services.includes(s))
    : [];
  if (services.length === 0) errors.push("Select at least one service.");
  if (!quoteForm.languages.includes(String(data.language))) errors.push("Please choose a preferred language.");
  if (typeof data.message === "string" && data.message.length > 3000) errors.push("Message is too long.");

  if (errors.length) return NextResponse.json({ ok: false, error: errors.join(" ") }, { status: 422 });

  const text = [
    "📋 <b>New Quotation Request</b> — Fidinda Financial",
    "",
    `<b>Name:</b> ${e(data.fullName)}`,
    `<b>Company:</b> ${e(data.company) || "—"}`,
    `<b>Email:</b> ${e(data.email)}`,
    `<b>Phone/WhatsApp:</b> ${e(data.phone)}`,
    `<b>Business type:</b> ${e(data.businessType)}`,
    `<b>Language:</b> ${e(data.language)}`,
    "",
    "<b>Services needed:</b>",
    ...services.map((s) => `• ${e(s)}`),
    "",
    "<b>Message:</b>",
    e(data.message) || "—",
    "",
    `<i>${e(timestamp())}</i>`,
  ].join("\n");

  try {
    await sendTelegramMessage(text);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your request right now. Please call or email us instead." },
      { status: 500 }
    );
  }
}
