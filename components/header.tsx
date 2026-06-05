'use client'

import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'Usluge', href: '#usluge' },
  { name: 'O nama', href: '#o-nama' },
  { name: 'Tim', href: '#tim' },
  { name: 'Kontakt', href: '#kontakt' },
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/odvis-wordmark-dark.svg"
              alt="ODVIS"
              width={140}
              height={32}
              className="h-6 w-auto"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-nav text-xs text-foreground hover:text-accent transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-6">
            <Link
              href="#kontakt"
              className="hidden sm:block text-button text-sm bg-foreground text-background px-6 py-3 hover:bg-accent transition-colors duration-200"
            >
              Zatražite konzultacije
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Menu"
            >
              <span className="w-6 h-px bg-foreground" />
              <span className="w-6 h-px bg-foreground" />
              <span className="w-4 h-px bg-foreground" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
