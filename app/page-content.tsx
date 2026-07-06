
"use client"

import Image from "next/image"
import { EnHeader } from "@/components/layout/en-header"
import ContactForm from "@/components/contact-form"
import useScrollReveal from "@/lib/use-scroll-reveal"
import {Carousel, TestimonialCard} from "@/components/ui/retro-testimonial"
import type {iTestimonial} from "@/components/ui/retro-testimonial"

export default function Page() {
  useScrollReveal()

  const englishQuotes: iTestimonial[] = [
    {
      name: "Charles Hamilton Houston",
      designation: "African American lawyer",
      description: "A lawyer is either a social engineer or a parasite on society.",
      profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Charles_Hamilton_Houston_2.jpg/800px-Charles_Hamilton_Houston_2.jpg",
    },
    {
      name: "Sun Tzu",
      designation: "Chinese military strategist",
      description: "The supreme art of war is to subdue the enemy without fighting.",
      profileImage: "https://upload.wikimedia.org/wikipedia/commons/c/cf/%E5%90%B4%E5%8F%B8%E9%A9%AC%E5%AD%99%E6%AD%A6.jpg",
    },
    {
      name: "Latin Proverb",
      designation: "Wisdom of ancient Rome",
      description: "He gives twice who gives quickly.",
      profileImage: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
    },
    {
      name: "Latin Proverb",
      designation: "Wisdom of ancient Rome",
      description: "Yield and you shall be the victor.",
      profileImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    },
    {
      name: "Latin Proverb",
      designation: "Wisdom of ancient Rome",
      description: "It is more valuable to act with reflection than to think with prudence.",
      profileImage: "https://images.unsplash.com/photo-1505664194779-8beaceb93744",
    },
  ]

  const englishQuoteCards = englishQuotes.map((quote, index) => (
    <TestimonialCard key={index} testimonial={quote} index={index} />
  ))

  return (
    <>
      <EnHeader light={false} />

      <main>
      {/* HERO */}
        <section className="hero reveal">
          <div className="hero__bg">
            <Image
              src="/images/hero.jpg"
              alt="Modern architecture"
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
        <section className="services reveal" id="services">
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
        <section className="about reveal" id="about">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">02 About</span>
                <h2 className="section-title">Law Firm Vešligaj<br />and Sliepčević</h2>
              </div>
              <p className="section-description">
                Founded on 3 May 2016 with the goal of delivering high-quality legal services to businesses and individuals.
              </p>
            </div>

            <div className="about__content">
              <div className="about__text">
                <p>
                  Javno trgovačko društvo Odvjetničko društvo Vešligaj i Sliepčević j.t.d. was founded on 3 May 2016 with the goal of delivering high-quality legal services to businesses and individuals. With many years of experience in the private sector, we provide comprehensive legal support tailored to each client, with a particular focus on small and medium-sized enterprises.
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
        <section className="expertise reveal" id="expertise">
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

        {/* TESTIMONIALS */}
        <section className="testimonials reveal" id="testimonials">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">04 Perspectives</span>
                <h2 className="section-title">On Law and Justice</h2>
              </div>
              <p className="section-description">
                Words from history that shape how we think about responsibility, fairness, and the rule of law.
              </p>
            </div>
            <Carousel items={englishQuoteCards} />
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact reveal" id="contact">
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
                    <a href="mailto:info@odvis.hr">info@odvis.hr</a>
                  </div>
                </div>

                <div className="contact__block">
                  <span className="contact__block-label">Phone</span>
                  <div className="contact__block-value">
                    <a href="tel:016521072">016521072</a>
                  </div>
                </div>

                <div className="contact__block">
                  <span className="contact__block-label">Address</span>
                  <div className="contact__block-value">
                    Froudeova ulica 9<br />
                    10000 Zagreb, Croatia
                  </div>
                </div>
              </div>

              <ContactForm locale="en" />
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
                <li><a href="/expertise/public-procurement" className="footer__link">DKOM Practice</a></li>
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
            <p className="footer__copyright">&copy; 2026 ODVIS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
