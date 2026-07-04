"use client"

import { useState, useEffect, useRef } from "react"

export default function LabourLawPage() {
  const [firmOpen, setFirmOpen] = useState(false)
  const [expertiseOpen, setExpertiseOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const firmTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const expertiseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const langTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openFirm = () => { if (firmTimer.current) clearTimeout(firmTimer.current); setFirmOpen(true) }
  const closeFirm = () => { firmTimer.current = setTimeout(() => setFirmOpen(false), 200) }
  const openExpertise = () => { if (expertiseTimer.current) clearTimeout(expertiseTimer.current); setExpertiseOpen(true) }
  const closeExpertise = () => { expertiseTimer.current = setTimeout(() => setExpertiseOpen(false), 200) }
  const openLang = () => { if (langTimer.current) clearTimeout(langTimer.current); setLangOpen(true) }
  const closeLang = () => { langTimer.current = setTimeout(() => setLangOpen(false), 200) }

  return (
    <>
      <header className="header header--light">
        <div className="container header__inner">
          <a href="/" aria-label="ODVIS Home">
            <img src="/logos/odvis-wordmark-dark.svg" alt="ODVIS" className="header__logo" />
          </a>
          <nav className="header__nav" aria-label="Main navigation">
            <a href="/#services" className="header__nav-link header__nav-link--dark">Services</a>
            <div
              className={`header__expertise-dropdown${expertiseOpen ? " header__expertise-dropdown--open" : ""}`}
              aria-label="Expertise"
              onMouseEnter={openExpertise}
              onMouseLeave={closeExpertise}
            >
              <button className="header__expertise-trigger header__expertise-trigger--dark" onClick={() => setExpertiseOpen((p) => !p)}>
                <span className="header__expertise-trigger-text">Expertise</span>
                <svg className="header__expertise-arrow" viewBox="0 0 12 12"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5"/></svg>
              </button>
              <div className="header__expertise-menu" role="menu">
                <a href="/expertise/public-procurement" className="header__expertise-option" role="menuitem" onClick={() => setExpertiseOpen(false)}>Public Procurement</a>
                <a href="/expertise/real-estate" className="header__expertise-option" role="menuitem" onClick={() => setExpertiseOpen(false)}>Real Estate</a>
                <a href="/expertise/labour-law" className="header__expertise-option header__expertise-option--active" role="menuitem" onClick={() => setExpertiseOpen(false)}>Labor Law</a>
                <a href="/expertise/general-legal" className="header__expertise-option" role="menuitem" onClick={() => setExpertiseOpen(false)}>General Law</a>
              </div>
            </div>
            <div className={`header__firm-dropdown${firmOpen ? " header__firm-dropdown--open" : ""}`} onMouseEnter={openFirm} onMouseLeave={closeFirm}>
              <button className="header__firm-trigger header__firm-trigger--dark" onClick={() => setFirmOpen((p) => !p)}>
                <span className="header__firm-trigger-text">The Firm</span>
                <svg className="header__firm-arrow" viewBox="0 0 12 12"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5"/></svg>
              </button>
              <div className="header__firm-menu" role="menu">
                <a href="/#about" className="header__firm-option" role="menuitem" onClick={() => setFirmOpen(false)}>about</a>
                <a href="/team" className="header__firm-option" role="menuitem" onClick={() => setFirmOpen(false)}>team</a>
                <a href="/#contact" className="header__firm-option" role="menuitem" onClick={() => setFirmOpen(false)}>contact</a>
              </div>
            </div>
          </nav>
          <div className="header__contact">
            <div className={`header__lang-dropdown${langOpen ? " header__lang-dropdown--open" : ""}`} onMouseEnter={openLang} onMouseLeave={closeLang}>
              <button className="header__lang-trigger" onClick={() => setLangOpen((p) => !p)}><span className="header__lang-current">EN</span></button>
              <div className="header__lang-menu" role="menu">
                <span className="header__lang-option header__lang-option--active">EN</span>
                <a href="/hr" className="header__lang-option" onClick={() => setLangOpen(false)}>hr</a>
              </div>
            </div>
          </div>
        </div>
      </header>

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
                  <span className="expertise-contact__label">Practice contact</span>
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
          <div className="footer__bottom"><p className="footer__copyright">© 2025 ODVIS. All rights reserved.</p></div>
        </div>
      </footer>
    </>
  )
}