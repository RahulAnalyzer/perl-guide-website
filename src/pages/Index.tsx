import { Database, FileCode2, Layers, Network, Cpu } from "lucide-react";

const guides = [
  {
    title: "Data Structures",
    description: "Scalars, arrays, hashes, references, and complex nested structures with visual diagrams.",
    href: "/guides/data-structures.html",
    icon: Layers,
    glowClass: "hover:shadow-[0_8px_32px_-8px_hsl(45,90%,56%,0.25)]",
    accentClass: "text-glow-gold",
    borderHover: "hover:border-glow-gold/30",
    tag: "FUNDAMENTALS",
  },
  {
    title: "DBI & PostgreSQL",
    description: "Database connectivity, prepared statements, transactions, and the DBI/DBD architecture.",
    href: "/guides/dbi-postgresql.html",
    icon: Database,
    glowClass: "hover:shadow-[0_8px_32px_-8px_hsl(195,100%,50%,0.25)]",
    accentClass: "text-glow-cyan",
    borderHover: "hover:border-glow-cyan/30",
    tag: "DATABASE",
  },
  {
    title: "File Handling",
    description: "CSV, JSON, and XML parsing with practical examples and module comparisons.",
    href: "/guides/file-handling.html",
    icon: FileCode2,
    glowClass: "hover:shadow-[0_8px_32px_-8px_hsl(15,95%,60%,0.25)]",
    accentClass: "text-glow-coral",
    borderHover: "hover:border-glow-coral/30",
    tag: "I/O",
  },
  {
    title: "Object-Oriented Perl",
    description: "Classes, inheritance, polymorphism, encapsulation, Moose, and modern OOP patterns.",
    href: "/guides/oop.html",
    icon: Network,
    glowClass: "hover:shadow-[0_8px_32px_-8px_hsl(275,80%,68%,0.25)]",
    accentClass: "text-glow-violet",
    borderHover: "hover:border-glow-violet/30",
    tag: "OOP",
  },
  {
    title: "Threading",
    description: "Threads, shared variables, synchronization, and parallel processing visualized.",
    href: "/guides/threading.html",
    icon: Cpu,
    glowClass: "hover:shadow-[0_8px_32px_-8px_hsl(150,70%,55%,0.25)]",
    accentClass: "text-glow-mint",
    borderHover: "hover:border-glow-mint/30",
    tag: "CONCURRENCY",
  },
];

const GuideCard = ({ guide }: { guide: typeof guides[0] }) => {
  const Icon = guide.icon;
  return (
    <a
      href={guide.href}
      className={`group block rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 ${guide.glowClass} ${guide.borderHover}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <Icon className={`h-6 w-6 ${guide.accentClass}`} />
        <span className={`font-mono text-[0.6rem] tracking-[0.2em] uppercase ${guide.accentClass} opacity-70`}>
          {guide.tag}
        </span>
      </div>
      <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-foreground/90">
        {guide.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {guide.description}
      </p>
      <div className={`mt-4 font-mono text-xs ${guide.accentClass} opacity-0 transition-opacity group-hover:opacity-100`}>
        Open guide →
      </div>
    </a>
  );
};

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Grid background */}
      <div className="fixed inset-0 grid-bg pointer-events-none" />

      {/* Ambient glow */}
      <div className="pointer-events-none fixed left-1/2 top-0 -translate-x-1/2 h-[400px] w-[600px] bg-[radial-gradient(ellipse,hsl(45,90%,56%,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-16">
        {/* Hero */}
        <header className="mb-16 text-center">
          <span className="mb-4 inline-block font-mono text-[0.65rem] tracking-[0.28em] uppercase text-primary">
            Complete Visual Reference
          </span>
          <h1 className="mb-4 text-gradient-hero text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Perl Programming Guides
          </h1>
          <p className="mx-auto max-w-xl font-mono text-sm leading-relaxed text-muted-foreground">
            Five comprehensive visual guides covering data structures, databases,
            file I/O, object-oriented programming, and threading.
          </p>

          {/* Legend pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { label: "Interactive", color: "bg-glow-gold" },
              { label: "Visual Diagrams", color: "bg-glow-cyan" },
              { label: "Code Examples", color: "bg-glow-mint" },
              { label: "Best Practices", color: "bg-glow-violet" },
            ].map((pill) => (
              <span
                key={pill.label}
                className="flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-[0.6rem] tracking-wider text-muted-foreground"
              >
                <span className={`h-1.5 w-1.5 rounded-full ${pill.color}`} />
                {pill.label}
              </span>
            ))}
          </div>
        </header>

        {/* Guide Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard key={guide.title} guide={guide} />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <p className="font-mono text-xs text-muted-foreground/50">
            Built with Perl · Visual learning for developers
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
