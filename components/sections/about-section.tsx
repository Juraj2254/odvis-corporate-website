export function AboutSection() {
  return (
    <section id="o-nama" className="py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Left Column - Title & Quote */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-px bg-corporate" />
              <span className="text-nav text-xs text-corporate">O nama</span>
            </div>
            <h2 className="text-heading text-3xl lg:text-4xl text-foreground mb-12">
              Lorem ipsum dolor<br />sit amet consectetur
            </h2>

            {/* Quote Block */}
            <div className="border-l-2 border-corporate pl-8">
              <p className="text-body text-xl text-foreground italic mb-6">
                &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.&rdquo;
              </p>
              <div>
                <p className="text-button text-sm text-foreground">Lorem Ipsum</p>
                <p className="text-legal text-sm text-muted-foreground">Dolor Sit Amet</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-8">
              <p className="text-body text-lg text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-body text-lg text-muted-foreground">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-body text-lg text-muted-foreground">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-8 mt-16">
              <div className="border-t border-border pt-6">
                <h4 className="text-heading text-lg text-foreground mb-2">Lorem Ipsum</h4>
                <p className="text-legal text-sm text-muted-foreground">
                  Dolor sit amet consectetur adipiscing elit sed do eiusmod.
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <h4 className="text-heading text-lg text-foreground mb-2">Dolor Sit</h4>
                <p className="text-legal text-sm text-muted-foreground">
                  Ut enim ad minim veniam quis nostrud exercitation ullamco.
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <h4 className="text-heading text-lg text-foreground mb-2">Amet Consectetur</h4>
                <p className="text-legal text-sm text-muted-foreground">
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <h4 className="text-heading text-lg text-foreground mb-2">Adipiscing Elit</h4>
                <p className="text-legal text-sm text-muted-foreground">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
