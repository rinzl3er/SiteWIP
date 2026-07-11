import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Lightbulb, MonitorPlay, Volume2 } from "lucide-react";
import { useState } from "react";

import { SiteLayout } from "@/components/site-layout";
// Images are served from `public/assets` — reference them by public paths
const hero = "/assets/hero.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const services = [
  {
    icon: Volume2,
    title: "Acoustics",
    tag: "When sound matters",
    desc: "Room acoustics, sound isolation and noise control from home theatres to auditoriums, studios and worship spaces.",
    overview:
      "We design acoustic environments that enhance clarity, comfort, and performance. Whether it is a home theatre, auditorium, recording studio, worship space, or commercial facility, every solution is engineered to deliver balanced sound, effective noise control, and seamless integration with the architectural design. Our goal is to create spaces where sound performs exactly as intended.",
  },
  {
    icon: Lightbulb,
    title: "Lighting",
    tag: "When light matters",
    desc: "Architectural, decorative and pixel-mapped LED lighting design powered by MADRIX control systems.",
    overview:
      "Lighting is more than illumination—it shapes atmosphere, highlights architecture, and transforms experiences. We develop intelligent lighting solutions that combine aesthetics, efficiency, and advanced control systems to create visually striking environments for residential, commercial, hospitality, and entertainment spaces.",
  },
  {
    icon: MonitorPlay,
    title: "Audio Visual",
    tag: "When AV matters",
    desc: "End-to-end AV integration projection, displays, distributed audio and control for boardrooms and venues.",
    overview:
      "Our integrated audio-visual solutions bring communication, presentation, and entertainment together through carefully engineered systems. From boardrooms and educational institutions to auditoriums and event venues, we deliver reliable AV installations that are intuitive to operate and designed for long-term performance.",
  },
];

type ServiceCard = (typeof services)[number];

function getServiceId(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function ServiceCardItem({
  card,
  expanded,
  anyExpanded,
  onToggle,
}: {
  card: ServiceCard;
  expanded: boolean;
  anyExpanded: boolean;
  onToggle: () => void;
}) {
  const { icon: Icon, title, tag, desc, overview } = card;
  const contentId = `${getServiceId(title)}-details`;

  return (
    <article
      role="button"
      tabIndex={expanded ? -1 : 0}
      aria-expanded={expanded}
      aria-controls={contentId}
      onClick={!expanded ? onToggle : undefined}
      onKeyDown={(e) => {
        if (!expanded && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onToggle();
        }
      }}
      className={`group relative flex flex-col overflow-hidden border bg-ink-soft text-left transition-all duration-500 ease-in-out focus-visible:outline-none ${
        expanded
          ? "rounded-[20px] border-primary p-8 lg:flex-[3_1_0%] cursor-default w-full opacity-100"
          : anyExpanded
          ? "w-0 h-0 p-0 border-0 opacity-0 pointer-events-none flex-[0_0_0%] overflow-hidden"
          : "rounded-[18px] border-border p-6 hover:border-primary flex-1 lg:flex-[1_1_0%] w-full opacity-100"
      }`}
      style={{
        visibility: anyExpanded && !expanded ? "hidden" : "visible",
      }}
    >
      {/* Top Left Close/Back Button when expanded */}
      {expanded && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          className="absolute left-6 top-7 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-ink text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:border-primary focus-visible:outline-none cursor-pointer"
          aria-label="Go back"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
      )}

      {/* Hover dot for collapsed card */}
      {!expanded && (
        <div className="absolute right-4 top-4 h-2 w-2 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
      )}

      {/* Main card layout that morphs between vertical and horizontal */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-6 w-full transition-all duration-500">
        {/* Left Column (Header / Identity) */}
        <div
          className={`flex flex-col transition-all duration-500 ${
            expanded ? "lg:w-[35%] lg:shrink-0 lg:pl-12" : "lg:w-full w-full"
          }`}
        >
          <Icon className="h-8 w-8 text-primary transition-all duration-300" strokeWidth={1.5} />
          <h3 className={`mt-6 font-bold transition-all duration-300 ${expanded ? "text-3xl" : "text-2xl"}`}>
            {title}
          </h3>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-primary/80">
            {tag}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {desc}
          </p>
        </div>

        {/* Right Column (Overview / Details) - Fade in and expand height/width when expanded */}
        <div
          id={contentId}
          aria-hidden={!expanded}
          className={`grid overflow-hidden transition-all ease-in-out ${
            expanded
              ? "opacity-100 duration-300 delay-200 lg:w-[65%] lg:shrink-0"
              : "opacity-0 duration-200 delay-0 pointer-events-none lg:w-0 lg:h-0"
          }`}
          style={{
            gridTemplateRows: expanded ? "1fr" : "0fr",
            transform: expanded ? "translateY(0)" : "translateY(10px)",
          }}
        >
          <div className="min-h-0 pt-1 lg:pt-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary/80">
              Overview
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {overview}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function Home() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

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
          <div data-reveal className="flex items-center gap-3">
            <span className="h-px w-12 bg-primary" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
              Design · Consultancy · Execution
            </span>
          </div>
          <h1 data-reveal className="mt-8 max-w-5xl text-5xl font-black leading-[0.9] tracking-tight sm:text-7xl lg:text-[8.5rem]">
            Acoustics.
            <br />
            <span className="text-stroke-yellow">Lighting.</span>
            <br />
            <span className="text-primary">Visuals.</span>
          </h1>
          <p data-reveal className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Sound you can feel. Light you can shape. Systems that just work.
            Chintan Patel builds acoustic, lighting and AV environments end-to-end
            from the first drawing to the final commissioning.
          </p>
          <div data-reveal className="mt-10 flex flex-wrap items-center gap-4">
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
      </section>

      {/* SERVICES */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_2fr] lg:gap-16">
            <div data-reveal>
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
            <div className="flex flex-col gap-4">
              {/* Card row — all cards same height via items-stretch */}
              <div
                data-reveal-stagger
                className={`flex flex-col lg:flex-row lg:items-stretch transition-all duration-500 ${
                  expandedService ? "gap-0" : "gap-4"
                }`}
              >
                {services.map((card) => (
                  <ServiceCardItem
                    key={card.title}
                    card={card}
                    expanded={expandedService === card.title}
                    anyExpanded={!!expandedService}
                    onToggle={() =>
                      setExpandedService((cur) =>
                        cur === card.title ? null : card.title,
                      )
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="grid-lines absolute inset-0 opacity-30" />
        <div data-reveal className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            / Let's build
          </span>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
            Have a space that needs to{" "}
            <span className="text-primary">sound right</span> and{" "}
            <span className="text-primary">look right</span>?
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
