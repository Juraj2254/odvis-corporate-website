"use client"

import { EnHeader } from "@/components/layout/en-header"

export default function RealEstatePage() {
  return (
    <>
      <EnHeader activeExpertise="real-estate" altHref="/hr/strucnost/nekretnine" />

      <main>
        <section className="expertise-detail">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">Expertise</span>
                <h1 className="section-title">Real Estate and Land Registry Law</h1>
              </div>
            </div>

            <div className="expertise-detail__layout">
              <div className="expertise-detail__content">
                <p>
                  We also have significant experience in providing legal assistance and the procedures relating to the acquisition and real estate
                </p>
                <ul>
                  <li>Testing of the land conditions before concluding the contract,</li>
                  <li>Advice on contracts,</li>
                  <li>The preparation of all types of contracts in the real estate trading</li>
                  <li>Registration of property rights in the land registry,</li>
                  <li>Representation in ownership disputes,</li>
                  <li>The preparation of all necessary documents in the process of dissolution of co-ownership, condominium, linking land registers and books of deposited contracts and the implementation thereof in the land registry (which by law can not produce qualified experts architectural, construction or surveying profession)</li>
                </ul>
                <p>
                  In addition we are familiar with the building regulations and have experience in dealing with all authorized experts in the field of construction.
                </p>
              </div>

              <aside className="expertise-sidebar">
                <div className="expertise-contact">
                  <span className="expertise-contact__label">Practice contact</span>
                  <a href="/team" className="expertise-contact__card">
                    <div className="expertise-contact__media">
                      <img
                        src="/team/member-04.jpg"
                        alt="Portrait of Krešimir Sliepčević"
                        className="expertise-contact__image"
                        loading="lazy"
                      />
                    </div>
                    <div className="expertise-contact__info">
                      <span className="expertise-contact__name">Krešimir Sliepčević</span>
                      <span className="expertise-contact__role">Lawyer</span>
                    </div>
                  </a>
                </div>

                <div className="expertise-practices">
                  <span className="expertise-practices__label">Practices</span>
                  <nav className="expertise-practices__nav" aria-label="Related practices">
                    <a href="/expertise/public-procurement" className="expertise-practices__link">Public Procurement</a>
                    <a href="/expertise/real-estate" className="expertise-practices__link expertise-practices__link--active">Real Estate & Land Registry</a>
                    <a href="/expertise/labour-law" className="expertise-practices__link">Labour Law</a>
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
