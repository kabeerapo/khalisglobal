import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  Eye,
  Facebook,
  Factory,
  FileText,
  Film,
  GitBranch,
  Globe,
  GraduationCap,
  Headphones,
  Home,
  IdCard,
  Instagram,
  Landmark,
  Leaf,
  Mail,
  MapPin,
  MapPinned,
  Menu,
  MessageCircle,
  Phone,
  Plane,
  Scale,
  Search,
  Send,
  Share2,
  Shield,
  Star,
  Target,
  Users,
  Warehouse,
  X,
  type LucideIcon,
} from "lucide-react";
import { LottiePlayer } from "@/components/lottie-player";
import { AddedHeroBackdrop } from "@/components/added-hero";
import { DeskMap } from "@/components/desk-map";
import { cn } from "@/lib/utils";
import { scrollToHash, useScrollProgressFallback } from "@/lib/smooth-scroll";

const PHONE = "050 120 1818";
const PHONE_TEL = "+971501201818";
const EMAIL = "info@khalisglobal.com";
const MAPS = "https://share.google/qTWqojAQNH4zmFig8";
const REVIEW = "https://g.page/r/CbjI7vnA12xFEBM/review";
const INSTAGRAM = "https://www.instagram.com/khalisbusiness";
const FACEBOOK = "https://www.facebook.com/share/1QFZj32Wsa/";
const TIKTOK = "https://www.tiktok.com/@khalisbusiness";
const WHATSAPP = `https://wa.me/${PHONE_TEL.replace("+", "")}`;

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const FOOTER_SERVICES = [
  { href: "#services", label: "All services" },
  { href: "#visas", label: "UAE visas" },
  { href: "#abu-dhabi-setup", label: "Abu Dhabi setup" },
  { href: "#dubai-setup", label: "Dubai setup" },
  { href: "#mainland-vs-freezone", label: "Mainland vs Free Zone" },
  { href: "#contact", label: "Start a file" },
];

const FOOTER_DESK = [
  { href: `tel:${PHONE_TEL}`, label: PHONE, external: false },
  { href: WHATSAPP, label: "WhatsApp the desk", external: true },
  { href: `mailto:${EMAIL}`, label: EMAIL, external: false },
  { href: MAPS, label: "Google Maps — Muroor Road", external: true },
  { href: REVIEW, label: "Leave a Google review", external: true },
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M14.2 3h2.3c.2 1.8 1.2 3.4 2.8 4.3 1 .6 2.1.8 3.2.8v2.5c-1.5 0-3-.4-4.3-1.2v7.4c0 3.6-2.9 6.5-6.5 6.5S5.2 20.4 5.2 16.8 8.1 10.3 11.7 10.3c.4 0 .7 0 1.1.1v2.6c-.3-.1-.7-.1-1.1-.1-2.1 0-3.9 1.7-3.9 3.9s1.7 3.9 3.9 3.9 3.9-1.7 3.9-3.9V3Z" />
    </svg>
  );
}

const FOOTER_SOCIAL = [
  { href: INSTAGRAM, label: "Instagram", Icon: Instagram },
  { href: FACEBOOK, label: "Facebook", Icon: Facebook },
  { href: TIKTOK, label: "TikTok", Icon: TikTokIcon },
] as const;

