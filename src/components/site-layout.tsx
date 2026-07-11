import { Link } from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";
import { Menu, X, Instagram, Facebook, Youtube, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { revealProps } from "@/lib/motion";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo({ large = false }: { large?: boolean }) {
  const imgClass = large ? "h-14 w-auto shrink-0 object-contain" : "h-11 w-auto shrink-0 object-contain";
  return (
    <Link to="/" aria-label="Chintan Patel — Home" className="group flex items-center gap-3">
      <img src="/assets/cpalslogo.png" alt="Chintan Patel logo" className={imgClass} />
    </Link>
  );
}

function useDelayedUnmount(isMounted: boolean, delayTime: number) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);
  
  return shouldRender;
}

function Header() {
  const [open, setOpen] = useState(false);
  const shouldRenderMenu = useDelayedUnmount(open, 300);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-5 sm:px-6 lg:px-8">
        <Logo large />
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-primary transition-transform ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                  />
                </>
              )}
            </Link>
          ))}
          <a
            href="tel:+919819180642"
            className="ml-3 inline-flex items-center gap-2 border border-primary bg-primary px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
          >
            <Phone className="h-3.5 w-3.5" />
            Enquire
          </a>
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-12 w-12 place-items-center border border-border text-primary md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {shouldRenderMenu && (
        <div 
          className={`border-t border-border/60 bg-ink md:hidden transition-all duration-300 ease-out will-change-transform
            ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}
          `}
        >
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-4 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground last:border-none"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+919819180642"
              className="mt-3 mb-2 inline-flex items-center justify-center gap-2 bg-primary py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground"
            >
              <Phone className="h-3.5 w-3.5" />
              +91 98191 80642
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1.35fr)_max-content_max-content] lg:gap-x-10 lg:px-8">
        <div className="lg:col-span-1">
          <Logo large />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Design, consultancy &amp; execution for acoustics, architectural lighting and visual systems.
          </p>
        </div>
        <div className="lg:col-span-1">
          <a href="https://www.madrix.com" target="_blank" rel="noreferrer" aria-label="MADRIX">
            <img
              src="/assets/MADRIX_Logo_whiteTypo_onBlack_noBg-768x288.png"
              alt="MADRIX logo"
              className="h-14 w-auto object-contain"
            />
          </a>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Official dealer &amp; consultant for MADRIX lighting control software and pixel-mapped LED control supporting DMX512, DVI, and Art-Net.
          </p>
        </div>
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
            Navigate
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted-foreground hover:text-primary">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
            Contact
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+919819180642" className="hover:text-primary">
                +91 98191 80642
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:info@chintanpatel.co.in" className="hover:text-primary">
                info@chintanpatel.co.in
              </a>
            </li>
          </ul>
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
                className="grid h-10 w-10 place-items-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} Chintan Patel. All rights reserved.</span>
          <span>Design · Consultancy · Execution</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {

  return (
    <div className="page-transition flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-ink">
      <div className="grid-lines absolute inset-0 opacity-60" />
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div {...revealProps} className="flex items-center gap-3">
          <span className="h-px w-10 bg-primary" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            {eyebrow}
          </span>
        </motion.div>
        <motion.h1 {...revealProps} className="mt-6 text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
          {title}
        </motion.h1>
        {intro && (
          <motion.p {...revealProps} className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
