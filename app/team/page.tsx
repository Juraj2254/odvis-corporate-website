"use client"

import { EnHeader } from "@/components/layout/en-header"

const teamMembers = [
  { slug: 'member-03', firstName: 'Marijan', lastName: 'Vešligaj', role: 'Attorney at Law', image: '/team/member-03.jpg' },
  { slug: 'member-04', firstName: 'Krešimir', lastName: 'Sliepčević', role: 'Attorney at Law', image: '/team/member-04.jpg' },
  { slug: 'member-01', firstName: 'Nikolina', lastName: 'Šajnović', role: 'Associate', image: '/team/member-01.jpg' },
  { slug: 'member-02', firstName: 'Matea', lastName: 'Kušević', role: 'Associate', image: '/team/member-02.jpg' },
]

export default function TeamPage() {
  return (
    <>
      <EnHeader activeFirm="team" altHref="/hr/tim" />

      <main>
        <section className="team-page">
          <div className="container">
            <h1 className="team-page__title">Our team</h1>
            <p className="team-page__quote">
              We create teams tailored to navigate your legal challenges.
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
                      alt={`Portrait of ${member.firstName} ${member.lastName}`}
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
                Law Firm Vešligaj and Sliepčević. Specialised legal support for businesses and individuals since 2016.
              </p>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Services</h4>
              <ul className="footer__links">
                <li><a href="/#services" className="footer__link">Public Procurement Law</a></li>
                <li><a href="/#services" className="footer__link">Real Estate & Land Registry</a></li>
                <li><a href="/#services" className="footer__link">Labour Law & Contracts</a></li>
                <li><a href="/#services" className="footer__link">General Legal Support</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Expertise</h4>
              <ul className="footer__links">
                <li><a href="/#expertise" className="footer__link">DKOM Practice</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">The Firm</h4>
              <ul className="footer__links">
                <li><a href="/#about" className="footer__link">About</a></li>
                <li><a href="/team" className="footer__link">Team</a></li>
                <li><a href="/#contact" className="footer__link">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <p className="footer__copyright">&copy; 2026 ODVIS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
