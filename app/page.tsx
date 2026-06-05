export default function Page() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="container header__inner">
          <a href="/" aria-label="ODVIS Home">
            <img src="/logos/odvis-wordmark-dark.svg" alt="ODVIS" className="header__logo" />
          </a>

          <nav className="header__nav" aria-label="Main navigation">
            <a href="#services" className="header__nav-link">Services</a>
            <a href="#about" className="header__nav-link">About</a>
            <a href="#expertise" className="header__nav-link">Expertise</a>
            <a href="#team" className="header__nav-link">Team</a>
            <a href="#contact" className="header__nav-link">Contact</a>
          </nav>

          <div className="header__contact">
            <span className="header__lang">EN</span>
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
            <span className="hero__label">Lorem Ipsum Dolor 2008</span>
            <h1 className="hero__title">
              Advocatus<br />
              <span className="hero__title-accent">Fortis</span><br />
              Lex Firma
            </h1>

            <div className="hero__content">
              <p className="hero__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <div className="hero__stats">
                <div className="hero__stat">
                  <div className="hero__stat-number">250+</div>
                  <div className="hero__stat-label">Lorem Ipsum</div>
                </div>
                <div className="hero__stat">
                  <div className="hero__stat-number">98%</div>
                  <div className="hero__stat-label">Dolor Sit</div>
                </div>
                <div className="hero__stat">
                  <div className="hero__stat-number">15+</div>
                  <div className="hero__stat-label">Amet Consectetur</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services" id="services">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">01 — Services</span>
                <h2 className="section-title">Lorem Ipsum Dolor<br />Sit Amet Elit</h2>
              </div>
              <p className="section-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="services__grid">
              <div className="service-card">
                <span className="service-card__number">01</span>
                <h3 className="service-card__title">Lorem Ipsum</h3>
                <p className="service-card__description">
                  Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="service-card__link">
                  Perspiciatis
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              <div className="service-card">
                <span className="service-card__number">02</span>
                <h3 className="service-card__title">Consectetur</h3>
                <p className="service-card__description">
                  Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
                </p>
                <a href="#" className="service-card__link">
                  Perspiciatis
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              <div className="service-card">
                <span className="service-card__number">03</span>
                <h3 className="service-card__title">Adipiscing</h3>
                <p className="service-card__description">
                  Elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.
                </p>
                <a href="#" className="service-card__link">
                  Perspiciatis
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>

              <div className="service-card">
                <span className="service-card__number">04</span>
                <h3 className="service-card__title">Tempor Elit</h3>
                <p className="service-card__description">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation.
                </p>
                <a href="#" className="service-card__link">
                  Perspiciatis
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
                <span className="section-label">02 — About</span>
                <h2 className="section-title">Quis Nostrud<br />Exercitation Ullamco</h2>
              </div>
              <p className="section-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>

            <div className="about__content">
              <div className="about__text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>

              <div className="about__features">
                <div className="about__feature">
                  <div className="about__feature-icon"></div>
                  <span className="about__feature-text">Lorem Ipsum Dolor Sit</span>
                </div>
                <div className="about__feature">
                  <div className="about__feature-icon"></div>
                  <span className="about__feature-text">Consectetur Adipiscing Elit</span>
                </div>
                <div className="about__feature">
                  <div className="about__feature-icon"></div>
                  <span className="about__feature-text">Sed Do Eiusmod Tempor</span>
                </div>
                <div className="about__feature">
                  <div className="about__feature-icon"></div>
                  <span className="about__feature-text">Incididunt Ut Labore</span>
                </div>
                <div className="about__feature">
                  <div className="about__feature-icon"></div>
                  <span className="about__feature-text">Et Dolore Magna Aliqua</span>
                </div>
                <div className="about__feature">
                  <div className="about__feature-icon"></div>
                  <span className="about__feature-text">Ut Enim Ad Minim Veniam</span>
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
                <span className="section-label">03 — Expertise</span>
                <h2 className="section-title">Duis Aute Irure<br />Dolor Reprehenderit</h2>
              </div>
              <p className="section-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>

            <div className="expertise__grid">
              <div className="expertise__item">
                <span className="expertise__item-number">01</span>
                <div className="expertise__item-content">
                  <h3 className="expertise__item-title">Lorem Ipsum Dolor</h3>
                  <p className="expertise__item-description">
                    Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
                  </p>
                </div>
              </div>

              <div className="expertise__item">
                <span className="expertise__item-number">02</span>
                <div className="expertise__item-content">
                  <h3 className="expertise__item-title">Consectetur Elit</h3>
                  <p className="expertise__item-description">
                    Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
                  </p>
                </div>
              </div>

              <div className="expertise__item">
                <span className="expertise__item-number">03</span>
                <div className="expertise__item-content">
                  <h3 className="expertise__item-title">Adipiscing Tempor</h3>
                  <p className="expertise__item-description">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.
                  </p>
                </div>
              </div>

              <div className="expertise__item">
                <span className="expertise__item-number">04</span>
                <div className="expertise__item-content">
                  <h3 className="expertise__item-title">Eiusmod Incididunt</h3>
                  <p className="expertise__item-description">
                    Tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco.
                  </p>
                </div>
              </div>

              <div className="expertise__item">
                <span className="expertise__item-number">05</span>
                <div className="expertise__item-content">
                  <h3 className="expertise__item-title">Labore Dolore</h3>
                  <p className="expertise__item-description">
                    Ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi.
                  </p>
                </div>
              </div>

              <div className="expertise__item">
                <span className="expertise__item-number">06</span>
                <div className="expertise__item-content">
                  <h3 className="expertise__item-title">Magna Aliqua</h3>
                  <p className="expertise__item-description">
                    Et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="team" id="team">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">04 — Team</span>
                <h2 className="section-title">Excepteur Sint<br />Occaecat Cupidatat</h2>
              </div>
              <p className="section-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>

            <div className="team__grid">
              <div className="team__member">
                <div className="team__member-image"></div>
                <h3 className="team__member-name">Lorem Ipsum</h3>
                <span className="team__member-role">Dolor Sit Amet</span>
                <p className="team__member-bio">
                  Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="team__member">
                <div className="team__member-image"></div>
                <h3 className="team__member-name">Consectetur Elit</h3>
                <span className="team__member-role">Adipiscing Tempor</span>
                <p className="team__member-bio">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
                </p>
              </div>

              <div className="team__member">
                <div className="team__member-image"></div>
                <h3 className="team__member-name">Adipiscing Sed</h3>
                <span className="team__member-role">Eiusmod Incididunt</span>
                <p className="team__member-bio">
                  Eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="container cta__inner">
            <h2 className="cta__title">Lorem Ipsum Dolor Sit Amet Consectetur?</h2>
            <button className="cta__button">Adipiscing Elit</button>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">05 — Contact</span>
                <h2 className="section-title">Non Proident<br />Sunt In Culpa</h2>
              </div>
            </div>

            <div className="contact__inner">
              <div className="contact__info">
                <div className="contact__block">
                  <span className="contact__block-label">Email</span>
                  <div className="contact__block-value">
                    <a href="mailto:lorem@ipsum.com">lorem@ipsum.com</a>
                  </div>
                </div>

                <div className="contact__block">
                  <span className="contact__block-label">Phone</span>
                  <div className="contact__block-value">
                    <a href="tel:+385123456789">+385 1 234 5678</a>
                  </div>
                </div>

                <div className="contact__block">
                  <span className="contact__block-label">Address</span>
                  <div className="contact__block-value">
                    Lorem Ipsum 12<br />
                    10000 Dolor Sit, Amet
                  </div>
                </div>
              </div>

              <form className="contact__form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Lorem Ipsum</label>
                  <input type="text" id="name" name="name" className="form-input" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Dolor Sit</label>
                  <input type="email" id="email" name="email" className="form-input" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Amet Consectetur</label>
                  <textarea id="message" name="message" className="form-textarea" required></textarea>
                </div>

                <button type="submit" className="form-submit">Adipiscing Elit</button>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Services</h4>
              <ul className="footer__links">
                <li><a href="#" className="footer__link">Lorem Ipsum</a></li>
                <li><a href="#" className="footer__link">Dolor Sit</a></li>
                <li><a href="#" className="footer__link">Amet Elit</a></li>
                <li><a href="#" className="footer__link">Consectetur</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Company</h4>
              <ul className="footer__links">
                <li><a href="#" className="footer__link">Adipiscing</a></li>
                <li><a href="#" className="footer__link">Eiusmod</a></li>
                <li><a href="#" className="footer__link">Tempor</a></li>
                <li><a href="#" className="footer__link">Incididunt</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__column-title">Connect</h4>
              <ul className="footer__links">
                <li><a href="#" className="footer__link">LinkedIn</a></li>
                <li><a href="#" className="footer__link">Twitter</a></li>
                <li><a href="#" className="footer__link">Facebook</a></li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <p className="footer__copyright">&copy; 2024 ODVIS. Lorem ipsum dolor sit amet.</p>
            <div className="footer__legal">
              <a href="#" className="footer__legal-link">Consectetur Adipiscing</a>
              <a href="#" className="footer__legal-link">Elit Sed Eiusmod</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
