import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal Notice | ODVIS",
  description: "Legal notice and disclaimer for Law Firm Vešligaj and Sliepčević.",
}

export default function LegalNoticePage() {
  return (
    <main className="container" style={{ paddingTop: "clamp(8rem, 18vh, 14rem)", paddingBottom: "var(--section-padding)" }}>
      <div className="section-header" style={{ marginBottom: "var(--space-16)" }}>
        <h1 className="section-title">Legal Notice</h1>
      </div>
      <div style={{ maxWidth: "780px", fontSize: "var(--font-size-lg)", lineHeight: 1.8, color: "var(--color-foreground)" }}>
        <p style={{ marginBottom: "var(--space-6)" }}>
          The following legal notice applies to all content and services provided on this website by ODVIS — Odvjetnički ured Vešligaj i Sliepčević.
        </p>
        <h2 style={{ fontSize: "var(--font-size-2xl)", marginBottom: "var(--space-4)", marginTop: "var(--space-12)" }}>1. Identity of the Law Firm</h2>
        <p style={{ marginBottom: "var(--space-6)" }}>
          Name: Javno trgovačko društvo Odvjetničko društvo Vešligaj i Sliepčević j.t.d.<br />
          Address: Froudeova ulica 9, 10000 Zagreb, Croatia<br />
          Telephone: 016521072<br />
          Email: info@odvis.hr<br />
          Founded: 03.05.2016.
        </p>
        <h2 style={{ fontSize: "var(--font-size-2xl)", marginBottom: "var(--space-4)", marginTop: "var(--space-12)" }}>2. Professional Regulation</h2>
        <p style={{ marginBottom: "var(--space-6)" }}>
          Attorneys at this firm are registered members of the Croatian Bar Association (HOK) and are bound by the Croatian Attorneys Act and the Code of Ethics of the Croatian Bar Association.
        </p>
        <h2 style={{ fontSize: "var(--font-size-2xl)", marginBottom: "var(--space-4)", marginTop: "var(--space-12)" }}>3. Disclaimer</h2>
        <p style={{ marginBottom: "var(--space-6)" }}>
          The content of this website is for general information purposes only and does not constitute legal advice. Transmission of information through this website does not create an attorney-client relationship. No action should be taken or omitted in reliance on the information provided herein without obtaining professional legal advice.
        </p>
        <h2 style={{ fontSize: "var(--font-size-2xl)", marginBottom: "var(--space-4)", marginTop: "var(--space-12)" }}>4. Confidentiality</h2>
        <p style={{ marginBottom: "var(--space-6)" }}>
          Emails sent to this firm via the website may not be automatically treated as confidential or privileged. Please do not send sensitive or confidential information through the contact form without first confirming that an attorney-client relationship has been established.
        </p>
        <h2 style={{ fontSize: "var(--font-size-2xl)", marginBottom: "var(--space-4)", marginTop: "var(--space-12)" }}>5. Intellectual Property</h2>
        <p style={{ marginBottom: "var(--space-6)" }}>
          All content on this website, including text, graphics, logos, and images, is the property of ODVIS unless otherwise stated. Unauthorised reproduction, distribution, or modification is prohibited.
        </p>
        <h2 style={{ fontSize: "var(--font-size-2xl)", marginBottom: "var(--space-4)", marginTop: "var(--space-12)" }}>6. External Links</h2>
        <p>
          This website may contain links to external websites. ODVIS has no control over the content of these external sites and accepts no responsibility for their content or practices.
        </p>
      </div>
    </main>
  )
}
