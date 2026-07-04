import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-accent" />
              <span className="text-nav text-xs text-accent">Odvjetničko društvo</span>
            </div>

            {/* Headline */}
            <h1 className="text-hero text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-8">
              Lorem ipsum<br />
              dolor sit amet<br />
              <span className="text-accent">consectetur</span>
            </h1>

            {/* Description */}
            <p className="text-body text-lg text-muted-foreground max-w-xl mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="#kontakt"
                className="text-button text-sm bg-foreground text-background px-8 py-4 hover:bg-accent transition-colors duration-200"
              >
                Zatražite konzultacije
              </Link>
              <Link
                href="#usluge"
                className="text-button text-sm border border-foreground text-foreground px-8 py-4 hover:border-corporate hover:text-accent transition-colors duration-200"
              >
                Saznajte više
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[3/2]">
              <Image
                src="/images/hero-desktop.png"
                alt="Modern architecture"
                fill
                className="object-cover"
                priority
              />
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
