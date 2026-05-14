import { createFileRoute } from "@tanstack/react-router";
import architecture from "@/assets/architecture.jpg";
import portrait from "@/assets/portrait.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { LANGUAGES, type LanguageCode } from "@/i18n/translations";

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

const stageNumbers = ["01", "02", "03", "04", "05"];


function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-mono uppercase tracking-widest">
      {LANGUAGES.map((l, i) => (
        <span key={l.code} className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLang(l.code as LanguageCode)}
            className={
              lang === l.code
                ? "text-accent"
                : "text-muted-foreground hover:text-foreground transition-colors"
            }
            aria-current={lang === l.code ? "true" : undefined}
          >
            {l.label}
          </button>
          {i < LANGUAGES.length - 1 && <span className="text-border">/</span>}
        </span>
      ))}
    </div>
  );
}

function Index() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/10 selection:text-accent">
      {/* Nav */}
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-3 md:h-16 md:py-0 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-6">
          <div className="flex items-center justify-between gap-6">
            <span className="font-bold tracking-tight text-lg uppercase">Gustaw Jacewicz</span>
            <div className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-widest">
              <a href="#process" className="hover:text-accent transition-colors">{t.nav.process}</a>
              <a href="#results" className="hover:text-accent transition-colors">{t.nav.results}</a>
              <a href="#about" className="hover:text-accent transition-colors">{t.nav.about}</a>
              <a href="#contact" className="hover:text-accent transition-colors underline underline-offset-4">{t.nav.contact}</a>
            </div>
          </div>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 lg:py-40">
        <div className="max-w-[80ch] animate-reveal">
          <span className="font-mono text-xs text-accent uppercase tracking-tighter mb-6 block">
            {t.hero.tagline}
          </span>
          <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tight leading-[0.9] text-balance mb-8">
            {t.hero.headline}
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-[42ch] text-pretty">
            {t.hero.sub}
          </p>
        </div>
      </section>

      {/* Craft / Expertise */}
      <section id="craft" className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 animate-reveal">
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
              {t.craft.section}
            </h2>
            <figure>
              <img
                src={architecture}
                alt={t.about.diagramAlt}
                className="w-full aspect-[3/2] object-cover rounded-sm"
                loading="lazy"
              />
              <figcaption className="mt-3 text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
                {t.about.diagramCaption}
              </figcaption>
            </figure>
          </div>
          <div className="space-y-10 animate-reveal [animation-delay:200ms]">
            {t.craft.items.map((item) => (
              <div key={item.title}>
                <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section id="process" className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">{t.engine.heading}</h2>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {t.engine.label}
            </span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border">
            {t.engine.stages.map((s, i) => (
              <div key={i} className="bg-background p-8 space-y-4 hover:bg-secondary transition-colors">
                <span className="font-mono text-accent text-sm">[ {stageNumbers[i]} ]</span>
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
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">{t.results.heading}</h2>
            <span className="font-mono text-xs opacity-50 uppercase tracking-widest">
              {t.results.label}
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {t.results.items.map((r, i) => (
              <div key={i} className="bg-foreground p-10 space-y-4">
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
      <section id="about" className="max-w-5xl mx-auto px-6 py-24 lg:py-40">
        <figure className="mb-16 animate-reveal">
          <img
            src={portrait}
            alt="Portrait of Gustaw Jacewicz"
            className="w-full aspect-[3/2] object-cover rounded-sm"
            loading="lazy"
          />
          <figcaption className="mt-3 text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
            Portrait / On the road — Tenerife
          </figcaption>
        </figure>
        <div className="space-y-8 animate-reveal [animation-delay:150ms]">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
            {t.about.section}
          </h2>
          <p className="text-3xl font-medium leading-snug max-w-[60ch]">
            {t.about.lead}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-[60ch]">
            {t.about.bio}
          </p>
        </div>
        <div id="contact" className="pt-16">
          <a
            href="mailto:hello@gustawjacewicz.com"
            className="inline-flex items-center gap-4 bg-foreground text-background px-10 py-6 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-all duration-300"
          >
            {t.cta.button}
            <span className="text-xl font-thin">→</span>
          </a>
        </div>
        <div className="mt-24 pt-8 border-t border-border flex flex-wrap gap-4 justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          <span>{t.footer.location}</span>
          <span>{t.footer.copyright}</span>
        </div>
      </section>
    </main>
  );
}
