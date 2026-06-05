import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  services: [
    { name: 'Lorem Ipsum', href: '#' },
    { name: 'Dolor Sit Amet', href: '#' },
    { name: 'Consectetur', href: '#' },
    { name: 'Adipiscing Elit', href: '#' },
  ],
  company: [
    { name: 'O nama', href: '#o-nama' },
    { name: 'Tim', href: '#tim' },
    { name: 'Karijere', href: '#' },
    { name: 'Novosti', href: '#' },
  ],
  legal: [
    { name: 'Uvjeti korištenja', href: '#' },
    { name: 'Privatnost', href: '#' },
    { name: 'Kolačići', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Image
              src="/odvis-wordmark-light.svg"
              alt="ODVIS"
              width={140}
              height={32}
              className="h-6 w-auto mb-8"
            />
            <p className="text-body text-sm text-muted-foreground max-w-xs mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-corporate hover:text-corporate transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-border flex items-center justify-center hover:border-corporate hover:text-corporate transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16">
              <div>
                <h4 className="text-nav text-xs text-background mb-6">Usluge</h4>
                <ul className="space-y-4">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-legal text-sm text-muted-foreground hover:text-background transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-nav text-xs text-background mb-6">Tvrtka</h4>
                <ul className="space-y-4">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-legal text-sm text-muted-foreground hover:text-background transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-nav text-xs text-background mb-6">Pravne informacije</h4>
                <ul className="space-y-4">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-legal text-sm text-muted-foreground hover:text-background transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-meta text-xs text-muted-foreground">
              © 2024 ODVIS. Lorem ipsum dolor sit amet.
            </p>
            <p className="text-meta text-xs text-muted-foreground">
              Zagreb, Hrvatska
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
