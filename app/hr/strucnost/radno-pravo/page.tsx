"use client"

import { HrHeader } from "@/components/layout/hr-header"

export default function LabourLawPage() {
  return (
    <>
      <HrHeader activeExpertise="radno-pravo" altHref="/expertise/labour-law" />

      <main>
        <section className="expertise-detail">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">Stručnost</span>
                <h1 className="section-title">Radno pravo i ugovori o radu</h1>
              </div>
            </div>

            <div className="expertise-detail__layout">
              <div className="expertise-detail__content">
                <p>
                  Pružamo sveobuhvatnu pravnu podršku u svim aspektima radnog prava — od izrade i pregleda ugovora o radu i kolektivnih ugovora do zastupanja klijenata u radnim sporovima, otpustanjima i štrajkovima.
                </p>
                <ul>
                  <li>izrada i pregovaranje ugovora o radu, ugovora o nekonkurenciji i ugovora o povjerljivosti,</li>
                  <li>priprema općih akata i unutarnjih procedura u skladu s radnim zakonicima,</li>
                  <li>zastupanje u radnim sporovima, uključujuði tužbe zbog nezakonitog otkaza, neisplaćenih plaća i diskriminacije,</li>
                  <li>savjetovanje o restrukturiranju, otpustanjima i masovnim otkazima,</li>
                  <li>potpora u pregovorima sa sindikatima i štrajkovima,</li>
                  <li>due diligence radno-pravnih rizika u transakcijama spajanja i preuzimanja.</li>
                </ul>
                <p>
                  Radimo s poslodavcima i zaposlenicima, uz razumijevanje praktične stvarnosti radnog mjesta i istovremenu strogu pravnu preciznost.
                </p>
              </div>

              <aside className="expertise-sidebar">
                <div className="expertise-contact">
                  <span className="expertise-contact__label">Kontakti prakse</span>
                  <a href="/hr/tim" className="expertise-contact__card">
                    <div className="expertise-contact__media">
                      <img src="/team/member-03.jpg" alt="Marijan Vešligaj" className="expertise-contact__image" loading="lazy" />
                    </div>
                    <div className="expertise-contact__info">
                      <span className="expertise-contact__name">Marijan Vešligaj</span>
                      <span className="expertise-contact__role">Odvjetnik</span>
                    </div>
                  </a>
                  <a href="/hr/tim" className="expertise-contact__card">
                    <div className="expertise-contact__media">
                      <img src="/team/member-04.jpg" alt="Krešimir Sliepčević" className="expertise-contact__image" loading="lazy" />
                    </div>
                    <div className="expertise-contact__info">
                      <span className="expertise-contact__name">Krešimir Sliepčević</span>
                      <span className="expertise-contact__role">Odvjetnik</span>
                    </div>
                  </a>
                </div>

                <div className="expertise-practices">
                  <span className="expertise-practices__label">Prakse</span>
                  <nav className="expertise-practices__nav" aria-label="Povezane prakse">
                    <a href="/hr/strucnost/javna-nabava" className="expertise-practices__link">Javna nabava</a>
                    <a href="/hr/strucnost/nekretnine" className="expertise-practices__link">Nekretnine i zemljišne knjige</a>
                    <a href="/hr/strucnost/radno-pravo" className="expertise-practices__link expertise-practices__link--active">Radno pravo</a>
                    <a href="/hr/strucnost/opce-pravne-usluge" className="expertise-practices__link">Opće pravo</a>
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
