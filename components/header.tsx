"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"

interface HeaderProps {
  variant?: "dark" | "light"
  locale?: "en" | "hr"
}

const NAV_EN = {
  services: "#services",
  expertise: "Expertise",
  firm: "The Firm",
  contact: "Get in Touch",
  expertises: [
    { label: "Public Procurement", href: "/expertise/public-procurement" },
    { label: "Real Estate", href: "/expertise/real-estate" },
    { label: "Labor Law", href: "/expertise/labour-law" },
    { label: "General Law", href: "/expertise/general-legal" },
  ],
  firmLinks: [
    { label: "about", href: "/#about" },
    { label: "team", href: "/team" },
    { label: "contact", href: "/#contact" },
  ],
  currentLang: "EN",
  altLang: { label: "hr", href: "/hr" },
  menuLabel: "Open menu",
}

const NAV_HR = {
  services: "#usluge",
  expertise: "STRUČNOST",
  firm: "URED",
  contact: "KONTAKT",
  expertises: [
    { label: "Javna nabava", href: "/hr/strucnost/javna-nabava" },
    { label: "Nekretnine", href: "/hr/strucnost/nekretnine" },
    { label: "Radno pravo", href: "/hr/strucnost/radno-pravo" },
    { label: "Opće pravo", href: "/hr/strucnost/opce-pravne-usluge" },
  ],
  firmLinks: [
    { label: "o nama", href: "/hr#o-nama" },
    { label: "tim", href: "/hr/tim" },
    { label: "kontakt", href: "/hr#kontakt" },
  ],
  currentLang: "HR",
  altLang: { label: "en", href: "/" },
  menuLabel: "Otvori izbornik",
}

