"use client"

import { useState, useEffect, useRef } from "react"

interface EnHeaderProps {
  activeExpertise?: "public-procurement" | "real-estate" | "labour-law" | "general-legal"
  activeFirm?: "about" | "team" | "contact"
  altHref?: string
  light?: boolean
}

export function EnHeader({ activeExpertise, activeFirm, altHref = "/hr", light = true }: EnHeaderProps) {
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
      if (firmRef.current && !firmRef.current.contains(event.target as Node)) setFirmOpen(false)
      if (expertiseRef.current && !expertiseRef.current.contains(event.target as Node)) setExpertiseOpen(false)
      if (langRef.current && !langRef.current.contains(event.target as Node)) setLangOpen(false)
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

  const openFirm = () => { if (firmTimer.current) clearTimeout(firmTimer.current); setFirmOpen(true) }
  const closeFirm = () => { firmTimer.current = setTimeout(() => setFirmOpen(false), 200) }
  const toggleFirm = () => setFirmOpen((prev) => !prev)

  const openExpertise = () => { if (expertiseTimer.current) clearTimeout(expertiseTimer.current); setExpertiseOpen(true) }
  const closeExpertise = () => { expertiseTimer.current = setTimeout(() => setExpertiseOpen(false), 200) }
  const toggleExpertise = () => setExpertiseOpen((prev) => !prev)

  const openLang = () => { if (langTimer.current) clearTimeout(langTimer.current); setLangOpen(true) }
  const closeLang = () => { langTimer.current = setTimeout(() => setLangOpen(false), 200) }
  const toggleLang = () => setLangOpen((prev) => !prev)

  const optionClass = (key: typeof activeExpertise) =>
    `header__expertise-option${activeExpertise === key ? " header__expertise-option--active" : ""}`
  const firmOptionClass = (key: typeof activeFirm) =>
    `header__firm-option${activeFirm === key ? " header__firm-option--active" : ""}`

  return (
    <header className={`header${light ? " header--light" : ""}`}>
      <div className="container header__inner">
        <a href="/" aria-label="ODVIS Home">
          <img
            src={light ? "/logos/odvis-wordmark-dark.svg" : "/logos/odvis-wordmark-primary-light.svg"}
            alt="ODVIS"
            className="header__logo"
          />
        </a>

        <nav className="header__nav" aria-label="Main navigation">
          <a href="/#services" className={`header__nav-link${light ? " header__nav-link--dark" : ""}`}>Services</a>
          <div
            ref={expertiseRef}
            className={`header__expertise-dropdown${expertiseOpen ? " header__expertise-dropdown--open" : ""}`}
            aria-label="Expertise"
            onMouseEnter={openExpertise}
            onMouseLeave={closeExpertise}
          >
            <button
              className={`header__expertise-trigger${light ? " header__expertise-trigger--dark" : ""}`}
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
              <a href="/expertise/public-procurement" className={optionClass("public-procurement")} role="menuitem" onClick={() => setExpertiseOpen(false)}>public procurement</a>
              <a href="/expertise/real-estate" className={optionClass("real-estate")} role="menuitem" onClick={() => setExpertiseOpen(false)}>real estate</a>
              <a href="/expertise/labour-law" className={optionClass("labour-law")} role="menuitem" onClick={() => setExpertiseOpen(false)}>labor law</a>
              <a href="/expertise/general-legal" className={optionClass("general-legal")} role="menuitem" onClick={() => setExpertiseOpen(false)}>general law</a>
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
              className={`header__firm-trigger${light ? " header__firm-trigger--dark" : ""}`}
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
              <a href="/#about" className={firmOptionClass("about")} role="menuitem" onClick={() => setFirmOpen(false)}>about</a>
              <a href="/team" className={firmOptionClass("team")} role="menuitem" onClick={() => setFirmOpen(false)}>team</a>
              <a href="/#contact" className={firmOptionClass("contact")} role="menuitem" onClick={() => setFirmOpen(false)}>contact</a>
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
              <span className="header__lang-option header__lang-option--active" role="menuitem">EN</span>
              <a href={altHref} className="header__lang-option" role="menuitem" onClick={() => setLangOpen(false)}>hr</a>
            </div>
          </div>
          <a href="/#contact" className="header__cta">Get in Touch</a>
          <button className="header__menu-btn" aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
