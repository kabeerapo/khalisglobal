import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  FileText,
  IdCard,
  Landmark,
  Link2,
  Mail,
  MapPin,
  MapPinned,
  Megaphone,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  Plane,
  Reply,
  Scale,
  Search,
  Send,
  Share2,
  Star,
  Tags,
  Target,
  X,
} from "lucide-react";
import { LottiePlayer } from "@/components/lottie-player";
import { HeroVideo } from "@/components/hero-video";
import { cn } from "@/lib/utils";

const PHONE = "050 120 1818";
const PHONE_TEL = "+971501201818";
const EMAIL = "info@khalisglobal.com";
const MAPS = "https://share.google/qTWqojAQNH4zmFig8";
const REVIEW = "https://g.page/r/CbjI7vnA12xFEBM/review";
const INSTAGRAM = "https://www.instagram.com/khalisbusiness";
const FACEBOOK = "https://www.facebook.com/share/1QFZj32Wsa/";
const TIKTOK = "https://www.tiktok.com/@khalisbusiness";
const WHATSAPP = `https://wa.me/${PHONE_TEL.replace("+", "")}`;
const WHATSAPP_FUNNEL = `${WHATSAPP}?text=${encodeURIComponent("Hello Khalis — I would like a WhatsApp funnel set up for my company.")}`;

