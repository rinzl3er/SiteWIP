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
  {
    image: "/Site images/8 Mad Men, Sambalpur A.jpeg",
    venue: "8 Mad Men",
    location: "Sambalpur",
  },
  {
    image: "/Site images/Carpe Diem, Kolkata A.jpg",
    venue: "Carpe Diem",
    location: "Kolkata",
  },
  {
    image: "/Site images/Clava, Jabalpur A.jpeg",
    venue: "Clava",
    location: "Jabalpur",
  },
  {
    image: "/Site images/Hashtag, Siliguri A.jpg",
    venue: "Hashtag",
    location: "Siliguri",
  },
  {
    image: "/Site images/Hashtag, Siliguri B.jpg",
    venue: "Hashtag",
    location: "Siliguri",
  },
  {
    image: "/Site images/Mansion, Agra A.jpg",
    venue: "Mansion",
    location: "Agra",
  },
  {
    image: "/Site images/Mansion, Agra B.jpg",
    venue: "Mansion",
    location: "Agra",
  },
  {
    image: "/Site images/NYX, Guwahati A.jpg",
    venue: "NYX",
    location: "Guwahati",
  },
  {
    image: "/Site images/NYX, Guwahati B.jpg",
    venue: "NYX",
    location: "Guwahati",
  },
  {
    image: "/Site images/NYX, Guwahati C.jpg",
    venue: "NYX",
    location: "Guwahati",
  },
  {
    image: "/Site images/Playboy Beer Garden, Ludhiana A.jpeg",
    venue: "Playboy Beer Garden",
    location: "Ludhiana",
  },
  {
    image: "/Site images/Playboy Club Mumbai A.jpg",
    venue: "Playboy Club",
    location: "Mumbai",
  },
  {
    image: "/Site images/Playboy Club Mumbai B.jpg",
    venue: "Playboy Club",
    location: "Mumbai",
  },
  {
    image: "/Site images/Poddar House, Mumbai A.jpg",
    venue: "Poddar House",
    location: "Mumbai",
  },
  {
    image: "/Site images/Poddar House, Mumbai B.jpg",
    venue: "Poddar House",
    location: "Mumbai",
  },
  {
    image: "/Site images/Poddar House, Mumbai C.jpg",
    venue: "Poddar House",
    location: "Mumbai",
  },
  {
    image: "/Site images/Poddar House, Mumbai D.jpg",
    venue: "Poddar House",
    location: "Mumbai",
  },
  {
    image: "/Site images/Privee, New Delhi A.jpg",
    venue: "Privee",
    location: "New Delhi",
  },
  {
    image: "/Site images/Sea View Pearl, Dapoli A.jpg",
    venue: "Sea View Pearl",
    location: "Dapoli",
  },
  {
    image: "/Site images/Sea View Pearl, Dapoli B.jpg",
    venue: "Sea View Pearl",
    location: "Dapoli",
  },
  {
    image: "/Site images/Sin City, Mumbai A.jpg",
    venue: "Sin City",
    location: "Mumbai",
  },
  {
    image: "/Site images/TeryTree, Siliguri A.jpg",
    venue: "TeryTree",
    location: "Siliguri",
  },
  {
    image: "/Site images/TeryTree, Siliguri B.jpg",
    venue: "TeryTree",
    location: "Siliguri",
  },
  {
    image: "/Site images/TeryTree, Siliguri C.jpg",
    venue: "TeryTree",
    location: "Siliguri",
  },
  {
    image: "/Site images/TeryTree, Siliguri D.jpg",
    venue: "TeryTree",
    location: "Siliguri",
  },
  {
    image: "/Site images/Yellow Lights School for Performing Arts, Thane A.jpg",
    venue: "Yellow Lights School for Performing Arts",
    location: "Thane",
  },
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
            href="#videos"
            className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
          >
            🎥 Video Gallery
          </a>

          <a
            href="#images"
            className="rounded-full border border-border px-6 py-3 font-medium transition hover:bg-muted"
          >
            📷 Image Gallery
          </a>
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

      {/* Image Gallery */}
      <section id="images" className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-3xl font-bold">Image Gallery</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {images.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={project.image}
                  alt={`${project.venue} - ${project.location}`}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 translate-y-6 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold text-white">
                    {project.venue}
                  </h3>

                  <p className="mt-1 text-sm text-white/80">
                    📍 {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}