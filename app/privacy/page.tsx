import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | ODVIS",
  description: "Privacy policy of Law Firm Vešligaj and Sliepčević.",
}

export default function PrivacyPage() {
  return (
    <main className="container" style={{ paddingTop: "clamp(8rem, 18vh, 14rem)", paddingBottom: "var(--section-padding)" }}>
      <div className="section-header" style={{ marginBottom: "var(--space-16)" }}>
        <h1 className="section-title">Privacy Policy</h1>
      </div>
      <div style={{ maxWidth: "780px", fontSize: "var(--font-size-lg)", lineHeight: 1.8, color: "var(--color-foreground)" }}>
        <p style={{ marginBottom: "var(--space-6)" }}>
          This Privacy Policy explains how Javno trgovačko društvo Odvjetničko društvo Vešligaj i Sliepčević j.t.d. collects, uses, stores, and protects your personal data when you use our website and services.
        </p>
        <h2 style={{ fontSize: "var(--font-size-2xl)", marginBottom: "var(--space-4)", marginTop: "var(--space-12)" }}>1. Data Controller</h2>
        <p style={{ marginBottom: "var(--space-6)" }}>
          The data controller is Javno trgovačko društvo Odvjetničko društvo Vešligaj i Sliepčević j.t.d., Froudeova ulica 9, 10000 Zagreb, Croatia. You can contact us at info@odvis.hr.
        </p>
        <h2 style={{ fontSize: "var(--font-size-2xl)", marginBottom: "var(--space-4)", marginTop: "var(--space-12)" }}>2. What Data We Collect</h2>
        <p style={{ marginBottom: "var(--space-3)" }}>We may collect the following categories of personal data:</p>
        <ul>
          <li>Contact information (name, email address, phone number)</li>
          <li>Information you provide when submitting a contact form</li>
          <li>Technical data such as IP address and browser information via cookies and analytics</li>
        </ul>
        <h2 style={{ fontSize: "var(--font-size-2xl)", marginBottom: "var(--space-4)", marginTop: "var(--space-12)" }}>3. How We Use Your Data</h2>
        <p style={{ marginBottom: "var(--space-3)" }}>Your data is used for:</p>
        <ul>
          <li>Responding to enquiries submitted via our contact form</li>
          <li>Providing legal services you have requested</li>
          <li>Improving our website and user experience through analytics</li>
          <li>Complying with legal and regulatory obligations</li>
        </ul>
        <h2 style={{ fontSize: "var(--font-size-2xl)", marginBottom: "var(--space-4)", marginTop: "var(--space-12)" }}>4. Legal Basis for Processing</h2>
        <p style={{ marginBottom: "var(--space-6)" }}>
          We process personal data based on your consent (e.g. contact form submission), performance of a contract, compliance with legal obligations, or our legitimate interests.
        </p>
        <h2 style={{ fontSize: "var(--font-size-2xl)", marginBottom: "var(--space-4)", marginTop: "var(--space-12)" }}>5. Data Retention</h2>
        <p style={{ marginBottom: "var(--space-6)" }}>
          We retain personal data only for as long as necessary to fulfil the purposes for which it was collected or as required by applicable law.
        </p>
        <h2 style={{ fontSize: "var(--font-size-2xl)", marginBottom: "var(--space-4)", marginTop: "var(--space-12)" }}>6. Your Rights</h2>
        <p style={{ marginBottom: "var(--space-3)" }}>Under applicable data protection law, you have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Rectify inaccurate or incomplete data</li>
          <li>Erasure of your data under certain conditions</li>
          <li>Restrict processing</li>
          <li>Data portability</li>
          <li>Object to processing based on legitimate interests</li>
        </ul>
        <h2 style={{ fontSize: "var(--font-size-2xl)", marginBottom: "var(--space-4)", marginTop: "var(--space-12)" }}>7. Cookies</h2>
        <p style={{ marginBottom: "var(--space-6)" }}>
          We use cookies and similar technologies to enhance your browsing experience. You can control cookies through your browser settings.
        </p>
        <h2 style={{ fontSize: "var(--font-size-2xl)", marginBottom: "var(--space-4)", marginTop: "var(--space-12)" }}>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
        </p>
      </div>
    </main>
  )
}