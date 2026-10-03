import {
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  ClipboardList,
  Code2,
  Compass,
  Globe2,
  Linkedin,
  Mail,
  Menu,
  Palette,
  Search,
  Send,
  Sparkles,
  Target,
  Workflow,
  X,
  type LucideIcon,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { sendContactMessage } from "@/lib/contact.functions";

import ronLogo from "@/assets/ron-digital-logo.png";
import davidPortrait from "@/assets/ron-client-david.jpg";
import mayaPortrait from "@/assets/ron-client-maya.jpg";
import sofiaPortrait from "@/assets/ron-client-sofia.jpg";
const shot111 = { url: "/images/portfolio-111.png" };
const shot112 = { url: "/images/portfolio-112.png" };
const shot113 = { url: "/images/portfolio-113.png" };
const shot114 = { url: "/images/portfolio-114.png" };
const shot115 = { url: "/images/portfolio-115.png" };
const shot116 = { url: "/images/portfolio-116.png" };
const shot117 = { url: "/images/portfolio-117.png" };
const shot118 = { url: "/images/portfolio-118.png" };
const shot119 = { url: "/images/portfolio-119.png" };
const shot120 = { url: "/images/portfolio-120.png" };
const shot136 = { url: "/images/portfolio-136.png" };
const shot137 = { url: "/images/portfolio-137.png" };
const shot138 = { url: "/images/portfolio-138.png" };
const shot139 = { url: "/images/portfolio-139.png" };
const shot140 = { url: "/images/portfolio-140.png" };
const shot141 = { url: "/images/portfolio-141.png" };

type Filter = "All" | "Store Growth" | "Email" | "Branding" | "Technical" | "Paid Ads" | "Social Media" | "SEO";

type PortfolioProject = {
  category: Exclude<Filter, "All">;
  title: string;
  client: string;
  platform: string;
  timeline: string;
  challenge: string;
  solution: string;
  results: readonly { value: string; label: string; note: string }[];
  services: readonly string[];
  quote: string;
  attribution: string;
  images?: readonly { src: string; alt: string }[];
};

const navigation = [
  ["Home", "/"],
  ["Testimonials", "/testimonials"],
  ["Portfolio", "/portfolio"],
  ["About Us", "/about"],
  ["Contact Us", "/contact"],
] as const;

const services: { number: string; title: string; description: string; icon: LucideIcon }[] = [
  { number: "01", title: "SEO", description: "Help your business become easier to find when potential customers search online.", icon: Search },
  { number: "02", title: "Website Design", description: "Create a professional, user-friendly website that makes it easy for visitors to take action.", icon: Globe2 },
  { number: "03", title: "Email Marketing & Automation", description: "Keep customers engaged with thoughtful emails and automated follow-ups that turn interest into action.", icon: Send },
  { number: "04", title: "Traffic Optimization", description: "Attract more of the people who are most likely to become customers through smarter traffic decisions.", icon: BarChart3 },
  { number: "05", title: "Conversion Optimization", description: "Improve the website experience so more visitors buy, book, sign up, or get in touch.", icon: Target },
  { number: "06", title: "Branding & Customization", description: "Build a consistent, professional look that makes your business easier to recognize and remember.", icon: Palette },
  { number: "07", title: "Consultation", description: "Get practical guidance on your website, customer journey, marketing, or online growth strategy.", icon: Compass },
];

const features = [
  ["Business-Focused", "We focus on solutions that support your actual business goals."],
  ["Customized Approach", "Your business is different, so your digital strategy should not be one-size-fits-all."],
  ["User-Friendly", "We create experiences that are simple for your customers to understand and use."],
  ["Results-Oriented", "Every solution is designed with visibility, engagement, and conversions in mind."],
] as const;

const portfolioProjects: PortfolioProject[] = [
  {
    category: "Store Growth",
    title: "Complete Store Management",
    client: "Cross Toss Trading",
    platform: "Shopify",
    timeline: "Ongoing",
    challenge: "The client needed comprehensive store management to scale their e-commerce operations, increase traffic, and boost overall sales performance.",
    solution: "Implemented full store management including product optimization, traffic strategies, conversion optimization, and ongoing analytics monitoring to maximize revenue.",
    results: [
      { value: "5,260", label: "Sessions", note: "+177% increase" },
      { value: "$9,860", label: "Total Sales", note: "+55% growth" },
      { value: "100+", label: "Orders", note: "+56% increase" },
      { value: "1.81%", label: "Conversion Rate", note: "+80% improvement" },
    ],
    services: ["Store Management", "Traffic Optimization", "Sales Strategy", "Analytics"],
    quote: "Our store performance was transformed. The results speak for themselves — sales nearly doubled!",
    attribution: "Cross Toss Trading Team",
    images: [
      { src: shot111.url, alt: "Cross Toss Trading Shopify dashboard, last 30 days: 5,260 sessions and $9,860 in sales" },
      { src: shot112.url, alt: "Cross Toss Trading Shopify dashboard, last 7 days overview" },
    ],
  },
  {
    category: "Email",
    title: "Email Marketing & Sales Growth",
    client: "Autumn Bliss Market",
    platform: "Shopify + Klaviyo",
    timeline: "Ongoing",
    challenge: "The health and beauty store needed a complete email marketing strategy to increase customer retention, recover abandoned carts, and drive consistent revenue from email campaigns.",
    solution: "Implemented comprehensive Klaviyo email flows including abandoned cart recovery, browse abandonment, customer winback, a welcome series, strategic campaigns, Google Tag Manager, and a full store audit.",
    results: [
      { value: "1,809", label: "Sessions", note: "+276% increase" },
      { value: "$1,835", label: "Total Sales", note: "+129% growth" },
      { value: "34", label: "Orders", note: "+55% increase" },
      { value: "100/100", label: "Store Audit", note: "SSL, mobile, content" },
    ],
    services: ["Klaviyo Email Flows", "Email Campaigns", "Google Tag Manager", "Store Audit", "Store Redesign"],
    quote: "The email automation is incredible. We're recovering sales we would have lost and customers love the personalized experience.",
    attribution: "Autumn Bliss Market Owner",
    images: [
      { src: shot113.url, alt: "Autumn Bliss Market Shopify dashboard: 1,809 sessions, +276%" },
      { src: shot117.url, alt: "Autumn Bliss Market Shopify dashboard, last 7 days" },
      { src: shot114.url, alt: "Klaviyo business performance summary: $1,702 total revenue" },
      { src: shot115.url, alt: "Klaviyo email flows: abandoned cart, browse abandonment, winback and welcome series" },
      { src: shot116.url, alt: "Klaviyo campaigns list including the Black Friday email campaign" },
      { src: shot118.url, alt: "Autumn Bliss Market store with 15% off sign-up pop-up" },
      { src: shot119.url, alt: "Store audit report with 100/100 SSL, content and mobile scores" },
      { src: shot120.url, alt: "Google Tag Manager workspace for autumnblissmarket.com" },
    ],
  },
  {
    category: "Branding",
    title: "German Pet Store Rebrand",
    client: "Haustierbedarf4You",
    platform: "Shopify",
    timeline: "4 weeks",
    challenge: "The German pet supply store needed a complete visual rebrand to better connect with pet owners and create a premium, trustworthy shopping experience.",
    solution: "Completed a store redesign with modern branding, an engaging pet-focused experience, German localization, multilingual support, and an optimized user journey.",
    results: [
      { value: "100%", label: "Brand Identity", note: "Complete rebrand" },
      { value: "Enhanced", label: "User Experience", note: "Modern design" },
      { value: "Yes", label: "Mobile Ready", note: "Fully responsive" },
      { value: "German", label: "Localization", note: "Native language support" },
    ],
    services: ["Store Rebrand", "Visual Design", "UX Optimization", "Localization"],
    quote: "Die Besten Produkte für Pelzige Freunde — Our new store perfectly captures our brand mission!",
    attribution: "Oliver Ormans, Owner",
    images: [
      { src: shot136.url, alt: "Haustierbedarf4You redesigned German store homepage" },
    ],
  },
  {
    category: "Technical",
    title: "SSL Certificate Fix & Security",
    client: "XIT Offroad",
    platform: "E-commerce",
    timeline: "1 week",
    challenge: "The client's e-commerce store was showing SSL certificate errors, causing browser warnings that scared away customers and hurt SEO rankings.",
    solution: "Completed SSL setup and verification, including certificate parsing, chain of trust, domain validation, cipher suite negotiation, and redirect configuration.",
    results: [
      { value: "Verified", label: "SSL Status", note: "Fully secured" },
      { value: "SHA-256", label: "Certificate", note: "Industry standard" },
      { value: "100%", label: "Browser Trust", note: "No warnings" },
      { value: "Restored", label: "SEO Impact", note: "HTTPS ranking boost" },
    ],
    services: ["SSL Certificate Setup", "Security Configuration", "Domain Verification", "Technical Fixes"],
    quote: "Our customers can now shop with confidence. No more security warnings — just smooth, secure checkout.",
    attribution: "XIT Offroad Team",
    images: [
      { src: shot137.url, alt: "SSL certificate setup and verification for xitoffroad.com" },
      { src: shot138.url, alt: "SSL Verified confirmation screen" },
    ],
  },
  {
    category: "Paid Ads",
    title: "Google Ads Campaign Management",
    client: "Soma Dental",
    platform: "Google Ads",
    timeline: "Ongoing",
    challenge: "The dental practice needed to increase patient bookings through targeted paid advertising while maintaining an efficient cost per acquisition.",
    solution: "Implemented strategic Google Ads campaigns with optimized targeting, compelling ad copy, and conversion tracking to maximize ROI and drive quality leads.",
    results: [
      { value: "1,598", label: "Conversions", note: "New patient leads" },
      { value: "21.68%", label: "Conversion Rate", note: "Above industry average" },
      { value: "1,829", label: "Clicks", note: "Qualified traffic" },
      { value: "$204.94", label: "Cost / Conversion", note: "Efficient CPA" },
    ],
    services: ["Google Ads Management", "Campaign Optimization", "Conversion Tracking", "Ad Copywriting"],
    quote: "Our patient bookings have skyrocketed since launching these Google Ads campaigns.",
    attribution: "Soma Dental Team",
    images: [
      { src: shot139.url, alt: "Google Ads dashboard: 1,598 conversions at 21.68% conversion rate" },
    ],
  },
  {
    category: "Social Media",
    title: "Social Media Advertising",
    client: "Tropix Beverages",
    platform: "Facebook & Instagram Ads",
    timeline: "3 months",
    challenge: "The beverage brand needed to expand its reach and drive awareness across social platforms while maintaining cost efficiency.",
    solution: "Developed a Facebook and Instagram advertising strategy with audience targeting, creative optimization, and multi-platform distribution.",
    results: [
      { value: "175K", label: "Reach", note: "People reached" },
      { value: "144K", label: "Impressions", note: "Ad views" },
      { value: "1,027", label: "Clicks", note: "Engaged users" },
      { value: "$1.27", label: "Average CPC", note: "Cost efficient" },
    ],
    services: ["Facebook Ads", "Instagram Ads", "Audience Targeting", "Creative Strategy"],
    quote: "The reach we achieved with our advertising budget exceeded all expectations. Great ROI!",
    attribution: "Tropix Beverages Marketing Team",
    images: [
      { src: shot140.url, alt: "Facebook and Instagram ads dashboard: 175K reach, 144K impressions" },
    ],
  },
  {
    category: "SEO",
    title: "SEO Optimization",
    client: "Urban Pet Club",
    platform: "E-commerce",
    timeline: "Ongoing",
    challenge: "The pet supply store needed to improve organic search visibility and on-page SEO to drive more qualified traffic.",
    solution: "Conducted a comprehensive SEO audit and implemented on-page improvements across metadata, page structure, server configuration, and content quality.",
    results: [
      { value: "78%", label: "On-Page Score", note: "SEO health" },
      { value: "85%", label: "Meta Data", note: "Optimized" },
      { value: "92%", label: "Page Structure", note: "Well organized" },
      { value: "100%", label: "Server", note: "Fully optimized" },
    ],
    services: ["SEO Audit", "On-Page Optimization", "Meta Data", "Content Strategy"],
    quote: "Our organic traffic has steadily increased since implementing the SEO recommendations.",
    attribution: "Urban Pet Club Owner",
    images: [
      { src: shot141.url, alt: "SEO on-page audit for Urban Pet Club: 78% score" },
    ],
  },
];

const portfolioFilters: Filter[] = ["All", "Store Growth", "Email", "Branding", "Technical", "Paid Ads", "Social Media", "SEO"];

const processSteps = [
  ["01", "Consultation", "We learn about your business, goals, and current challenges.", ClipboardList],
  ["02", "Strategy", "We identify the right solution and create a clear plan.", Compass],
  ["03", "Build", "We develop and implement the agreed solution.", Code2],
  ["04", "Optimize", "We review the results and identify opportunities for improvement.", Workflow],
] as const;

const testimonials = [
  [mayaPortrait, "Example placeholder", "Business owner", "Ron Digital helped us create a much clearer online presence and gave us better direction for reaching our customers."],
  [davidPortrait, "Example placeholder", "Marketing lead", "The process felt practical from the first conversation, with clear next steps instead of unnecessary complexity."],
  [sofiaPortrait, "Example placeholder", "Founder", "A thoughtful digital partner for businesses that want to build, connect, and grow with confidence."],
] as const;

const faqs = [
  ["What services does Ron Digital offer?", "We offer SEO, website design, email marketing and automation, traffic optimization, conversion optimization, branding, and consultation."],
  ["How can Ron Digital help my business?", "We connect the right digital improvements to your business goals, helping you become easier to find, easier to trust, and easier to choose."],
  ["Do you design websites from scratch?", "Yes. We can shape a new website from strategy through launch, including its structure, content direction, design, and conversion path."],
  ["Can you improve my existing website?", "Yes. We can review what is working, identify friction, and recommend focused improvements rather than starting over unnecessarily."],
  ["Do you provide email marketing and automation?", "Yes. We can help plan email journeys, write useful follow-ups, and organize automations around your customer journey."],
  ["Can you help improve my website conversions?", "Yes. We look at the experience, messaging, calls to action, and key paths so more of the right visitors take the next step."],
  ["Can your services be customized?", "Absolutely. Every recommendation is shaped around your audience, goals, timeline, and current systems."],
  ["How much does a project cost?", "Projects start from $500. The final price depends on the scope, requirements, and level of support your project needs."],
  ["What is the minimum project budget?", "Our projects start from $500. A consultation helps us match the right starting point to your priorities."],
  ["How do I get started?", "Send a project request or email rondigital.team@gmail.com. We will review your goals and suggest a practical next step."],
] as const;

const budgetOptions = ["$500 – $1,000", "$1,000 – $2,500", "$2,500 – $5,000", "$5,000+"] as const;


export type SiteSection = "home" | "about" | "portfolio" | "contact";

export function SitePage({ section }: { section: SiteSection }) {
  const [submitted, setSubmitted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [budget, setBudget] = useState<(typeof budgetOptions)[number]>(budgetOptions[0]);

  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setSending(true);
    setSendError("");
    try {
      await sendContactMessage({ data: { ...fd, budget: fd.budget || budget } as never });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setSendError("Sorry, your message couldn't be sent. Please email us at rondigital.team@gmail.com.");
    } finally {
      setSending(false);
    }
  }

  const visibleProjects = activeFilter === "All" ? portfolioProjects : portfolioProjects.filter((project) => project.category === activeFilter);

  return (
    <div className="app-surface min-h-screen overflow-hidden text-ink antialiased">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="page-grid flex min-h-20 items-center justify-between gap-5">
          <a href="/" aria-label="Ron Digital home" className="shrink-0 leading-none">
            <img src={ronLogo} alt="Ron Digital" className="h-14 w-auto md:h-16" />
          </a>
          <nav className="hidden items-center gap-5 text-sm text-ink-muted xl:flex" aria-label="Main navigation">
            {navigation.map(([label, href]) => <a key={href} href={href} className="transition-colors hover:text-brand">{label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href="/contact" className="hidden rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-brand sm:inline-flex">Book a Consultation</a>
            <button type="button" className="grid size-10 place-items-center rounded-lg border border-border bg-background text-brand xl:hidden" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)}>
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
          {mobileOpen && <nav className="absolute inset-x-4 top-[calc(100%-0.25rem)] grid gap-1 rounded-xl border border-border bg-background p-3 shadow-lg xl:hidden" aria-label="Mobile navigation">
            {navigation.map(([label, href]) => <a key={href} href={href} className="rounded-lg px-4 py-3 text-sm text-ink-muted hover:bg-brand-soft hover:text-brand" onClick={() => setMobileOpen(false)}>{label}</a>)}
            <a href="/contact" className="mt-1 rounded-lg bg-ink px-4 py-3 text-center text-sm font-semibold text-background" onClick={() => setMobileOpen(false)}>Book a Consultation</a>
          </nav>}
        </div>
      </header>

      <main id="top">
        {section === "home" && <section className="navy-surface relative overflow-hidden text-background">
          <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="page-grid relative grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:items-center lg:py-32">
            <div className="max-w-3xl lg:col-span-8">
              <span className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-glow"><span className="size-2 rounded-full bg-brand-glow" />Practical digital solutions</span>
              <h1 className="display-font max-w-4xl text-5xl font-extrabold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">Creating Digital Solutions That Help Businesses <span className="text-brand-glow">Grow.</span></h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-navy-muted sm:text-xl">From websites and branding to search visibility, email systems, traffic, and conversions, Ron Digital helps businesses create a stronger digital presence and connect with the right customers.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 font-semibold text-brand-foreground transition-colors hover:bg-brand-glow">Book a Consultation <ArrowUpRight className="size-4" /></a>
                <a href="/portfolio" className="inline-flex items-center gap-2 rounded-lg border border-background/20 px-6 py-3.5 font-semibold text-background transition-colors hover:border-brand-glow hover:text-brand-glow">View Our Work</a>
              </div>
              <p className="mt-10 flex items-center gap-3 text-sm text-navy-muted"><Check className="size-4 text-brand-glow" />Practical digital solutions built around your business goals.</p>
            </div>
            <div className="relative hidden min-h-80 lg:col-span-4 lg:block">
              <div className="absolute inset-5 rounded-[2rem] border border-background/15 bg-background/[0.04]" />
              <div className="absolute right-2 top-8 w-56 rounded-xl border border-background/15 bg-background/[0.08] p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between text-xs text-navy-muted"><span>Growth system</span><Sparkles className="size-4 text-brand-glow" /></div>
                <div className="mt-8 flex items-end gap-2"><span className="display-font text-4xl font-bold text-background">01</span><span className="mb-1 text-sm text-navy-muted">clear next step</span></div>
                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-background/10"><div className="h-full w-3/4 rounded-full bg-brand-glow" /></div>
              </div>
              <div className="absolute bottom-8 left-0 w-60 rounded-xl bg-background p-5 text-ink shadow-2xl">
                <div className="flex items-center gap-3"><div className="grid size-10 place-items-center rounded-lg bg-brand-soft text-brand"><Target className="size-5" /></div><div><p className="text-xs text-ink-muted">Focus</p><p className="font-semibold">Attract · Engage · Convert</p></div></div>
                <div className="mt-6 grid grid-cols-3 gap-2"><span className="h-12 rounded-md bg-brand-soft" /><span className="mt-3 h-9 rounded-md bg-sky-wash" /><span className="mt-1 h-11 rounded-md bg-brand-soft" /></div>
              </div>
            </div>
          </div>
        </section>}

        {section === "home" && <>
          <section className="border-b border-border bg-background py-16 md:py-20">
            <div className="page-grid grid gap-6 sm:grid-cols-3">
              {[
                ["50+", "Projects Delivered", "Stores, websites, email systems, ad campaigns and technical fixes completed for businesses across e-commerce, health, pets and beverages."],
                ["98%", "Client Satisfaction", "Most clients come back for more work or refer us, because we communicate clearly, meet deadlines and focus on results they can see."],
                ["5+", "Years of Experience", "Years spent building, fixing and growing online stores — learning what actually moves sales, not just what looks good."],
              ].map(([value, label, note]) => (
                <div key={label} className="rounded-xl border border-border bg-card p-7">
                  <p className="display-font text-5xl font-extrabold text-brand">{value}</p>
                  <p className="mt-3 text-lg font-semibold text-ink">{label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-background py-20 md:py-24">
            <div className="page-grid">
              <span className="eyebrow text-brand">What we do</span>
              <h2 className="display-font mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">Our Core Services</h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">Everything your online business needs to get found, look professional, keep customers coming back and turn visitors into buyers — handled by one team that understands how each piece connects.</p>
              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {services.map(({ number, title, description, icon: Icon }) => (
                  <div key={title} className="rounded-xl border border-border bg-card p-7 transition-colors hover:border-brand">
                    <div className="flex items-center justify-between"><span className="grid size-11 place-items-center rounded-lg bg-brand-soft text-brand"><Icon className="size-5" /></span><span className="text-sm font-semibold text-ink-muted">{number}</span></div>
                    <h3 className="mt-6 text-xl font-bold text-ink">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-sky-wash py-20 md:py-24">
            <div className="page-grid grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <span className="eyebrow text-brand">Why choose us</span>
                <h2 className="display-font mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">Why You Can Trust Ron Digital</h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-muted">We treat your business like our own. Every decision is made to help you earn more, save time and build a brand customers remember.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ...features,
                  ["Proven Results", "Real dashboards from real clients — sales, conversions and audit scores you can see in our portfolio."],
                  ["Clear Communication", "Regular updates in plain language, so you always know what's being done and why."],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-xl border border-border bg-card p-6">
                    <span className="grid size-9 place-items-center rounded-full bg-brand-soft text-brand"><Check className="size-4" /></span>
                    <h3 className="mt-4 font-bold text-ink">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="navy-surface py-20 text-background md:py-24">
            <div className="page-grid text-center">
              <h2 className="display-font mx-auto max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">Ready to Grow Your E-commerce Business?</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-navy-muted">Whether you're launching a new store or need more sales from the one you have, we'll review your setup, find what's holding you back and give you a clear plan to grow. Your first consultation is the easiest step.</p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 font-semibold text-brand-foreground transition-colors hover:bg-brand-glow">Book a Free Consultation <ArrowUpRight className="size-4" /></a>
                <a href="/portfolio" className="inline-flex items-center gap-2 rounded-lg border border-background/20 px-6 py-3.5 font-semibold text-background transition-colors hover:border-brand-glow hover:text-brand-glow">See Our Results</a>
              </div>
            </div>
          </section>
        </>}

        {section === "about" && <section id="about" className="page-grid grid scroll-mt-24 gap-10 py-20 md:py-24 lg:grid-cols-2 lg:items-center">
          <div><span className="eyebrow">About us</span><h2 className="display-font mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Who We Are</h2><p className="mt-5 max-w-xl leading-relaxed text-ink-muted">Ron Digital is a digital solutions team helping businesses build a stronger online presence. We combine strategy, design, visibility and thoughtful customer journeys to help businesses connect with their audience.</p><p className="mt-4 max-w-xl leading-relaxed text-ink-muted">Our purpose is simple: create practical digital solutions that help businesses grow. Creating Solutions. Building Connections.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{features.map(([title, description], index) => <div key={title} className="rounded-xl border border-border bg-background p-6 shadow-sm"><div className="flex items-center justify-between"><span className="grid size-9 place-items-center rounded-lg bg-brand-soft text-brand"><Check className="size-4" /></span><span className="text-xs font-semibold text-ink-muted">0{index + 1}</span></div><h3 className="display-font mt-5 font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p></div>)}</div>
        </section>}

        {section === "portfolio" && <section id="portfolio" className="scroll-mt-20 portfolio-night relative overflow-hidden py-24 text-background md:py-32">
          <div className="portfolio-stars pointer-events-none absolute inset-0 opacity-70" />
          <div className="page-grid relative">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow text-brand-glow">Client work</span>
              <h2 className="display-font mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Results across every growth channel</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-muted sm:text-lg">Explore the challenges, solutions, and client-reported outcomes behind selected Ron Digital projects.</p>
            </div>
            <div className="mt-10 flex justify-center" role="group" aria-label="Filter project concepts">
              <div className="flex max-w-4xl flex-wrap justify-center gap-2 rounded-xl border border-background/15 bg-background/[0.05] p-1.5 backdrop-blur-sm">
                {portfolioFilters.map((filter) => <button key={filter} type="button" onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter} className={`${activeFilter === filter ? "bg-brand text-brand-foreground" : "text-navy-muted hover:text-background"} rounded-lg px-4 py-2 text-xs font-semibold transition-colors`}>{filter}</button>)}
              </div>
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-navy-muted">Performance figures and quotations below are reproduced from the case-study information supplied by each project.</p>
            <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-2">
              {visibleProjects.map((project) => <article key={project.client} className="overflow-hidden rounded-xl border border-background/15 bg-background/[0.06] backdrop-blur-sm">
                <div className="border-b border-background/10 p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-md bg-brand/15 px-3 py-1.5 text-xs font-semibold text-brand-glow">{project.category}</span>
                    <span className="text-xs font-medium text-navy-muted">{project.timeline}</span>
                  </div>
                  <h3 className="display-font mt-6 text-2xl font-bold">{project.client}</h3>
                  <p className="mt-1 font-medium text-brand-glow">{project.title}</p>
                  <p className="mt-2 text-sm text-navy-muted">{project.client} · {project.platform}</p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {project.results.map((result) => <div key={result.label} className="rounded-lg border border-background/10 bg-background/[0.05] p-4">
                      <p className="display-font text-xl font-bold text-background sm:text-2xl">{result.value}</p>
                      <p className="mt-1 text-xs font-semibold text-brand-glow">{result.label}</p>
                      <p className="mt-1 text-xs text-navy-muted">{result.note}</p>
                    </div>)}
                  </div>
                  {project.images && project.images.length > 0 && <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-glow">Proof of results</p>
                    <div className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
                      {project.images.map((image) => <a key={image.src} href={image.src} target="_blank" rel="noreferrer" className="w-[85%] shrink-0 snap-start overflow-hidden rounded-lg border border-background/10 bg-background sm:w-[70%]">
                        <img src={image.src} alt={image.alt} loading="lazy" className="block h-auto w-full object-contain" />
                      </a>)}
                    </div>
                  </div>}
                </div>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-sm font-semibold sm:px-7">
                    View full case study
                    <ChevronDown className="size-5 shrink-0 text-brand-glow transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="border-t border-background/10 px-6 pb-7 pt-6 sm:px-7">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div><p className="text-xs font-semibold uppercase text-brand-glow">The challenge</p><p className="mt-2 text-sm leading-relaxed text-navy-muted">{project.challenge}</p></div>
                      <div><p className="text-xs font-semibold uppercase text-brand-glow">Our solution</p><p className="mt-2 text-sm leading-relaxed text-navy-muted">{project.solution}</p></div>
                    </div>
                    <div className="mt-6"><p className="text-xs font-semibold uppercase text-brand-glow">Services applied</p><div className="mt-3 flex flex-wrap gap-2">{project.services.map((service) => <span key={service} className="rounded-md border border-background/15 px-3 py-1.5 text-xs text-navy-muted">{service}</span>)}</div></div>
                    <blockquote className="mt-7 border-l-2 border-brand-glow pl-4 text-sm italic leading-relaxed text-background">“{project.quote}”<footer className="mt-2 text-xs not-italic text-navy-muted">— {project.attribution}</footer></blockquote>
                  </div>
                </details>
              </article>)}
            </div>
          </div>
        </section>}





        {section === "contact" && <section id="contact" className="scroll-mt-20 navy-surface py-20 text-background md:py-24"><div className="page-grid grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"><div><span className="eyebrow text-brand-glow">Start a conversation</span><h2 className="display-font mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Let's Build Something That Works</h2><p className="mt-5 max-w-lg text-lg leading-relaxed text-navy-muted">Have a project, idea, or digital challenge? Tell us what you’re working on and let’s discuss how Ron Digital can help.</p><div className="mt-10 flex items-center gap-3 text-sm text-navy-muted"><span className="grid size-10 place-items-center rounded-lg bg-background/10 text-brand-glow"><Mail className="size-4" /></span><a href="mailto:rondigital.team@gmail.com" className="hover:text-brand-glow">rondigital.team@gmail.com</a></div><p className="mt-5 text-sm text-navy-muted">Prefer email? <a href="mailto:rondigital.team@gmail.com" className="text-brand-glow hover:underline">rondigital.team@gmail.com</a></p></div><form onSubmit={handleSubmit} className="rounded-xl border border-background/10 bg-background/[0.06] p-6 backdrop-blur-sm sm:p-8"><div className="grid gap-4 sm:grid-cols-2"><Field label="Full Name" name="name" placeholder="Your name" required dark /><Field label="Business Name" name="business" placeholder="Your business" dark /></div><div className="mt-4 grid gap-4 sm:grid-cols-2"><Field label="Email Address" name="email" type="email" placeholder="you@business.com" required dark /><Field label="Phone Number" name="phone" type="tel" placeholder="Optional" dark /></div><div className="mt-4 grid gap-4 sm:grid-cols-2"><SelectField label="Service Needed" name="service" options={services.map((service) => service.title).concat("Other")} dark /><SelectField label="Project Budget" name="budget" options={[...budgetOptions]} dark /></div><label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-navy-muted">Message<textarea name="message" rows={4} placeholder="Tell us a little about what you’re working on..." required className="mt-1.5 w-full resize-none rounded-lg border border-background/15 bg-background/10 px-4 py-3 text-sm font-normal normal-case tracking-normal text-background outline-none placeholder:text-navy-muted focus:border-brand-glow focus:ring-2 focus:ring-brand-glow/30" /></label><button type="submit" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-3.5 font-semibold text-brand-foreground transition-colors hover:bg-brand-glow">{submitted ? <>Request received <Check className="size-4" /></> : <>Send Project Request <ArrowUpRight className="size-4" /></>}</button>{submitted && <p role="status" className="mt-3 text-center text-sm text-brand-glow">Thanks — we’ll be in touch soon.</p>}</form></div></section>}

      </main>

      <footer className="navy-surface border-t border-background/10 py-10 text-background">
        <div className="page-grid flex flex-col items-center justify-between gap-6 md:flex-row">
          <a href="/" aria-label="Ron Digital home" className="inline-block rounded-xl bg-background p-2"><img src={ronLogo} alt="Ron Digital" className="h-10 w-auto" /></a>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-navy-muted" aria-label="Footer navigation">
            <a href="/" className="hover:text-background">Home</a>
            <a href="/portfolio" className="hover:text-background">Portfolio</a>
            <a href="/contact" className="hover:text-background">Contact Us</a>
          </nav>
          <div className="flex gap-3">
            <a href="https://x.com/rondigitalream" target="_blank" rel="noopener noreferrer" aria-label="Ron Digital on X" className="grid size-9 place-items-center rounded-lg border border-background/15 text-navy-muted hover:border-brand-glow hover:text-brand-glow"><X className="size-4" /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Ron Digital on LinkedIn" className="grid size-9 place-items-center rounded-lg border border-background/15 text-navy-muted hover:border-brand-glow hover:text-brand-glow"><Linkedin className="size-4" /></a>
            <a href="mailto:rondigital.team@gmail.com" aria-label="Email Ron Digital" className="grid size-9 place-items-center rounded-lg border border-background/15 text-navy-muted hover:border-brand-glow hover:text-brand-glow"><Mail className="size-4" /></a>
          </div>
        </div>
        <div className="page-grid mt-8 border-t border-background/10 pt-6 text-center text-xs text-navy-muted">© 2026 Ron Digital. All rights reserved.</div>
      </footer>
    </div>
  );
}

function Field({ label, name, placeholder, type = "text", required = false, dark = false }: { label: string; name: string; placeholder: string; type?: string; required?: boolean; dark?: boolean }) {
  return <label className={`${dark ? "text-navy-muted" : "text-ink-muted"} block text-xs font-semibold uppercase tracking-wide`}>{label}<input name={name} type={type} placeholder={placeholder} required={required} className={`${dark ? "border-background/15 bg-background/10 text-background placeholder:text-navy-muted focus:border-brand-glow focus:ring-brand-glow/30" : "border-input bg-background/60 text-foreground placeholder:text-ink-muted/70 focus:ring-ring"} mt-1.5 w-full rounded-lg border px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:ring-2`} /></label>;
}

function SelectField({ label, name, options, dark = false }: { label: string; name: string; options: string[]; dark?: boolean }) {
  return <label className={`${dark ? "text-navy-muted" : "text-ink-muted"} block text-xs font-semibold uppercase tracking-wide`}>{label}<select name={name} className={`${dark ? "border-background/15 bg-background/10 text-background focus:border-brand-glow focus:ring-brand-glow/30" : "border-input bg-background/60 text-foreground focus:ring-ring"} mt-1.5 w-full rounded-lg border px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:ring-2`}>{options.map((option) => <option key={option} className="text-foreground">{option}</option>)}</select></label>;
}