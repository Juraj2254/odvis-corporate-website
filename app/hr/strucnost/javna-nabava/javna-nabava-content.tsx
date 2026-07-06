"use client"

import { HrHeader } from "@/components/layout/hr-header"
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
  { id: "1", subject: "Zaključivanje ugovora bez provedenog postupka javne nabave", status: "Dobiveno", href: "/docs/16523.pdf" },
  { id: "2", subject: "Pojašnjavanje i dopunjavanje dokumentacije", status: "Dobiveno", href: "/docs/16530.pdf" },
  { id: "3", subject: "Dokumentacija za nadmetanje – zahtijevanje više razine tehničke i stručne sposobnosti", status: "Dobiveno", href: "/docs/15456.pdf" },
  { id: "4", subject: "Utvrđivanje istih ili sličnih ugovora – dokazivanje", status: "Dobiveno", href: "/docs/16132.pdf" },
  { id: "5", subject: "Potpisivanje ponude od prokurista", status: "Dobiveno", href: "/docs/13401.pdf" },
  { id: "6", subject: "Uvjet poslovne sposobnosti - Licenciranje u šumarstvu", status: "Dobiveno", href: "/docs/15705.pdf" },
  { id: "7", subject: "Neuobičajeno niska cijena", status: "Dobiveno", href: "/docs/6217.pdf" },
  { id: "8", subject: "Ekonomski najpovoljnija ponuda", status: "Dobiveno", href: "/docs/14587.pdf" },
  { id: "9", subject: "Dokumentacija za nadmetanje – dokaz o izvršenju istog ili sličnog ugovora", status: "Dobiveno", href: "/docs/15912.pdf" },
  { id: "10", subject: "Prijevod dokumentacije po sudskom tumaču", status: "Dobiveno", href: "/docs/15228.pdf" },
  { id: "11", subject: "Dokaz tehničke i stručne sposobnosti – osposobljavanje za rukovanje strojevima ili uređajima", status: "Dobiveno", href: "/docs/15559.pdf" },
  { id: "12", subject: "Protek vremena kao razlog za poništenje postupka", status: "Dobiveno", href: "/docs/15201.pdf" },
  { id: "13", subject: "Dokazivanje izvršavanja ugovora vezano uz predmet nabave", status: "Dobiveno", href: "/docs/14790.pdf" },
  { id: "14", subject: "Dokaz o raspolaganju stručnjacima drugih subjekata", status: "Dobiveno", href: "/docs/16633.pdf" },
  { id: "15", subject: "Poništavanje postupka zbog nepripremljenosti dokumentacije", status: "Dobiveno", href: "/docs/16700.pdf" },
  { id: "16", subject: "Dokaz o zapošljavanju stručnjaka", status: "Dobiveno", href: "/docs/16002.pdf" },
  { id: "17", subject: "Izvorni predložak troškovnika", status: "Dobiveno", href: "/docs/16442.pdf" },
  { id: "18", subject: "Nejednak tretman ponuditelja", status: "Dobiveno", href: "/docs/16478.pdf" },
]

