import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-corporate" />
              <span className="text-nav text-xs text-corporate">Odvjetničko društvo</span>
            </div>

            {/* Headline */}
            <h1 className="text-hero text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-8">
              Lorem ipsum<br />
              dolor sit amet<br />
              <span className="text-corporate">consectetur</span>
            </h1>

            {/* Description */}
            <p className="text-body text-lg text-muted-foreground max-w-xl mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#kontakt"
                className="text-button text-sm bg-foreground text-background px-8 py-4 hover:bg-corporate transition-colors duration-200"
              >
                Zatražite konzultacije
              </Link>
              <Link
                href="#usluge"
                className="text-button text-sm border border-foreground text-foreground px-8 py-4 hover:border-corporate hover:text-corporate transition-colors duration-200"
              >
                Saznajte više
              </Link>
            </div>
          </div>

          {/* Stats / Visual */}
          <div className="lg:col-span-5">
            <div className="border border-border p-8 lg:p-12">
              <div className="space-y-8">
                <div className="border-b border-border pb-8">
                  <span className="text-hero text-5xl lg:text-6xl text-foreground">25+</span>
                  <p className="text-legal text-sm text-muted-foreground mt-2">Lorem ipsum dolor</p>
                </div>
                <div className="border-b border-border pb-8">
                  <span className="text-hero text-5xl lg:text-6xl text-foreground">500+</span>
                  <p className="text-legal text-sm text-muted-foreground mt-2">Consectetur adipiscing</p>
                </div>
                <div>
                  <span className="text-hero text-5xl lg:text-6xl text-corporate">98%</span>
                  <p className="text-legal text-sm text-muted-foreground mt-2">Sed do eiusmod</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-6 lg:left-12 hidden lg:flex items-center gap-4">
          <span className="w-px h-16 bg-border" />
          <span className="text-meta text-xs text-muted-foreground -rotate-90 origin-left translate-x-4">Scroll</span>
        </div>
      </div>
    </section>
  )
}
