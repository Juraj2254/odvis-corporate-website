import Link from 'next/link'

const services = [
  {
    number: '01',
    title: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    href: '#',
  },
  {
    number: '02',
    title: 'Dolor Sit Amet',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    href: '#',
  },
  {
    number: '03',
    title: 'Consectetur Adipiscing',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    href: '#',
  },
  {
    number: '04',
    title: 'Excepteur Sint',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    href: '#',
  },
  {
    number: '05',
    title: 'Sed Ut Perspiciatis',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    href: '#',
  },
  {
    number: '06',
    title: 'Nemo Enim Ipsam',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.',
    href: '#',
  },
]

export function ServicesSection() {
  return (
    <section id="usluge" className="py-32 bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-px bg-accent" />
              <span className="text-nav text-xs text-accent">Usluge</span>
            </div>
            <h2 className="text-heading text-3xl lg:text-4xl text-foreground">
              Lorem ipsum<br />dolor sit amet
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-body text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group bg-background p-8 lg:p-10 hover:bg-foreground transition-colors duration-300"
            >
              <span className="text-meta text-xs text-accent mb-6 block">
                {service.number}
              </span>
              <h3 className="text-heading text-xl text-foreground group-hover:text-background mb-4 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-body text-sm text-muted-foreground group-hover:text-muted-foreground/70 mb-8 transition-colors duration-300">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 text-nav text-xs text-foreground group-hover:text-accent transition-colors duration-300">
                Saznajte više
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
