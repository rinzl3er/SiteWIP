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

function About() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About the studio"
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
                we specialise in software-driven LED lighting control alongside our
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
