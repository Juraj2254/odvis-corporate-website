"use client"

import { useState } from "react"

interface ContactFormProps {
  locale?: "en" | "hr"
}

const COPY_EN = {
  nameLabel: "Name",
  emailLabel: "Email",
  messageLabel: "Message",
  submit: "Send message",
  sending: "Sending…",
  success: "Thank you. We have received your message and will be in touch shortly.",
  error: "Something went wrong. Please try again later.",
}

const COPY_HR = {
  nameLabel: "Ime",
  emailLabel: "E-mail",
  messageLabel: "Poruka",
  submit: "Pošalji poruku",
  sending: "Šaljem…",
  success: "Hvala. Primili smo vašu poruku i javit ćemo vam se uskoro.",
  error: "Dogodila se greška. Molimo pokušajte ponovno kasnije.",
}

export default function ContactForm({ locale = "en" }: ContactFormProps) {
  const copy = locale === "hr" ? COPY_HR : COPY_EN
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    setError(null)

    const form = e.currentTarget
    const fd = new FormData(form)
    const data = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      message: String(fd.get("message") || "").trim(),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const result = await res.json().catch(() => ({}))
      if (!res.ok || !result.success) {
        setStatus("error")
        setError(result.error || copy.error)
        return
      }
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
      setError(copy.error)
    }
  }

  return (
    <form className="contact__form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">{copy.nameLabel}</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          required
          disabled={status === "sending"}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">{copy.emailLabel}</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          required
          disabled={status === "sending"}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">{copy.messageLabel}</label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          required
          disabled={status === "sending"}
        ></textarea>
      </div>

      <button
        type="submit"
        className="form-submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? copy.sending : copy.submit}
      </button>

      {status === "success" && (
        <p style={{ marginTop: "var(--space-4)", color: "#16A34A", fontSize: "var(--font-size-sm)" }}>{copy.success}</p>
      )}
      {status === "error" && (
        <p style={{ marginTop: "var(--space-4)", color: "#DC2626", fontSize: "var(--font-size-sm)" }}>{error}</p>
      )}
    </form>
  )
}