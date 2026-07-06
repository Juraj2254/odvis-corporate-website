"use client"

import { HrHeader } from "@/components/layout/hr-header"

const teamMembers = [
  { slug: 'member-03', firstName: 'Marijan', lastName: 'Vešligaj', role: 'Odvjetnik', image: '/team/member-03.jpg' },
  { slug: 'member-04', firstName: 'Krešimir', lastName: 'Sliepčević', role: 'Odvjetnik', image: '/team/member-04.jpg' },
  { slug: 'member-01', firstName: 'Nikolina', lastName: 'Šajnović', role: 'Odvjetnički pripravnik', image: '/team/member-01.jpg' },
  { slug: 'member-02', firstName: 'Matea', lastName: 'Kušević', role: 'Odvjetnički pripravnik', image: '/team/member-02.jpg' },
]

export default function TeamPage() {
  return (
    <>
      <HrHeader activeFirm="tim" altHref="/team" />

      <main>
        <section className="team-page">
          <div className="container">
            <h1 className="team-page__title">Naš tim</h1>
            <p className="team-page__quote">
              Gradimo timove prilagođene vašim pravnim izazovima.
            </p>

            <div className="team-page__grid">
              {teamMembers.map((member) => (
                <div
                  key={member.slug}
                  className="team-page__member"
                >
                  <div className="team-page__member-image">
                    <img
                      src={member.image}
                      alt={`Portret: ${member.firstName} ${member.lastName}`}
                      className="team-page__member-img"
                      loading="lazy"
                    />
                  </div>
                  <h2 className="team-page__member-name">
                    {member.firstName} {member.lastName}
                  </h2>
                  <span className="team-page__member-role">{member.role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__brand">
              <img src="/logos/odvis-wordmark-light.svg" alt="ODVIS" className="footer__logo" />
              <p className="footer__tagline">
                Odvjetnički ured Vešligaj i Sliepčević. Specijalizirana pravna podrška za poduzeća i građane od 2016.
              </p>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Usluge</h4>
              <ul className="footer__links">
                <li><a href="/hr#usluge" className="footer__link">Pravo javne nabave</a></li>
                <li><a href="/hr#usluge" className="footer__link">Pravo nekretnina i zemljišnih knjiga</a></li>
                <li><a href="/hr#usluge" className="footer__link">Radno pravo i ugovori</a></li>
                <li><a href="/hr#usluge" className="footer__link">Opće pravne usluge</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Stručnost</h4>
              <ul className="footer__links">
                <li><a href="/hr#strucnost" className="footer__link">Praksa pred DKOM-om</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Ured</h4>
              <ul className="footer__links">
                <li><a href="/hr#o-nama" className="footer__link">O nama</a></li>
                <li><a href="/hr/tim" className="footer__link">Tim</a></li>
                <li><a href="/hr#kontakt" className="footer__link">Kontakt</a></li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <p className="footer__copyright">&copy; 2026 ODVIS. Sva prava pridržana.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
