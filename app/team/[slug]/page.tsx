"use client"

import { EnHeader } from "@/components/layout/en-header"

const teamMembers = [
  { slug: "member-03", firstName: "Marijan", lastName: "Vešligaj", role: "Attorney at Law", image: "/team/member-03.jpg", bio: "Marijan Vešligaj founded the firm in 2016 after more than a decade of practice in the private sector. He specialises in public procurement law and has represented clients in over 200 DKOM proceedings. He is a certified public procurement specialist and authorised mediator." },
  { slug: "member-04", firstName: "Krešimir", lastName: "Sliepčević", role: "Attorney at Law", image: "/team/member-04.jpg", bio: "Krešimir Sliepčević leads the firm's real estate and corporate practice. With extensive experience in land registry procedures, commercial contracts, and due diligence, he advises clients on complex property transactions and corporate restructuring." },
  { slug: "member-01", firstName: "Nikolina", lastName: "Šajnović", role: "Associate", image: "/team/member-01.jpg", bio: "Nikolina Šajnović specialises in public procurement and administrative law. She advises clients on tender documentation, bid preparation, and representation before DKOM and other public authorities." },
  { slug: "member-02", firstName: "Matea", lastName: "Kušević", role: "Associate", image: "/team/member-02.jpg", bio: "Matea Kušević provides legal support across labour law and general legal matters. She assists with contract drafting, employment disputes, administrative procedures, and day-to-day client advisory." },
]

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug)

  if (!member) return <div className="container" style={{ paddingTop: "120px" }}>Member not found.</div>

  return (
    <>
      <EnHeader activeFirm="team" altHref="/hr/tim" />

      <main>
        <section className="team-page" style={{ paddingTop: "120px" }}>
          <div className="container">
            <div className="team-page__grid" style={{ gridTemplateColumns: "1fr 2fr", gap: "4rem" }}>
              <div>
                <div style={{ position: "relative", width: "100%", aspectRatio: "600 / 800", backgroundColor: "var(--color-border)", overflow: "hidden" }}>
                  <img src={member.image} alt={`Portrait of ${member.firstName} ${member.lastName}`} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                </div>
              </div>
              <div>
                <h1 style={{ fontSize: "var(--font-size-5xl)", fontWeight: "var(--font-regular)", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "var(--space-6)" }}>
                  {member.firstName}<br />{member.lastName}
                </h1>
                <span style={{ fontSize: "var(--font-size-xs)", fontWeight: "var(--font-light)", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-muted-foreground)", display: "block", marginBottom: "var(--space-12)" }}>{member.role}</span>
                <p style={{ fontSize: "var(--font-size-lg)", lineHeight: 1.8, maxWidth: "640px" }}>{member.bio}</p>
                <div style={{ marginTop: "var(--space-12)" }}>
                  <a href="/team" className="service-card__link">
                    Back to team
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__brand">
              <img src="/logos/odvis-wordmark-light.svg" alt="ODVIS" className="footer__logo" />
              <p className="footer__tagline">Law Firm Vešligaj and Sliepčević. Specialised legal support for businesses and individuals since 2016.</p>
            </div>
            <div className="footer__column"><h4 className="footer__column-title">Services</h4></div>
            <div className="footer__column"><h4 className="footer__column-title">Expertise</h4></div>
            <div className="footer__column"><h4 className="footer__column-title">The Firm</h4></div>
          </div>
          <div className="footer__bottom"><p className="footer__copyright">© 2026 ODVIS. All rights reserved.</p></div>
        </div>
      </footer>
    </>
  )
}
