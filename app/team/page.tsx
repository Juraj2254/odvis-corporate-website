"use client"

import Link from 'next/link'
import { useState, useEffect, useRef } from "react"

const teamMembers = [
  { slug: 'member-01', firstName: 'Nikolina', lastName: 'Šajnović', role: 'Associate', image: '/team/member-01.jpg' },
  { slug: 'member-02', firstName: 'Matea', lastName: 'Kušević', role: 'Associate', image: '/team/member-02.jpg' },
  { slug: 'member-03', firstName: 'Marijan', lastName: 'Vešligaj', role: 'Attorney at Law', image: '/team/member-03.jpg' },
  { slug: 'member-04', firstName: 'Krešimir', lastName: 'Sliepčević', role: 'Attorney at Law', image: '/team/member-04.jpg' },
]

export default function TeamPage() {
  const [firmOpen, setFirmOpen] = useState(false)
  const [expertiseOpen, setExpertiseOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const firmRef = useRef<HTMLDivElement>(null)
  const expertiseRef = useRef<HTMLDivElement>(null)
  const langRef = useRef<HTMLDivElement>(null)
  const firmTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const expertiseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const langTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (firmRef.current && !firmRef.current.contains(event.target as Node)) {
        setFirmOpen(false)
      }
      if (expertiseRef.current && !expertiseRef.current.contains(event.target as Node)) {
        setExpertiseOpen(false)
      }
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false)
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setFirmOpen(false)
        setExpertiseOpen(false)
        setLangOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  const openFirm = () => {
    if (firmTimer.current) clearTimeout(firmTimer.current)
    setFirmOpen(true)
  }
  const closeFirm = () => {
    firmTimer.current = setTimeout(() => setFirmOpen(false), 200)
  }
  const toggleFirm = () => setFirmOpen((prev) => !prev)

  const openExpertise = () => {
    if (expertiseTimer.current) clearTimeout(expertiseTimer.current)
    setExpertiseOpen(true)
  }
  const closeExpertise = () => {
    expertiseTimer.current = setTimeout(() => setExpertiseOpen(false), 200)
  }
  const toggleExpertise = () => setExpertiseOpen((prev) => !prev)

  const openLang = () => {
    if (langTimer.current) clearTimeout(langTimer.current)
    setLangOpen(true)
  }
  const closeLang = () => {
    langTimer.current = setTimeout(() => setLangOpen(false), 200)
  }
  const toggleLang = () => setLangOpen((prev) => !prev)

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
              ref={expertiseRef}
              className={`header__expertise-dropdown${expertiseOpen ? " header__expertise-dropdown--open" : ""}`}
              aria-label="Expertise"
              onMouseEnter={openExpertise}
              onMouseLeave={closeExpertise}
            >
              <button
                className="header__expertise-trigger header__expertise-trigger--dark"
                type="button"
                aria-haspopup="true"
                aria-expanded={expertiseOpen}
                onClick={toggleExpertise}
              >
                <span className="header__expertise-trigger-text">Expertise</span>
                <svg className="header__expertise-arrow" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="header__expertise-menu" role="menu" aria-label="Expertise options">
                <a href="/expertise/public-procurement" className="header__expertise-option" role="menuitem" onClick={() => setExpertiseOpen(false)}>Public Procurement</a>
                <a href="/expertise/real-estate" className="header__expertise-option" role="menuitem" onClick={() => setExpertiseOpen(false)}>Real Estate</a>
                <a href="/expertise/labour-law" className="header__expertise-option" role="menuitem" onClick={() => setExpertiseOpen(false)}>Labor Law</a>
                <a href="/expertise/general-legal" className="header__expertise-option" role="menuitem" onClick={() => setExpertiseOpen(false)}>General Law</a>
              </div>
            </div>
            <div
              ref={firmRef}
              className={`header__firm-dropdown${firmOpen ? " header__firm-dropdown--open" : ""}`}
              aria-label="The firm"
              onMouseEnter={openFirm}
              onMouseLeave={closeFirm}
            >
              <button
                className="header__firm-trigger header__firm-trigger--dark"
                type="button"
                aria-haspopup="true"
                aria-expanded={firmOpen}
                onClick={toggleFirm}
              >
                <span className="header__firm-trigger-text">The Firm</span>
                <svg className="header__firm-arrow" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="header__firm-menu" role="menu" aria-label="The firm options">
                <a href="/#about" className="header__firm-option" role="menuitem" onClick={() => setFirmOpen(false)}>about</a>
                <a href="/team" className="header__firm-option header__firm-option--active" role="menuitem" onClick={() => setFirmOpen(false)}>team</a>
                <a href="/#contact" className="header__firm-option" role="menuitem" onClick={() => setFirmOpen(false)}>contact</a>
              </div>
            </div>
          </nav>

          <div className="header__contact">
            <div
              ref={langRef}
              className={`header__lang-dropdown${langOpen ? " header__lang-dropdown--open" : ""}`}
              aria-label="Language selector"
              onMouseEnter={openLang}
              onMouseLeave={closeLang}
            >
              <button
                className="header__lang-trigger"
                type="button"
                aria-haspopup="true"
                aria-expanded={langOpen}
                onClick={toggleLang}
              >
                <span className="header__lang-current">EN</span>
                <svg className="header__lang-arrow" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="header__lang-menu" role="menu" aria-label="Language options">
                <a href="#" className="header__lang-option header__lang-option--active" role="menuitem" onClick={() => setLangOpen(false)}>EN</a>
                <a href="/hr/tim" className="header__lang-option" role="menuitem" onClick={() => setLangOpen(false)}>hr</a>
              </div>
            </div>
            <button className="header__cta">Get in Touch</button>
            <button className="header__menu-btn" aria-label="Open menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="team-page">
          <div className="container">
            <h1 className="team-page__title">Our team</h1>
            <p className="team-page__quote">
              We create teams tailored to navigate your legal challenges.
            </p>

            <div className="team-page__grid">
              {teamMembers.map((member) => (
                <Link
                  key={member.slug}
                  href={`/team/${member.slug}`}
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
                </Link>
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
                <li><a href="/#expertise" className="footer__link">Tender Appeals</a></li>
                <li><a href="/#expertise" className="footer__link">Administrative Disputes</a></li>
                <li><a href="/#expertise" className="footer__link">Equal Treatment</a></li>
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
            <p className="footer__copyright">&copy; 2025 ODVIS. All rights reserved.</p>
            <div className="footer__legal">
              <a href="#" className="footer__legal-link">Privacy Policy</a>
              <a href="#" className="footer__legal-link">Legal Notice</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
