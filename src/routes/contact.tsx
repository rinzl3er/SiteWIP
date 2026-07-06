import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Send, CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site-layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Chintan Patel" },
      {
        name: "description",
        content:
          "Get in touch for acoustics, lighting and AV consultancy. Call +91 98191 80642 or send us your brief.",
      },
      { property: "og:title", content: "Contact — Chintan Patel" },
      {
        property: "og:description",
        content: "Get in touch for acoustics, lighting and AV consultancy.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Tell us about your space."
        intro="Share a brief, a floor plan, or just an idea. We'll come back within one working day."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_1.4fr] lg:px-8">
          {/* CONTACT INFO */}
          <aside className="space-y-8">
            <div className="border border-border bg-ink-soft p-6 sm:p-8">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
                / Studio
              </h3>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      Phone
                    </div>
                    <a
                      href="tel:+919819180642"
                      className="mt-1 block truncate text-base text-foreground hover:text-primary"
                    >
                      +91 98191 80642
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      Email
                    </div>
                    <a
                      href="mailto:info@chintanpatel.co.in"
                      className="mt-1 block truncate text-base text-foreground hover:text-primary"
                    >
                      info@chintanpatel.co.in
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      Based in
                    </div>
                    <div className="mt-1 text-base text-foreground">Mumbai, India</div>
                    <div className="text-sm text-muted-foreground">
                      Projects delivered pan-India
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border border-border bg-ink-soft p-6 sm:p-8">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
                / Social
              </h3>
              <div className="mt-6 flex items-center gap-3">
                {[
                  { href: "https://www.facebook.com/ichintanpatel/", Icon: Facebook, label: "Facebook" },
                  { href: "https://www.instagram.com/chintanpatel.co.in/", Icon: Instagram, label: "Instagram" },
                  { href: "https://www.youtube.com/channel/UCUjMzeydRapI-VFIPooVcjg", Icon: Youtube, label: "YouTube" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* FORM */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="border border-border bg-ink-soft p-6 sm:p-10"
          >
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
              / Send a brief
            </h3>

            {sent ? (
              <div className="mt-10 flex flex-col items-center py-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-primary" strokeWidth={1.5} />
                <h4 className="mt-6 text-2xl font-bold">Message received.</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thanks — we'll come back to you within one working day.
                </p>
              </div>
            ) : (
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Company / project" name="company" />
                <Field label="Email" type="email" name="email" required />
                <Field label="Phone" type="tel" name="phone" />
                <div className="sm:col-span-2">
                  <Label>Discipline</Label>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Acoustics", "Lighting", "Audio Visual", "Consultancy"].map((d) => (
                      <label
                        key={d}
                        className="cursor-pointer border border-border bg-background px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors has-[input:checked]:border-primary has-[input:checked]:bg-primary has-[input:checked]:text-primary-foreground"
                      >
                        <input type="checkbox" name="discipline" value={d} className="sr-only" />
                        {d}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message">Tell us about the project</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-3 border-2 border-primary bg-primary px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary sm:w-auto"
                  >
                    Send message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return (
    <label
      htmlFor={htmlFor}
      className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground"
    >
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}{required && " *"}</Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
