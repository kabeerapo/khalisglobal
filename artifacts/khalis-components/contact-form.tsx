import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { LottiePlayer } from "./lottie-player";

const SERVICES = [
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
];

export function ContactForm({ preferredService = "" }: { preferredService?: string }) {
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
          {SERVICES.map((s) => (
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
