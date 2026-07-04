"use client"

interface FooterProps {
  locale?: "en" | "hr"
}

const FOOTER_EN = {
  services: {
    title: "Services",
    items: [
      { label: "Public Procurement Law", href: "#services" },
      { label: "Real Estate & Land Registry", href: "#services" },
      { label: "Labour Law & Contracts", href: "#services" },
      { label: "General Legal Support", href: "#services" },
    ],
  },
  expertise: {
    title: "Expertise",
    items: [
      { label: "DKOM Practice", href: "#expertise" },
    ],
  },
  firm: {
    title: "The Firm",
    items: [
      { label: "Team", href: "/team" },
    ],
  },
  tagline: "Law Firm Vešligaj and Sliepčević. Specialised legal support for businesses and individuals since 2016.",
  copyright: "© 2026 ODVIS. All rights reserved.",
}

const FOOTER_HR = {
  services: {
    title: "Usluge",
    items: [
      { label: "Pravo javne nabave", href: "#usluge" },
      { label: "Pravo nekretnina i zemljišnih knjiga", href: "#usluge" },
      { label: "Radno pravo i ugovori", href: "#usluge" },
      { label: "Opće pravne usluge", href: "#usluge" },
    ],
  },
  expertise: {
    title: "Stručnost",
    items: [
      { label: "Praksa pred DKOM-om", href: "#strucnost" },
    ],
  },
  firm: {
    title: "Ured",
    items: [
      { label: "Tim", href: "/hr/tim" },
    ],
  },
  tagline: "Odvjetnički ured Vešligaj i Sliepčević. Specijalizirana pravna podrška za poduzeća i građane od 2016.",
  copyright: "© 2026 ODVIS. Sva prava pridržana.",
}

export default function Footer({ locale = "en" }: FooterProps) {
  const footer = locale === "hr" ? FOOTER_HR : FOOTER_EN
  const logoFile = "/logos/odvis-wordmark-light.svg"

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <img src={logoFile} alt="ODVIS" className="footer__logo" />
            <p className="footer__tagline">{footer.tagline}</p>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">{footer.services.title}</h4>
            <ul className="footer__links">
              {footer.services.items.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer__link">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">{footer.expertise.title}</h4>
            <ul className="footer__links">
              {footer.expertise.items.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer__link">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">{footer.firm.title}</h4>
            <ul className="footer__links">
              {footer.firm.items.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer__link">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
