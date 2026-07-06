"use client"

import Image from "next/image"
import { HrHeader } from "@/components/layout/hr-header"
import useScrollReveal from "@/lib/use-scroll-reveal"
import {Carousel, TestimonialCard} from "@/components/ui/retro-testimonial"
import type {iTestimonial} from "@/components/ui/retro-testimonial"

export default function Page() {
  useScrollReveal()

  const croatianQuotes: iTestimonial[] = [
    {
      name: "Charles Hamilton Houston",
      designation: "Afroamerički pravnik",
      description: "Pravnik je ili socijalni inženjer, ili parazit.",
      profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Charles_Hamilton_Houston_2.jpg/800px-Charles_Hamilton_Houston_2.jpg",
    },
    {
      name: "Sun Cu",
      designation: "Kineski vojni strateg",
      description: "Najbolje je pobijediti bez borbe.",
      profileImage: "https://upload.wikimedia.org/wikipedia/commons/c/cf/%E5%90%B4%E5%8F%B8%E9%A9%AC%E5%AD%99%E6%AD%A6.jpg",
    },
    {
      name: "Latinska izreka",
      designation: "Mudrost starog Rima",
      description: "Dvostruko daje tko brzo daje.",
      profileImage: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
    },
    {
      name: "Latinska izreka",
      designation: "Mudrost starog Rima",
      description: "Popuštaj i otići ćeš kao pobjednik.",
      profileImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    },
    {
      name: "Latinska izreka",
      designation: "Mudrost starog Rima",
      description: "Više vrijedi promišljeno raditi nego razborito misliti.",
      profileImage: "https://images.unsplash.com/photo-1505664194779-8beaceb93744",
    },
  ]

  const croatianQuoteCards = croatianQuotes.map((quote, index) => (
    <TestimonialCard key={index} testimonial={quote} index={index} />
  ))

  return (
    <>
      <HrHeader light={false} />

      <main>
        {/* HERO */}
        <section className="hero reveal">
          <div className="hero__bg">
            <Image
              src="/images/hero.jpg"
              alt="Moderna arhitektura"
              fill
              className="hero__bg-img"
              priority
            />
          </div>
          <div className="container hero__inner">
            <h1 className="hero__title">
              The law is full of edges.<br />
              That is where expertise lives.
            </h1>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services reveal" id="usluge">
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
        <section className="about reveal" id="o-nama">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">02 O NAMA</span>
                <h2 className="section-title">Odvjetnički ured Vešligaj<br />i Sliepčević</h2>
              </div>
              <p className="section-description">
                Osnovan 03.05.2016. s ciljem pružanja visokokvalitetnih pravnih usluga za poduzeća i građane.
              </p>
            </div>

            <div className="about__content">
              <div className="about__text">
                <p>
                  Javno trgovačko društvo Odvjetničko društvo Vešligaj i Sliepčević j.t.d. osnovano je 03.05.2016. s ciljem pružanja visokokvalitetnih pravnih usluga za poduzeća i građane. S dugogodišnjim iskustvom u privatnom sektoru, organiziramo sveobuhvatnu, individualno prilagođenu pravnu podršku, s posebnim fokusom na mala i srednja poduzeća.
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
        <section className="expertise reveal" id="strucnost">
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

            <div className="expertise__cta">
              <a href="/hr/strucnost/javna-nabava" className="header__cta">Pogledajte naše dobivene predmete</a>
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

        {/* TESTIMONIALS */}
        <section className="testimonials reveal" id="citati">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">04 PERSPEKTIVE</span>
                <h2 className="section-title">O pravu i pravdi</h2>
              </div>
              <p className="section-description">
                Riječi iz povijesti koje oblikuju naše razmišljanje o odgovornosti, pravednosti i vladavini prava.
              </p>
            </div>
            <Carousel items={croatianQuoteCards} />
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact reveal" id="kontakt">
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
                    <a href="mailto:info@odvis.hr">info@odvis.hr</a>
                  </div>
                </div>

                <div className="contact__block">
                  <span className="contact__block-label">Telefon</span>
                  <div className="contact__block-value">
                    <a href="tel:016521072">016521072</a>
                  </div>
                </div>

                <div className="contact__block">
                  <span className="contact__block-label">Adresa</span>
                  <div className="contact__block-value">
                    Froudeova ulica 9<br />
                    10000 Zagreb
                  </div>
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
                <li><a href="/hr#usluge" className="footer__link">Pravo javne nabave</a></li>
                <li><a href="/hr#usluge" className="footer__link">Pravo nekretnina i zemljišnih knjiga</a></li>
                <li><a href="/hr#usluge" className="footer__link">Radno pravo i ugovori</a></li>
                <li><a href="/hr#usluge" className="footer__link">Opće pravne usluge</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Stručnost</h4>
              <ul className="footer__links">
                <li><a href="/hr/strucnost/javna-nabava" className="footer__link">Praksa pred DKOM-om</a></li>
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
