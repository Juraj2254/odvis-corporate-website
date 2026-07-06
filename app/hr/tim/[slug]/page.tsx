"use client"

import { HrHeader } from "@/components/layout/hr-header"

const teamMembers = [
  { slug: "member-03", firstName: "Marijan", lastName: "Vešligaj", role: "Odvjetnik", image: "/team/member-03.jpg", bio: "Marijan Vešligaj osnovao je ured 2016. godine nakon više od desetljeća prakse u privatnom sektoru. Specijalizirao se za pravo javne nabave i zastupao je klijente u više od 200 postupaka pred DKOM-om. Certificirani je stručnjak za javnu nabavu i ovlašteni medijator." },
  { slug: "member-04", firstName: "Krešimir", lastName: "Sliepčević", role: "Odvjetnik", image: "/team/member-04.jpg", bio: "Krešimir Sliepčević vodi praksu nekretnina i korporativnog prava u uredu. S bogatim iskustvom u zemljišnoknjižnim postupcima, trgovinskim ugovorima i due diligenceu, savjetuje klijente u složenim imovinskim transakcijama i restrukturiranju društava." },
  { slug: "member-01", firstName: "Nikolina", lastName: "Šajnović", role: "Odvjetnički pripravnik", image: "/team/member-01.jpg", bio: "Nikolina Šajnović specijalizirala je za pravo javne nabave i upravno pravo. Savjetuje klijente o natječajnoj dokumentaciji, pripremi ponuda te zastupanju pred DKOM-om i drugim državnim tijelima." },
  { slug: "member-02", firstName: "Matea", lastName: "Kušević", role: "Odvjetnički pripravnik", image: "/team/member-02.jpg", bio: "Matea Kušević pruža pravnu podršku u područjima radnog prava i općih pravnih poslova. Pomaže kod izrade ugovora, radnih sporova, upravnih postupaka i svakodnevnog savjetovanja klijenata." },
]

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug)

  if (!member) return <div className="container" style={{ paddingTop: "120px" }}>Član nije pronađen.</div>

  return (
    <>
      <HrHeader activeFirm="tim" altHref="/team" />

      <main>
        <section className="team-page" style={{ paddingTop: "120px" }}>
          <div className="container">
            <div className="team-page__grid" style={{ gridTemplateColumns: "1fr 2fr", gap: "4rem" }}>
              <div>
                <div style={{ position: "relative", width: "100%", aspectRatio: "600 / 800", backgroundColor: "var(--color-border)", overflow: "hidden" }}>
                  <img src={member.image} alt={`Portret: ${member.firstName} ${member.lastName}`} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                </div>
              </div>
              <div>
                <h1 style={{ fontSize: "var(--font-size-5xl)", fontWeight: "var(--font-regular)", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "var(--space-6)" }}>
                  {member.firstName}<br />{member.lastName}
                </h1>
                <span style={{ fontSize: "var(--font-size-xs)", fontWeight: "var(--font-light)", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-muted-foreground)", display: "block", marginBottom: "var(--space-12)" }}>{member.role}</span>
                <p style={{ fontSize: "var(--font-size-lg)", lineHeight: 1.8, maxWidth: "640px" }}>{member.bio}</p>
                <div style={{ marginTop: "var(--space-12)" }}>
                  <a href="/hr/tim" className="service-card__link">
                    Povratak na tim
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
              <p className="footer__tagline">Odvjetnički ured Vešligaj i Sliepčević. Specijalizirana pravna podrška za poduzeća i građane od 2016.</p>
            </div>
            <div className="footer__column"><h4 className="footer__column-title">Usluge</h4></div>
            <div className="footer__column"><h4 className="footer__column-title">Stručnost</h4></div>
            <div className="footer__column"><h4 className="footer__column-title">Ured</h4></div>
          </div>
          <div className="footer__bottom"><p className="footer__copyright">© 2026 ODVIS. Sva prava pridržana.</p></div>
        </div>
      </footer>
    </>
  )
}
