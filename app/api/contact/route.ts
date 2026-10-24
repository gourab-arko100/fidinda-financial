import { NextResponse } from "next/server";
import { contactPage } from "@/data/site";
import { EMAIL_RE, escapeHtml as e, isNonEmpty, sendTelegramMessage, timestamp } from "@/lib/telegram";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (isNonEmpty(data.website)) return NextResponse.json({ ok: true });

  const errors: string[] = [];
  if (!isNonEmpty(data.name, 120)) errors.push("Name is required.");
  if (!isNonEmpty(data.email, 160) || !EMAIL_RE.test(String(data.email))) errors.push("A valid email is required.");
  if (!isNonEmpty(data.message, 3000)) errors.push("Message is required.");
  if (data.consent !== true) errors.push("Consent is required.");
  if (errors.length) return NextResponse.json({ ok: false, error: errors.join(" ") }, { status: 422 });

  const services = Array.isArray(data.services)
    ? data.services.filter((s): s is string => typeof s === "string" && contactPage.services.includes(s))
    : [];
  const opt = (v: unknown) => (isNonEmpty(v, 200) ? e(v) : "—");

  const text = [
    "✉️ <b>New Contact Enquiry</b> — Fidinda Financial",
    "",
    "<b>About them</b>",
    `Name: ${e(data.name)}`,
    `Email: ${e(data.email)}`,
    `Phone/WhatsApp: ${opt(data.phone)}`,
    `Company: ${opt(data.company)}`,
    "",
    "<b>Enquiry</b>",
    `Topic: ${opt(data.topic)}`,
    `Business type: ${opt(data.businessType)}`,
    `Language: ${opt(data.language)}`,
    `Contact via: ${opt(data.contactMethod)}`,
    `Services: ${services.length ? services.map(e).join(", ") : "—"}`,
    "",
    "<b>Message</b>",
    e(data.message),
    "",
    `<i>${e(timestamp())}</i>`,
  ].join("\n");

  try {
    await sendTelegramMessage(text);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Your message couldn't be sent right now. Please call or email us instead." },
      { status: 500 }
    );
  }
}
