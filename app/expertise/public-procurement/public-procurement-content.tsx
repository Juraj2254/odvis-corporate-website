"use client"

import { EnHeader } from "@/components/layout/en-header"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const items = [
  { id: "1", subject: "Conclusion of contract without a public procurement procedure", status: "Won", href: "/docs/16523.pdf" },
  { id: "2", subject: "Clarification and supplementation of tender documentation", status: "Won", href: "/docs/16530.pdf" },
  { id: "3", subject: "Tender documentation – requirement of a higher level of technical and professional ability", status: "Won", href: "/docs/15456.pdf" },
  { id: "4", subject: "Establishing identical or similar contracts – proving performance", status: "Won", href: "/docs/16132.pdf" },
  { id: "5", subject: "Signing a tender by an authorised officer (procurist)", status: "Won", href: "/docs/13401.pdf" },
  { id: "6", subject: "Condition of business capacity – licensing in forestry", status: "Won", href: "/docs/15705.pdf" },
  { id: "7", subject: "Unusually low tender price", status: "Won", href: "/docs/6217.pdf" },
  { id: "8", subject: "Most economically advantageous tender", status: "Won", href: "/docs/14587.pdf" },
  { id: "9", subject: "Tender documentation – proof of performance of the same or similar contract", status: "Won", href: "/docs/15912.pdf" },
  { id: "10", subject: "Translation of documents by a court interpreter", status: "Won", href: "/docs/15228.pdf" },
  { id: "11", subject: "Proof of technical and professional ability – training for operating machinery or equipment", status: "Won", href: "/docs/15559.pdf" },
  { id: "12", subject: "Passage of time as a reason for annulment of the procedure", status: "Won", href: "/docs/15201.pdf" },
  { id: "13", subject: "Proving contract performance related to the subject of procurement", status: "Won", href: "/docs/14790.pdf" },
  { id: "14", subject: "Proof of availability of experts from other entities", status: "Won", href: "/docs/16633.pdf" },
  { id: "15", subject: "Annulment of the procedure due to unprepared tender documentation", status: "Won", href: "/docs/16700.pdf" },
  { id: "16", subject: "Proof of employment of an expert", status: "Won", href: "/docs/16002.pdf" },
  { id: "17", subject: "Original cost estimate template", status: "Won", href: "/docs/16442.pdf" },
  { id: "18", subject: "Unequal treatment of tenderers", status: "Won", href: "/docs/16478.pdf" },
]

export default function PublicProcurementContent() {
  return (
    <>
      <EnHeader activeExpertise="public-procurement" altHref="/hr/strucnost/javna-nabava" />
      <main>
        <section className="expertise-detail">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">Expertise</span>
                <h1 className="section-title">Public Procurement</h1>
              </div>
            </div>
            <div className="expertise-detail__layout">
              <div className="expertise-detail__content">
                <p>We have rich experience in providing legal support in public procurement procedures of</p>
                <ul>
                  <li>preparation and submission of bids,</li>
                  <li>appeals to the documentation and the client&apos;s decision,</li>
                  <li>representation in administrative disputes relating to decisions of the State Commission</li>
                  <li>consultation in the process of contracting</li>
                </ul>
                <p>In addition the company has significant experience in representing clients in court and arbitration proceedings led on the occasion of disputes arising out of public contracts.</p>
                <p>Significant areas in which we provide services in the field of public procurement as an area of environmental protection, forestry, planning and design of roads, as well as in the field of energy.</p>
              </div>
              <aside className="expertise-sidebar">
                <div className="expertise-contact">
                  <span className="expertise-contact__label">Practice contacts</span>
                  <a href="/team" className="expertise-contact__card">
                    <div className="expertise-contact__media">
                      <img src="/team/member-03.jpg" alt="Marijan Vešligaj" className="expertise-contact__image" loading="lazy" />
                    </div>
                    <div className="expertise-contact__info">
                      <span className="expertise-contact__name">Marijan Vešligaj</span>
                      <span className="expertise-contact__role">Attorney at Law</span>
                    </div>
                  </a>
                  <a href="/team" className="expertise-contact__card">
                    <div className="expertise-contact__media">
                      <img src="/team/member-01.jpg" alt="Nikolina Šajnović" className="expertise-contact__image" loading="lazy" />
                    </div>
                    <div className="expertise-contact__info">
                      <span className="expertise-contact__name">Nikolina Šajnović</span>
                      <span className="expertise-contact__role">Associate</span>
                    </div>
                  </a>
                  <a href="/team" className="expertise-contact__card">
                    <div className="expertise-contact__media">
                      <img src="/team/member-02.jpg" alt="Matea Kušević" className="expertise-contact__image" loading="lazy" />
                    </div>
                    <div className="expertise-contact__info">
                      <span className="expertise-contact__name">Matea Kušević</span>
                      <span className="expertise-contact__role">Associate</span>
                    </div>
                  </a>
                </div>
                <div className="expertise-practices">
                  <span className="expertise-practices__label">Practices</span>
                  <nav className="expertise-practices__nav" aria-label="Related practices">
                    <a href="/expertise/public-procurement" className="expertise-practices__link expertise-practices__link--active">Public Procurement</a>
                    <a href="/expertise/real-estate" className="expertise-practices__link">Real Estate & Land Registry</a>
                    <a href="/expertise/labour-law" className="expertise-practices__link">Labour Law</a>
                    <a href="/expertise/general-legal" className="expertise-practices__link">General Law</a>
                  </nav>
                </div>
              </aside>
            </div>
            <div className="expertise-detail__table bg-background">
              <h2 className="expertise-detail__table-title">Selected winning cases</h2>
              <div className="[&>div]:max-h-96">
                <Table className="border-separate border-spacing-0 [&_td]:border-border [&_tfoot_td]:border-t [&_th]:border-b [&_th]:border-border [&_tr:not(:last-child)_td]:border-b [&_tr]:border-none">
                  <TableHeader className="sticky top-0 z-10 bg-background/90 backdrop-blur-sm">
                    <TableRow className="hover:bg-transparent">
                      <TableHead>Subject</TableHead>
                      <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">
                          <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {item.subject}
                          </a>
                        </TableCell>
                        <TableCell className="text-right">{item.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter className="bg-transparent">
                    <TableRow className="hover:bg-transparent">
                      <TableCell>Total</TableCell>
                      <TableCell className="text-right">18</TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__brand">
              <img src="/logos/odvis-wordmark-light.svg" alt="ODVIS" className="footer__logo" />
              <p className="footer__tagline">Law Firm Vešligaj and Sliepčević. Specialised legal support for businesses and individuals since 03.05.2016.</p>
            </div>
            <div className="footer__column">
              <h4 className="footer__column-title">Services</h4>
              <ul className="footer__links">
                <li><a href="/#services" className="footer__link">Public Procurement Law</a></li>
                <li><a href="/#services" className="footer__link">Real Estate & Land Registry</a></li>
                <li><a href="/#services" className="footer__link">Labour Law & Contracts</a></li>
                <li><a href="/#services" className="footer__link">General Legal Support</a></li>
              </ul>
            </div>
            <div className="footer__column">
              <h4 className="footer__column-title">Expertise</h4>
              <ul className="footer__links">
                <li><a href="/#expertise" className="footer__link">DKOM Practice</a></li>
              </ul>
            </div>
            <div className="footer__column">
              <h4 className="footer__column-title">The Firm</h4>
              <ul className="footer__links">
                <li><a href="/#about" className="footer__link">About</a></li>
                <li><a href="/team" className="footer__link">Team</a></li>
                <li><a href="/#contact" className="footer__link">Contact</a></li>
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
