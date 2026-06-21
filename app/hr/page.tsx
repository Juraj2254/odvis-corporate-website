"use client"

import { useState, useEffect, useRef } from "react"

export default function Page() {
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
      {/* HEADER */}
      <html lang="hr" />
      <header className="header">
        <div className="container header__inner">
          <a href="/" aria-label="ODVIS Početna">
            <img src="/logos/odvis-wordmark-primary-light.svg" alt="ODVIS" className="header__logo" />
          </a>

          <nav className="header__nav" aria-label="Glavna navigacija">
            <a href="#usluge" className="header__nav-link">USLUGE</a>
            <a href="#strucnost" className="header__nav-link">STRUČNOST</a>
            <div
              ref={firmRef}
              className={`header__firm-dropdown${firmOpen ? " header__firm-dropdown--open" : ""}`}
              aria-label="Ured"
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
                <span className="header__firm-trigger-text">URED</span>
                <svg className="header__firm-arrow" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="header__firm-menu" role="menu" aria-label="Opcije ureda">
                <a href="#o-nama" className="header__firm-option" role="menuitem" onClick={() => setFirmOpen(false)}>o nama</a>
                <a href="/hr/tim" className="header__firm-option" role="menuitem" onClick={() => setFirmOpen(false)}>tim</a>
                <a href="#kontakt" className="header__firm-option" role="menuitem" onClick={() => setFirmOpen(false)}>kontakt</a>
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
                <a href="/" className="header__lang-option" role="menuitem" onClick={() => setLangOpen(false)}>en</a>
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
        <section className="services" id="usluge">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">01 USLUGE</span>
                <h2 className="section-title">Područja prakse</h2>
              </div>
              <p className="section-description">
                Pružamo sveobuhvatnu pravnu podršku s fokusom na pravo javne nabave, pravo nekretnina i opće pravne usluge za poduzeća i građane.
              </p>
            </div>

            <div className="services__grid">
              <div className="service-card">
                <span className="service-card__number">01</span>
                <h3 className="service-card__title">Pravo javne nabave</h3>
                <p className="service-card__description">
                  Bogato iskustvo u pravnoj podršci postupcima javne nabave, od pripreme ponuda i žalbi na dokumentaciju do zastupanja u upravnim sporovima pred Državnom komisijom (DKOM).
                </p>
                <a href="#" className="service-card__link">
                  Saznajte više
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              <div className="service-card">
                <span className="service-card__number">02</span>
                <h3 className="service-card__title">Pravo nekretnina i zemljišnih knjiga</h3>
                <p className="service-card__description">
                  Pravna pomoć u svim postupcima vezanim uz stjecanje i raspolaganje nekretninama, upis prava vlasništva u zemljišne knjige te rješavanje vlasničkih sporova.
                </p>
                <a href="#" className="service-card__link">
                  Saznajte više
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              <div className="service-card">
                <span className="service-card__number">03</span>
                <h3 className="service-card__title">Radno pravo i ugovori o radu</h3>
                <p className="service-card__description">
                  Izrada ugovora o radu, izrada općih akata iz područja radnog prava te zastupanje u radnim sporovima za poslodavce i zaposlenike u svim fazama radnog odnosa.
                </p>
                <a href="#" className="service-card__link">
                  Saznajte više
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              <div className="service-card">
                <span className="service-card__number">04</span>
                <h3 className="service-card__title">Opće pravne usluge</h3>
                <p className="service-card__description">
                  Savjetovanje o poslovnim ugovorima, due diligence, naplata potraživanja, nasljednopravni postupci, pravo trgovačkih društava, upravni postupci i ustavne tužbe.
                </p>
                <a href="#" className="service-card__link">
                  Saznajte više
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about" id="o-nama">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">02 O NAMA</span>
                <h2 className="section-title">Odvjetnički ured Vešligaj<br />i Sliepčević</h2>
              </div>
              <p className="section-description">
                Osnovan 2016. s ciljem pružanja visokokvalitetnih pravnih usluga za poduzeća i građane.
              </p>
            </div>

            <div className="about__content">
              <div className="about__text">
                <p>
                  Odvjetnički ured Vešligaj i Sliepčević osnovan je 2016. godine s ciljem pružanja visokokvalitetnih pravnih usluga za poduzeća i građane. S dugogodišnjim iskustvom u privatnom sektoru, organiziramo sveobuhvatnu, individualno prilagođenu pravnu podršku, s posebnim fokusom na mala i srednja poduzeća.
                </p>
                <p>
                  Naša praksa počiva na jednostavnom uvjerenju: najbolji ishod je onaj postignut bez nepotrebnog sukoba. Savjetujemo prije nastanka sporova, zastupamo s preciznošću kada do njih dođe, i svaku stvar tretiramo s istim standardom pažnje, bez obzira na njezinu veličinu.
                </p>
              </div>

              <div className="about__features">
                <div className="about__feature">
                  <div className="about__feature-icon"></div>
                  <span className="about__feature-text">CERTIFICIRANI ZA JAVNU NABAVU</span>
                </div>
                <div className="about__feature">
                  <div className="about__feature-icon"></div>
                  <span className="about__feature-text">OVLAŠTENI POSREDNIK</span>
                </div>
                <div className="about__feature">
                  <div className="about__feature-icon"></div>
                  <span className="about__feature-text">SPECIJALIZIRANA DKOM PRAKSA</span>
                </div>
                <div className="about__feature">
                  <div className="about__feature-icon"></div>
                  <span className="about__feature-text">PRAVNA PODRŠKA ZA MSP-ove</span>
                </div>
                <div className="about__feature">
                  <div className="about__feature-icon"></div>
                  <span className="about__feature-text">PREVENCIJA SPOROVA NA PRVOM MJESTU</span>
                </div>
                <div className="about__feature">
                  <div className="about__feature-icon"></div>
                  <span className="about__feature-text">PRECIZNOST U ZASTUPANJU</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="expertise" id="strucnost">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">03 STRUČNOST</span>
                <h2 className="section-title">Praksa pred DKOM-om</h2>
              </div>
              <p className="section-description">
                Državna komisija za kontrolu postupaka javne nabave (DKOM) arena je u kojoj se odlučuje o ugovorima vrijednima milijune. Naše iskustvo u zastupanju klijenata pred DKOM-om obuhvaća širok spektar predmeta, od žalbi na dokumentaciju do punih upravnospornih postupaka.
              </p>
            </div>

            <div className="expertise__grid">
              <div className="expertise__item">
                <span className="expertise__item-number">01</span>
                <div className="expertise__item-content">
                  <h3 className="expertise__item-title">Žalbe na dokumentaciju za nadmetanje</h3>
                  <p className="expertise__item-description">
                    Osporavanje nejasnih, diskriminatornih ili protuzakonitih uvjeta nadmetanja prije sklapanja ugovora.
                  </p>
                </div>
              </div>

              <div className="expertise__item">
                <span className="expertise__item-number">02</span>
                <div className="expertise__item-content">
                  <h3 className="expertise__item-title">Zastupanje u upravnim sporovima pred DKOM-om</h3>
                  <p className="expertise__item-description">
                    Cjelovito procesno zastupanje od inicijalne žalbe do konačne odluke DKOM-a.
                  </p>
                </div>
              </div>

              <div className="expertise__item">
                <span className="expertise__item-number">03</span>
                <div className="expertise__item-content">
                  <h3 className="expertise__item-title">Pregovaranje i konzultacije pri sklapanju ugovora</h3>
                  <p className="expertise__item-description">
                    Savjetovanje o izmjenama, pregovorima i finalizaciji ugovora o javnoj nabavi.
                  </p>
                </div>
              </div>

              <div className="expertise__item">
                <span className="expertise__item-number">04</span>
                <div className="expertise__item-content">
                  <h3 className="expertise__item-title">Osporavanje i obrana abnormalno niskih ponuda</h3>
                  <p className="expertise__item-description">
                    Zastupanje naručitelja i ponuditelja u sporovima vezanim uz abnormalno niske cijene.
                  </p>
                </div>
              </div>

              <div className="expertise__item">
                <span className="expertise__item-number">05</span>
                <div className="expertise__item-content">
                  <h3 className="expertise__item-title">Tehnička i stručna sposobnost ponuditelja</h3>
                  <p className="expertise__item-description">
                    Pregled kvalifikacijskih kriterija i osiguravanje razmjernih uvjeta odabira.
                  </p>
                </div>
              </div>

              <div className="expertise__item">
                <span className="expertise__item-number">06</span>
                <div className="expertise__item-content">
                  <h3 className="expertise__item-title">Jednako postupanje prema natjecateljima</h3>
                  <p className="expertise__item-description">
                    Zaštita poštenog tržišnog natjecanja i transparentnosti u cijelom postupku nabave.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="kontakt">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">05 KONTAKT</span>
                <h2 className="section-title">Kontaktirajte nas</h2>
              </div>
              <p className="section-description">
                Dostupni smo radnim danima od 09:00 do 17:00 sati. Termini izvan redovnog radnog vremena dostupni su prema dogovoru.
              </p>
            </div>

            <div className="contact__inner">
              <div className="contact__info">
                <div className="contact__block">
                  <span className="contact__block-label">E-mail</span>
                  <div className="contact__block-value">
                    <a href="mailto:office@odvis.hr">office@odvis.hr</a>
                  </div>
                </div>

                <div className="contact__block">
                  <span className="contact__block-label">Telefon</span>
                  <div className="contact__block-value">
                    <a href="tel:+38516423963">+385 1 6423 963</a>
                  </div>
                </div>

                <div className="contact__block">
                  <span className="contact__block-label">Adresa</span>
                  <div className="contact__block-value">
                    Ulica Franje Lučića 9, VIII. kat<br />
                    Novi Zagreb – Siget, 10 000 Zagreb
                  </div>
                  <p className="contact__directions">
                    Tramvajske linije 7 i 14 (stanica Velesajam). Parkiranje u Lučićevoj i okolnim ulicama (zona 2). Taksi stanica u Lučićevoj ulici.
                  </p>
                </div>
              </div>

              <form className="contact__form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Ime</label>
                  <input type="text" id="name" name="name" className="form-input" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">E-mail</label>
                  <input type="email" id="email" name="email" className="form-input" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Poruka</label>
                  <textarea id="message" name="message" className="form-textarea" required></textarea>
                </div>

                <button type="submit" className="form-submit">Pošalji poruku</button>
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
                Odvjetnički ured Vešligaj i Sliepčević. Specijalizirana pravna podrška za poduzeća i građane od 2016.
              </p>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Usluge</h4>
              <ul className="footer__links">
                <li><a href="#usluge" className="footer__link">Pravo javne nabave</a></li>
                <li><a href="#usluge" className="footer__link">Pravo nekretnina i zemljišnih knjiga</a></li>
                <li><a href="#usluge" className="footer__link">Radno pravo i ugovori</a></li>
                <li><a href="#usluge" className="footer__link">Opće pravne usluge</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Stručnost</h4>
              <ul className="footer__links">
                <li><a href="#strucnost" className="footer__link">Praksa pred DKOM-om</a></li>
                <li><a href="#strucnost" className="footer__link">Žalbe na natječajnu dokumentaciju</a></li>
                <li><a href="#strucnost" className="footer__link">Upravni sporovi</a></li>
                <li><a href="#strucnost" className="footer__link">Jednako postupanje</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Ured</h4>
              <ul className="footer__links">
                <li><a href="#o-nama" className="footer__link">O nama</a></li>
                <li><a href="/hr/tim" className="footer__link">Tim</a></li>
                <li><a href="#kontakt" className="footer__link">Kontakt</a></li>
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
