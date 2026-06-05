'use client'

export function ContactSection() {
  return (
    <section id="kontakt" className="py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Left Column - Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-px bg-accent" />
              <span className="text-nav text-xs text-accent">Kontakt</span>
            </div>
            <h2 className="text-heading text-3xl lg:text-4xl text-foreground mb-8">
              Lorem ipsum dolor<br />sit amet consectetur
            </h2>
            <p className="text-body text-lg text-muted-foreground mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h4 className="text-nav text-xs text-foreground mb-2">Adresa</h4>
                <p className="text-body text-muted-foreground">
                  Lorem Ipsum 123<br />
                  10000 Zagreb, Hrvatska
                </p>
              </div>
              <div>
                <h4 className="text-nav text-xs text-foreground mb-2">Telefon</h4>
                <a href="tel:+385123456789" className="text-body text-muted-foreground hover:text-accent transition-colors duration-200">
                  +385 1 234 5678
                </a>
              </div>
              <div>
                <h4 className="text-nav text-xs text-foreground mb-2">Email</h4>
                <a href="mailto:info@odvis.hr" className="text-body text-muted-foreground hover:text-accent transition-colors duration-200">
                  info@odvis.hr
                </a>
              </div>
              <div>
                <h4 className="text-nav text-xs text-foreground mb-2">Radno vrijeme</h4>
                <p className="text-body text-muted-foreground">
                  Pon - Pet: 09:00 - 17:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-nav text-xs text-foreground mb-2 block">
                    Ime i prezime
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-transparent border border-border px-4 py-3 text-body text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors duration-200"
                    placeholder="Lorem Ipsum"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-nav text-xs text-foreground mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-transparent border border-border px-4 py-3 text-body text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors duration-200"
                    placeholder="lorem@ipsum.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="text-nav text-xs text-foreground mb-2 block">
                  Tvrtka
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full bg-transparent border border-border px-4 py-3 text-body text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors duration-200"
                  placeholder="Lorem Ipsum d.o.o."
                />
              </div>

              <div>
                <label htmlFor="service" className="text-nav text-xs text-foreground mb-2 block">
                  Područje interesa
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full bg-transparent border border-border px-4 py-3 text-body text-foreground focus:border-accent focus:outline-none transition-colors duration-200"
                >
                  <option value="">Odaberite...</option>
                  <option value="lorem">Lorem Ipsum</option>
                  <option value="dolor">Dolor Sit Amet</option>
                  <option value="consectetur">Consectetur Adipiscing</option>
                  <option value="other">Ostalo</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="text-nav text-xs text-foreground mb-2 block">
                  Poruka
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full bg-transparent border border-border px-4 py-3 text-body text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Lorem ipsum dolor sit amet..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  className="mt-1 w-4 h-4 border border-border bg-transparent checked:bg-accent checked:border-accent focus:ring-0 focus:outline-none"
                />
                <label htmlFor="privacy" className="text-legal text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </label>
              </div>

              <button
                type="submit"
                className="w-full text-button text-sm bg-foreground text-background px-8 py-4 hover:bg-accent transition-colors duration-200"
              >
                Pošaljite upit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
