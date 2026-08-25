import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Menu,
  Phone,
  Star,
  X,
} from "lucide-react";
import { LottiePlayer } from "@/components/lottie-player";
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

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const FEATURED = [
  {
    title: "Equivalency Certificate",
    copy: "UAE Ministry of Education equivalency for foreign degrees — attestation through application.",
    src: "/lottie/documents.json",
    tags: ["Data flow", "Golden visa"],
  },
  {
    title: "Will Registration UAE",
    copy: "Personal, property, financial or guardianship wills — registered fast and legally recognised.",
    src: "/lottie/paper.json",
    tags: ["Family protection", "Estate planning"],
  },
  {
    title: "DOH Professional Licensing",
    copy: "Department of Health Abu Dhabi licences for medicine, dentistry, nursing, pharmacy and allied health.",
    src: "/lottie/license.json",
    tags: ["DHA", "Specialists"],
  },
  {
    title: "PRO Services",
    copy: "Visa processing, trade licences, Emirates ID, document clearing — one partner in Abu Dhabi.",
    src: "/lottie/handshake.json",
    tags: ["Visa", "Trade licence"],
  },
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
    n: "01",
    title: "Find your trade name & issue licence",
    copy: "Reserve a unique name and secure the trade licence with guidance at every desk.",
    src: "/lottie/search.json",
  },
  {
    n: "02",
    title: "Complete documentation",
    copy: "Partner agreements, attestations and issuance — handled as one file, not a scavenger hunt.",
    src: "/lottie/paper.json",
  },
  {
    n: "03",
    title: "Marketing & promotions",
    copy: "Launch support so the company is visible the week the licence lands.",
    src: "/lottie/growth.json",
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
            <span className="block text-[10px] font-semibold tracking-[0.18em] text-palm">
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

function ContactForm() {
  const [sent, setSent] = useState(false);

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
          className="min-h-11 w-full rounded-xl border border-paper/15 bg-ink px-4 text-paper outline-none transition-colors duration-200 focus:border-palm"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {[
            "PRO Services",
            "Typing / Documentation",
            "Business Setup",
            "Visa Processing",
            "Certificate Attestation",
            "Equivalency Certificate",
            "DOH Professional Licensing",
            "Will Registration",
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
          className="w-full rounded-xl border border-paper/15 bg-ink px-4 py-3 text-paper outline-none transition-colors duration-200 focus:border-palm"
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
        className="min-h-11 w-full rounded-xl border border-paper/15 bg-ink px-4 text-paper outline-none transition-colors duration-200 focus:border-palm"
      />
    </label>
  );
}

export function Landing() {
  return (
    <div className="min-h-screen bg-paper">
      <Nav />

      <section
        id="home"
        className="relative overflow-hidden bg-ink pt-24 text-paper sm:pt-28"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-palm" />
        <div className="pointer-events-none absolute right-0 top-24 h-40 w-40 bg-crimson/20 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:pb-24">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-paper/15 px-3 py-1 text-xs font-medium text-paper/80">
              <Star className="size-3.5 fill-palm text-palm" />
              Abu Dhabi · 4.9★ · 858+ Google reviews
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Documents, licences and PRO —
              <span className="text-palm"> handled as one file.</span>
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
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-paper/20 px-7 text-sm font-semibold text-paper transition-colors duration-200 hover:border-paper/50"
              >
                Browse services
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-paper/10 bg-ink">
              <LottiePlayer
                src="/lottie/typing.json"
                className="mx-auto h-72 w-full sm:h-96"
                label="Typing and documentation animation"
              />
            </div>
            <div className="absolute -bottom-4 left-4 hidden max-w-[11rem] rounded-xl border border-paper/10 bg-ink/90 p-3 shadow-xl sm:block">
              <LottiePlayer src="/lottie/documents.json" className="h-16 w-16" />
              <p className="mt-1 text-xs font-semibold">Same-day typing</p>
            </div>
            <div className="absolute -right-2 top-8 hidden max-w-[11rem] rounded-xl border border-paper/10 bg-ink/90 p-3 shadow-xl sm:block">
              <LottiePlayer src="/lottie/handshake.json" className="h-16 w-16" />
              <p className="mt-1 text-xs font-semibold">PRO on call</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold tracking-widest text-palm uppercase">
            What we offer
          </p>
          <h2 className="mt-2 max-w-xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Paperwork that actually moves.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            Featured government and professional files — plus a full typing-centre
            desk for everything else.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-ink/10 bg-paper p-5 transition-transform duration-200 hover:-translate-y-1"
              >
                <LottiePlayer src={item.src} className="h-36 w-full" />
                <h3 className="mt-3 font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.copy}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-ink/5 px-2.5 py-1 text-xs font-medium text-ink"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-ink px-6 py-10 text-paper sm:px-10">
            <h3 className="text-center font-display text-2xl font-bold">Reach us for</h3>
            <p className="mx-auto mt-2 max-w-xl text-center text-sm text-paper/70">
              Step-by-step assistance to set up and run in any emirate.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICE_COLS.map((col, i) => (
                <ul key={i} className="space-y-2.5">
                  {col.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-palm" />
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

      <section id="process" className="bg-palm py-20 text-paper sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold tracking-widest text-paper/80 uppercase">
            Simple process
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Three steps to grow the company
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((step) => (
              <article key={step.n} className="rounded-2xl bg-paper p-6 text-ink">
                <LottiePlayer src={step.src} className="h-40 w-full" />
                <p className="mt-2 text-xs font-bold tracking-widest text-palm">
                  STEP {step.n}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-widest text-palm uppercase">
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
                <div key={l} className="rounded-xl border border-ink/10 p-4">
                  <p className="font-display text-2xl font-bold text-palm">{n}</p>
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
          <p className="text-sm font-semibold tracking-widest text-palm uppercase">
            Client notes
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            4.9★ from 858+ Google reviews
          </h2>
          <a
            href={REVIEW}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-palm"
          >
            Leave a Google review
          </a>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <blockquote
                key={r.name}
                className="rounded-2xl border border-ink/10 bg-paper p-6"
              >
                <div className="mb-3 flex gap-0.5 text-palm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-palm" />
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
                  className="rounded-full border border-ink/10 px-3 py-1.5 text-xs font-medium text-muted"
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
          <p className="text-sm font-semibold tracking-widest text-palm uppercase">
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
                  <MapPin className="mt-0.5 size-5 shrink-0 text-palm" />
                  <div>
                    <p className="font-semibold">Muroor Road, Abu Dhabi</p>
                    <p className="mt-1 text-sm leading-relaxed text-paper/70">
                      Muroor 31 signal — Zafaranah st — Al Sa`Adah — Zone 1
                    </p>
                    <a
                      href={MAPS}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-palm"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-0.5 size-5 shrink-0 text-palm" />
                  <div>
                    <p className="font-semibold">Call / WhatsApp</p>
                    <a href={`tel:${PHONE_TEL}`} className="text-lg font-semibold text-palm">
                      {PHONE}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-0.5 size-5 shrink-0 text-palm" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href={`mailto:${EMAIL}`} className="text-sm text-palm">
                      {EMAIL}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-0.5 size-5 shrink-0 text-palm" />
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
                    className="inline-flex min-h-11 items-center rounded-full border border-paper/20 px-4 text-sm font-medium text-paper transition-colors duration-200 hover:border-palm"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-paper/10 bg-ink p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold">Send a message</h3>
              <p className="mt-1 mb-6 text-sm text-paper/70">
                We reply on WhatsApp and phone during working hours.
              </p>
              <ContactForm />
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
