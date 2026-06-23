"use client"

import { useState, useEffect, useRef } from "react"
import { DataTable } from "@/components/ui/basic-data-table"

const cases = [
  { id: 1, year: "2023", client: "Energy infrastructure investor", subject: "DKOM appeal on tender documentation", outcome: "Won", value: "EUR 4.2m" },
  { id: 2, year: "2022", client: "Road construction consortium", subject: "Administrative dispute before DKOM", outcome: "Won", value: "EUR 12.5m" },
  { id: 3, year: "2022", client: "Environmental services provider", subject: "Challenge of abnormally low tender", outcome: "Won", value: "EUR 1.8m" },
  { id: 4, year: "2021", client: "Forestry management company", subject: "Equal treatment violation appeal", outcome: "Won", value: "EUR 3.1m" },
  { id: 5, year: "2021", client: "Engineering design bureau", subject: "Technical capacity requirements dispute", outcome: "Won", value: "EUR 2.4m" },
  { id: 6, year: "2020", client: "Renewable energy developer", subject: "Contract conclusion consultation", outcome: "Won", value: "EUR 7.6m" },
  { id: 7, year: "2020", client: "Public utility contractor", subject: "Bid preparation and submission", outcome: "Won", value: "EUR 5.3m" },
  { id: 8, year: "2019", client: "Waste management operator", subject: "Client decision appeal", outcome: "Won", value: "EUR 2.9m" },
]

const columns = [
  { key: "year", header: "Year", sortable: true, width: "80px" },
  { key: "client", header: "Client / Sector", sortable: true, filterable: true },
  { key: "subject", header: "Subject", sortable: true, filterable: true },
  { key: "outcome", header: "Outcome", sortable: true, width: "100px" },
  { key: "value", header: "Contract value", sortable: true, width: "130px" },
]

export default function PublicProcurementPage() {
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
          <a href="/" aria-label="ODVIS Home">
            <img src="/logos/odvis-wordmark-dark.svg" alt="ODVIS" className="header__logo" />
          </a>

          <nav className="header__nav" aria-label="Main navigation">
            <a href="/#services" className="header__nav-link header__nav-link--dark">Services</a>
            <a href="/#expertise" className="header__nav-link header__nav-link--dark">Expertise</a>
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
                <a href="/team" className="header__firm-option" role="menuitem" onClick={() => setFirmOpen(false)}>team</a>
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
                <a href="/hr/strucnost/javna-nabava" className="header__lang-option" role="menuitem" onClick={() => setLangOpen(false)}>hr</a>
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
        <section className="expertise-detail">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">Expertise</span>
                <h1 className="section-title">Public Procurement</h1>
              </div>
            </div>

            <div className="expertise-detail__content">
              <p>
                We have rich experience in providing legal support in public procurement procedures of
              </p>
              <ul>
                <li>preparation and submission of bids,</li>
                <li>appeals to the documentation and the client&apos;s decision,</li>
                <li>representation in administrative disputes relating to decisions of the State Commission</li>
                <li>consultation in the process of contracting</li>
              </ul>
              <p>
                In addition the company has significant experience in representing clients in court and arbitration proceedings led on the occasion of disputes arising out of public contracts.
              </p>
              <p>
                Significant areas in which we provide services in the field of public procurement as an area of environmental protection, forestry, planning and design of roads, as well as in the field of energy.
              </p>
            </div>

            <div className="expertise-detail__table">
              <h2 className="expertise-detail__table-title">Selected winning cases</h2>
              <DataTable
                data={cases}
                columns={columns}
                searchable
                searchPlaceholder="Search cases..."
                itemsPerPage={5}
                showPagination
                emptyMessage="No cases found"
              />
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
