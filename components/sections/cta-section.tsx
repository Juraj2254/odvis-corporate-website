import Link from 'next/link'

export function CtaSection() {
  return (
    <section className="py-32 bg-accent">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-heading text-3xl lg:text-4xl xl:text-5xl text-background mb-6">
              Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.
            </h2>
            <p className="text-body text-lg text-background/70 max-w-2xl">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              href="#kontakt"
              className="inline-block text-button text-sm bg-background text-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-colors duration-200"
            >
              Zatražite konzultacije
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
