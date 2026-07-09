import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site-layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Chintan Patel Acoustics, Lighting & AV" },
      {
        name: "description",
        content:
          "Chintan Patel is a design-led studio specialising in acoustics, architectural lighting and audio-visual integration across India.",
      },
      { property: "og:title", content: "About — Chintan Patel" },
      {
        property: "og:description",
        content:
          "A design-led studio for acoustics, lighting and AV. Design · Consultancy · Execution.",
      },
    ],
  }),
  component: About,
});

const capabilities = [
  "Room acoustic modelling & treatment",
  "Sound isolation & noise control",
  "Home theatre design & calibration",
  "Auditorium & worship space acoustics",
  "Architectural & decorative lighting",
  "MADRIX pixel-mapped LED control",
  "AV integration & boardroom automation",
  "Line-array & distributed audio systems",
];

const founderDetails = [
  {
    title: "Introduction",
    body: "Electrical engineer with experience in acoustics, sound and lighting. Chintan Patel is a one-stop consultant for audio/video, lighting design and acoustic works across a wide range of projects.",
  },
  {
    title: "Expertise",
    points: [
      "Audio/video consulting",
      "Lighting designs and setups",
      "Acoustic works for studios, clubs, restaurants, pubs, bars and home theatres",
    ],
  },
  {
    title: "Design Philosophy",
    body: "He focuses on balancing detail, character and fundamentals, while working closely with architects, sound system and lighting manufacturers or dealers, and the installation team to achieve the best integration of technologies.",
  },
  {
    title: "Industry Experience",
    body: "His projects range from home theatres to restaurants, clubs, hotels and luxury homes, moving between minimalist, rich ornate classic and vibrant styles.",
  },
];

const founderHighlights = [
  {
    title: "Acoustics",
    text: "Acoustic works for studios, clubs, restaurants, pubs, bars and home theatres.",
  },
  {
    title: "Architectural Lighting",
    text: "Lighting designs and setups for spaces that need a strong visual character.",
  },
  {
    title: "AV Integration",
    text: "Audio/video consulting and system integration coordinated with the installation team.",
  },
  {
    title: "MADRIX Programming",
    text: "Software-driven LED lighting control with MADRIX for pixel-mapped lighting work.",
  },
];

function About() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About us"
        title="A studio for spaces that sound and look their best."
        intro="We are an independent design and integration studio working at the intersection of acoustics, architectural lighting and audio-visual systems. We work with architects, hospitality groups, homeowners and venues across India."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
              / Practice
            </span>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Sound, light and image — treated as one discipline.
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground">
              <p>
                Most spaces are stitched together from separate vendors: an acoustics
                team, a lighting contractor, an AV integrator. The result is often three
                systems that don't quite know each other.
              </p>
              <p>
                We work differently. One studio owns the whole environment the room's
                acoustic behaviour, the way light moves through it, and the AV systems
                that live inside it so every layer supports the others.
              </p>
              <p>
                With <span className="text-primary">MADRIX</span> as our official dealer and consultant,
                we specialise in software driven LED lighting control alongside our
                acoustic and AV work.
              </p>
            </div>
          </div>

          <div className="border border-border bg-ink-soft p-8 sm:p-10">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
              / Capabilities
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {capabilities.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-ink py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(320px,420px)_minmax(0,1fr)] lg:items-start lg:gap-16">
            <div className="group relative overflow-hidden rounded-2xl border border-primary/40 bg-background shadow-[0_24px_70px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(0,0,0,0.55)]">
              <img
                src="/assets/Chintanportrait.jpg"
                alt="Chintan Patel portrait"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <div className="space-y-10">
              <div className="space-y-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                  Meet the Founder
                </span>
                <h2 className="text-3xl font-black leading-tight sm:text-4xl">
                  Chintan Patel
                </h2>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  Founder & Principal Consultant
                </p>
              </div>

              <div className="grid gap-8">
                {founderDetails.map((section) => (
                  <section key={section.title} className="space-y-3">
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
                      {section.title}
                    </h3>
                    {"body" in section ? (
                      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {section.body}
                      </p>
                    ) : (
                      <ul className="grid gap-3 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2 sm:text-base">
                        {section.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {founderHighlights.map((item) => (
                  <article
                    key={item.title}
                    className="border border-border bg-ink-soft p-5 transition-colors hover:border-primary/70"
                  >
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <h2 className="text-3xl font-black sm:text-4xl">
            Bring us in early. <span className="text-primary">Save time later.</span>
          </h2>
          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center gap-3 border-2 border-primary bg-primary px-6 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
          >
            Talk to us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
