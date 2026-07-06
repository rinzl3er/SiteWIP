import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Volume2, Lightbulb, MonitorPlay, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
// Images are served from `public/assets` — reference them by public paths
const hero = "/assets/hero.jpg";
const g1 = "/assets/gallery-1.jpg";
const g2 = "/assets/gallery-2.jpg";
const g4 = "/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const services = [
  {
    icon: Volume2,
    title: "Acoustics",
    tag: "When sound matters",
    desc: "Room acoustics, sound isolation and noise control — from home theatres to auditoriums, studios and worship spaces.",
  },
  {
    icon: Lightbulb,
    title: "Lighting",
    tag: "When light matters",
    desc: "Architectural, decorative and pixel-mapped LED lighting design powered by MADRIX control systems.",
  },
  {
    icon: MonitorPlay,
    title: "Audio Visual",
    tag: "When AV matters",
    desc: "End-to-end AV integration — projection, displays, distributed audio and control for boardrooms and venues.",
  },
];

const stats = [
  { k: "18+", v: "Years of practice" },
  { k: "240+", v: "Projects delivered" },
  { k: "9", v: "Cities across India" },
  { k: "MADRIX", v: "Official dealer" },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt=""
            width={1920}
            height={1280}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          <div className="grid-lines absolute inset-0 opacity-40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8 lg:pb-32 lg:pt-28">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-primary" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
              Design · Consultancy · Execution
            </span>
          </div>
          <h1 className="mt-8 max-w-5xl text-5xl font-black leading-[0.9] tracking-tight sm:text-7xl lg:text-[8.5rem]">
            Acoustics.
            <br />
            <span className="text-stroke-yellow">Lighting.</span>
            <br />
            <span className="text-primary">Visuals.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Sound you can feel. Light you can shape. Systems that just work.
            Chintan Patel builds acoustic, lighting and AV environments end-to-end —
            from the first drawing to the final commissioning.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 border-2 border-primary bg-primary px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
            >
              View projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-border px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Start a brief
            </Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative border-y border-border/60 bg-ink/80 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border/60 px-4 sm:px-6 md:grid-cols-4 md:divide-x lg:px-8">
            {stats.map((s, i) => (
              <div
                key={s.v}
                className={`px-2 py-6 ${i < 2 ? "border-b border-border/60 md:border-b-0" : ""}`}
              >
                <div className="font-mono text-3xl font-bold text-primary sm:text-4xl">
                  {s.k}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_2fr] lg:gap-16">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                / What we do
              </span>
              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                Three disciplines. One studio.
              </h2>
              <p className="mt-5 text-muted-foreground">
                A single point of accountability from concept to commissioning — so the
                acoustics, lighting and AV in your space actually agree with each other.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, tag, desc }) => (
                <article
                  key={title}
                  className="group relative flex flex-col border border-border bg-ink-soft p-6 transition-colors hover:border-primary"
                >
                  <div className="absolute right-4 top-4 h-2 w-2 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-6 text-2xl font-bold">{title}</h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-primary/80">
                    {tag}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="border-t border-border/60 bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                / Selected work
              </span>
              <h2 className="mt-4 text-4xl font-black sm:text-5xl">Recent projects</h2>
            </div>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary"
            >
              All projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { img: g1, tag: "Auditorium", title: "Performance Hall Lighting" },
              { img: g2, tag: "Residential", title: "Private Home Theatre" },
              { img: g4, tag: "Cinema", title: "Acoustic Ceiling Design" },
            ].map((p) => (
              <article
                key={p.title}
                className="group relative overflow-hidden border border-border"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                    {p.tag}
                  </span>
                  <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="grid-lines absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            / Let's build
          </span>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
            Have a space that needs to <span className="text-primary">sound right</span> and <span className="text-primary">look right</span>?
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 border-2 border-primary bg-primary px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
            >
              Start the conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+919819180642"
              className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary underline-offset-4 hover:underline"
            >
              or call +91 98191 80642
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
