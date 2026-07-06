"use client"

import { HrHeader } from "@/components/layout/hr-header"

export default function GeneralLegalPage() {
  return (
    <>
      <HrHeader activeExpertise="opce-pravne-usluge" altHref="/expertise/general-legal" />

      <main>
        <section className="expertise-detail">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">Stručnost</span>
                <h1 className="section-title">Opće pravne usluge</h1>
              </div>
            </div>

            <div className="expertise-detail__layout">
              <div className="expertise-detail__content">
                <p>
                  Osim naših glavnih specijalizacija, pružamo širok spektar pravnih usluga koje odgovaraju svakodnevnim i izvanrednim izazovima s kojima se susreću poduzeća i građani. Bilo da se radi o jednom pregledu ugovora ili strateškom savjetu u složenoj transakciji, svakom predmetu pristupamo s istim standardom pažnje.
                </p>
                <ul>
                  <li>poslovni ugovori, trgovinski ugovori i opći uvjeti poslovanja,</li>
                  <li>pravo trgovačkih društava, osnivanje, restrukturiranje i M&A,</li>
                  <li>due diligence za transakcije i ulaganja,</li>
                  <li>naplata potraživanja i izvršenje,</li>
                  <li>nasljednopravni postupci i obiteljsko imovinsko pravo,</li>
                  <li>upravni postupci i zastupanje pred državnim tijelima,</li>
                  <li>ustavne tužbe i zaštita temeljnih prava,</li>
                  <li>medijacija i alternativno rješavanje sporova.</li>
                </ul>
                <p>
                  Vjerujemo u prevenciju prije liječenja. Gdje god je to moguće, rano prepoznajemo rizike, izrađujemo ugovore koji izdržavaju kontrolu i pomažemo klijentima u navigaciji regulatornim okvirima bez skupalih iznenađenja.
                </p>
              </div>

              <aside className="expertise-sidebar">
                <div className="expertise-contact">
                  <span className="expertise-contact__label">Kontakti prakse</span>
                  <a href="/hr/tim" className="expertise-contact__card">
                    <div className="expertise-contact__media">
                      <img src="/team/member-04.jpg" alt="Krešimir Sliepčević" className="expertise-contact__image" loading="lazy" />
                    </div>
                    <div className="expertise-contact__info">
                      <span className="expertise-contact__name">Krešimir Sliepčević</span>
                      <span className="expertise-contact__role">Odvjetnik</span>
                    </div>
                  </a>
                  <a href="/hr/tim" className="expertise-contact__card">
                    <div className="expertise-contact__media">
                      <img src="/team/member-03.jpg" alt="Marijan Vešligaj" className="expertise-contact__image" loading="lazy" />
                    </div>
                    <div className="expertise-contact__info">
                      <span className="expertise-contact__name">Marijan Vešligaj</span>
                      <span className="expertise-contact__role">Odvjetnik</span>
                    </div>
                  </a>
                </div>

                <div className="expertise-practices">
                  <span className="expertise-practices__label">Prakse</span>
                  <nav className="expertise-practices__nav" aria-label="Povezane prakse">
                    <a href="/hr/strucnost/javna-nabava" className="expertise-practices__link">Javna nabava</a>
                    <a href="/hr/strucnost/nekretnine" className="expertise-practices__link">Nekretnine i zemljišne knjige</a>
                    <a href="/hr/strucnost/radno-pravo" className="expertise-practices__link">Radno pravo</a>
                    <a href="/hr/strucnost/opce-pravne-usluge" className="expertise-practices__link expertise-practices__link--active">Opće pravo</a>
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
                Odvjetnički ured Vešligaj i Sliepčević. Specijalizirana pravna podrška za poduzeća i građane od 2016.
              </p>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Usluge</h4>
              <ul className="footer__links">
                <li><a href="/hr#usluge" className="footer__link">Pravo javne nabave</a></li>
                <li><a href="/hr#usluge" className="footer__link">Pravo nekretnina i zemljišnih knjiga</a></li>
                <li><a href="/hr#usluge" className="footer__link">Radno pravo i ugovori</a></li>
                <li><a href="/hr#usluge" className="footer__link">Opće pravne usluge</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Stručnost</h4>
              <ul className="footer__links">
                <li><a href="/hr#strucnost" className="footer__link">Praksa pred DKOM-om</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Ured</h4>
              <ul className="footer__links">
                <li><a href="/hr#o-nama" className="footer__link">O nama</a></li>
                <li><a href="/hr/tim" className="footer__link">Tim</a></li>
                <li><a href="/hr#kontakt" className="footer__link">Kontakt</a></li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <p className="footer__copyright">&copy; 2026 ODVIS. Sva prava pridržana.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
