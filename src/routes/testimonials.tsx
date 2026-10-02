import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import ronLogo from "@/assets/ron-digital-logo.png";
import davidPortrait from "@/assets/ron-client-david.jpg";
import mayaPortrait from "@/assets/ron-client-maya.jpg";
import sofiaPortrait from "@/assets/ron-client-sofia.jpg";

const navigation = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Contact Us", "/contact"],
  ["Testimonials", "/testimonials"],
  ["Portfolio", "/portfolio"],
] as const;

const testimonials = [
  [mayaPortrait, "Example placeholder", "Business owner", "Ron Digital helped us create a much clearer online presence and gave us better direction for reaching our customers."],
  [davidPortrait, "Example placeholder", "Marketing lead", "The process felt practical from the first conversation, with clear next steps instead of unnecessary complexity."],
  [sofiaPortrait, "Example placeholder", "Founder", "A thoughtful digital partner for businesses that want to build, connect, and grow with confidence."],
] as const;

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials | Ron Digital" },
      { name: "description", content: "Read what businesses say about working with Ron Digital." },
      { property: "og:title", content: "Client Testimonials | Ron Digital" },
      { property: "og:description", content: "Feedback from businesses Ron Digital has worked with." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <div className="app-surface min-h-screen text-ink antialiased">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="page-grid flex min-h-20 flex-wrap items-center justify-between gap-4 py-2">
          <a href="/" aria-label="Ron Digital home"><img src={ronLogo} alt="Ron Digital" className="h-12 w-auto md:h-14" /></a>
          <nav className="flex flex-wrap gap-4 text-sm text-ink-muted" aria-label="Main navigation">
            {navigation.map(([label, href]) => <a key={href} href={href} className={href === "/testimonials" ? "font-semibold text-brand" : "hover:text-brand"}>{label}</a>)}
          </nav>
        </div>
      </header>
      <main className="page-grid py-20 md:py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-brand"><ArrowLeft className="size-4" />Back home</Link>
        <span className="eyebrow mt-8 block">Client perspective</span>
        <h1 className="display-font mt-3 text-4xl font-extrabold tracking-tight">What Our Clients Say</h1>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map(([image, name, role, quote], index) => <figure key={role} className={`${index === 1 ? "navy-surface text-background" : "bg-background"} rounded-xl border border-border p-6 shadow-sm`}><div className="text-brand-glow">★★★★★</div><blockquote className="mt-5 text-sm leading-relaxed">“{quote}”</blockquote><figcaption className="mt-6 flex items-center gap-3"><img src={image} alt="Client portrait" width={816} height={816} loading="lazy" className="size-11 rounded-full object-cover" /><div><p className="font-semibold">{name}</p><p className={`${index === 1 ? "text-navy-muted" : "text-ink-muted"} text-xs`}>{role}</p></div></figcaption></figure>)}
        </div>
      </main>
    </div>
  );
}
