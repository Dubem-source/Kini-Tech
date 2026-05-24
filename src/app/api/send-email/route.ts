import { NextResponse } from "next/server";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, projectType, details } = body ?? {};

    if (!resend) {
      return NextResponse.json(
        { error: "Resend API key not configured" },
        { status: 500 },
      );
    }

    const subject = `Website inquiry${projectType ? ` - ${projectType}` : ""}`;

    const html = `
      <p>New website inquiry</p>
      <p><strong>Name:</strong> ${name || "(not provided)"}</p>
      <p><strong>Email:</strong> ${email || "(not provided)"}</p>
      <p><strong>Project type:</strong> ${projectType || "(not provided)"}</p>
      <p><strong>Details:</strong><br/>${(details || "(not provided)").replace(/\n/g, "<br/>")}</p>
    `;

    const response = await resend.emails.send({
      from: process.env.RESEND_SENDER ?? "contact@mail.dubemdev.me",
      to: process.env.RESEND_RECIPIENT ?? "dubem1817@gmail.com",
      subject,
      html,
    });

    return NextResponse.json({ ok: true, id: response.data?.id ?? null });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("send-email route error:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
