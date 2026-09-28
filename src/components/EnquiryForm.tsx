"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";

type PropertyType = "HDB" | "Condominium" | "Commercial";

/* Size options differ by property type — "4-room" is meaningless for an
   office, and "3 bedroom" is not how an HDB flat is described here. */
const SIZES: Record<PropertyType, string[]> = {
  HDB: ["2-room", "3-room", "4-room", "5-room", "Executive", "Jumbo / maisonette"],
  Condominium: ["Studio", "1 bedroom", "2 bedroom", "3 bedroom", "4 bedroom or more", "Penthouse"],
  Commercial: ["Under 1,000 sqft", "1,000–3,000 sqft", "3,000–6,000 sqft", "Over 6,000 sqft"],
};

const SCOPES = [
  "Full renovation",
  "Carpentry only",
  "Kitchen",
  "Bathroom",
  "Flooring",
  "Commercial fit-out",
  "Partitioning & painting",
];

const BUDGETS = ["Under $30k", "$30k – $50k", "$50k – $80k", "$80k – $150k", "Over $150k", "Not sure yet"];
const STATUSES = ["New keys — not collected", "New keys — collected", "Resale", "Currently living in it"];
const TIMELINES = ["As soon as possible", "1–3 months", "3–6 months", "Over 6 months", "Just exploring"];

const FIELD =
  "mt-2 w-full border-b border-line bg-transparent pb-2 text-base text-ink outline-none transition-colors focus:border-clay-ink";

export function EnquiryForm() {
  const [type, setType] = useState<PropertyType>("HDB");
  const [size, setSize] = useState("");
  const [scopes, setScopes] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState("");
  const [timeline, setTimeline] = useState("");
  const [sqft, setSqft] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const partitionOnly = scopes.length === 1 && scopes[0] === "Partitioning & painting";

  function toggleScope(s: string) {
    setScopes((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  }

  function compose() {
    const lines = [
      `New enquiry from ${site.url.replace(/^https?:\/\//, "")}`,
      "",
      `Name: ${name}`,
      `Mobile: ${phone}`,
      email && `Email: ${email}`,
      "",
      `Property: ${type}${size ? ` — ${size}` : ""}`,
      sqft && `Area: ${sqft} sqft`,
      status && `Status: ${status}`,
      scopes.length > 0 && `Scope: ${scopes.join(", ")}`,
      budget && `Budget: ${budget}`,
      timeline && `Start: ${timeline}`,
      message && `\n${message}`,
    ].filter(Boolean);
    return lines.join("\n");
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    const body = compose();

    /*
     * Email a copy before handing off to WhatsApp. A wa.me link only opens the
     * app with the message pre-filled — if the sender never presses send, the
     * enquiry is lost and the studio never knows it existed. This keeps it.
     *
     * Without a key configured the form still works; it just goes straight to
     * WhatsApp, which is the behaviour the studio asked for as a minimum.
     */
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (key) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: key,
            subject: `Enquiry — ${type}${size ? ` ${size}` : ""} — ${name}`,
            from_name: name,
            replyto: email || undefined,
            message: body,
          }),
        });
      } catch {
        /* Never block the WhatsApp hand-off on the email copy failing. */
      }
    }

    window.open(whatsappLink(body), "_blank", "noopener,noreferrer");
    setSending(false);
  }

  return (
    <form onSubmit={onSubmit} className="mt-12 space-y-10">
      <fieldset>
        <legend className="label text-muted">Property type</legend>
        <div className="mt-4 flex flex-wrap gap-3">
          {(Object.keys(SIZES) as PropertyType[]).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setType(t);
                setSize("");
              }}
              aria-pressed={type === t}
              className={`label rounded-full border px-5 py-2.5 transition-colors ${
                type === t ? "border-ink bg-ink text-bone" : "border-line text-ink hover:border-clay"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-10 md:grid-cols-2">
        <label className="block">
          <span className="label text-muted">{type === "Commercial" ? "Size" : "Size by bedrooms"}</span>
          <select value={size} onChange={(e) => setSize(e.target.value)} className={FIELD} required>
            <option value="">Select…</option>
            {SIZES[type].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="label text-muted">Floor area, sqft (optional)</span>
          <input
            value={sqft}
            onChange={(e) => setSqft(e.target.value)}
            inputMode="numeric"
            placeholder="e.g. 1,100"
            className={FIELD}
          />
        </label>
      </div>

      <fieldset>
        <legend className="label text-muted">Scope of works</legend>
        <div className="mt-4 flex flex-wrap gap-3">
          {SCOPES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => toggleScope(s)}
              aria-pressed={scopes.includes(s)}
              className={`label rounded-full border px-4 py-2 transition-colors ${
                scopes.includes(s) ? "border-clay-ink bg-clay-ink text-bone" : "border-line text-ink hover:border-clay"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Partitioning and painting is handled by the studio's other site. */}
        {partitionOnly && (
          <p className="mt-5 border-l-2 border-clay pl-4 text-sm leading-relaxed text-ink-soft">
            Partitioning and painting is handled by{" "}
            <a
              href={site.sister.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-clay-ink underline underline-offset-4"
            >
              {site.sister.name}
            </a>
            , also ours — you will get a faster answer there. Send this anyway if the job also involves
            anything above.
          </p>
        )}
      </fieldset>

      <div className="grid gap-10 md:grid-cols-3">
        <label className="block">
          <span className="label text-muted">Property status</span>
          <select value={status} onChange={(e) => setStatus(e.target.value)} className={FIELD}>
            <option value="">Select…</option>
            {STATUSES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="label text-muted">Budget</span>
          <select value={budget} onChange={(e) => setBudget(e.target.value)} className={FIELD}>
            <option value="">Select…</option>
            {BUDGETS.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="label text-muted">When to start</span>
          <select value={timeline} onChange={(e) => setTimeline(e.target.value)} className={FIELD}>
            <option value="">Select…</option>
            {TIMELINES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        <label className="block">
          <span className="label text-muted">Name</span>
          <input value={name} onChange={(e) => setName(e.target.value)} required className={FIELD} />
        </label>
        <label className="block">
          <span className="label text-muted">Mobile</span>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            required
            placeholder="+65"
            className={FIELD}
          />
        </label>
        <label className="block">
          <span className="label text-muted">Email (optional)</span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className={FIELD} />
        </label>
      </div>

      <label className="block">
        <span className="label text-muted">Your enquiry</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="What are you hoping to do?"
          className={`${FIELD} resize-y`}
        />
      </label>

      <div>
        <button
          type="submit"
          disabled={sending}
          className="label inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-bone transition-colors hover:bg-clay-ink disabled:opacity-60"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[1.15em] w-[1.15em] shrink-0 fill-current">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.19 3.7.59.26 1.04.41 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
          </svg>
          {sending ? "Opening WhatsApp…" : "Send on WhatsApp"}
        </button>

        <p className="mt-5 max-w-lg text-xs leading-relaxed text-ink-soft">
          This opens WhatsApp with your enquiry filled in — press send there to deliver it. Your details are
          used only to reply to this enquiry, under Singapore&apos;s PDPA, and are not passed to anyone else.
        </p>
      </div>
    </form>
  );
}