const NAV = [
  { href: "#video", label: "Video" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#marketing", label: "Marketing" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const SERVICE_FILES = [
  {
    id: "pro",
    category: "Government",
    Icon: Landmark,
    title: "PRO Services",
    image: "/services/pro-desk.jpg",
    alt: "PRO officer completing a UAE application form at the Khalis desk",
    copy: "Khalis acts as your on-the-ground PRO. We handle labour contracts, establishment cards, immigration typing, and ministry submissions across Abu Dhabi — with a single point of contact and a clear timeline.",
    points: [
      "Labour and immigration transactions",
      "Establishment cards and licence renewals",
      "Same-day typing and submission where possible",
    ],
  },
  {
    id: "typing",
    category: "Documents",
    Icon: FileText,
    title: "Typing Services",
    image: "/services/typing-desk.jpg",
    alt: "Typist preparing official Arabic and English documents",
    copy: "Official paperwork in the UAE is unforgiving of typos. Our typists work in Arabic and English, match ministry templates, and review every field before you sign.",
    points: [
      "Arabic and English official typing",
      "Letters, applications, and contracts",
      "Same-day turnaround on standard forms",
    ],
  },
  {
    id: "consult",
    category: "Advisory",
    Icon: Briefcase,
    title: "Expert Business Consultation",
    image: "/services/consult.jpg",
    alt: "Business consultation between Khalis advisors in Abu Dhabi",
    copy: "Before a single form is typed, we sit with you. Activity lists, sponsor options, office requirements, and cost of stay are laid out plainly so you choose with confidence, not pressure.",
    points: [
      "Company formation strategy",
      "Licence and activity selection",
      "Cost, timeline, and compliance briefing",
    ],
  },
  {
    id: "legal",
    category: "Legal",
    Icon: Scale,
    title: "Comprehensive Legal Support",
    image: "/services/legal-desk.jpg",
    alt: "Legal documents, leather folio and glasses on a marble desk",
    copy: "From MOA drafting to document attestation and legal translation, we keep the legal track moving beside the government track — so your company is not waiting on a missing stamp.",
    points: [
      "MOA, POA, and contract coordination",
      "Attestation and legal translation",
      "Introductions to licensed UAE counsel",
    ],
  },
  {
    id: "visa",
    category: "Residency",
    Icon: Plane,
    title: "Visa & Immigration",
    image: "/services/visa-skyline.jpg",
    alt: "Abu Dhabi skyline at sunset over the water",
    copy: "We manage the residency file end to end: entry permits, medical, Emirates ID, stamping, and dependent visas — sequenced so nobody is stuck in-country on an expired status.",
    points: [
      "Employment, investor, and family visas",
      "Medical, ID, and stamping sequence",
      "Status tracking until the visa is in passport",
    ],
  },
  {
    id: "eid",
    category: "Identity",
    Icon: IdCard,
    title: "Emirates ID Services",
    image: "/services/eid-passport.jpg",
    alt: "Passport and Emirates ID application being prepared",
    copy: "New, renewal, replacement, and amendment — Khalis types and submits your ICA file so the card lands without a wasted trip to the centre.",
    points: [
      "New, renewal, and replacement applications",
      "Data amendment and status follow-up",
      "ICA / TAMM filing with a clear timeline",
    ],
  },
];

const PILLARS = [
  "Expert Business Consultation",
  "Comprehensive Legal Support",
  "Fast & Reliable Service",
];

const SERVICE_COLS = [
  [
    "Emirates ID Services",
    "PRO Services",
    "Typing Services",
    "Business Setup",
    "Sponsorship Arrangement",
    "HR Management",
    "HAAD License",
    "Civil Defense",
    "Driving License (Online)",
    "Health Insurance (Daman)",
  ],
  [
    "Immigration Services",
    "Ministry of Labour (Tasheel)",
    "Online License Services",
    "Tasheel Services",
    "CNIA (CICPA) Pass Typing",
    "Legal & Normal Translation",
    "Certificate Attestation",
    "Letter Typing",
    "Vehicle Registration Renewal",
    "Judicial Department",
  ],
  [
    "Online Visa",
    "Tourist Visa",
    "Air Ticketing",
    "Fine Payments",
    "Smart Pass",
    "NORKA Services",
    "Passport Seva",
    "Bill Payments",
    "Stamps",
    "Designing",
  ],
];

const STEPS = [
  {
    n: "Step 1",
    title: "Find Your Trade Name and Issue License",
    copy: "Choose a unique trade name and secure your trade license with our expert guidance.",
    Icon: MapPinned,
  },
  {
    n: "Step 2",
    title: "Complete Documentation",
    copy: "Ensure all necessary documents, including partner's agreements and license issuance, are seamlessly managed.",
    Icon: Send,
  },
  {
    n: "Step 3",
    title: "Marketing and Promotions",
    copy: "Leverage effective marketing strategies to launch and grow your business successfully.",
    Icon: Share2,
    href: "#marketing",
  },
];

const MARKETING = [
  {
    Icon: MapPinned,
    title: "Google Business Profile",
    copy: "Own the map pack for Abu Dhabi searches — desk photos, hours, WhatsApp, and a review ask after every closed file.",
  },
  {
    Icon: Search,
    title: "Local search",
    copy: "Pages and listings built around how people look: PRO Muroor, Emirates ID typing, trade licence Abu Dhabi, TAMM and ICA help.",
  },
  {
    Icon: Share2,
    title: "Social that shows the work",
    copy: "Short reels on Instagram, TikTok and Facebook — office footage, service pills, and a clear call to walk in or message.",
  },
  {
    Icon: MessageCircle,
    title: "WhatsApp as the funnel",
    copy: "Ads, posts and the website all land on 050 120 1818. One thread from the first question to a stamped file.",
    href: "#whatsapp",
  },
  {
    Icon: Star,
    title: "Review flywheel",
    copy: "Ask at the right moment — after the ID is collected, not at the counter. Khalis sits at 4.9★; new companies copy the same habit.",
  },
  {
    Icon: Target,
    title: "Launch ads",
    copy: "Tight Google and Meta campaigns for licence, visa and typing keywords — geo-fenced to Abu Dhabi, with a budget you can see weekly.",
  },
];

const WA_TACTICS = [
  {
    n: "01",
    Icon: Link2,
    title: "One number, every door",
    copy: "The same wa.me link on Google, Instagram, TikTok, Facebook, the website, and ads. No second inbox. No missed thread.",
  },
  {
    n: "02",
    Icon: Reply,
    title: "First reply in a minute",
    copy: "Greeting plus hours, then a choice: Emirates ID, PRO, visa, licence, or typing. The client names the file before they type a paragraph.",
  },
  {
    n: "03",
    Icon: FileText,
    title: "Saved replies, not typing twice",
    copy: "Templates for document lists, fees, and next steps — Emirates ID, labour, family visa, trade licence. Staff pick a reply, fill the name, send.",
  },
  {
    n: "04",
    Icon: Tags,
    title: "Labels as the pipeline",
    copy: "New · Docs pending · Submitted · Ready to collect. The chat is the file. Nothing lives only in someone's head.",
  },
  {
    n: "05",
    Icon: Moon,
    title: "After-hours auto reply",
    copy: "Sunday closed. Friday split shift. The auto-reply states hours and asks them to send the document photo so the morning starts with a file, not a question.",
  },
  {
    n: "06",
    Icon: Star,
    title: "Close with a review",
    copy: "When the ID is collected, send the Google review link. That is how 4.9★ stays 4.9★ — asked once, at the right moment.",
  },
];

const REVIEWS = [
  {
    name: "Nishad.k Nisha",
    body: "Excellent service at Khalis Typing, Muroor Road. Staff were professional, friendly and very efficient. My Indian passport renewal was processed quickly and smoothly.",
  },
  {
    name: "Abdul Salam Mondal",
    body: "Excellent service at Khalis Typing, Muroor, Abu Dhabi. The staff are professional, friendly and very efficient. Highly recommended for documentation and PRO work.",
  },
  {
    name: "Google reviewer",
    body: "Efficient staff and smooth document handling. Family visa process and certificate attestation completed without hassle. Best typing centre in the area.",
  },
];

const HOURS = [
  ["Monday – Thursday", "8 AM – 9:30 PM"],
  ["Friday", "8 AM – 12 PM, 3 – 9:30 PM"],
  ["Saturday", "8 AM – 8:30 PM"],
  ["Sunday", "Closed"],
];

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-paper/10 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <a href="#home" className="flex items-center gap-3">
          <img src="/logo.png" alt="" className="h-10 w-auto sm:h-12" />
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-sm font-bold tracking-wide text-paper">
              KHALIS
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.18em] gold-foil">
              TYPING CENTER
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-paper/80 transition-colors duration-200 hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden min-h-11 items-center rounded-full bg-palm px-5 py-2 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95 sm:inline-flex"
          >
            {PHONE}
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-paper lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-paper/10 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center text-sm font-medium text-paper"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-palm text-sm font-semibold text-paper"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function ContactForm({ preferredService = "" }: { preferredService?: string }) {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState(preferredService);

  useEffect(() => {
    if (preferredService) setService(preferredService);
  }, [preferredService]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center py-6 text-center">
        <LottiePlayer src="/lottie/success.json" className="h-40 w-full" label="Request sent" />
        <p className="mt-2 font-display text-xl text-paper">We’ll call you shortly.</p>
        <p className="mt-1 text-sm text-paper/70">Your request is with the Khalis desk.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field label="Full name" name="name" required />
      <Field label="Phone / WhatsApp" name="phone" type="tel" required />
      <Field label="Email" name="email" type="email" />
      <label className="block">
        <span className="mb-1.5 block text-sm text-paper/70">Service needed</span>
        <select
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="min-h-11 w-full rounded-xl border border-paper/15 bg-ink px-4 text-paper outline-none transition-colors duration-200 focus:border-gold"
        >
          <option value="" disabled>
            Select a service
          </option>
          {[
            "PRO Services",
            "Typing Services",
            "Expert Business Consultation",
            "Comprehensive Legal Support",
            "Visa & Immigration",
            "Emirates ID Services",
            "Equivalency Certificate",
            "DOH Professional Licensing",
            "Will Registration",
            "Digital Marketing",
            "Other",
          ].map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm text-paper/70">Message</span>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-xl border border-paper/15 bg-ink px-4 py-3 text-paper outline-none transition-colors duration-200 focus:border-gold"
          placeholder="Tell us how we can help"
        />
      </label>
      <button
        type="submit"
        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-palm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95"
      >
        Send message
        <ArrowRight className="size-4" />
      </button>
    </form>
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
    <label className="block">
      <span className="mb-1.5 block text-sm text-paper/70">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="min-h-11 w-full rounded-xl border border-paper/15 bg-ink px-4 text-paper outline-none transition-colors duration-200 focus:border-gold"
      />
    </label>
  );
}

export function Landing() {
  const [preferredService, setPreferredService] = useState("");
  return (
    <div className="tex-grain tex-fiber min-h-screen bg-paper">
      <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true">
        <filter id="khalis-foil" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.55"
            numOctaves="4"
            seed="7"
            result="noise"
          />
          <feSpecularLighting
            in="noise"
            surfaceScale="2.4"
            specularConstant="1.1"
            specularExponent="18"
            lightingColor="#f3e8c9"
            result="spec"
          >
            <fePointLight x="40" y="20" z="80" />
          </feSpecularLighting>
          <feComposite in="spec" in2="SourceGraphic" operator="in" result="cut" />
          <feBlend in="SourceGraphic" in2="cut" mode="screen" />
        </filter>
      </svg>
      <Nav />

      <section
        id="home"
        className="relative overflow-hidden bg-ink pt-24 text-paper sm:pt-28"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 gold-hairline" />
        <div className="pointer-events-none absolute right-0 top-24 h-40 w-40 bg-gold/15 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:pb-24">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full gold-bevel border-gold/35 bg-gold/10 px-3 py-1 text-xs font-medium text-gold-soft">
              <Star className="size-3.5 fill-gold text-gold" />
              Abu Dhabi · 4.9★ · 858+ Google reviews
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Documents, licences and PRO —
              <span className="gold-foil"> handled as one file.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-paper/75 sm:text-lg">
              Khalis Typing Center is your business desk on Muroor Road. Typing,
              attestation, visas, trade licences and professional licensing —
              without the runaround.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-palm px-7 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95"
              >
                Get a consultation
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#services"
                className="gold-plate gold-bevel inline-flex min-h-12 items-center justify-center rounded-full px-7 text-sm font-semibold transition-transform duration-150 ease-out active:scale-95"
              >
                Browse services
              </a>
            </div>
          </div>
          <div className="relative">
            <HeroVideo />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm font-semibold tracking-widest text-palm uppercase">
            Services
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Your trusted business partner in UAE.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            We build your ideal business solution with passion for lasting
            success.
          </p>
          <ul className="mt-8 space-y-3">
            {PILLARS.map((item) => (
              <li key={item} className="flex items-center gap-3 text-base font-medium">
                <span className="inline-flex size-7 items-center justify-center rounded-full bg-palm/10 text-palm">
                  <CheckCircle2 className="size-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-20 px-4 sm:mt-20 sm:px-6">
          {SERVICE_FILES.map((item) => (
            <article key={item.id} id={item.id} className="scroll-mt-24">
              <div className="overflow-hidden rounded-3xl bg-ink/5">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.18em] text-palm uppercase">
                <item.Icon className="size-4" />
                {item.category}
              </p>
              <h3 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                {item.copy}
              </p>
              <ul className="mt-6 space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-base">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-palm" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setPreferredService(item.title)}
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-palm px-7 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95"
              >
                Start this file
                <ArrowRight className="size-4" />
              </a>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl bg-ink px-6 py-10 text-paper sm:px-10">
            <h3 className="text-center font-display text-2xl font-bold">Reach us for</h3>
            <p className="mx-auto mt-2 max-w-xl text-center text-sm text-paper/70">
              Step-by-step assistance to set up and run in any emirate.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICE_COLS.map((col, i) => (
                <ul key={i} className="space-y-2.5">
                  {col.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" />
                      {s}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-palm px-7 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95"
              >
                Request a proposal
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="relative overflow-hidden bg-palm py-20 text-paper sm:py-24">
        <div className="pointer-events-none absolute inset-0 tex-leaves" aria-hidden="true" />
        <div className="relative mx-auto max-w-lg px-4 sm:px-6 md:max-w-6xl">
          <h2 className="text-center font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Three simple steps to grow your business
          </h2>
          <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3">
            {STEPS.map((step) => (
              <article
                key={step.n}
                className="flex flex-col rounded-2xl bg-paper p-6 text-ink shadow-lg sm:p-8"
              >
                <span className="inline-flex size-14 items-center justify-center rounded-full border-2 border-palm text-palm">
                  <step.Icon className="size-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {step.copy}
                </p>
                <span className="mt-8 inline-flex w-fit rounded-full bg-gold px-4 py-1.5 text-sm font-semibold text-ink">
                  {step.n}
                </span>
                {"href" in step && step.href ? (
                  <a
                    href={step.href}
                    className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-palm"
                  >
                    See strategies
                    <ArrowRight className="size-4" />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="marketing" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-palm uppercase">
            <Megaphone className="size-4" />
            Digital marketing
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Strategies that get the licence noticed.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            The stamp is not the finish line. After the trade licence lands, Khalis
            sets up the channels that bring the next file in — Maps, search, social,
            WhatsApp, and ads you can actually measure.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MARKETING.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-gold/20 bg-paper p-6"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-full border-2 border-palm text-palm">
                  <item.Icon className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.copy}</p>
                {"href" in item && item.href ? (
                  <a
                    href={item.href}
                    className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-palm"
                  >
                    See tactics
                    <ArrowRight className="size-4" />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onClick={() => setPreferredService("Digital Marketing")}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-palm px-7 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95"
            >
              Start this file
              <ArrowRight className="size-4" />
            </a>
            <p className="text-sm text-muted">
              Instagram, TikTok and Facebook already live under Khalis Business.
            </p>
          </div>
        </div>
      </section>

      <section id="whatsapp" className="border-t border-ink/10 bg-ink py-20 text-paper sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-gold-soft uppercase">
              <MessageCircle className="size-4" />
              WhatsApp funnel
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Six tactics that turn a chat into a closed file.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paper/70">
              Khalis already lives on 050 120 1818. The funnel is how every ad,
              reel and walk-in lands in that thread — labelled, answered, and
              asked for a review when the stamp is done.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["Emirates ID", "PRO", "Visa", "Licence", "Typing"].map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-gold/30 px-3 py-1.5 text-xs font-semibold tracking-wide text-gold-soft"
                >
                  {chip}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_FUNNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-palm px-7 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95"
              >
                Message Khalis
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#contact"
                onClick={() => setPreferredService("Digital Marketing")}
                className="inline-flex min-h-12 items-center rounded-full border border-gold/35 px-6 text-sm font-semibold text-paper transition-colors duration-200 hover:border-gold hover:bg-gold/10"
              >
                Set this up
              </a>
            </div>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {WA_TACTICS.map((item) => (
              <li
                key={item.n}
                className="flex flex-col rounded-2xl border border-gold/25 bg-ink p-5 gold-ring"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-full border border-palm text-palm">
                    <item.Icon className="size-4" strokeWidth={1.75} />
                  </span>
                  <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">
                    {item.n}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">{item.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="about" className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-widest text-gold-deep uppercase">
              About Khalis
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Your trusted business partner in the UAE
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We build your ideal business solution with passion for lasting success.
              On Muroor Road in Abu Dhabi, Khalis is the desk people return to for
              typing, PRO, visas and company formation.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Accuracy, transparent fees and a file that actually closes — that is
              the standard, whether it is a single letter or a full licence pack.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["4.9★", "Google rating"],
                ["858+", "Client reviews"],
                ["30+", "Services on desk"],
                ["Fast", "Same-day options"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-xl border border-gold/25 bg-gold-pale/40 p-4">
                  <p className="font-display text-2xl font-bold text-gold-deep">{n}</p>
                  <p className="text-sm text-muted">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-ink">
            <LottiePlayer
              src="/lottie/team.json"
              className="h-80 w-full"
              label="Team collaboration animation"
            />
          </div>
        </div>
      </section>

      <section id="reviews" className="border-t border-ink/10 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold tracking-widest text-gold-deep uppercase">
            Client notes
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            4.9★ from 858+ Google reviews
          </h2>
          <a
            href={REVIEW}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-gold-deep"
          >
            Leave a Google review
          </a>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <blockquote
                key={r.name}
                className="rounded-2xl border border-gold/20 bg-paper p-6"
              >
                <div className="mb-3 flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-gold" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-ink">{r.body}</p>
                <footer className="mt-4 text-sm font-semibold">{r.name}</footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {["family visa process", "certificate attestation", "efficient staff", "document handling"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full border border-gold/30 bg-gold-pale/50 px-3 py-1.5 text-xs font-medium text-gold-deep"
                >
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-ink py-20 text-paper sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">
            Get in touch
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Ready when you are
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div>
              <LottiePlayer
                src="/lottie/contact.json"
                className="mb-8 h-48 w-full max-w-sm"
                label="Contact animation"
              />
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-gold" />
                  <div>
                    <p className="font-semibold">Muroor Road, Abu Dhabi</p>
                    <p className="mt-1 text-sm leading-relaxed text-paper/70">
                      Muroor 31 signal — Zafaranah st — Al Sa`Adah — Zone 1
                    </p>
                    <a
                      href={MAPS}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-gold"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-0.5 size-5 shrink-0 text-gold" />
                  <div>
                    <p className="font-semibold">Call / WhatsApp</p>
                    <a href={`tel:${PHONE_TEL}`} className="text-lg font-semibold text-gold">
                      {PHONE}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-0.5 size-5 shrink-0 text-gold" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href={`mailto:${EMAIL}`} className="text-sm text-gold">
                      {EMAIL}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-0.5 size-5 shrink-0 text-gold" />
                  <div className="w-full max-w-sm">
                    <p className="mb-2 font-semibold">Working hours</p>
                    <dl className="space-y-1 text-sm">
                      {HOURS.map(([d, h]) => (
                        <div key={d} className="flex justify-between gap-4">
                          <dt className="text-paper/70">{d}</dt>
                          <dd className={cn(h === "Closed" && "text-crimson")}>{h}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </li>
              </ul>
              <div className="mt-8 flex gap-3">
                {[
                  [INSTAGRAM, "Instagram"],
                  [FACEBOOK, "Facebook"],
                  [TIKTOK, "TikTok"],
                ].map(([href, label]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-gold/35 px-4 text-sm font-medium text-paper transition-colors duration-200 hover:border-gold hover:bg-gold/10"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-gold/25 bg-ink p-6 sm:p-8 gold-ring gold-bevel">
              <h3 className="font-display text-xl font-bold">Send a message</h3>
              <p className="mt-1 mb-6 text-sm text-paper/70">
                We reply on WhatsApp and phone during working hours.
              </p>
              <ContactForm preferredService={preferredService} />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-paper/10 bg-ink py-10 text-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="" className="h-10 w-auto" />
            <div>
              <p className="font-display text-sm font-bold">KHALIS TYPING CENTER</p>
              <p className="text-xs text-paper/60">Abu Dhabi, UAE</p>
            </div>
          </div>
          <p className="text-xs text-paper/50">© 2026 Khalis Typing Center. All rights reserved.</p>
        </div>
      </footer>

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-4 z-50 inline-flex min-h-12 items-center gap-2 rounded-full bg-palm px-5 text-sm font-semibold text-paper shadow-lg transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95"
        aria-label="WhatsApp Khalis"
      >
        WhatsApp
      </a>
    </div>
  );
}
