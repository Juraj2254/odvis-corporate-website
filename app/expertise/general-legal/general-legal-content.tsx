"use client"

import { EnHeader } from "@/components/layout/en-header"

export default function GeneralLegalPage() {
  return (
    <>
      <EnHeader activeExpertise="general-legal" altHref="/hr/strucnost/opce-pravne-usluge" />

      <main>
        <section className="expertise-detail">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">Expertise</span>
                <h1 className="section-title">General Legal Support</h1>
              </div>
            </div>
            <div className="expertise-detail__layout">
              <div className="expertise-detail__content">
                <p>
                  Beyond our core specialisations, we provide wide-ranging legal services that address the everyday and extraordinary challenges faced by businesses and individuals. Whether it is a one-off contract review or strategic counsel on a complex transaction, we approach each matter with the same standard of care.
                </p>
                <ul>
                  <li>Business contracts, commercial agreements, and terms of business,</li>
                  <li>Company law, incorporation, corporate restructuring, and M&A,</li>
                  <li>Due diligence for transactions and investments,</li>
                  <li>Debt collection and enforcement of claims,</li>
                  <li>Inheritance proceedings and family property law,</li>
                  <li>Administrative procedures and representation before public authorities,</li>
                  <li>Constitutional complaints and fundamental rights protection,</li>
                  <li>Mediation and alternative dispute resolution.</li>
                </ul>
                <p>
                  We believe in prevention over cure. Where possible, we identify risks early, draft agreements that stand up to scrutiny, and help clients navigate regulatory frameworks without costly surprises.
                </p>
              </div>
              <aside className="expertise-sidebar">
                <div className="expertise-contact">
                  <span className="expertise-contact__label">Practice contacts</span>
                  <a href="/team" className="expertise-contact__card">
                    <div className="expertise-contact__media">
                      <img src="/team/member-04.jpg" alt="Krešimir Sliepčević" className="expertise-contact__image" loading="lazy" />
                    </div>
                    <div className="expertise-contact__info">
                      <span className="expertise-contact__name">Krešimir Sliepčević</span>
                      <span className="expertise-contact__role">Attorney at Law</span>
                    </div>
                  </a>
                  <a href="/team" className="expertise-contact__card">
                    <div className="expertise-contact__media">
                      <img src="/team/member-03.jpg" alt="Marijan Vešligaj" className="expertise-contact__image" loading="lazy" />
                    </div>
                    <div className="expertise-contact__info">
                      <span className="expertise-contact__name">Marijan Vešligaj</span>
                      <span className="expertise-contact__role">Attorney at Law</span>
                    </div>
                  </a>
                </div>
                <div className="expertise-practices">
                  <span className="expertise-practices__label">Practices</span>
                  <nav className="expertise-practices__nav" aria-label="Related practices">
                    <a href="/expertise/public-procurement" className="expertise-practices__link">Public Procurement</a>
                    <a href="/expertise/real-estate" className="expertise-practices__link">Real Estate & Land Registry</a>
                    <a href="/expertise/labour-law" className="expertise-practices__link">Labour Law</a>
                    <a href="/expertise/general-legal" className="expertise-practices__link expertise-practices__link--active">General Law</a>
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