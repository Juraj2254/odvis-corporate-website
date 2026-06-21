"use client"

import Link from 'next/link'
import { useState, useEffect, useRef } from "react"

const teamMembers = [
  { slug: 'member-01', firstName: 'Marijan', lastName: 'Vešligaj', role: 'Odvjetnik', image: '/team/member-01.jpg' },
  { slug: 'member-02', firstName: 'Krešimir', lastName: 'Sliepčević', role: 'Odvjetnik', image: '/team/member-02.jpg' },
]

export default function TeamPage() {
  const [firmOpen, setFirmOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const firmRef = useRef<HTMLDivElement>(null)
  const langRef = useRef<HTMLDivElement>(null)
  const firmTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const langTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (firmRef.current && !firmRef.current.contains(event.target as Node)) {
        setFirmOpen(false)
      }
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false)
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setFirmOpen(false)
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
          <a href="/" aria-label="ODVIS Početna">
            <img src="/logos/odvis-wordmark-dark.svg" alt="ODVIS" className="header__logo" />
          </a>

          <nav className="header__nav" aria-label="Glavna navigacija">
            <a href="/#usluge" className="header__nav-link header__nav-link--dark">USLUGE</a>
            <a href="/#strucnost" className="header__nav-link header__nav-link--dark">STRUČNOST</a>
            <div
              ref={firmRef}
              className={`header__firm-dropdown${firmOpen ? " header__firm-dropdown--open" : ""}`}
              aria-label="Ured"
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
                <span className="header__firm-trigger-text">URED</span>
                <svg className="header__firm-arrow" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="header__firm-menu" role="menu" aria-label="Opcije ureda">
                <a href="/#o-nama" className="header__firm-option" role="menuitem" onClick={() => setFirmOpen(false)}>o nama</a>
                <a href="/hr/tim" className="header__firm-option header__firm-option--active" role="menuitem" onClick={() => setFirmOpen(false)}>tim</a>
                <a href="/#kontakt" className="header__firm-option" role="menuitem" onClick={() => setFirmOpen(false)}>kontakt</a>
              </div>
            </div>
          </nav>

          <div className="header__contact">
            <div
              ref={langRef}
              className={`header__lang-dropdown${langOpen ? " header__lang-dropdown--open" : ""}`}
              aria-label="Odabir jezika"
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
                <span className="header__lang-current">HR</span>
                <svg className="header__lang-arrow" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="header__lang-menu" role="menu" aria-label="Jezične opcije">
                <a href="/team" className="header__lang-option" role="menuitem" onClick={() => setLangOpen(false)}>en</a>
                <a href="#" className="header__lang-option header__lang-option--active" role="menuitem" onClick={() => setLangOpen(false)}>HR</a>
              </div>
            </div>
            <button className="header__cta">KONTAKT</button>
            <button className="header__menu-btn" aria-label="Otvori izbornik">
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
            <h1 className="team-page__title">Naš tim</h1>
            <p className="team-page__quote">
              Gradimo timove prilagođene vašim pravnim izazovima.
            </p>

            <div className="team-page__grid">
              {teamMembers.map((member) => (
                <Link
                  key={member.slug}
                  href={`/hr/tim/${member.slug}`}
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
                Odvjetnički ured Vešligaj i Sliepčević. Specijalizirana pravna podrška za poduzeća i građane od 2016.
              </p>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Usluge</h4>
              <ul className="footer__links">
                <li><a href="/#usluge" className="footer__link">Pravo javne nabave</a></li>
                <li><a href="/#usluge" className="footer__link">Pravo nekretnina i zemljišnih knjiga</a></li>
                <li><a href="/#usluge" className="footer__link">Radno pravo i ugovori</a></li>
                <li><a href="/#usluge" className="footer__link">Opće pravne usluge</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Stručnost</h4>
              <ul className="footer__links">
                <li><a href="/#strucnost" className="footer__link">Praksa pred DKOM-om</a></li>
                <li><a href="/#strucnost" className="footer__link">Žalbe na natječajnu dokumentaciju</a></li>
                <li><a href="/#strucnost" className="footer__link">Upravni sporovi</a></li>
                <li><a href="/#strucnost" className="footer__link">Jednako postupanje</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Ured</h4>
              <ul className="footer__links">
                <li><a href="/#o-nama" className="footer__link">O nama</a></li>
                <li><a href="/hr/tim" className="footer__link">Tim</a></li>
                <li><a href="/#kontakt" className="footer__link">Kontakt</a></li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <p className="footer__copyright">&copy; 2025 ODVIS. Sva prava pridržana.</p>
            <div className="footer__legal">
              <a href="#" className="footer__legal-link">Pravila privatnosti</a>
              <a href="#" className="footer__legal-link">Pravna napomena</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
