import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site-layout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Chintan Patel" },
      {
        name: "description",
        content:
          "Watch installations, tuning sessions and completed acoustics, lighting and AV projects.",
      },
      { property: "og:title", content: "Projects — Chintan Patel" },
      {
        property: "og:description",
        content:
          "Video gallery showcasing acoustics, lighting, home theatre and AV installations.",
      },
    ],
  }),
  component: Projects,
});

const videos = [
  "https://www.youtube.com/watch?v=kNJRmYJ9ruM",
  "https://www.youtube.com/watch?v=Lubpz4J9-nw",
  "https://www.youtube.com/watch?v=Qj-EpqxQZzI",
  "https://www.youtube.com/watch?v=bhxlW1gYSCo",
  "https://www.youtube.com/watch?v=wyJCqE11Vc4",
  "https://www.youtube.com/watch?v=xtDlPFU3QrU",
  "https://www.youtube.com/watch?v=6fEDYFbInlI",
  "https://www.youtube.com/watch?v=wqueoSh76Ks",
  "https://youtu.be/VlRLfoGH2Vg",
  "https://www.youtube.com/watch?v=lmLkEd9wPUU",
  "https://www.youtube.com/watch?v=DnXMBgXgYAg",
  "https://www.youtube.com/watch?v=HMGml4fadBA",
  "https://www.youtube.com/watch?v=JaM3jvKFK2M",
];

const images = [
  "/assets/gallery-1.jpg",
  "/assets/gallery-2.jpg",
  "/assets/gallery-3.jpg",
  "/assets/gallery-4.jpg",
  "/assets/gallery-5.jpg",
  "/assets/gallery-6.jpg",
];

function getEmbedUrl(url: string) {
  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  if (url.includes("watch?v=")) {
    const id = url.split("watch?v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  return "";
}

function Projects() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Projects"
        title="Projects"
        intro="Browse completed projects through our image and video galleries."
      />

      {/* Navigation */}
      <section className="pb-10">
        <div className="mx-auto flex max-w-7xl justify-center gap-4 px-6">
          <a
            href="#images"
            className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
          >
            📷 Image Gallery
          </a>

          <a
            href="#videos"
            className="rounded-full border border-border px-6 py-3 font-medium transition hover:bg-muted"
          >
            🎥 Video Gallery
          </a>
        </div>
      </section>

      {/* Image Gallery */}
      <section id="images" className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-3xl font-bold">Image Gallery</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="h-72 w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section id="videos" className="py-20">
        <div className="mx-auto max-w-[1700px] px-6">
          <h2 className="mb-8 text-3xl font-bold">Video Gallery</h2>

          <div className="grid gap-8 lg:grid-cols-3">
            {videos.map((video, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-border shadow-lg"
              >
                <div className="aspect-video">
                  <iframe
                    className="h-full w-full"
                    src={getEmbedUrl(video)}
                    title={`Project Video ${index + 1}`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
