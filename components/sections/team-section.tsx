const team = [
  {
    name: 'Lorem Ipsum',
    role: 'Dolor Sit Amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
  },
  {
    name: 'Consectetur Adipiscing',
    role: 'Elit Sed Do',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  },
  {
    name: 'Eiusmod Tempor',
    role: 'Incididunt Ut',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  },
  {
    name: 'Labore Et Dolore',
    role: 'Magna Aliqua',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
  },
]

export function TeamSection() {
  return (
    <section id="tim" className="py-32 bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-px bg-accent" />
              <span className="text-nav text-xs text-accent">Tim</span>
            </div>
            <h2 className="text-heading text-3xl lg:text-4xl text-background">
              Lorem ipsum<br />dolor sit amet
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-body text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-foreground p-8 hover:bg-accent transition-colors duration-300"
            >
              {/* Placeholder Avatar */}
              <div className="w-full aspect-[3/4] bg-secondary/10 border border-border mb-6 flex items-center justify-center">
                <span className="text-logo text-4xl text-background/20">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <h3 className="text-heading text-lg text-background mb-1">
                {member.name}
              </h3>
              <p className="text-nav text-xs text-accent mb-4">
                {member.role}
              </p>
              <p className="text-legal text-sm text-muted-foreground group-hover:text-background/70 transition-colors duration-300">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
