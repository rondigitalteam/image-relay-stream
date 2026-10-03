import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(200),
  business: z.string().trim().max(200).optional().default(""),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(50).optional().default(""),
  service: z.string().trim().max(200).optional().default(""),
  budget: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().min(1).max(5000),
});

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data) => schema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env['RESEND_API_KEY'];
    if (!apiKey) throw new Error("RESEND_API_KEY is not configured");
    const to = process.env['CONTACT_TO_EMAIL'] || "rondigital.team@gmail.com";
    const from = process.env['CONTACT_FROM_EMAIL'] || "Ron Digital <onboarding@resend.dev>";

    const rows = Object.entries(data)
      .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0"><b>${esc(k)}</b></td><td>${esc(String(v || "-")).replace(/\n/g, "<br>")}</td></tr>`)
      .join("");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `New project request from ${data.name}`,
        html: `<h2>New contact form message</h2><table>${rows}</table>`,
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      console.error(`Resend failed [${res.status}]: ${body}`);
      throw new Error(`Email failed [${res.status}]: ${body}`);
    }
    return { ok: true };
  });