const SERVICE_FILES = [
  {
    id: "pro",
    category: "Government",
    Icon: Landmark,
    title: "PRO Services",
    image: "/services/pro-desk.webp",
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
    image: "/services/typing-desk.webp",
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
    image: "/services/consult.webp",
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
    image: "/services/legal-desk.webp",
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
    image: "/services/visa-skyline.webp",
    alt: "Abu Dhabi skyline at sunset over the water",
    copy: "We manage the residency file end to end: family visas, Golden Visa, visit visas, holding, medical, Emirates ID, and stamping — sequenced so nobody is stuck in-country on an expired status.",
    points: [
      "Employment, investor, and family visas",
      "Birth and marriage certificate attestation",
      "60 / 90-day self-sponsored visit visas",
      "Family Golden Visa and visa holding",
    ],
  },
  {
    id: "eid",
    category: "Identity",
    Icon: IdCard,
    title: "Emirates ID Services",
    image: "/services/eid-passport.webp",
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

const ABOUT_STATS = [
  { n: "1000+", l: "Applications & services assisted", Icon: Users, tone: "bg-palm text-paper" },
  { n: "30+", l: "Government & business services", Icon: Briefcase, tone: "bg-crimson text-paper" },
  { n: "FAST", l: "Processing & same-day options", Icon: Clock, tone: "bg-palm text-paper" },
  { n: "TRUSTED", l: "Professional customer support", Icon: Headphones, tone: "bg-ink text-paper" },
] as const;

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
    href: "#blog",
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
] as const;

const CONTACT_SERVICES = [
  "PRO Services",
  "Typing Services",
  "Expert Business Consultation",
  "Comprehensive Legal Support",
  "Visa & Immigration",
  "Family Visa Services",
  "Golden Visa",
  "Green Visa",
  "Blue Visa",
  "Visit Visa 60/90",
  "Freelance residence",
  "Retirement visa",
  "Student visa",
  "Abu Dhabi mainland setup",
  "Abu Dhabi free zone",
  "ADGM",
  "Dubai mainland setup",
  "Dubai free zone",
  "Emirates ID Services",
  "Equivalency Certificate",
  "DOH Professional Licensing",
  "Will Registration",
  "Digital Marketing",
  "Other",
];

function useDeskOpen() {
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState("Checking hours");
  useEffect(() => {
    const tick = () => {
      const parts = Object.fromEntries(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Dubai",
          weekday: "short",
          hour: "numeric",
          minute: "numeric",
          hourCycle: "h23",
        })
          .formatToParts(new Date())
          .map((p) => [p.type, p.value]),
      );
      const weekday = parts.weekday;
      const minutes = Number(parts.hour) * 60 + Number(parts.minute);
      const between = (start: number, end: number) => minutes >= start && minutes < end;
      let isOpen = false;
      let until = "";
      if (weekday === "Sun") isOpen = false;
      else if (weekday === "Fri") {
        if (between(480, 720)) {
          isOpen = true;
          until = "12 PM";
        } else if (between(900, 1290)) {
          isOpen = true;
          until = "9:30 PM";
        }
      } else if (weekday === "Sat") {
        if (between(480, 1230)) {
          isOpen = true;
          until = "8:30 PM";
        }
      } else if (between(480, 1290)) {
        isOpen = true;
        until = "9:30 PM";
      }
      setOpen(isOpen);
      setLabel(isOpen ? `Open now · until ${until}` : "Closed now · opens next shift");
    };
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);
  return { open, label };
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const progressRef = useRef<HTMLDivElement>(null);
  useScrollProgressFallback(progressRef);

  useEffect(() => {
    const nodes = NAV.map((item) => item.href.slice(1))
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => n instanceof HTMLElement);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    for (const node of nodes) io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const go = (hash: string, instant = false) => {
      if (!scrollToHash(hash, instant)) return;
      history.pushState(null, "", hash);
      setActive(hash);
    };
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href^="#"]');
      if (!(link instanceof HTMLAnchorElement)) return;
      const hash = link.getAttribute("href");
      if (!hash || hash.length < 2) return;
      if (!document.getElementById(hash.slice(1))) return;
      event.preventDefault();
      setOpen(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => go(hash));
      });
    };
    document.addEventListener("click", onClick);
    if (window.location.hash) requestAnimationFrame(() => go(window.location.hash, true));
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur-md">
      <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/logo.webp"
            alt="Khalis Typing Center"
            width={515}
            height={515}
            className="h-11 w-11 object-contain sm:h-12 sm:w-12"
            fetchPriority="high"
            decoding="async"
          />
          <span className="hidden h-8 w-px bg-ink/20 sm:block" aria-hidden="true" />
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold tracking-wide text-ink">KHALIS</span>
            <span className="block text-[10px] font-semibold tracking-[0.18em] text-palm">
              TYPING CENTER
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "location" : undefined}
              className={cn(
                "text-sm font-medium transition-colors duration-200",
                active === item.href ? "text-palm" : "text-ink/70 hover:text-ink",
              )}
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
            className="inline-flex size-11 items-center justify-center rounded-full text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-ink/10 bg-paper px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={active === item.href ? "location" : undefined}
                className={cn(
                  "flex min-h-11 items-center text-sm font-medium",
                  active === item.href ? "text-palm" : "text-ink",
                )}
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
  const [waUrl, setWaUrl] = useState(WHATSAPP);
  useEffect(() => {
    if (preferredService) setService(preferredService);
  }, [preferredService]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Hello Khalis — ${data.get("service") || "enquiry"}`,
      `Name: ${data.get("name") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      data.get("email") ? `Email: ${data.get("email")}` : "",
      data.get("message") ? String(data.get("message")) : "",
    ].filter(Boolean);
    const url = `${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`;
    setWaUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center py-4 text-center">
        <LottiePlayer src="/lottie/success.json" className="h-28 w-28" label="Request sent" />
        <p className="mt-2 font-display text-xl text-paper">WhatsApp is ready.</p>
        <p className="mt-1 max-w-sm text-sm text-paper/70">
          Your file details are in the chat. If nothing opened, tap below.
        </p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-palm px-7 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95"
        >
          Open WhatsApp
          <ArrowRight className="size-4" />
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" autoComplete="name" required placeholder="Your name" />
        <Field
          label="Phone / WhatsApp"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          placeholder="05X XXX XXXX"
        />
      </div>
      <Field label="Email" name="email" type="email" autoComplete="email" placeholder="Optional" />
      <label className="block">
        <span className="mb-1.5 block text-sm text-paper/70">Service needed</span>
        <select
          name="service"
          value={service}
          required
          onChange={(e) => setService(e.target.value)}
          className="min-h-11 w-full rounded-xl border border-paper/15 bg-ink px-4 text-paper outline-none transition-colors duration-200 focus:border-gold"
        >
          <option value="" disabled>
            Select a service
          </option>
          {CONTACT_SERVICES.map((s) => (
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
          placeholder="What needs typing, stamping, or filing?"
        />
      </label>
      <button
        type="submit"
        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-palm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95"
      >
        <MessageCircle className="size-4" />
        Send on WhatsApp
      </button>
      <p className="text-center text-xs text-paper/55">
        Opens WhatsApp to {PHONE}. We reply during working hours.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm text-paper/70">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={type === "tel" ? "tel" : undefined}
        placeholder={placeholder}
        className="min-h-11 w-full rounded-xl border border-paper/15 bg-ink px-4 text-paper outline-none transition-colors duration-200 focus:border-gold"
      />
    </label>
  );
}

const VISA_GROUPS = [
  { id: "all", label: "All categories" },
  { id: "long", label: "Long-term" },
  { id: "work", label: "Work" },
  { id: "family", label: "Family" },
  { id: "visit", label: "Visit" },
] as const;

const VISA_TYPES = [
  {
    id: "golden",
    group: "long",
    name: "Golden Visa",
    term: "5 or 10 years",
    sponsor: "Self — no employer kafeel",
    bestFor: "Investors, talent, property owners, and families planning long-term residency",
    khalis: "Golden Visa category check, supporting documents, ICA typing",
    Icon: Star,
  },
  {
    id: "green",
    group: "long",
    name: "Green Visa",
    term: "5 years",
    sponsor: "Self-sponsored",
    bestFor: "Skilled workers, freelancers, and the self-employed who qualify on their own",
    khalis: "Green Visa application, MOHRE skill-level pack, status follow-up",
    Icon: Shield,
  },
  {
    id: "blue",
    group: "long",
    name: "Blue Visa",
    term: "Up to 10 years",
    sponsor: "Self — nomination track",
    bestFor: "People working on environment, climate, and sustainability programmes",
    khalis: "Blue Visa nomination pack and ICA typing",
    Icon: Leaf,
  },
  {
    id: "retire",
    group: "long",
    name: "Retirement residence",
    term: "Typically 5 years",
    sponsor: "Self — age and income rules",
    bestFor: "Residents 55+ who want to stay after work ends",
    khalis: "Retirement visa pack, income or property proofs, ICA file",
    Icon: Home,
  },
  {
    id: "employment",
    group: "work",
    name: "Employment residence",
    term: "Typically 2 years",
    sponsor: "UAE employer",
    bestFor: "Staff on a company licence who need a work residence",
    khalis: "Entry permit, medical, Emirates ID, stamping sequence",
    Icon: Briefcase,
  },
  {
    id: "investor",
    group: "work",
    name: "Investor / partner",
    term: "Tied to the licence",
    sponsor: "Your UAE company",
    bestFor: "Shareholders who need residence on the trade licence",
    khalis: "Partner visa, establishment card, ICA file",
    Icon: Landmark,
  },
  {
    id: "freelance",
    group: "work",
    name: "Freelance residence",
    term: "Typically 1–2 years",
    sponsor: "Free zone or Green Visa path",
    bestFor: "Independent professionals who invoice clients in the UAE",
    khalis: "Freelance permit pack and residence typing",
    Icon: FileText,
  },
  {
    id: "family",
    group: "family",
    name: "Family residence",
    term: "Matches the sponsor",
    sponsor: "Resident spouse or parent",
    bestFor: "Bringing a spouse, children, or parents to live with you",
    khalis: "Dependent visas, birth and marriage attestation",
    Icon: Users,
  },
  {
    id: "holding",
    group: "family",
    name: "Visa holding",
    term: "While you travel",
    sponsor: "Your existing residence",
    bestFor: "Protecting family residency status when you leave the UAE",
    khalis: "Holding application so the file stays valid while you are away",
    Icon: Clock,
  },
  {
    id: "visit",
    group: "visit",
    name: "Visit visa 60 / 90",
    term: "60 or 90 days",
    sponsor: "Self-sponsored visit",
    bestFor: "Loved ones visiting the UAE without taking residency",
    khalis: "Self-sponsored 60 or 90-day visit visa typing",
    Icon: Plane,
  },
  {
    id: "explore",
    group: "visit",
    name: "Job exploration visit",
    term: "Typically 60–90 days",
    sponsor: "Self-sponsored visit",
    bestFor: "Looking for work in the UAE before an employer files residence",
    khalis: "Job-seeker / exploration visit typing",
    Icon: Search,
  },
  {
    id: "student",
    group: "visit",
    name: "Student residence",
    term: "Matches the programme",
    sponsor: "UAE school or university",
    bestFor: "Children and adults enrolled in a licensed UAE institution",
    khalis: "Student visa file, ICA typing, Emirates ID",
    Icon: GraduationCap,
  },
] as const;

function VisaCompareSection() {
  const [group, setGroup] = useState<(typeof VISA_GROUPS)[number]["id"]>("all");
  const visas = VISA_TYPES.filter((visa) => group === "all" || visa.group === group);

  return (
    <div id="visas" className="scroll-mt-24">
      <p className="text-sm font-semibold tracking-widest text-palm uppercase">UAE visas</p>
      <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Explore UAE visa categories
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        Khalis types and files the application. ICA and MOHRE decide. Use this as a first cut, then
        send the case on WhatsApp.
      </p>
      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Visa categories">
        {VISA_GROUPS.map((item) => {
          const on = item.id === group;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setGroup(item.id)}
              className={cn(
                "inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold transition-colors duration-200",
                on
                  ? "bg-palm text-paper"
                  : "border border-ink/15 bg-paper text-ink hover:border-palm/40",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="mt-8 grid gap-4 reveal-stagger sm:grid-cols-2 lg:grid-cols-3">
        {visas.map((visa) => (
          <article
            key={visa.id}
            className="flex flex-col rounded-2xl border border-ink/10 bg-paper p-6"
          >
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-palm">
              <visa.Icon className="size-4" aria-hidden="true" />
              {visa.term}
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">{visa.name}</h3>
            <dl className="mt-4 flex-1 space-y-3 text-sm leading-relaxed">
              <div>
                <dt className="font-semibold text-ink">Sponsor</dt>
                <dd className="text-muted">{visa.sponsor}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Best for</dt>
                <dd className="text-muted">{visa.bestFor}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">What we file</dt>
                <dd className="text-muted">{visa.khalis}</dd>
              </div>
            </dl>
            <a
              href={`${WHATSAPP}?text=${encodeURIComponent(`Hello Khalis — I need ${visa.name} service.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-palm hover:underline"
            >
              Ask about this visa
              <ArrowRight className="size-4" />
            </a>
          </article>
        ))}
      </div>
      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
        Rules and salary thresholds change. Golden and Blue are typically long-term (5–10 years);
        Green is typically 5 years and self-sponsored; work residence is usually 2 years on an
        employer; family residence follows the sponsor; visit visas are 30, 60, or 90 days. ICA still
        decides — we type a complete file.
      </p>
    </div>
  );
}

const SETUP_GROUPS = [
  { id: "all", label: "All tracks" },
  { id: "mainland", label: "Mainland" },
  { id: "freezone", label: "Free zone" },
  { id: "special", label: "Specialist" },
] as const;

type SetupTrack = {
  id: string;
  group: (typeof SETUP_GROUPS)[number]["id"];
  name: string;
  term: string;
  ownership: string;
  bestFor: string;
  khalis: string;
  Icon: LucideIcon;
};

const ABU_DHABI_SETUP: readonly SetupTrack[] = [
  {
    id: "added",
    group: "mainland",
    name: "ADDED mainland",
    term: "Abu Dhabi trade licence",
    ownership: "100% foreign for most activities",
    bestFor: "Selling to UAE customers, government work, and an office in Abu Dhabi",
    khalis: "Name reservation, activity list, MOA typing, ADDED / TAMM licence pack",
    Icon: Building2,
  },
  {
    id: "kezad",
    group: "freezone",
    name: "KEZAD",
    term: "Industrial / logistics zone",
    ownership: "100% foreign",
    bestFor: "Manufacturing, warehousing, and logistics at Khalifa Port",
    khalis: "KEZAD application pack, establishment card, visa file after the licence",
    Icon: Factory,
  },
  {
    id: "twofour54",
    group: "freezone",
    name: "twofour54",
    term: "Media free zone",
    ownership: "100% foreign",
    bestFor: "Content, production, and media companies on Yas Island",
    khalis: "twofour54 application pack and the visa file that follows",
    Icon: Film,
  },
  {
    id: "masdar",
    group: "freezone",
    name: "Masdar City",
    term: "Clean-tech free zone",
    ownership: "100% foreign",
    bestFor: "Sustainability, energy, and research companies",
    khalis: "Masdar licence pack and supporting documents",
    Icon: Leaf,
  },
  {
    id: "adgm",
    group: "special",
    name: "ADGM",
    term: "Financial centre",
    ownership: "100% foreign",
    bestFor: "Finance, fintech, funds, and family offices under common-law courts",
    khalis: "Document pack and introductions — FSRA licensing is not typed at our desk",
    Icon: Landmark,
  },
  {
    id: "other-ad-fz",
    group: "freezone",
    name: "Other Abu Dhabi free zones",
    term: "ADAFZ, ICAD, and others",
    ownership: "100% foreign",
    bestFor: "Airport logistics, industrial plots, and sector-specific clusters",
    khalis: "Compare zones, type the application, visa file after the licence",
    Icon: Globe,
  },
];

const DUBAI_SETUP: readonly SetupTrack[] = [
  {
    id: "dxb-mainland",
    group: "mainland",
    name: "Dubai mainland",
    term: "DET / DED trade licence",
    ownership: "100% foreign for most activities",
    bestFor: "Selling to UAE customers, hiring on the mainland, and opening a Dubai office or warehouse",
    khalis: "Name reservation, activity list, MOA typing, DET licence pack",
    Icon: Building2,
  },
  {
    id: "branch",
    group: "mainland",
    name: "Mainland branch / dual licence",
    term: "Mainland access",
    ownership: "Tied to the existing company",
    bestFor: "Free zone companies that need to invoice UAE mainland clients",
    khalis: "Branch or dual-licence pack with DET, establishment card",
    Icon: GitBranch,
  },
  {
    id: "dmcc",
    group: "freezone",
    name: "DMCC",
    term: "Free zone licence",
    ownership: "100% foreign",
    bestFor: "Trading, commodities, and services from JLT with a flexi desk or office",
    khalis: "DMCC application pack, visa quota briefing, establishment card",
    Icon: Warehouse,
  },
  {
    id: "other-fz",
    group: "freezone",
    name: "Other Dubai free zones",
    term: "Flexi desk or office",
    ownership: "100% foreign",
    bestFor: "Consulting, e-commerce, and holding with a simpler first-year setup",
    khalis: "Compare zones, type the application, visa file after the licence",
    Icon: Globe,
  },
  {
    id: "difc",
    group: "special",
    name: "DIFC",
    term: "Financial centre",
    ownership: "100% foreign",
    bestFor: "Regulated finance, funds, and firms that need common-law courts",
    khalis: "Document pack and introductions — DFSA licensing is not typed at our desk",
    Icon: Landmark,
  },
  {
    id: "freelance",
    group: "special",
    name: "Dubai freelance permit",
    term: "Permit, not a company",
    ownership: "Self — no shareholders",
    bestFor: "Independent professionals who invoice without a trade licence",
    khalis: "Freelance permit typing and the residence path that follows",
    Icon: FileText,
  },
];

const COMPARE_ROWS = [
  {
    label: "Who issues the licence",
    mainland: "ADDED in Abu Dhabi, DET in Dubai",
    freezone: "The zone authority (ADGM, KEZAD, DMCC, …)",
  },
  {
    label: "Ownership",
    mainland: "100% foreign for most activities",
    freezone: "100% foreign",
  },
  {
    label: "UAE customers",
    mainland: "Invoice the local market directly",
    freezone: "Usually a distributor, branch, or dual licence",
  },
  {
    label: "Office",
    mainland: "Office or warehouse on the mainland",
    freezone: "Flexi desk or premises inside the zone",
  },
  {
    label: "Visas",
    mainland: "Tied to space and activity",
    freezone: "Often limited on a flexi desk",
  },
  {
    label: "First year",
    mainland: "Typically higher (office + authority fees)",
    freezone: "Typically lower with a flexi desk",
  },
  {
    label: "Best if",
    mainland: "Your clients are in the UAE",
    freezone: "Export, holding, or a sector cluster",
  },
] as const;

function SetupTracksSection({
  sectionId,
  eyebrow,
  title,
  intro,
  disclaimer,
  tracks,
  tabLabel,
}: {
  sectionId: string;
  eyebrow: string;
  title: string;
  intro: string;
  disclaimer: string;
  tracks: readonly SetupTrack[];
  tabLabel: string;
}) {
  const [group, setGroup] = useState<(typeof SETUP_GROUPS)[number]["id"]>("all");
  const visible = tracks.filter((item) => group === "all" || item.group === group);

  return (
    <div id={sectionId} className="scroll-mt-24">
      <p className="text-sm font-semibold tracking-widest text-palm uppercase">{eyebrow}</p>
      <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{intro}</p>
      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label={tabLabel}>
        {SETUP_GROUPS.map((item) => {
          const on = item.id === group;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setGroup(item.id)}
              className={cn(
                "inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold transition-colors duration-200",
                on
                  ? "bg-palm text-paper"
                  : "border border-ink/15 bg-paper text-ink hover:border-palm/40",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="mt-8 grid gap-4 reveal-stagger sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <article
            key={item.id}
            className="flex flex-col rounded-2xl border border-ink/10 bg-paper p-6"
          >
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-palm">
              <item.Icon className="size-4" aria-hidden="true" />
              {item.term}
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">{item.name}</h3>
            <dl className="mt-4 flex-1 space-y-3 text-sm leading-relaxed">
              <div>
                <dt className="font-semibold text-ink">Ownership</dt>
                <dd className="text-muted">{item.ownership}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Best for</dt>
                <dd className="text-muted">{item.bestFor}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">What we file</dt>
                <dd className="text-muted">{item.khalis}</dd>
              </div>
            </dl>
            <a
              href={`${WHATSAPP}?text=${encodeURIComponent(`Hello Khalis — I need ${item.name} service.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-palm hover:underline"
            >
              Ask about this track
              <ArrowRight className="size-4" />
            </a>
          </article>
        ))}
      </div>
      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">{disclaimer}</p>
    </div>
  );
}

function MainlandFreezoneCompare() {
  return (
    <div id="mainland-vs-freezone" className="scroll-mt-24">
      <p className="text-sm font-semibold tracking-widest text-palm uppercase">Compare</p>
      <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Mainland vs free zone
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        Same ownership story for most activities. The real split is who you sell to, where you sit,
        and which authority stamps the licence.
      </p>
      <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/10 bg-paper">
        <table className="w-full min-w-[40rem] text-left text-sm">
          <caption className="sr-only">Mainland versus free zone business setup</caption>
          <thead>
            <tr className="border-b border-ink/10 bg-mist">
              <th scope="col" className="px-5 py-4 font-semibold text-ink">
                Point
              </th>
              <th scope="col" className="px-5 py-4 font-semibold text-ink">
                Mainland
              </th>
              <th scope="col" className="px-5 py-4 font-semibold text-ink">
                Free zone
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARE_ROWS.map((row) => (
              <tr key={row.label} className="border-b border-ink/10 last:border-0">
                <th scope="row" className="px-5 py-4 align-top font-semibold text-ink">
                  {row.label}
                </th>
                <td className="px-5 py-4 align-top text-muted">{row.mainland}</td>
                <td className="px-5 py-4 align-top text-muted">{row.freezone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={`${WHATSAPP}?text=${encodeURIComponent("Hello Khalis — I need mainland company setup.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-palm px-5 text-sm font-semibold text-paper"
        >
          Ask about mainland
          <ArrowRight className="size-4" />
        </a>
        <a
          href={`${WHATSAPP}?text=${encodeURIComponent("Hello Khalis — I need free zone company setup.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/15 bg-paper px-5 text-sm font-semibold text-ink"
        >
          Ask about free zone
          <ArrowRight className="size-4" />
        </a>
      </div>
      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
        Rules change by emirate and by zone. Khalis types the file. ADDED, DET, ADGM, DMCC and the
        other authorities issue the licence.
      </p>
    </div>
  );
}

const POSTS = [
  {
    slug: "family-visa",
    title: "Bring your family to the UAE without the paperwork stress",
    date: "26 August 2026",
    excerpt:
      "Attestation, new files, renewals, visit visas, Golden Visa, and holding — what Khalis types, and what you still need from ICA.",
    body: [
      "Looking to bring your family to the UAE or renew their visas without the runaround? Khalis types the full family file: birth and marriage certificate attestation, new applications, renewals, outside entry permits, 60- and 90-day self-sponsored visit visas, Family Golden Visa, and visa holding while you travel.",
      "We sequence medical, Emirates ID, and stamping so nobody is stuck in-country on an expired status. ICA still decides — our job is a complete, correct file the first time.",
      "Walk in on Muroor Road or send the passport copies on WhatsApp. We confirm the document list the same day when the desk is open.",
    ],
  },
  {
    slug: "gov-portals",
    title: "TAMM, ICA, MOHRE, ADJD and DED — which portal for which file",
    date: "20 August 2026",
    excerpt: "Abu Dhabi government work is split across five systems. Here is how Khalis maps a typing job to the right desk.",
    body: [
      "TAMM is Abu Dhabi’s service front door. ICA holds identity and residency. MOHRE covers labour contracts and work permits. ADJD handles notary and courts. DED (ADDED) issues and renews trade licences.",
      "Clients should not have to learn five logins. Khalis keeps UAE PASS, establishment cards, and the supporting PDFs in one file and submits on the portal that actually owns the transaction.",
      "If you are unsure whether a licence change is DED or a visa is ICA, send the trade licence and passport. We tell you the track before we type.",
    ],
  },
  {
    slug: "emirates-id",
    title: "Emirates ID: new, renew, replace",
    date: "12 August 2026",
    excerpt:
      "The card is the key to banking, TAMM, and residency. A mistyped name costs a week. This is how we file ICA applications from the Muroor desk.",
    body: [
      "New, renewal, replacement, and data amendment all go through ICA. Khalis types the application, books the biometrics path, and follows status so you are not refreshing a portal for days.",
      "Bring the passport, visa page, and the old card if you have it. Lost-card files need a police report or the replacement path ICA currently asks for — we confirm that before you leave the desk.",
      "Same-day typing is standard on complete files. Collection timing is ICA’s, not ours; we tell you the realistic window up front.",
    ],
  },
  {
    slug: "whatsapp-desk",
    title: "Why every Khalis file starts on WhatsApp",
    date: "8 August 2026",
    excerpt:
      "One number, saved replies, and a label for every stage. How we run 050 120 1818 as the inbox — and how we set the same funnel up for clients.",
    body: [
      "Google, Instagram, TikTok, Facebook, and this website all open the same WhatsApp thread. There is no second inbox and no “please email instead.”",
      "The first reply is a greeting plus hours, then a choice: Emirates ID, PRO, visa, licence, or typing. After that we send the document list as a saved reply. Labels mark New, Docs pending, Submitted, and Ready to collect.",
      "Sunday is closed. Friday is a split shift. The auto-reply says so, and asks for the document photo so Monday morning starts with a file, not a question. When the ID is collected, we send the Google review link — that is how 4.9★ stays 4.9★.",
    ],
  },
] as const;

function BlogSection() {
  const [open, setOpen] = useState<string>(POSTS[0].slug);
  const post = POSTS.find((p) => p.slug === open) ?? POSTS[0];
  return (
    <section id="blog" className="scroll-mt-24 bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold tracking-widest text-palm uppercase">Blog</p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Notes from the Muroor desk.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          Short, practical pieces on visas, government portals, Emirates ID, and how we run the file
          — written for clients, not for a ministry.
        </p>
        <div className="mt-12 grid gap-4 reveal-stagger sm:grid-cols-2">
          {POSTS.map((item) => {
            const active = item.slug === post.slug;
            return (
              <button
                key={item.slug}
                type="button"
                onClick={() => setOpen(item.slug)}
                className={cn(
                  "rounded-2xl border p-5 text-left transition-colors duration-200",
                  active
                    ? "border-palm bg-gold-pale/40"
                    : "border-ink/10 bg-mist hover:border-palm/40",
                )}
              >
                <p className="text-xs font-semibold tracking-wide text-palm uppercase">{item.date}</p>
                <h3 className="mt-2 font-display text-lg font-bold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.excerpt}</p>
              </button>
            );
          })}
        </div>
        <article className="mt-10 rounded-2xl border border-ink/10 bg-mist p-6 sm:p-10">
          <p className="text-xs font-semibold tracking-wide text-palm uppercase">{post.date}</p>
          <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            {post.title}
          </h3>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink">
            {post.body.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          <a
            href={`${WHATSAPP}?text=${encodeURIComponent(`Hello Khalis — I read “${post.title}” and need help.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-palm px-7 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95"
          >
            Ask this on WhatsApp
            <ArrowRight className="size-4" />
          </a>
        </article>
      </div>
    </section>
  );
}

function ContactSection({ preferredService }: { preferredService: string }) {
  const desk = useDeskOpen();
  return (
    <section id="contact" className="scroll-mt-24 bg-ink py-20 text-paper sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold tracking-widest text-gold uppercase">Get in touch</p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Walk in, call, or send the file.
        </h2>
        <p
          className={cn(
            "mt-4 inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold",
            desk.open ? "bg-palm/20 text-gold-soft" : "bg-crimson/15 text-crimson",
          )}
        >
          {desk.label}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-palm px-7 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95"
          >
            <MessageCircle className="size-4" />
            WhatsApp {PHONE}
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-paper/25 px-7 text-sm font-semibold text-paper transition-colors duration-200 hover:bg-paper/10"
          >
            <Phone className="size-4" />
            Call the desk
          </a>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <article className="rounded-2xl border border-gold/25 p-5">
              <div className="flex gap-3">
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
              </div>
            </article>
            <article className="rounded-2xl border border-gold/25 p-5">
              <div className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-gold" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-1 inline-flex min-h-11 items-center text-sm font-semibold text-gold"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
            </article>
            <article className="rounded-2xl border border-gold/25 p-5">
              <div className="flex gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-gold" />
                <div className="w-full">
                  <p className="mb-3 font-semibold">Working hours</p>
                  <dl className="space-y-2 text-sm">
                    {HOURS.map(([d, h]) => (
                      <div key={d} className="flex justify-between gap-4">
                        <dt className="text-paper/70">{d}</dt>
                        <dd className={cn(h === "Closed" && "text-crimson")}>{h}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </article>
            <div className="flex flex-wrap gap-3">
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
          <div className="gold-ring gold-bevel rounded-2xl border border-gold/25 bg-ink p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold">Start a file</h3>
            <p className="mt-1 mb-6 text-sm text-paper/70">
              Tell us the service. We reply on WhatsApp during working hours.
            </p>
            <ContactForm preferredService={preferredService} />
          </div>
        </div>
        <div className="mt-10">
          <DeskMap mapsHref={MAPS} whatsapp={WHATSAPP} />
        </div>
      </div>
    </section>
  );
}

export function Landing() {
  const [preferredService, setPreferredService] = useState("");

  return (
    <div className="min-h-screen bg-mist">
      <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true">
        <filter id="khalis-foil" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="4" seed="7" result="noise" />
          <feSpecularLighting
            in="noise"
            surfaceScale="2.4"
            specularConstant="1.1"
            specularExponent="18"
            lightingColor="#00e5d1"
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
        className="relative isolate min-h-[34rem] scroll-mt-24 overflow-hidden bg-ink text-paper sm:min-h-[42rem]"
      >
        <AddedHeroBackdrop />
        <div className="relative z-10 mx-auto flex min-h-[34rem] max-w-6xl items-end px-4 pb-16 pt-28 sm:min-h-[42rem] sm:px-6 sm:pb-20">
          <div className="hero-enter max-w-xl drop-shadow-lg">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-paper/20 bg-ink/40 px-3 py-1 text-xs font-medium text-paper backdrop-blur-sm">
              <Star className="size-3.5 fill-palm-bright text-palm-bright" />
              Abu Dhabi · 4.9★ · 858+ Google reviews
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Documents, licences and PRO —
              <span className="text-palm-bright"> handled as one file.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-paper/80 sm:text-lg">
              Khalis Typing Center is your business desk on Muroor Road. Typing, attestation, visas,
              trade licences and professional licensing — without the runaround.
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
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-paper/30 bg-ink/30 px-7 text-sm font-semibold text-paper backdrop-blur-sm transition-colors duration-200 hover:bg-paper/10"
              >
                Browse services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative scroll-mt-24 overflow-hidden bg-paper py-20 sm:py-24">
        <div className="about-world pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="about-skyline pointer-events-none absolute inset-x-0 bottom-0 h-40" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8">
            <div className="reveal">
              <p className="text-sm font-semibold tracking-[0.22em] text-palm uppercase">About us</p>
              <span className="mt-2 block h-0.5 w-10 bg-palm" aria-hidden="true" />
              <h2 className="mt-4 max-w-xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
                Your trusted business partner in the{" "}
                <span className="text-palm">UAE</span>
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
                Khalis Typing & Business Services is a professional service centre in Abu Dhabi
                providing reliable support for all your government, visa, PRO and business
                requirements.
              </p>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">
                We simplify complex processes with accuracy, transparency and efficiency, helping
                individuals and businesses save time and focus on what matters most.
              </p>
            </div>

            <figure className="about-flag-ring relative mx-auto w-full max-w-md p-3 lg:max-w-lg">
              <svg
                className="about-flag-svg pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <circle
                  className="about-flag-green"
                  cx="50"
                  cy="50"
                  r="47.8"
                  pathLength="100"
                  transform="rotate(118 50 50)"
                />
                <circle
                  className="about-flag-red"
                  cx="50"
                  cy="50"
                  r="47.8"
                  pathLength="100"
                  transform="rotate(196 50 50)"
                />
              </svg>
              <div className="about-mask-well shadow-2xl">
                <img
                  src="/about-desk.webp"
                  alt="Advisors at the Khalis Typing Center office on Muroor Road, Abu Dhabi"
                  width={1200}
                  height={1200}
                  className="about-photo aspect-square w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <span className="about-mask-shade" aria-hidden="true" />
              </div>
            </figure>
          </div>

          <div className="mt-16">
            <div className="reveal-stagger grid grid-cols-2 gap-5 sm:grid-cols-4">
              {ABOUT_STATS.map((item) => (
                <article
                  key={item.n}
                  className="relative rounded-2xl border border-ink/10 bg-paper px-3 pb-5 pt-9 text-center shadow-sm"
                >
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span
                      className={cn(
                        "about-stat-icon inline-flex size-10 items-center justify-center rounded-full shadow-md",
                        item.tone,
                      )}
                      aria-hidden="true"
                    >
                      <item.Icon className="size-4" strokeWidth={2} />
                    </span>
                  </span>
                  <p
                    className={cn(
                      "font-display text-2xl font-extrabold tracking-tight",
                      item.n === "30+" ? "text-crimson" : item.n === "TRUSTED" ? "text-ink" : "text-palm",
                    )}
                  >
                    {item.n}
                  </p>
                  <p className="mt-1 text-[11px] leading-snug text-muted sm:text-xs">{item.l}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <p className="inline-flex items-center gap-3 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper">
              <span className="inline-flex h-4 w-6 overflow-hidden rounded-[2px]" aria-hidden="true">
                <span className="h-full w-1/3 bg-[#00732f]" />
                <span className="h-full w-1/3 bg-paper" />
                <span className="h-full w-1/3 bg-[#e51717]" />
              </span>
              One desk. Multiple services. Reliable solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-ink/10 bg-mist/80 p-6 sm:p-8 backdrop-blur-sm">
              <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-palm uppercase">
                <Target className="size-4" aria-hidden="true" />
                Our Mission
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink">
                To make UAE government and business services easier, faster, and more accessible
                through professional support and reliable service.
              </p>
            </article>
            <article className="rounded-2xl border border-ink/10 bg-mist/80 p-6 sm:p-8 backdrop-blur-sm">
              <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-palm uppercase">
                <Eye className="size-4" aria-hidden="true" />
                Our Vision
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink">
                To become one of Abu Dhabi’s most trusted service centres for government
                transactions, business setup, documentation, and corporate support.
              </p>
            </article>
          </div>
        </div>

        <div className="relative mx-auto mt-20 max-w-6xl overflow-hidden rounded-3xl bg-palm px-4 py-14 text-paper sm:px-10">
          <div className="pointer-events-none absolute inset-0 tex-leaves" aria-hidden="true" />
          <div className="relative">
            <h3 className="text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Three simple steps
            </h3>
            <div className="mt-10 grid gap-5 reveal-stagger md:grid-cols-3">
              {STEPS.map((step) => (
                <article
                  key={step.n}
                  className="flex flex-col rounded-2xl bg-paper p-6 text-ink shadow-lg"
                >
                  <span className="inline-flex size-14 items-center justify-center rounded-full border-2 border-palm text-palm">
                    <step.Icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <h4 className="mt-6 font-display text-xl font-bold tracking-tight">{step.title}</h4>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{step.copy}</p>
                  <span className="mt-8 inline-flex w-fit rounded-full bg-palm px-4 py-1.5 text-sm font-semibold text-paper">
                    {step.n}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold tracking-widest text-palm uppercase">Client notes</p>
          <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            4.9★ from 858+ Google reviews
          </h3>
          <a
            href={REVIEW}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-palm"
          >
            Leave a Google review
          </a>
          <div className="mt-10 grid gap-5 reveal-stagger md:grid-cols-3">
            {REVIEWS.map((r) => (
              <blockquote key={r.name} className="rounded-2xl border border-gold/20 bg-mist p-6">
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
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-mist py-20 sm:py-24">
        <div className="reveal mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold tracking-widest text-palm uppercase">Services</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Your trusted business partner in UAE.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            We build your ideal business solution with passion for lasting success.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
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

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 px-4 sm:mt-20 sm:grid-cols-2 sm:gap-8 sm:px-6">
          {SERVICE_FILES.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="reveal scroll-mt-24 flex flex-col rounded-2xl border border-ink/10 bg-paper p-5 sm:p-6"
            >
              <div className="relative overflow-hidden rounded-2xl bg-ink/5">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <span
                  className="absolute bottom-3 left-3 inline-flex size-14 items-center justify-center rounded-full border-2 border-palm bg-paper text-palm shadow-md"
                  aria-hidden="true"
                >
                  <item.Icon className="size-6" strokeWidth={1.75} />
                </span>
              </div>
              <p className="mt-5 text-sm font-semibold tracking-[0.18em] text-palm uppercase">
                {item.category}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">{item.copy}</p>
              <ul className="mt-5 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-palm" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setPreferredService(item.title)}
                className="mt-6 inline-flex min-h-12 items-center gap-2 self-start rounded-full bg-palm px-6 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95"
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

        <div className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
          <VisaCompareSection />
        </div>
        <div className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
          <SetupTracksSection
            sectionId="abu-dhabi-setup"
            eyebrow="Abu Dhabi setup"
            title="Explore Abu Dhabi business setup"
            intro="This is our home desk. We file ADDED mainland, KEZAD, twofour54, Masdar, ADGM packs, and the other Abu Dhabi free zones on TAMM. ADDED and the zone authority issue the licence — we type a complete file."
            disclaimer="Activity lists, office rules, and visa quotas change. Mainland is typically the path if your clients are in the UAE. A free zone is typically the path for export, industry, media, or clean-tech. ADGM and regulated finance sit with FSRA — we prepare papers, we do not issue that licence."
            tracks={ABU_DHABI_SETUP}
            tabLabel="Abu Dhabi setup tracks"
          />
        </div>
        <div className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
          <MainlandFreezoneCompare />
        </div>
        <div className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
          <SetupTracksSection
            sectionId="dubai-setup"
            eyebrow="Dubai setup"
            title="Explore Dubai business setup"
            intro="Khalis is on Muroor Road in Abu Dhabi and files Dubai mainland, free zone, and freelance packs from this desk. DET and the free zone authority issue the licence — we type a complete file."
            disclaimer="Activity lists, office rules, and visa quotas change by zone. Mainland is typically the path if your clients are in the UAE; a free zone is typically the path for export, holding, or a flexi desk. DIFC and regulated finance sit with DFSA — we prepare papers, we do not issue that licence."
            tracks={DUBAI_SETUP}
            tabLabel="Dubai setup tracks"
          />
        </div>
      </section>

      <BlogSection />
      <ContactSection preferredService={preferredService} />

      <footer className="border-t border-paper/10 bg-ink py-14 text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_repeat(3,minmax(0,1fr))]">
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <img
                src="/logo.webp"
                alt="Khalis Typing Center"
                width={515}
                height={515}
                className="h-12 w-12 rounded-xl bg-paper object-contain p-0.5"
                loading="lazy"
                decoding="async"
              />
              <span>
                <span className="block font-display text-sm font-bold tracking-wide">
                  KHALIS TYPING CENTER
                </span>
                <span className="block text-xs text-paper/60">Abu Dhabi, UAE</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/70">
              Your trusted business partner in the UAE. One desk for government, visa, PRO and
              business files.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {FOOTER_SOCIAL.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-paper/20 text-paper/80 transition-colors duration-200 hover:border-gold hover:text-gold"
                >
                  <Icon className="size-4" />
                </a>
              ))}
              <a
                href={REVIEW}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google reviews"
                className="inline-flex size-11 items-center justify-center rounded-full border border-paper/20 text-paper/80 transition-colors duration-200 hover:border-gold hover:text-gold"
              >
                <Star className="size-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer pages">
            <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Pages</p>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-paper/70 transition-colors duration-200 hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer services">
            <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Services</p>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_SERVICES.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-paper/70 transition-colors duration-200 hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer desk">
            <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Desk</p>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_DESK.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-sm text-paper/70 transition-colors duration-200 hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-paper/10 px-4 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p>© 2026 Khalis Typing Center. All rights reserved.</p>
            <p className="mt-1">Muroor 31 signal — Zafaranah st — Al Sa`Adah — Zone 1</p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <a href="#home" className="hover:text-paper">
              Home
            </a>
            <a href="#about" className="hover:text-paper">
              About
            </a>
            <a href="#services" className="hover:text-paper">
              Services
            </a>
            <a href="#blog" className="hover:text-paper">
              Blog
            </a>
            <a href="#contact" className="hover:text-paper">
              Contact
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-pulse fixed right-4 bottom-4 z-50 inline-flex min-h-12 items-center gap-2 rounded-full bg-palm px-5 text-sm font-semibold text-paper shadow-lg transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95"
        aria-label="WhatsApp Khalis"
      >
        WhatsApp
      </a>
    </div>
  );
}