export default function Header({ variant = "dark", locale = "en" }: HeaderProps) {
  const isLight = variant === "light"
  const nav = locale === "hr" ? NAV_HR : NAV_EN

  const [firmOpen, setFirmOpen] = useState(false)
  const [expertiseOpen, setExpertiseOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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
        setMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  const openMenu = useCallback(() => setMenuOpen(true), [])
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const openFirm = () => { if (firmTimer.current) clearTimeout(firmTimer.current); setFirmOpen(true) }
  const closeFirm = () => { firmTimer.current = setTimeout(() => setFirmOpen(false), 200) }
  const toggleFirm = () => setFirmOpen((prev) => !prev)

  const openExpertise = () => { if (expertiseTimer.current) clearTimeout(expertiseTimer.current); setExpertiseOpen(true) }
  const closeExpertise = () => { expertiseTimer.current = setTimeout(() => setExpertiseOpen(false), 200) }
  const toggleExpertise = () => setExpertiseOpen((prev) => !prev)

  const openLang = () => { if (langTimer.current) clearTimeout(langTimer.current); setLangOpen(true) }
  const closeLang = () => { langTimer.current = setTimeout(() => setLangOpen(false), 200) }
  const toggleLang = () => setLangOpen((prev) => !prev)

  // Determine logo path
  const logoFile = isLight
    ? locale === "hr" ? "/logos/odvis-wordmark-dark.svg" : "/logos/odvis-wordmark-dark.svg"
    : "/logos/odvis-wordmark-primary-light.svg"

  // Determine active links via current path — simplified: highlight if exact or starts with
  const isHome = !isLight // dark header on homepage
  const isActive = (href: string) => false // will be handled by router in client context if needed

  return (
    <>
      <header className={`header${isLight ? " header--light" : ""}`}>
        <div className="container header__inner">
          <a href={locale === "hr" ? "/hr" : "/"} aria-label={locale === "hr" ? "ODVIS Početna" : "ODVIS Home"}>
            <img src={logoFile} alt="ODVIS" className="header__logo" />
          </a>

          <nav className="header__nav" aria-label={locale === "hr" ? "Glavna navigacija" : "Main navigation"}>
            <a href={nav.services} className={`header__nav-link${isLight ? " header__nav-link--dark" : ""}`}>
              {locale === "hr" ? "USLUGE" : "Services"}
            </a>

            <div
              ref={expertiseRef}
              className={`header__expertise-dropdown${expertiseOpen ? " header__expertise-dropdown--open" : ""}`}
              aria-label={locale === "hr" ? "Stručnost" : "Expertise"}
              onMouseEnter={openExpertise}
              onMouseLeave={closeExpertise}
            >
              <button
                className={`header__expertise-trigger${isLight ? " header__expertise-trigger--dark" : ""}`}
                type="button"
                aria-haspopup="true"
                aria-expanded={expertiseOpen}
                onClick={toggleExpertise}
              >
                <span className="header__expertise-trigger-text">{nav.expertise}</span>
                <svg className="header__expertise-arrow" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="header__expertise-menu" role="menu" aria-label={locale === "hr" ? "Opcije stručnosti" : "Expertise options"}>
                {nav.expertises.map((item) => (
                  <a key={item.href} href={item.href} className="header__expertise-option" role="menuitem" onClick={() => setExpertiseOpen(false)}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div
              ref={firmRef}
              className={`header__firm-dropdown${firmOpen ? " header__firm-dropdown--open" : ""}`}
              aria-label={locale === "hr" ? "Ured" : "The firm"}
              onMouseEnter={openFirm}
              onMouseLeave={closeFirm}
            >
              <button
                className={`header__firm-trigger${isLight ? " header__firm-trigger--dark" : ""}`}
                type="button"
                aria-haspopup="true"
                aria-expanded={firmOpen}
                onClick={toggleFirm}
              >
                <span className="header__firm-trigger-text">{nav.firm}</span>
                <svg className="header__firm-arrow" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="header__firm-menu" role="menu" aria-label={locale === "hr" ? "Opcije ureda" : "The firm options"}>
                {nav.firmLinks.map((item) => (
                  <a key={item.href} href={item.href} className="header__firm-option" role="menuitem" onClick={() => setFirmOpen(false)}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          <div className="header__contact">
            <div
              ref={langRef}
              className={`header__lang-dropdown${langOpen ? " header__lang-dropdown--open" : ""}`}
              aria-label={locale === "hr" ? "Odabir jezika" : "Language selector"}
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
                <span className="header__lang-current">{nav.currentLang}</span>
                <svg className="header__lang-arrow" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="header__lang-menu" role="menu" aria-label={locale === "hr" ? "Jezične opcije" : "Language options"}>
                <span className="header__lang-option header__lang-option--active" role="menuitem">{nav.currentLang}</span>
                <a href={nav.altLang.href} className="header__lang-option" role="menuitem" onClick={() => setLangOpen(false)}>{nav.altLang.label}</a>
              </div>
            </div>
            <button className="header__cta">{nav.contact}</button>
            <button className="header__menu-btn" aria-label={nav.menuLabel} onClick={openMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-over Menu */}
      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label={locale === "hr" ? "Navigacijski izbornik" : "Navigation menu"}>
          <div className="mobile-menu__overlay" onClick={closeMenu} />
          <div className="mobile-menu__panel">
            <button className="mobile-menu__close" onClick={closeMenu} aria-label={locale === "hr" ? "Zatvori" : "Close"}>&times;</button>
            <nav className="mobile-menu__nav">
              <a href={nav.services} className="mobile-menu__link" onClick={closeMenu}>{locale === "hr" ? "USLUGE" : "Services"}</a>
              {nav.expertises.map((item) => (
                <a key={item.href} href={item.href} className="mobile-menu__link mobile-menu__link--sub" onClick={closeMenu}>{item.label}</a>
              ))}
              <a href={nav.firmLinks[0].href} className="mobile-menu__link" onClick={closeMenu}>{locale === "hr" ? "O NAMA" : "About"}</a>
              <a href="/team" className="mobile-menu__link" onClick={closeMenu}>{locale === "hr" ? "TIM" : "Team"}</a>
              <a href={`/${locale === "hr" ? "hr/" : "#contact"}`} className="mobile-menu__link" onClick={closeMenu}>{locale === "hr" ? "KONTAKT" : "Contact"}</a>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}