export default function JavnaNabavaContent() {
  return (
    <>
      <HrHeader activeExpertise="javna-nabava" altHref="/expertise/public-procurement" />
      <main>
        <section className="expertise-detail">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">Stručnost</span>
                <h1 className="section-title">Javna nabava</h1>
              </div>
            </div>
            <div className="expertise-detail__layout">
              <div className="expertise-detail__content">
                <p>Imamo bogato iskustvo u pružanju pravne podrške u postupcima javne nabave u</p>
                <ul>
                  <li>priprema i podnošenje ponuda,</li>
                  <li>žalbe na dokumentaciju i odluku naručitelja,</li>
                  <li>zastupanje u upravnim sporovima u vezi s odlukama Državne komisije</li>
                  <li>konzultacije u postupku sklapanja ugovora</li>
                </ul>
                <p>Osim toga, ured ima značajno iskustvo u zastupanju klijenata u sudskim i arbitražnim postupcima pokrenutima povodom sporova koji proizlaze iz javnih ugovora.</p>
                <p>Značajna područja u kojima pružamo usluge u području javne nabave su područje zaštite okoliša, šumarstva, planiranja i projektiranja cesta, kao i područje energetike.</p>
              </div>
              <aside className="expertise-sidebar">
                <div className="expertise-contact">
                  <span className="expertise-contact__label">Kontakti prakse</span>
                  <a href="/hr/tim" className="expertise-contact__card">
                    <div className="expertise-contact__media">
                      <img src="/team/member-03.jpg" alt="Marijan Vešligaj" className="expertise-contact__image" loading="lazy" />
                    </div>
                    <div className="expertise-contact__info">
                      <span className="expertise-contact__name">Marijan Vešligaj</span>
                      <span className="expertise-contact__role">Odvjetnik</span>
                    </div>
                  </a>
                  <a href="/hr/tim" className="expertise-contact__card">
                    <div className="expertise-contact__media">
                      <img src="/team/member-01.jpg" alt="Nikolina Šajnović" className="expertise-contact__image" loading="lazy" />
                    </div>
                    <div className="expertise-contact__info">
                      <span className="expertise-contact__name">Nikolina Šajnović</span>
                      <span className="expertise-contact__role">Odvjetnički pripravnik</span>
                    </div>
                  </a>
                  <a href="/hr/tim" className="expertise-contact__card">
                    <div className="expertise-contact__media">
                      <img src="/team/member-02.jpg" alt="Matea Kušević" className="expertise-contact__image" loading="lazy" />
                    </div>
                    <div className="expertise-contact__info">
                      <span className="expertise-contact__name">Matea Kušević</span>
                      <span className="expertise-contact__role">Odvjetnički pripravnik</span>
                    </div>
                  </a>
                </div>
                <div className="expertise-practices">
                  <span className="expertise-practices__label">Prakse</span>
                  <nav className="expertise-practices__nav" aria-label="Povezane prakse">
                    <a href="/hr/strucnost/javna-nabava" className="expertise-practices__link expertise-practices__link--active">Javna nabava</a>
                    <a href="/hr/strucnost/nekretnine" className="expertise-practices__link">Nekretnine i zemljišne knjige</a>
                    <a href="/hr/strucnost/radno-pravo" className="expertise-practices__link">Radno pravo</a>
                    <a href="/hr/strucnost/opce-pravne-usluge" className="expertise-practices__link">Opće pravo</a>
                  </nav>
                </div>
              </aside>
            </div>
            <div className="expertise-detail__table bg-background">
              <h2 className="expertise-detail__table-title">Odabrani dobiveni predmeti</h2>
              <div className="[&>div]:max-h-96">
                <Table className="border-separate border-spacing-0 [&_td]:border-border [&_tfoot_td]:border-t [&_th]:border-b [&_th]:border-border [&_tr:not(:last-child)_td]:border-b [&_tr]:border-none">
                  <TableHeader className="sticky top-0 z-10 bg-background/90 backdrop-blur-sm">
                    <TableRow className="hover:bg-transparent">
                      <TableHead>Predmet</TableHead>
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
                      <TableCell>Ukupno</TableCell>
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
              <p className="footer__tagline">Odvjetnički ured Vešligaj i Sliepčević. Specijalizirana pravna podrška za poduzeća i građane od 03.05.2016.</p>
            </div>
            <div className="footer__column">
              <h4 className="footer__column-title">Usluge</h4>
              <ul className="footer__links">
                <li><a href="/hr#usluge" className="footer__link">Pravo javne nabave</a></li>
                <li><a href="/hr#usluge" className="footer__link">Pravo nekretnina i zemljišnih knjiga</a></li>
                <li><a href="/hr#usluge" className="footer__link">Radno pravo i ugovori</a></li>
                <li><a href="/hr#usluge" className="footer__link">Opće pravne usluge</a></li>
              </ul>
            </div>
            <div className="footer__column">
              <h4 className="footer__column-title">Stručnost</h4>
              <ul className="footer__links">
                <li><a href="/hr#strucnost" className="footer__link">Praksa pred DKOM-om</a></li>
              </ul>
            </div>
            <div className="footer__column">
              <h4 className="footer__column-title">Ured</h4>
              <ul className="footer__links">
                <li><a href="/hr#o-nama" className="footer__link">O nama</a></li>
                <li><a href="/hr/tim" className="footer__link">Tim</a></li>
                <li><a href="/hr#kontakt" className="footer__link">Kontakt</a></li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <p className="footer__copyright">&copy; 2026 ODVIS. Sva prava pridržana.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
