
"use client"

import { useState, useEffect, useRef } from "react"

export default function Page() {
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
      {/* HEADER */}
      <header className="header">
        <div className="container header__inner">
          <a href="/" aria-label="ODVIS Home">
<img src="/logos/odvis-wordmark-primary-light.svg" alt="ODVIS" className="header__logo" />
          </a>

          <nav className="header__nav" aria-label="Main navigation">
            <a href="#services" className="header__nav-link">Services</a>
            <div
              ref={expertiseRef}
              className={`header__expertise-dropdown${expertiseOpen ? " header__expertise-dropdown--open" : ""}`}
              aria-label="Expertise"
              onMouseEnter={openExpertise}
              onMouseLeave={closeExpertise}
            >
              <button
                className="header__expertise-trigger"
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
                <a href="/expertise/public-procurement" className="header__expertise-option" role="menuitem" onClick={() => setExpertiseOpen(false)}>procurement</a>
                <a href="/expertise/real-estate" className="header__expertise-option" role="menuitem" onClick={() => setExpertiseOpen(false)}>real estate</a>
                <a href="/expertise/labour-law" className="header__expertise-option" role="menuitem" onClick={() => setExpertiseOpen(false)}>labour</a>
                <a href="/expertise/general-legal" className="header__expertise-option" role="menuitem" onClick={() => setExpertiseOpen(false)}>general</a>
                <a href="/expertise/dkom" className="header__expertise-option" role="menuitem" onClick={() => setExpertiseOpen(false)}>DKOM</a>
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
                className="header__firm-trigger"
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
                <a href="#about" className="header__firm-option" role="menuitem" onClick={() => setFirmOpen(false)}>about</a>
                <a href="/team" className="header__firm-option" role="menuitem" onClick={() => setFirmOpen(false)}>team</a>
                <a href="#contact" className="header__firm-option" role="menuitem" onClick={() => setFirmOpen(false)}>contact</a>
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
                <a href="/hr" className="header__lang-option" role="menuitem" onClick={() => setLangOpen(false)}>hr</a>
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
        {/* HERO */}
        <section className="hero">
          <div className="container hero__inner">
            <h1 className="hero__title">
              The law is full of edges.<br />
              That is where expertise lives.
            </h1>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services" id="services">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">01 Services</span>
                <h2 className="section-title">Areas of Practice</h2>
              </div>
              <p className="section-description">
                We provide comprehensive legal support with a focus on public procurement law, property law, and general legal services for businesses and individuals.
              </p>
            </div>

            <div className="services__grid">
              <div className="service-card">
                <span className="service-card__number">01</span>
                <h3 className="service-card__title">Public Procurement Law</h3>
                <p className="service-card__description">
                  Extensive experience in legal support for public procurement procedures, covering bid preparation, appeals against documentation and representation in administrative disputes before the State Commission (DKOM).
                </p>
                <a href="#" className="service-card__link">
                  Learn more
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              <div className="service-card">
                <span className="service-card__number">02</span>
                <h3 className="service-card__title">Real Estate & Land Registry Law</h3>
                <p className="service-card__description">
                  Legal assistance in all procedures related to real estate acquisition and disposal, registration of property rights in the land registry, and resolution of ownership disputes.
                </p>
                <a href="#" className="service-card__link">
                  Learn more
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              <div className="service-card">
                <span className="service-card__number">03</span>
                <h3 className="service-card__title">Labour Law & Employment Contracts</h3>
                <p className="service-card__description">
                  Employment contract preparation, drafting of general labour law acts, and representation in labour disputes for employers and employees at every stage of the employment relationship.
                </p>
                <a href="#" className="service-card__link">
                  Learn more
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              <div className="service-card">
                <span className="service-card__number">04</span>
                <h3 className="service-card__title">General Legal Support</h3>
                <p className="service-card__description">
                  Business contract advisory, due diligence, debt collection, inheritance proceedings, company law, administrative procedures, and constitutional complaints.
                </p>
                <a href="#" className="service-card__link">
                  Learn more
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about" id="about">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">02 About</span>
                <h2 className="section-title">Law Firm Vešligaj<br />and Sliepčević</h2>
              </div>
              <p className="section-description">
                Founded in 2016 with the goal of delivering high-quality legal services to businesses and individuals.
              </p>
            </div>

            <div className="about__content">
              <div className="about__text">
                <p>
                  Law Firm Vešligaj and Sliepčević was founded in 2016 with the goal of delivering high-quality legal services to businesses and individuals. With many years of experience in the private sector, we provide comprehensive legal support tailored to each client, with a particular focus on small and medium-sized enterprises.
                </p>
                <p>
                  Our practice is built on a simple conviction: the best outcome is one reached without unnecessary conflict. We advise before disputes arise, represent with precision when they do, and bring the same standard of care to every matter, regardless of size.
                </p>
              </div>

              <div className="about__features">
                <div className="about__feature">
                  <div className="about__feature-icon"></div>
                  <span className="about__feature-text">Certified for Public Procurement</span>
                </div>
                <div className="about__feature">
                  <div className="about__feature-icon"></div>
                  <span className="about__feature-text">Authorised Mediator</span>
                </div>
                <div className="about__feature">
                  <div className="about__feature-icon"></div>
                  <span className="about__feature-text">Specialised DKOM Practice</span>
                </div>
                <div className="about__feature">
                  <div className="about__feature-icon"></div>
                  <span className="about__feature-text">SME-Focused Legal Support</span>
                </div>
                <div className="about__feature">
                  <div className="about__feature-icon"></div>
                  <span className="about__feature-text">Dispute Prevention First</span>
                </div>
                <div className="about__feature">
                  <div className="about__feature-icon"></div>
                  <span className="about__feature-text">Precision in Representation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="expertise" id="expertise">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">03 Expertise</span>
                <h2 className="section-title">DKOM Practice</h2>
              </div>
              <p className="section-description">
                The State Commission for the Supervision of Public Procurement Procedures (DKOM) is the arena where contracts worth millions are decided. Our experience in representing clients before DKOM spans a wide range of cases, from documentation appeals to full administrative dispute proceedings.
              </p>
            </div>

            <div className="expertise__cta">
              <a href="/expertise/public-procurement" className="header__cta">View our winning cases</a>
            </div>

            <div className="expertise__grid">
              <div className="expertise__item">
                <span className="expertise__item-number">01</span>
                <div className="expertise__item-content">
                  <h3 className="expertise__item-title">Appeals on tender documentation</h3>
                  <p className="expertise__item-description">
                    Challenging unclear, discriminatory or unlawful tender terms before the contract is signed.
                  </p>
                </div>
              </div>

              <div className="expertise__item">
                <span className="expertise__item-number">02</span>
                <div className="expertise__item-content">
                  <h3 className="expertise__item-title">Representation in administrative disputes before DKOM</h3>
                  <p className="expertise__item-description">
                    Full procedural representation from the initial appeal to the final DKOM decision.
                  </p>
                </div>
              </div>

              <div className="expertise__item">
                <span className="expertise__item-number">03</span>
                <div className="expertise__item-content">
                  <h3 className="expertise__item-title">Negotiation and consultation in contract conclusion</h3>
                  <p className="expertise__item-description">
                    Advising on amendments, negotiations and finalisation of public procurement contracts.
                  </p>
                </div>
              </div>

              <div className="expertise__item">
                <span className="expertise__item-number">04</span>
                <div className="expertise__item-content">
                  <h3 className="expertise__item-title">Challenging and defending abnormally low tenders</h3>
                  <p className="expertise__item-description">
                    Acting for both contracting authorities and bidders in abnormally low price disputes.
                  </p>
                </div>
              </div>

              <div className="expertise__item">
                <span className="expertise__item-number">05</span>
                <div className="expertise__item-content">
                  <h3 className="expertise__item-title">Technical and professional capacity requirements of tenderers</h3>
                  <p className="expertise__item-description">
                    Reviewing qualification criteria and ensuring proportionate selection conditions.
                  </p>
                </div>
              </div>

              <div className="expertise__item">
                <span className="expertise__item-number">06</span>
                <div className="expertise__item-content">
                  <h3 className="expertise__item-title">Equal treatment of candidates in public procurement</h3>
                  <p className="expertise__item-description">
                    Protecting fair competition and transparency throughout the procurement process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">05 Contact</span>
                <h2 className="section-title">Get in Touch</h2>
              </div>
              <p className="section-description">
                We are available on weekdays from 09:00 to 17:00. Appointments outside these hours are available by arrangement.
              </p>
            </div>

            <div className="contact__inner">
              <div className="contact__info">
                <div className="contact__block">
                  <span className="contact__block-label">Email</span>
                  <div className="contact__block-value">
                    <a href="mailto:office@odvis.hr">office@odvis.hr</a>
                  </div>
                </div>

                <div className="contact__block">
                  <span className="contact__block-label">Phone</span>
                  <div className="contact__block-value">
                    <a href="tel:+38516423963">+385 1 6423 963</a>
                  </div>
                </div>

                <div className="contact__block">
                  <span className="contact__block-label">Address</span>
                  <div className="contact__block-value">
                    Ulica Franje Lučića 9, 8th floor<br />
                    New Zagreb – Siget, 10 000 Zagreb, Croatia
                  </div>
                  <p className="contact__directions">
                    Tram lines 7 and 14 (Velesajam stop). Parking available in Lučićeva and surrounding streets (zone 2). Taxi stand on Lučićeva street.
                  </p>
                </div>
              </div>

              <form className="contact__form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" id="name" name="name" className="form-input" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" name="email" className="form-input" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" name="message" className="form-textarea" required></textarea>
                </div>

                <button type="submit" className="form-submit">Send message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
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
                <li><a href="#services" className="footer__link">Public Procurement Law</a></li>
                <li><a href="#services" className="footer__link">Real Estate & Land Registry</a></li>
                <li><a href="#services" className="footer__link">Labour Law & Contracts</a></li>
                <li><a href="#services" className="footer__link">General Legal Support</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Expertise</h4>
              <ul className="footer__links">
                <li><a href="#expertise" className="footer__link">DKOM Practice</a></li>
                <li><a href="#expertise" className="footer__link">Tender Appeals</a></li>
                <li><a href="#expertise" className="footer__link">Administrative Disputes</a></li>
                <li><a href="#expertise" className="footer__link">Equal Treatment</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">The Firm</h4>
              <ul className="footer__links">
                <li><a href="#about" className="footer__link">About</a></li>
                <li><a href="/team" className="footer__link">Team</a></li>
                <li><a href="#contact" className="footer__link">Contact</a></li>
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
