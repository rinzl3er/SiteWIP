import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site-layout";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Chintan Patel" },
      {
        name: "description",
        content:
          "Selected acoustics, lighting and audio-visual projects — auditoriums, home theatres, studios, boardrooms and venues.",
      },
      { property: "og:title", content: "Projects — Chintan Patel" },
      {
        property: "og:description",
        content:
          "A selection of acoustics, lighting and AV work from across India.",
      },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    img: g1,
    year: "2024",
    discipline: "Lighting · AV",
    title: "Performance Hall — Mumbai",
    desc: "Full stage lighting rig with pixel-mapped LED wash and a line-array PA tuned for spoken word and live music.",
  },
  {
    img: g2,
    year: "2024",
    discipline: "Acoustics · AV",
    title: "Private Home Theatre — Pune",
    desc: "THX-inspired acoustic build with fabric-wrapped absorbers, low-frequency traps and a Dolby Atmos 7.2.4 system.",
  },
  {
    img: g3,
    year: "2023",
    discipline: "Acoustics",
    title: "Recording Studio — Ahmedabad",
    desc: "Control room and live room design with tuned diffusion, isolated floating floor and integrated monitoring.",
  },
  {
    img: g4,
    year: "2023",
    discipline: "Acoustics · Lighting",
    title: "Cinema Auditorium — Surat",
    desc: "Faceted acoustic ceiling and cove lighting scheme sequenced to pre-show programming via MADRIX.",
  },
  {
    img: g5,
    year: "2022",
    discipline: "AV · Acoustics",
    title: "Corporate Boardroom — Bangalore",
    desc: "Ceiling mic array, laser projection, wall absorption panels and single-touch control for hybrid meetings.",
  },
  {
    img: g6,
    year: "2022",
    discipline: "Lighting",
    title: "Nightclub Lighting Rig — Goa",
    desc: "Moving-head fixtures, laser and haze programmed and pixel-mapped through MADRIX for full-set automation.",
  },
];

function Projects() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Projects · 2022 – 2024"
        title="A selection of recent work."
        intro="Design, consultancy and execution across acoustics, architectural lighting and AV integration."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:gap-14 lg:gap-16">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className={`group grid gap-8 md:grid-cols-2 md:items-center ${
                  i % 2 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative overflow-hidden border border-border">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute left-0 top-0 bg-primary px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground">
                    {p.year}
                  </div>
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                    / {p.discipline}
                  </span>
                  <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                    {p.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground">{p.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                    Case study on request
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
