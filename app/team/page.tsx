import Link from 'next/link'

const teamMembers = [
  { slug: 'member-01', firstName: 'Lorem', lastName: 'Ipsum', role: 'Senior Partner' },
  { slug: 'member-02', firstName: 'Dolor', lastName: 'Sit', role: 'Managing Partner' },
  { slug: 'member-03', firstName: 'Amet', lastName: 'Consectetur', role: 'Associate' },
  { slug: 'member-04', firstName: 'Adipiscing', lastName: 'Elit', role: 'Counsel' },
  { slug: 'member-05', firstName: 'Sed', lastName: 'Do', role: 'Junior Associate' },
]

export default function TeamPage() {
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
            <div className="header__firm-dropdown" aria-label="The firm">
              <button className="header__firm-trigger header__firm-trigger--dark" type="button" aria-haspopup="true" aria-expanded="false">
                <span>The Firm</span>
                <svg className="header__firm-arrow" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="header__firm-menu" role="menu" aria-label="The firm options">
                <a href="/#about" className="header__firm-option" role="menuitem">about</a>
                <a href="/team" className="header__firm-option header__firm-option--active" role="menuitem">team</a>
                <a href="/#contact" className="header__firm-option" role="menuitem">contact</a>
              </div>
            </div>
          </nav>

          <div className="header__contact">
            <div className="header__lang-dropdown" aria-label="Language selector">
              <button className="header__lang-trigger" type="button" aria-haspopup="true" aria-expanded="false">
                <span className="header__lang-current">EN</span>
                <svg className="header__lang-arrow" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="header__lang-menu" role="menu" aria-label="Language options">
                <a href="#" className="header__lang-option header__lang-option--active" role="menuitem">EN</a>
                <a href="#" className="header__lang-option" role="menuitem">hr</a>
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
        <section className="team-page">
          <div className="container">
            <h1 className="team-page__title">Our team</h1>
            <p className="team-page__quote">
              We create teams tailored to navigate your legal challenges.
            </p>

            <div className="team-page__grid">
              {teamMembers.map((member) => (
                <Link
                  key={member.slug}
                  href={`/team/${member.slug}`}
                  className="team-page__member"
                >
                  <div className="team-page__member-image">
                    <span className="team-page__member-image-label">
                      Portrait: 600 × 800px
                    </span>
                  </div>
                  <h2 className="team-page__member-name">
                    {member.firstName} {member.lastName}
                  </h2>
                  <span className="team-page__member-role">{member.role}</span>
                </Link>
              ))}
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
