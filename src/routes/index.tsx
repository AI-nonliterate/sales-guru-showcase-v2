import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import architecture from "@/assets/architecture.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gustaw Jacewicz — International Sales Expert & Sales Engine Architect" },
      {
        name: "description",
        content:
          "I build international sales engines: personal outreach, stage-by-stage process design, consultative video calls, and perfected proposals and closing strategies. Culture-first selling backed by relentless process.",
      },
      { property: "og:title", content: "Gustaw Jacewicz — International Sales Expert" },
      {
        property: "og:description",
        content:
          "Personal outreach, process engineering, consultative video calls, and perfected proposals and closing strategies — built to scale across borders.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const stages = [
  {
    n: "01",
    title: "Outreach",
    body: "Personal, researched, multi-channel outreach. Real conversations, not sequences. Every message earns the next reply.",
  },
  {
    n: "02",
    title: "Qualification",
    body: "Sharp discovery frameworks that separate signal from noise. The right deals advance, the wrong ones close fast.",
  },
  {
    n: "03",
    title: "Consultative Video",
    body: "Live calls focused on diagnosis and discovery — understand the real problem and co-architect the buying case with the prospect. No pressure to close on the call.",
  },
  {
    n: "04",
    title: "Proposal & Closing Strategy",
    body: "Tailored proposals and a closing strategy that follows the call: mutual action plans, stakeholder mapping, procurement navigation, and clean signatures across time zones.",
  },
  {
    n: "05",
    title: "Analyse & Perfect",
    body: "Every stage instrumented and reviewed weekly. Conversion data drives the next iteration of the playbook.",
  },
];

const results = [
  {
    case: "Case 01",
    label: "International Job Board",
    metric: "230+ Clients",
    note: "Sold job ads to 230+ clients across 48 countries via automated, process-driven outbound.",
  },
  {
    case: "Case 02",
    label: "48 Countries Covered",
    metric: "48 Markets",
    note: "Culture-first prospecting localized at scale — one engine, dozens of buying cultures.",
  },
  {
    case: "Case 03",
    label: "Card Counting Era",
    metric: "+10,000% ROI",
    note: "Eight years in casinos worldwide growing initial bankrolls 100x through disciplined edge-play.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/10 selection:text-accent">
      {/* Nav */}
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-tight text-lg uppercase">Gustaw Jacewicz</span>
          <div className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-widest">
            <a href="#process" className="hover:text-accent transition-colors">Process</a>
            <a href="#results" className="hover:text-accent transition-colors">Results</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#contact" className="hover:text-accent transition-colors underline underline-offset-4">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 lg:py-40">
        <div className="max-w-[80ch] animate-reveal">
          <span className="font-mono text-xs text-accent uppercase tracking-tighter mb-6 block">
            [ Revenue Architecture ]
          </span>
          <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tight leading-[0.9] text-balance mb-8">
            International sales expert. I build sales engines.
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-[42ch] text-pretty">
            Personal outreach, process engineering, and consultative video closing — assembled into a repeatable engine that crosses borders.
          </p>
        </div>
      </section>

      {/* Craft / Expertise */}
      <section id="craft" className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-start">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
            01 / Craft
          </h2>
          <div className="space-y-10 animate-reveal [animation-delay:200ms]">
            <div>
              <h3 className="text-3xl font-bold mb-4">Personal Outreach</h3>
              <p className="text-muted-foreground leading-relaxed">
                I write the first message myself. Researched, specific, and human — built to start a conversation a buyer actually wants to have.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Process at Every Stage</h3>
              <p className="text-muted-foreground leading-relaxed">
                Outreach, qualification, demo, proposal, close. Each stage has an owner, a definition of done, and a metric. Nothing is left to instinct.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Consultative Video & Tailored Closing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Video calls are for listening, diagnosing and consulting — never for closing. The close happens after, through perfected proposals and closing strategies built around what the call revealed.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Analyse & Perfect</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every conversation is reviewed. Every drop-off has a hypothesis. The playbook is rewritten the moment the data demands it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section id="process" className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">The Engine, Stage by Stage</h2>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              02 / Process
            </span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border">
            {stages.map((s) => (
              <div key={s.n} className="bg-background p-8 space-y-4 hover:bg-secondary transition-colors">
                <span className="font-mono text-accent text-sm">[ {s.n} ]</span>
                <h3 className="text-2xl font-bold">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="bg-foreground text-background py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-4">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Selected Impact</h2>
            <span className="font-mono text-xs opacity-50 uppercase tracking-widest">
              Verified Performance 2020—2023
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {results.map((r) => (
              <div key={r.case} className="bg-foreground p-10 space-y-4">
                <span className="font-mono text-accent text-sm">[ {r.case} ]</span>
                <h4 className="text-lg opacity-60">{r.label}</h4>
                <p className="text-4xl font-extrabold">{r.metric}</p>
                <p className="text-sm opacity-50">{r.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About + Contact */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <img
              src={portrait}
              alt="Gustaw Jacewicz portrait"
              className="w-full aspect-square object-cover rounded-sm grayscale ring-1 ring-black/5"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-8 animate-reveal">
              <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
                03 / The Operator
              </h2>
              <p className="text-3xl font-medium leading-snug">
                I reach culture first. Then together we find the real reasons, tell a good story, and finish on a valuable solution — sealed with a promise of a relationship I intend to keep and to overcome for.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-[60ch]">
                Years of selling job ads internationally to 230+ clients across 48 countries through automated, process-disciplined outbound. Before that, eight years counting cards in casinos around the world — turning small bankrolls into 100x returns through edge, patience, and process. Same operator, same instinct: respect the math, respect the room, win quietly.
              </p>
            </div>
            <div id="contact" className="pt-16">
              <a
                href="mailto:hello@gustawjacewicz.com"
                className="inline-flex items-center gap-4 bg-foreground text-background px-10 py-6 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-all duration-300"
              >
                Start a Conversation
                <span className="text-xl font-thin">→</span>
              </a>
            </div>
            <div className="mt-24 pt-8 border-t border-border flex flex-wrap gap-4 justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              <span>Based in Bangkok / Available Globally</span>
              <span>© 2026 Gustaw Jacewicz</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
