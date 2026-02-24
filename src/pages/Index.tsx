import { Database, FileCode2, Layers, Network, Cpu, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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

const GuideCard = ({ guide, index }: { guide: typeof guides[0]; index: number }) => {
  const Icon = guide.icon;
  return (
    <motion.a
      href={guide.href}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group block rounded-lg border border-border bg-card p-6 transition-shadow duration-300 ${guide.glowClass} ${guide.borderHover}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <motion.div whileHover={{ rotate: 12, scale: 1.15 }} transition={{ type: "spring", stiffness: 300 }}>
          <Icon className={`h-6 w-6 ${guide.accentClass}`} />
        </motion.div>
        <span className={`font-mono text-xs tracking-[0.2em] uppercase ${guide.accentClass} opacity-70`}>
          {guide.tag}
        </span>
      </div>
      <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-foreground/90">
        {guide.title}
      </h3>
      <p className="text-base leading-relaxed text-muted-foreground">
        {guide.description}
      </p>
      <div className={`mt-4 font-mono text-sm ${guide.accentClass} opacity-0 transition-all duration-300 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0`}>
        Open guide →
      </div>
    </motion.a>
  );
};

const Index = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('hub-theme') !== 'light';
    }
    return true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light');
      localStorage.setItem('hub-theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('hub-theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 grid-bg pointer-events-none" />
      <div className="pointer-events-none fixed left-1/2 top-0 -translate-x-1/2 h-[400px] w-[600px] bg-[radial-gradient(ellipse,hsl(45,90%,56%,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-16">
        {/* Theme Toggle */}
        <motion.button
          onClick={() => setIsDark(!isDark)}
          className="fixed right-4 top-4 z-50 flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 font-mono text-xs text-muted-foreground shadow-lg backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          {isDark ? 'Light' : 'Dark'}
        </motion.button>

        {/* Hero */}
        <motion.header
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.span
            className="mb-4 inline-block font-mono text-xs tracking-[0.28em] uppercase text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Complete Visual Reference
          </motion.span>
          <h1 className="mb-4 text-gradient-hero text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Perl Programming Guides
          </h1>
          <p className="mx-auto max-w-xl font-mono text-base leading-relaxed text-muted-foreground">
            Five comprehensive visual guides covering data structures, databases,
            file I/O, object-oriented programming, and threading.
          </p>

          <motion.div
            className="mt-6 flex flex-wrap items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {[
              { label: "Interactive", color: "bg-glow-gold" },
              { label: "Visual Diagrams", color: "bg-glow-cyan" },
              { label: "Code Examples", color: "bg-glow-mint" },
              { label: "Best Practices", color: "bg-glow-violet" },
            ].map((pill) => (
              <span
                key={pill.label}
                className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 font-mono text-xs tracking-wider text-muted-foreground"
              >
                <span className={`h-1.5 w-1.5 rounded-full ${pill.color}`} />
                {pill.label}
              </span>
            ))}
          </motion.div>
        </motion.header>

        {/* Guide Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide, i) => (
            <GuideCard key={guide.title} guide={guide} index={i} />
          ))}
        </div>

        <motion.footer
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-mono text-sm text-muted-foreground/50">
            Built with Perl · Visual learning for developers
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
