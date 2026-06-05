import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSection } from '@/components/sections/services-section'
import { AboutSection } from '@/components/sections/about-section'
import { TeamSection } from '@/components/sections/team-section'
import { CtaSection } from '@/components/sections/cta-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TeamSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
