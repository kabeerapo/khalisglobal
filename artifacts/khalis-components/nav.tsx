import { useState } from "react";
import { Menu, X } from "lucide-react";

const PHONE = "050 120 1818";
const PHONE_TEL = "+971501201818";

const NAV = [
  { href: "#video", label: "Video" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#marketing", label: "Marketing" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
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
