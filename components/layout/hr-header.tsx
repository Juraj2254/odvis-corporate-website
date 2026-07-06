"use client"

import { useState, useEffect, useRef } from "react"

interface HrHeaderProps {
  activeExpertise?: "javna-nabava" | "nekretnine" | "radno-pravo" | "opce-pravne-usluge"
  activeFirm?: "o-nama" | "tim" | "kontakt"
  altHref?: string
  light?: boolean
}

export function HrHeader({ activeExpertise, activeFirm, altHref = "/", light = true }: HrHeaderProps) {
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
        <a href="/hr" aria-label="ODVIS Početna">
          <img
            src={light ? "/logos/odvis-wordmark-dark.svg" : "/logos/odvis-wordmark-primary-light.svg"}
            alt="ODVIS"
            className="header__logo"
          />
        </a>

        <nav className="header__nav" aria-label="Glavna navigacija">
          <a href="/hr#usluge" className={`header__nav-link${light ? " header__nav-link--dark" : ""}`}>USLUGE</a>
          <div
            ref={expertiseRef}
            className={`header__expertise-dropdown${expertiseOpen ? " header__expertise-dropdown--open" : ""}`}
            aria-label="Stručnost"
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
              <span className="header__expertise-trigger-text">STRUČNOST</span>
              <svg className="header__expertise-arrow" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="header__expertise-menu" role="menu" aria-label="Opcije stručnosti">
              <a href="/hr/strucnost/javna-nabava" className={optionClass("javna-nabava")} role="menuitem" onClick={() => setExpertiseOpen(false)}>javna nabava</a>
              <a href="/hr/strucnost/nekretnine" className={optionClass("nekretnine")} role="menuitem" onClick={() => setExpertiseOpen(false)}>nekretnine</a>
              <a href="/hr/strucnost/radno-pravo" className={optionClass("radno-pravo")} role="menuitem" onClick={() => setExpertiseOpen(false)}>radno pravo</a>
              <a href="/hr/strucnost/opce-pravne-usluge" className={optionClass("opce-pravne-usluge")} role="menuitem" onClick={() => setExpertiseOpen(false)}>opće pravo</a>
            </div>
          </div>
          <div
            ref={firmRef}
            className={`header__firm-dropdown${firmOpen ? " header__firm-dropdown--open" : ""}`}
            aria-label="Ured"
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
              <span className="header__firm-trigger-text">URED</span>
              <svg className="header__firm-arrow" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="header__firm-menu" role="menu" aria-label="Opcije ureda">
              <a href="/hr#o-nama" className={firmOptionClass("o-nama")} role="menuitem" onClick={() => setFirmOpen(false)}>o nama</a>
              <a href="/hr/tim" className={firmOptionClass("tim")} role="menuitem" onClick={() => setFirmOpen(false)}>tim</a>
              <a href="/hr#kontakt" className={firmOptionClass("kontakt")} role="menuitem" onClick={() => setFirmOpen(false)}>kontakt</a>
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
              <a href={altHref} className="header__lang-option" role="menuitem" onClick={() => setLangOpen(false)}>en</a>
              <span className="header__lang-option header__lang-option--active" role="menuitem">HR</span>
            </div>
          </div>
          <a href="/hr#kontakt" className="header__cta">KONTAKT</a>
          <button className="header__menu-btn" aria-label="Otvori izbornik">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
