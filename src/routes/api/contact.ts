import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

/** Boîte de réception des demandes du formulaire de contact. */
const TO = "contact@musete-advisory.com";
/** Expéditeur technique — doit appartenir au domaine vérifié dans Resend. */
const FROM = "Site MUSETE Advisory <site@musete-advisory.com>";

const MAX = { name: 120, email: 200, org: 200, msg: 5000 };

function clean(value: FormDataEntryValue | null, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const form = await request.formData();

        // Champ leurre invisible : rempli uniquement par les robots.
        if (clean(form.get("website"), 100)) {
          return Response.json({ ok: true });
        }

        const name = clean(form.get("name"), MAX.name);
        const email = clean(form.get("email"), MAX.email);
        const org = clean(form.get("org"), MAX.org);
        const msg = clean(form.get("msg"), MAX.msg);

        if (!name || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
          return Response.json(
            { ok: false, error: "Nom et email professionnel valides requis." },
            { status: 400 },
          );
        }

        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
          console.error("[contact] RESEND_API_KEY absente — message non envoyé");
          return Response.json(
            { ok: false, error: "Service d'envoi indisponible." },
            { status: 500 },
          );
        }

        const rows: Array<[string, string]> = [
          ["Nom", name],
          ["Email", email],
          ["Organisation & fonction", org || "—"],
          ["Besoin", msg || "—"],
        ];

        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: FROM,
            to: [TO],
            reply_to: email,
            subject: `Demande de contact — ${name}${org ? ` (${org})` : ""}`,
            text: rows.map(([k, v]) => `${k} : ${v}`).join("\n\n"),
            html: rows
              .map(
                ([k, v]) =>
                  `<p style="margin:0 0 16px"><strong>${k}</strong><br>${escapeHtml(v).replace(/\n/g, "<br>")}</p>`,
              )
              .join(""),
          }),
        });

        if (!res.ok) {
          console.error("[contact] Resend a répondu", res.status, await res.text());
          return Response.json(
            { ok: false, error: "L'envoi a échoué. Réessayez ou écrivez-nous directement." },
            { status: 502 },
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});
