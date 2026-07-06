"use client"

import { HrHeader } from "@/components/layout/hr-header"

export default function RealEstatePage() {
  return (
    <>
      <HrHeader activeExpertise="nekretnine" altHref="/expertise/real-estate" />

      <main>
        <section className="expertise-detail">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">Stručnost</span>
                <h1 className="section-title">Nekretnine i zemljišne knjige</h1>
              </div>
            </div>

            <div className="expertise-detail__layout">
              <div className="expertise-detail__content">
                <p>
                  Imamo značajno iskustvo u pružanju pravne pomoći u postupcima stjecanja i raspolaganja nekretninama.
                </p>
                <ul>
                  <li>ispitivanje stanja zemljišta prije zaključenja ugovora,</li>
                  <li>savjetovanje o ugovorima,</li>
                  <li>izrada svih vrsta ugovora o prometu nekretninama,</li>
                  <li>upis prava vlasništva u zemljišne knjige,</li>
                  <li>zastupanje u vlasničkim sporovima,</li>
                  <li>priprema svih potrebnih dokumenata u postupcima diobe suvlasništva, etažiranja, spajanja zemljišnih knjiga i knjiga uloženih ugovora te provedba istih u zemljišnim knjigama (koje po zakonu ne mogu izrađivati ovlašteni stručnjaci arhitektonske, građevinske ili geodetske struke).</li>
                </ul>
                <p>
                  Osim toga, upoznati smo s građevinskim propisima i imamo iskustvo u suradnji sa svim ovlaštenim stručnjacima u području graditeljstva.
                </p>
              </div>

              <aside className="expertise-sidebar">
                <div className="expertise-contact">
                  <span className="expertise-contact__label">Kontakt prakse</span>
                  <a href="/hr/tim" className="expertise-contact__card">
                    <div className="expertise-contact__media">
                      <img
                        src="/team/member-04.jpg"
                        alt="Krešimir Sliepčević"
                        className="expertise-contact__image"
                        loading="lazy"
                      />
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
                    <a href="/hr/strucnost/nekretnine" className="expertise-practices__link expertise-practices__link--active">Nekretnine i zemljišne knjige</a>
                    <a href="/hr/strucnost/radno-pravo" className="expertise-practices__link">Radno pravo</a>
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
