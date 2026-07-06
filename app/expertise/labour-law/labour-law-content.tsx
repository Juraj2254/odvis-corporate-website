"use client"

import { EnHeader } from "@/components/layout/en-header"

export default function LabourLawPage() {
  return (
    <>
      <EnHeader activeExpertise="labour-law" altHref="/hr/strucnost/radno-pravo" />

      <main>
        <section className="expertise-detail">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">Expertise</span>
                <h1 className="section-title">Labour Law & Employment Contracts</h1>
              </div>
            </div>
            <div className="expertise-detail__layout">
              <div className="expertise-detail__content">
                <p>
                  We provide comprehensive legal support in all aspects of labour law—from drafting and reviewing employment contracts and collective agreements to representing clients in labour disputes, redundancies, and industrial action.
                </p>
                <ul>
                  <li>Drafting and negotiating employment contracts, non-competition and confidentiality agreements,</li>
                  <li>Review of general acts and internal company policies to ensure compliance with labour legislation,</li>
                  <li>Representation in labour disputes, including claims for unlawful termination, unpaid wages, and discrimination,</li>
                  <li>Advising on restructuring, redundancies, and large-scale dismissals,</li>
                  <li>Support during trade union negotiations and industrial action,</li>
                  <li>Due diligence of employment-related risks in M&A transactions.</li>
                </ul>
                <p>
                  We work with both employers and employees, bringing an understanding of the practical realities of the workplace alongside strict legal precision.
                </p>
              </div>
              <aside className="expertise-sidebar">
                <div className="expertise-contact">
                  <span className="expertise-contact__label">Practice contacts</span>
                  <a href="/team" className="expertise-contact__card">
                    <div className="expertise-contact__media">
                      <img src="/team/member-03.jpg" alt="Marijan Vešligaj" className="expertise-contact__image" loading="lazy" />
                    </div>
                    <div className="expertise-contact__info">
                      <span className="expertise-contact__name">Marijan Vešligaj</span>
                      <span className="expertise-contact__role">Attorney at Law</span>
                    </div>
                  </a>
                  <a href="/team" className="expertise-contact__card">
                    <div className="expertise-contact__media">
                      <img src="/team/member-04.jpg" alt="Krešimir Sliepčević" className="expertise-contact__image" loading="lazy" />
                    </div>
                    <div className="expertise-contact__info">
                      <span className="expertise-contact__name">Krešimir Sliepčević</span>
                      <span className="expertise-contact__role">Attorney at Law</span>
                    </div>
                  </a>
                </div>
                <div className="expertise-practices">
                  <span className="expertise-practices__label">Practices</span>
                  <nav className="expertise-practices__nav" aria-label="Related practices">
                    <a href="/expertise/public-procurement" className="expertise-practices__link">Public Procurement</a>
                    <a href="/expertise/real-estate" className="expertise-practices__link">Real Estate & Land Registry</a>
                    <a href="/expertise/labour-law" className="expertise-practices__link expertise-practices__link--active">Labour Law</a>
                    <a href="/expertise/general-legal" className="expertise-practices__link">General Law</a>
                  </nav>
                </div>
              </aside>
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