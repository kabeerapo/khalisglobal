import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Clock, E as ArrowRight, S as FileText, T as Briefcase, _ as Leaf, a as Shield, b as House, c as Search, d as Phone, f as MessageCircle, g as Mail, h as MapPin, i as Star, l as Scale, m as MapPinned, n as Users, o as Share2, p as Menu, s as Send, t as X, u as Plane, v as Landmark, w as CircleCheck, x as GraduationCap, y as IdCard } from "../_libs/lucide-react.mjs";
import { t as Lottie } from "../_libs/lottie-react+lottie-web.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BIIfEBfJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function LottiePlayer({ src, className, loop = true, label }) {
	const [ready, setReady] = (0, import_react.useState)(false);
	const [reduce, setReduce] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReduce(mq.matches);
		setReady(true);
		const onChange = () => setReduce(mq.matches);
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	}, []);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("overflow-hidden bg-ink/5", className),
		"aria-hidden": !label,
		"aria-label": label
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("overflow-hidden", className),
		"aria-hidden": !label,
		"aria-label": label,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lottie, {
			src,
			loop: loop && !reduce,
			autoplay: !reduce,
			className: "h-full w-full [&_svg]:h-full [&_svg]:w-full"
		})
	});
}
function prefersReducedMotion$1() {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function prefersSaveData() {
	const conn = navigator.connection;
	return Boolean(conn?.saveData);
}
function whenIdle(fn, timeout = 600) {
	const ric = window.requestIdleCallback?.bind(window);
	if (ric) {
		const id = ric(fn, { timeout });
		return () => window.cancelIdleCallback?.(id);
	}
	const id = window.setTimeout(fn, 180);
	return () => window.clearTimeout(id);
}
function useLazyVideo(ref, { src, mode, deferUntilIdle = false }) {
	(0, import_react.useEffect)(() => {
		const video = ref.current;
		if (!video) return;
		const reduced = prefersReducedMotion$1();
		const saveData = prefersSaveData();
		let attached = false;
		let visible = false;
		let cancelIdle;
		const playIfAllowed = () => {
			if (!visible || mode !== "autoplay" || reduced || saveData) return;
			if (video.readyState < 2) {
				video.addEventListener("canplay", playIfAllowed, { once: true });
				return;
			}
			video.play().catch(() => {});
		};
		const attach = () => {
			if (attached || video.getAttribute("src") === src) {
				attached = true;
				return;
			}
			attached = true;
			video.src = src;
			video.preload = mode === "autoplay" ? "auto" : "metadata";
			video.load();
		};
		const onEnter = () => {
			visible = true;
			if (mode === "autoplay" && (reduced || saveData)) return;
			const run = () => {
				attach();
				playIfAllowed();
			};
			if (deferUntilIdle && !attached) {
				cancelIdle = whenIdle(run);
				return;
			}
			run();
		};
		const onLeave = () => {
			visible = false;
			if (mode === "autoplay") video.pause();
		};
		const io = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) onEnter();
			else onLeave();
		}, {
			rootMargin: mode === "autoplay" ? "0px" : "280px 0px",
			threshold: mode === "autoplay" ? .25 : .01
		});
		io.observe(video);
		return () => {
			cancelIdle?.();
			video.removeEventListener("canplay", playIfAllowed);
			io.disconnect();
			video.pause();
		};
	}, [
		src,
		mode,
		deferUntilIdle,
		ref
	]);
}
function HeroVideo() {
	const ref = (0, import_react.useRef)(null);
	useLazyVideo(ref, {
		src: "/khalis-hero.mp4",
		mode: "autoplay"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		id: "video",
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-2xl border border-ink/10 bg-mist",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref,
				className: "aspect-[4/3] w-full object-cover lg:aspect-[5/4]",
				poster: "/poster-hero.webp",
				muted: true,
				loop: true,
				playsInline: true,
				preload: "none",
				"aria-label": "Khalis Typing Center office tour — Emirates ID, typing and PRO services"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-3 text-sm text-muted",
			children: "Office tour · Emirates ID · Typing · PRO services"
		})]
	});
}
function AddedHeroBackdrop() {
	const ref = (0, import_react.useRef)(null);
	useLazyVideo(ref, {
		src: "/added-hero.mp4",
		mode: "autoplay",
		deferUntilIdle: true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 overflow-hidden bg-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hero-parallax absolute inset-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/added-hero.webp",
				alt: "",
				width: 1600,
				height: 900,
				fetchPriority: "high",
				decoding: "async",
				className: "absolute inset-0 h-full w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref,
				className: "absolute inset-0 h-full w-full object-cover",
				poster: "/added-hero.webp",
				muted: true,
				loop: true,
				playsInline: true,
				preload: "none",
				"aria-hidden": "true"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink/65 via-ink/30 to-transparent" })]
	});
}
function FamilyVisaVideo() {
	const ref = (0, import_react.useRef)(null);
	useLazyVideo(ref, {
		src: "/khalis-family-visa.mp4",
		mode: "manual"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden rounded-2xl border border-ink/10 bg-mist",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
			ref,
			className: "aspect-[9/16] w-full bg-ink object-cover",
			poster: "/poster-family.webp",
			controls: true,
			playsInline: true,
			preload: "none",
			"aria-label": "Khalis family visa services — bring your family to the UAE"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
		className: "mt-3 text-sm text-muted",
		children: "Family visa · 59 seconds · sound on"
	})] });
}
var DESK = {
	lat: 24.4338,
	lng: 54.4364
};
function DeskMap({ mapsHref, whatsapp }) {
	const el = (0, import_react.useRef)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = el.current;
		if (!node) return;
		let map;
		let cancelled = false;
		const enableWheel = () => map?.scrollWheelZoom.enable();
		const disableWheel = () => map?.scrollWheelZoom.disable();
		import("../_libs/leaflet.mjs").then((n) => /* @__PURE__ */ __toESM(n.t())).then(({ default: L }) => {
			if (cancelled || !el.current) return;
			map = L.map(el.current, {
				center: [DESK.lat, DESK.lng],
				zoom: 16,
				scrollWheelZoom: false,
				attributionControl: true
			});
			L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
				attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> &copy; <a href=\"https://carto.com/\">CARTO</a>",
				subdomains: "abcd",
				maxZoom: 19
			}).addTo(map);
			const pin = L.divIcon({
				className: "desk-pin",
				html: "<span class=\"desk-pin-mark\"></span><span class=\"desk-pin-pulse\"></span>",
				iconSize: [32, 42],
				iconAnchor: [16, 40],
				popupAnchor: [0, -36]
			});
			L.marker([DESK.lat, DESK.lng], { icon: pin }).addTo(map).bindPopup(`<div class="desk-popup">
            <strong>Khalis Typing Center</strong>
            <p>Muroor 31 signal — Zafaranah st — Al Sa&lsquo;Adah</p>
            <a href="${mapsHref}" target="_blank" rel="noopener noreferrer">Directions</a>
            <a href="${whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>`, {
				className: "desk-popup-wrap",
				maxWidth: 240
			}).openPopup();
			node.addEventListener("click", enableWheel);
			node.addEventListener("mouseleave", disableWheel);
			requestAnimationFrame(() => map?.invalidateSize());
			setReady(true);
		});
		return () => {
			cancelled = true;
			node.removeEventListener("click", enableWheel);
			node.removeEventListener("mouseleave", disableWheel);
			map?.remove();
		};
	}, [mapsHref, whatsapp]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-2xl border border-gold/25",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: el,
				className: "h-72 w-full sm:h-96",
				role: "application",
				"aria-label": "Interactive map of Khalis Typing Center on Muroor Road, Abu Dhabi"
			}),
			!ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 grid place-items-center bg-ink text-sm text-paper/60",
				children: "Loading map"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-1 gold-hairline" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: mapsHref,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "absolute right-3 bottom-3 z-[400] inline-flex min-h-11 items-center rounded-full bg-palm px-4 text-sm font-semibold text-paper shadow-lg transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95",
				children: "Get directions"
			})
		]
	});
}
var raf = 0;
function prefersReducedMotion() {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function headerOffset() {
	const raw = getComputedStyle(document.documentElement).scrollPaddingTop;
	const n = Number.parseFloat(raw);
	return Number.isFinite(n) ? n : 80;
}
function easeOutCubic(t) {
	return 1 - (1 - t) ** 3;
}
function scrollToHash(hash, instant = false) {
	const id = hash.replace(/^#/, "");
	if (!id) return false;
	const el = document.getElementById(id);
	if (!(el instanceof HTMLElement)) return false;
	const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - headerOffset());
	cancelAnimationFrame(raf);
	const finish = () => {
		document.documentElement.classList.remove("js-scrolling");
		if (!el.hasAttribute("tabindex")) el.tabIndex = -1;
		el.focus({ preventScroll: true });
	};
	if (instant || prefersReducedMotion()) {
		window.scrollTo(0, top);
		finish();
		return true;
	}
	const start = window.scrollY;
	const dist = top - start;
	if (Math.abs(dist) < 2) {
		finish();
		return true;
	}
	const duration = Math.min(720, Math.max(380, Math.abs(dist) * .28));
	const t0 = performance.now();
	document.documentElement.classList.add("js-scrolling");
	const step = (now) => {
		const p = Math.min(1, (now - t0) / duration);
		window.scrollTo(0, start + dist * easeOutCubic(p));
		if (p < 1) {
			raf = requestAnimationFrame(step);
			return;
		}
		finish();
	};
	raf = requestAnimationFrame(step);
	return true;
}
function useScrollProgressFallback(ref) {
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof CSS !== "undefined" && (CSS.supports("animation-timeline: scroll()") || CSS.supports("animation-timeline", "scroll()"))) return;
		const onScroll = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
			el.style.transform = `scaleX(${p})`;
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [ref]);
}
var PHONE = "050 120 1818";
var PHONE_TEL = "+971501201818";
var EMAIL = "info@khalisglobal.com";
var MAPS = "https://share.google/qTWqojAQNH4zmFig8";
var REVIEW = "https://g.page/r/CbjI7vnA12xFEBM/review";
var INSTAGRAM = "https://www.instagram.com/khalisbusiness";
var FACEBOOK = "https://www.facebook.com/share/1QFZj32Wsa/";
var TIKTOK = "https://www.tiktok.com/@khalisbusiness";
var WHATSAPP = `https://wa.me/${PHONE_TEL.replace("+", "")}`;
var NAV = [
	{
		href: "#home",
		label: "Home"
	},
	{
		href: "#about",
		label: "About Us"
	},
	{
		href: "#services",
		label: "Services"
	},
	{
		href: "#gallery",
		label: "Gallery"
	},
	{
		href: "#blog",
		label: "Blog"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
var SERVICE_FILES = [
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
			"Same-day typing and submission where possible"
		]
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
			"Same-day turnaround on standard forms"
		]
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
			"Cost, timeline, and compliance briefing"
		]
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
			"Introductions to licensed UAE counsel"
		]
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
			"Family Golden Visa and visa holding"
		]
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
			"ICA / TAMM filing with a clear timeline"
		]
	}
];
var PILLARS = [
	"Expert Business Consultation",
	"Comprehensive Legal Support",
	"Fast & Reliable Service"
];
var SERVICE_COLS = [
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
		"Health Insurance (Daman)"
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
		"Judicial Department"
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
		"Designing"
	]
];
var STEPS = [
	{
		n: "Step 1",
		title: "Find Your Trade Name and Issue License",
		copy: "Choose a unique trade name and secure your trade license with our expert guidance.",
		Icon: MapPinned
	},
	{
		n: "Step 2",
		title: "Complete Documentation",
		copy: "Ensure all necessary documents, including partner's agreements and license issuance, are seamlessly managed.",
		Icon: Send
	},
	{
		n: "Step 3",
		title: "Marketing and Promotions",
		copy: "Leverage effective marketing strategies to launch and grow your business successfully.",
		Icon: Share2,
		href: "#blog"
	}
];
var REVIEWS = [
	{
		name: "Nishad.k Nisha",
		body: "Excellent service at Khalis Typing, Muroor Road. Staff were professional, friendly and very efficient. My Indian passport renewal was processed quickly and smoothly."
	},
	{
		name: "Abdul Salam Mondal",
		body: "Excellent service at Khalis Typing, Muroor, Abu Dhabi. The staff are professional, friendly and very efficient. Highly recommended for documentation and PRO work."
	},
	{
		name: "Google reviewer",
		body: "Efficient staff and smooth document handling. Family visa process and certificate attestation completed without hassle. Best typing centre in the area."
	}
];
var HOURS = [
	["Monday – Thursday", "8 AM – 9:30 PM"],
	["Friday", "8 AM – 12 PM, 3 – 9:30 PM"],
	["Saturday", "8 AM – 8:30 PM"],
	["Sunday", "Closed"]
];
function useDeskOpen() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [label, setLabel] = (0, import_react.useState)("Checking hours");
	(0, import_react.useEffect)(() => {
		const tick = () => {
			const parts = Object.fromEntries(new Intl.DateTimeFormat("en-GB", {
				timeZone: "Asia/Dubai",
				weekday: "short",
				hour: "numeric",
				minute: "numeric",
				hourCycle: "h23"
			}).formatToParts(/* @__PURE__ */ new Date()).map((p) => [p.type, p.value]));
			const weekday = parts.weekday;
			const minutes = Number(parts.hour) * 60 + Number(parts.minute);
			const between = (start, end) => minutes >= start && minutes < end;
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
		const id = window.setInterval(tick, 6e4);
		return () => window.clearInterval(id);
	}, []);
	return {
		open,
		label
	};
}
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("#home");
	const progressRef = (0, import_react.useRef)(null);
	useScrollProgressFallback(progressRef);
	(0, import_react.useEffect)(() => {
		const nodes = NAV.map((item) => item.href.slice(1)).map((id) => document.getElementById(id)).filter((n) => n instanceof HTMLElement);
		const io = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
			if (visible[0]?.target.id) setActive(`#${visible[0].target.id}`);
		}, {
			rootMargin: "-35% 0px -50% 0px",
			threshold: [
				0,
				.25,
				.5,
				1
			]
		});
		for (const node of nodes) io.observe(node);
		return () => io.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		const go = (hash, instant = false) => {
			if (!scrollToHash(hash, instant)) return;
			history.pushState(null, "", hash);
			setActive(hash);
		};
		const onClick = (event) => {
			const link = event.target?.closest("a[href^=\"#\"]");
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: progressRef,
				className: "scroll-progress",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#home",
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/logo.webp",
								alt: "Khalis Typing Center",
								width: 515,
								height: 515,
								className: "h-11 w-11 object-contain sm:h-12 sm:w-12",
								fetchPriority: "high",
								decoding: "async"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden h-8 w-px bg-ink/20 sm:block",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hidden leading-tight sm:block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-semibold tracking-wide text-ink",
									children: "KHALIS"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[10px] font-semibold tracking-[0.18em] text-palm",
									children: "TYPING CENTER"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-5 lg:flex",
						"aria-label": "Primary",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							"aria-current": active === item.href ? "location" : void 0,
							className: cn("text-sm font-medium transition-colors duration-200", active === item.href ? "text-palm" : "text-ink/70 hover:text-ink"),
							children: item.label
						}, item.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${PHONE_TEL}`,
							className: "hidden min-h-11 items-center rounded-full bg-palm px-5 py-2 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95 sm:inline-flex",
							children: PHONE
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center rounded-full text-ink lg:hidden",
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})]
					})
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-ink/10 bg-paper px-4 py-4 lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						"aria-current": active === item.href ? "location" : void 0,
						className: cn("flex min-h-11 items-center text-sm font-medium", active === item.href ? "text-palm" : "text-ink"),
						children: item.label
					}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${PHONE_TEL}`,
						className: "mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-palm text-sm font-semibold text-paper",
						children: ["Call ", PHONE]
					})]
				})
			}) : null
		]
	});
}
function ContactForm({ preferredService = "" }) {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [service, setService] = (0, import_react.useState)(preferredService);
	const [waUrl, setWaUrl] = (0, import_react.useState)(WHATSAPP);
	(0, import_react.useEffect)(() => {
		if (preferredService) setService(preferredService);
	}, [preferredService]);
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const lines = [
			`Hello Khalis — ${data.get("service") || "enquiry"}`,
			`Name: ${data.get("name") || ""}`,
			`Phone: ${data.get("phone") || ""}`,
			data.get("email") ? `Email: ${data.get("email")}` : "",
			data.get("message") ? String(data.get("message")) : ""
		].filter(Boolean);
		const url = `${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`;
		setWaUrl(url);
		window.open(url, "_blank", "noopener,noreferrer");
		setSent(true);
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center py-4 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LottiePlayer, {
				src: "/lottie/success.json",
				className: "h-28 w-28",
				label: "Request sent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-xl text-paper",
				children: "WhatsApp is ready."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 max-w-sm text-sm text-paper/70",
				children: "Your file details are in the chat. If nothing opened, tap below."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: waUrl,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-palm px-7 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95",
				children: ["Open WhatsApp", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Full name",
					name: "name",
					autoComplete: "name",
					required: true,
					placeholder: "Your name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Phone / WhatsApp",
					name: "phone",
					type: "tel",
					autoComplete: "tel",
					required: true,
					placeholder: "05X XXX XXXX"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Email",
				name: "email",
				type: "email",
				autoComplete: "email",
				placeholder: "Optional"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-1.5 block text-sm text-paper/70",
					children: "Service needed"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					name: "service",
					value: service,
					required: true,
					onChange: (e) => setService(e.target.value),
					className: "min-h-11 w-full rounded-xl border border-paper/15 bg-ink px-4 text-paper outline-none transition-colors duration-200 focus:border-gold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						disabled: true,
						children: "Select a service"
					}), [
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
						"Emirates ID Services",
						"Equivalency Certificate",
						"DOH Professional Licensing",
						"Will Registration",
						"Digital Marketing",
						"Other"
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: s,
						children: s
					}, s))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-1.5 block text-sm text-paper/70",
					children: "Message"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					name: "message",
					rows: 4,
					className: "w-full rounded-xl border border-paper/15 bg-ink px-4 py-3 text-paper outline-none transition-colors duration-200 focus:border-gold",
					placeholder: "What needs typing, stamping, or filing?"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				className: "flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-palm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), "Send on WhatsApp"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-center text-xs text-paper/55",
				children: [
					"Opens WhatsApp to ",
					PHONE,
					". We reply during working hours."
				]
			})
		]
	});
}
function Field({ label, name, type = "text", required, autoComplete, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-sm text-paper/70",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required,
			autoComplete,
			inputMode: type === "tel" ? "tel" : void 0,
			placeholder,
			className: "min-h-11 w-full rounded-xl border border-paper/15 bg-ink px-4 text-paper outline-none transition-colors duration-200 focus:border-gold"
		})]
	});
}
var VISA_GROUPS = [
	{
		id: "all",
		label: "All categories"
	},
	{
		id: "long",
		label: "Long-term"
	},
	{
		id: "work",
		label: "Work"
	},
	{
		id: "family",
		label: "Family"
	},
	{
		id: "visit",
		label: "Visit"
	}
];
var VISA_TYPES = [
	{
		id: "golden",
		group: "long",
		name: "Golden Visa",
		term: "5 or 10 years",
		sponsor: "Self — no employer kafeel",
		bestFor: "Investors, talent, property owners, and families planning long-term residency",
		khalis: "Golden Visa category check, supporting documents, ICA typing",
		Icon: Star
	},
	{
		id: "green",
		group: "long",
		name: "Green Visa",
		term: "5 years",
		sponsor: "Self-sponsored",
		bestFor: "Skilled workers, freelancers, and the self-employed who qualify on their own",
		khalis: "Green Visa application, MOHRE skill-level pack, status follow-up",
		Icon: Shield
	},
	{
		id: "blue",
		group: "long",
		name: "Blue Visa",
		term: "Up to 10 years",
		sponsor: "Self — nomination track",
		bestFor: "People working on environment, climate, and sustainability programmes",
		khalis: "Blue Visa nomination pack and ICA typing",
		Icon: Leaf
	},
	{
		id: "retire",
		group: "long",
		name: "Retirement residence",
		term: "Typically 5 years",
		sponsor: "Self — age and income rules",
		bestFor: "Residents 55+ who want to stay after work ends",
		khalis: "Retirement visa pack, income or property proofs, ICA file",
		Icon: House
	},
	{
		id: "employment",
		group: "work",
		name: "Employment residence",
		term: "Typically 2 years",
		sponsor: "UAE employer",
		bestFor: "Staff on a company licence who need a work residence",
		khalis: "Entry permit, medical, Emirates ID, stamping sequence",
		Icon: Briefcase
	},
	{
		id: "investor",
		group: "work",
		name: "Investor / partner",
		term: "Tied to the licence",
		sponsor: "Your UAE company",
		bestFor: "Shareholders who need residence on the trade licence",
		khalis: "Partner visa, establishment card, ICA file",
		Icon: Landmark
	},
	{
		id: "freelance",
		group: "work",
		name: "Freelance residence",
		term: "Typically 1–2 years",
		sponsor: "Free zone or Green Visa path",
		bestFor: "Independent professionals who invoice clients in the UAE",
		khalis: "Freelance permit pack and residence typing",
		Icon: FileText
	},
	{
		id: "family",
		group: "family",
		name: "Family residence",
		term: "Matches the sponsor",
		sponsor: "Resident spouse or parent",
		bestFor: "Bringing a spouse, children, or parents to live with you",
		khalis: "Dependent visas, birth and marriage attestation",
		Icon: Users
	},
	{
		id: "holding",
		group: "family",
		name: "Visa holding",
		term: "While you travel",
		sponsor: "Your existing residence",
		bestFor: "Protecting family residency status when you leave the UAE",
		khalis: "Holding application so the file stays valid while you are away",
		Icon: Clock
	},
	{
		id: "visit",
		group: "visit",
		name: "Visit visa 60 / 90",
		term: "60 or 90 days",
		sponsor: "Self-sponsored visit",
		bestFor: "Loved ones visiting the UAE without taking residency",
		khalis: "Self-sponsored 60 or 90-day visit visa typing",
		Icon: Plane
	},
	{
		id: "explore",
		group: "visit",
		name: "Job exploration visit",
		term: "Typically 60–90 days",
		sponsor: "Self-sponsored visit",
		bestFor: "Looking for work in the UAE before an employer files residence",
		khalis: "Job-seeker / exploration visit typing",
		Icon: Search
	},
	{
		id: "student",
		group: "visit",
		name: "Student residence",
		term: "Matches the programme",
		sponsor: "UAE school or university",
		bestFor: "Children and adults enrolled in a licensed UAE institution",
		khalis: "Student visa file, ICA typing, Emirates ID",
		Icon: GraduationCap
	}
];
function VisaCompareSection() {
	const [group, setGroup] = (0, import_react.useState)("all");
	const visas = VISA_TYPES.filter((visa) => group === "all" || visa.group === group);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "visas",
		className: "scroll-mt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold tracking-widest text-palm uppercase",
				children: "UAE visas"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl",
				children: "Explore UAE visa categories"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg",
				children: "Khalis types and files the application. ICA and MOHRE decide. Use this as a first cut, then send the case on WhatsApp."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap gap-2",
				role: "tablist",
				"aria-label": "Visa categories",
				children: VISA_GROUPS.map((item) => {
					const on = item.id === group;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": on,
						onClick: () => setGroup(item.id),
						className: cn("inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold transition-colors duration-200", on ? "bg-palm text-paper" : "border border-ink/15 bg-paper text-ink hover:border-palm/40"),
						children: item.label
					}, item.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 reveal-stagger sm:grid-cols-2 lg:grid-cols-3",
				children: visas.map((visa) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex flex-col rounded-2xl border border-ink/10 bg-paper p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "inline-flex items-center gap-2 text-sm font-semibold text-palm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(visa.Icon, {
								className: "size-4",
								"aria-hidden": "true"
							}), visa.term]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-2xl font-bold tracking-tight",
							children: visa.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-4 flex-1 space-y-3 text-sm leading-relaxed",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-semibold text-ink",
									children: "Sponsor"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-muted",
									children: visa.sponsor
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-semibold text-ink",
									children: "Best for"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-muted",
									children: visa.bestFor
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-semibold text-ink",
									children: "What we file"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-muted",
									children: visa.khalis
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `${WHATSAPP}?text=${encodeURIComponent(`Hello Khalis — I need ${visa.name} service.`)}`,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-palm hover:underline",
							children: ["Ask about this visa", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				}, visa.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-3xl text-sm leading-relaxed text-muted",
				children: "Rules and salary thresholds change. Golden and Blue are typically long-term (5–10 years); Green is typically 5 years and self-sponsored; work residence is usually 2 years on an employer; family residence follows the sponsor; visit visas are 30, 60, or 90 days. ICA still decides — we type a complete file."
			})
		]
	});
}
var POSTS = [
	{
		slug: "family-visa",
		title: "Bring your family to the UAE without the paperwork stress",
		date: "26 August 2026",
		excerpt: "Attestation, new files, renewals, visit visas, Golden Visa, and holding — what Khalis types, and what you still need from ICA.",
		body: [
			"Looking to bring your family to the UAE or renew their visas without the runaround? Khalis types the full family file: birth and marriage certificate attestation, new applications, renewals, outside entry permits, 60- and 90-day self-sponsored visit visas, Family Golden Visa, and visa holding while you travel.",
			"We sequence medical, Emirates ID, and stamping so nobody is stuck in-country on an expired status. ICA still decides — our job is a complete, correct file the first time.",
			"Walk in on Muroor Road or send the passport copies on WhatsApp. We confirm the document list the same day when the desk is open."
		]
	},
	{
		slug: "gov-portals",
		title: "TAMM, ICA, MOHRE, ADJD and DED — which portal for which file",
		date: "20 August 2026",
		excerpt: "Abu Dhabi government work is split across five systems. Here is how Khalis maps a typing job to the right desk.",
		body: [
			"TAMM is Abu Dhabi’s service front door. ICA holds identity and residency. MOHRE covers labour contracts and work permits. ADJD handles notary and courts. DED (ADDED) issues and renews trade licences.",
			"Clients should not have to learn five logins. Khalis keeps UAE PASS, establishment cards, and the supporting PDFs in one file and submits on the portal that actually owns the transaction.",
			"If you are unsure whether a licence change is DED or a visa is ICA, send the trade licence and passport. We tell you the track before we type."
		]
	},
	{
		slug: "emirates-id",
		title: "Emirates ID: new, renew, replace",
		date: "12 August 2026",
		excerpt: "The card is the key to banking, TAMM, and residency. A mistyped name costs a week. This is how we file ICA applications from the Muroor desk.",
		body: [
			"New, renewal, replacement, and data amendment all go through ICA. Khalis types the application, books the biometrics path, and follows status so you are not refreshing a portal for days.",
			"Bring the passport, visa page, and the old card if you have it. Lost-card files need a police report or the replacement path ICA currently asks for — we confirm that before you leave the desk.",
			"Same-day typing is standard on complete files. Collection timing is ICA’s, not ours; we tell you the realistic window up front."
		]
	},
	{
		slug: "whatsapp-desk",
		title: "Why every Khalis file starts on WhatsApp",
		date: "8 August 2026",
		excerpt: "One number, saved replies, and a label for every stage. How we run 050 120 1818 as the inbox — and how we set the same funnel up for clients.",
		body: [
			"Google, Instagram, TikTok, Facebook, and this website all open the same WhatsApp thread. There is no second inbox and no “please email instead.”",
			"The first reply is a greeting plus hours, then a choice: Emirates ID, PRO, visa, licence, or typing. After that we send the document list as a saved reply. Labels mark New, Docs pending, Submitted, and Ready to collect.",
			"Sunday is closed. Friday is a split shift. The auto-reply says so, and asks for the document photo so Monday morning starts with a file, not a question. When the ID is collected, we send the Google review link — that is how 4.9★ stays 4.9★."
		]
	}
];
function GallerySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "gallery",
		className: "scroll-mt-24 border-t border-ink/10 bg-mist py-20 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold tracking-widest text-palm uppercase",
					children: "Gallery"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl",
					children: "The desk, the files, the city."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-base leading-relaxed text-muted",
					children: "Office footage from Muroor Road, the family visa film, and stills from the services we type every day."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-8 reveal-stagger lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroVideo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto w-full max-w-xs lg:max-w-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FamilyVisaVideo, {})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 reveal-stagger sm:grid-cols-2 lg:grid-cols-3",
					children: SERVICE_FILES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "overflow-hidden rounded-2xl border border-ink/10 bg-paper",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image,
							alt: item.alt,
							width: 800,
							height: 600,
							className: "aspect-[4/3] w-full object-cover",
							loading: "lazy",
							decoding: "async",
							sizes: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "px-4 py-3 text-sm font-medium text-ink",
							children: item.title
						})]
					}, item.id))
				})
			]
		})
	});
}
function BlogSection() {
	const [open, setOpen] = (0, import_react.useState)(POSTS[0].slug);
	const post = POSTS.find((p) => p.slug === open) ?? POSTS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "blog",
		className: "scroll-mt-24 bg-paper py-20 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold tracking-widest text-palm uppercase",
					children: "Blog"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl",
					children: "Notes from the Muroor desk."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-base leading-relaxed text-muted",
					children: "Short, practical pieces on visas, government portals, Emirates ID, and how we run the file — written for clients, not for a ministry."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 reveal-stagger sm:grid-cols-2",
					children: POSTS.map((item) => {
						const active = item.slug === post.slug;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpen(item.slug),
							className: cn("rounded-2xl border p-5 text-left transition-colors duration-200", active ? "border-palm bg-gold-pale/40" : "border-ink/10 bg-mist hover:border-palm/40"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold tracking-wide text-palm uppercase",
									children: item.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-lg font-bold tracking-tight",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: item.excerpt
								})
							]
						}, item.slug);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "mt-10 rounded-2xl border border-ink/10 bg-mist p-6 sm:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-wide text-palm uppercase",
							children: post.date
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl",
							children: post.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 space-y-4 text-base leading-relaxed text-ink",
							children: post.body.map((para) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: para }, para))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `${WHATSAPP}?text=${encodeURIComponent(`Hello Khalis — I read “${post.title}” and need help.`)}`,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-palm px-7 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95",
							children: ["Ask this on WhatsApp", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				})
			]
		})
	});
}
function ContactSection({ preferredService }) {
	const desk = useDeskOpen();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "scroll-mt-24 bg-ink py-20 text-paper sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold tracking-widest text-gold uppercase",
					children: "Get in touch"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl",
					children: "Walk in, call, or send the file."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("mt-4 inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold", desk.open ? "bg-palm/20 text-gold-soft" : "bg-crimson/15 text-crimson"),
					children: desk.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: WHATSAPP,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-palm px-7 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }),
							"WhatsApp ",
							PHONE
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${PHONE_TEL}`,
						className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-paper/25 px-7 text-sm font-semibold text-paper transition-colors duration-200 hover:bg-paper/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), "Call the desk"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-10 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
								className: "rounded-2xl border border-gold/25 p-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-5 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold",
											children: "Muroor Road, Abu Dhabi"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm leading-relaxed text-paper/70",
											children: "Muroor 31 signal — Zafaranah st — Al Sa`Adah — Zone 1"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: MAPS,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-gold",
											children: "Open in Google Maps"
										})
									] })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
								className: "rounded-2xl border border-gold/25 p-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-5 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${EMAIL}`,
										className: "mt-1 inline-flex min-h-11 items-center text-sm font-semibold text-gold",
										children: EMAIL
									})] })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
								className: "rounded-2xl border border-gold/25 p-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 size-5 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "w-full",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mb-3 font-semibold",
											children: "Working hours"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
											className: "space-y-2 text-sm",
											children: HOURS.map(([d, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
													className: "text-paper/70",
													children: d
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
													className: cn(h === "Closed" && "text-crimson"),
													children: h
												})]
											}, d))
										})]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-3",
								children: [
									[INSTAGRAM, "Instagram"],
									[FACEBOOK, "Facebook"],
									[TIKTOK, "TikTok"]
								].map(([href, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex min-h-11 items-center rounded-full border border-gold/35 px-4 text-sm font-medium text-paper transition-colors duration-200 hover:border-gold hover:bg-gold/10",
									children: label
								}, label))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-gold/25 bg-ink p-6 sm:p-8 gold-ring gold-bevel",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-bold",
								children: "Start a file"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 mb-6 text-sm text-paper/70",
								children: "Tell us the service. We reply on WhatsApp during working hours."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, { preferredService })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskMap, {
						mapsHref: MAPS,
						whatsapp: WHATSAPP
					})
				})
			]
		})
	});
}
function Landing() {
	const [preferredService, setPreferredService] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-mist",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				className: "pointer-events-none absolute h-0 w-0",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
					id: "khalis-foil",
					x: "-10%",
					y: "-10%",
					width: "120%",
					height: "120%",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feTurbulence", {
							type: "fractalNoise",
							baseFrequency: "0.55",
							numOctaves: "4",
							seed: "7",
							result: "noise"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feSpecularLighting", {
							in: "noise",
							surfaceScale: "2.4",
							specularConstant: "1.1",
							specularExponent: "18",
							lightingColor: "#00e5d1",
							result: "spec",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("fePointLight", {
								x: "40",
								y: "20",
								z: "80"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feComposite", {
							in: "spec",
							in2: "SourceGraphic",
							operator: "in",
							result: "cut"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feBlend", {
							in: "SourceGraphic",
							in2: "cut",
							mode: "screen"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "home",
				className: "relative isolate min-h-[34rem] scroll-mt-24 overflow-hidden bg-ink text-paper sm:min-h-[42rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddedHeroBackdrop, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 mx-auto flex min-h-[34rem] max-w-6xl items-end px-4 pb-16 pt-28 sm:min-h-[42rem] sm:px-6 sm:pb-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-enter max-w-xl drop-shadow-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-4 inline-flex items-center gap-2 rounded-full border border-paper/20 bg-ink/40 px-3 py-1 text-xs font-medium text-paper backdrop-blur-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-palm-bright text-palm-bright" }), "Abu Dhabi · 4.9★ · 858+ Google reviews"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl",
								children: ["Documents, licences and PRO —", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-palm-bright",
									children: " handled as one file."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-lg text-base leading-relaxed text-paper/80 sm:text-lg",
								children: "Khalis Typing Center is your business desk on Muroor Road. Typing, attestation, visas, trade licences and professional licensing — without the runaround."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col gap-3 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-palm px-7 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95",
									children: ["Get a consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#services",
									className: "inline-flex min-h-12 items-center justify-center rounded-full border border-paper/30 bg-ink/30 px-7 text-sm font-semibold text-paper backdrop-blur-sm transition-colors duration-200 hover:bg-paper/10",
									children: "Browse services"
								})]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "about",
				className: "scroll-mt-24 bg-paper py-20 sm:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold tracking-widest text-palm uppercase",
								children: "About Us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl",
								children: "Your trusted business partner in the UAE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base leading-relaxed text-muted",
								children: "We build your ideal business solution with passion for lasting success. On Muroor Road in Abu Dhabi, Khalis is the desk people return to for typing, PRO, visas and company formation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-base leading-relaxed text-muted",
								children: "Accuracy, transparent fees and a file that actually closes — that is the standard, whether it is a single letter or a full licence pack."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid grid-cols-2 gap-4",
								children: [
									["4.9★", "Google rating"],
									["858+", "Client reviews"],
									["30+", "Services on desk"],
									["Fast", "Same-day options"]
								].map(([n, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-gold/25 bg-gold-pale/40 p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-2xl font-bold text-gold-deep",
										children: n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted",
										children: l
									})]
								}, l))
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-2xl border border-ink/10 bg-ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LottiePlayer, {
								src: "/lottie/team.json",
								className: "h-80 w-full",
								label: "Team collaboration animation"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto mt-20 max-w-6xl overflow-hidden rounded-3xl bg-palm px-4 py-14 text-paper sm:px-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute inset-0 tex-leaves",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-center font-display text-2xl font-bold tracking-tight sm:text-3xl",
								children: "Three simple steps"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 grid gap-5 reveal-stagger md:grid-cols-3",
								children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "flex flex-col rounded-2xl bg-paper p-6 text-ink shadow-lg",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex size-14 items-center justify-center rounded-full border-2 border-palm text-palm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.Icon, {
												className: "size-6",
												strokeWidth: 1.75
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "mt-6 font-display text-xl font-bold tracking-tight",
											children: step.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 flex-1 text-sm leading-relaxed text-muted",
											children: step.copy
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-8 inline-flex w-fit rounded-full bg-palm px-4 py-1.5 text-sm font-semibold text-paper",
											children: step.n
										})
									]
								}, step.n))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-20 max-w-6xl px-4 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold tracking-widest text-palm uppercase",
								children: "Client notes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl",
								children: "4.9★ from 858+ Google reviews"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: REVIEW,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-palm",
								children: "Leave a Google review"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 grid gap-5 reveal-stagger md:grid-cols-3",
								children: REVIEWS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
									className: "rounded-2xl border border-gold/20 bg-mist p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-3 flex gap-0.5 text-gold",
											children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-gold" }, i))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm leading-relaxed text-ink",
											children: r.body
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
											className: "mt-4 text-sm font-semibold",
											children: r.name
										})
									]
								}, r.name))
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "services",
				className: "scroll-mt-24 bg-mist py-20 sm:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal mx-auto max-w-6xl px-4 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold tracking-widest text-palm uppercase",
								children: "Services"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-5xl",
								children: "Your trusted business partner in UAE."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg",
								children: "We build your ideal business solution with passion for lasting success."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 grid gap-3 sm:grid-cols-2",
								children: PILLARS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3 text-base font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex size-7 items-center justify-center rounded-full bg-palm/10 text-palm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" })
									}), item]
								}, item))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-16 grid max-w-6xl gap-6 px-4 sm:mt-20 sm:grid-cols-2 sm:gap-8 sm:px-6",
						children: SERVICE_FILES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							id: item.id,
							className: "reveal scroll-mt-24 flex flex-col rounded-2xl border border-ink/10 bg-paper p-5 sm:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative overflow-hidden rounded-2xl bg-ink/5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.image,
										alt: item.alt,
										width: 1200,
										height: 900,
										className: "aspect-[4/3] w-full object-cover",
										loading: "lazy",
										decoding: "async",
										sizes: "(min-width: 640px) 50vw, 100vw"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute bottom-3 left-3 inline-flex size-14 items-center justify-center rounded-full border-2 border-palm bg-paper text-palm shadow-md",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.Icon, {
											className: "size-6",
											strokeWidth: 1.75
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-sm font-semibold tracking-[0.18em] text-palm uppercase",
									children: item.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-2xl font-bold tracking-tight",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base",
									children: item.copy
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-2",
									children: item.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-4 shrink-0 text-palm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: point })]
									}, point))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									onClick: () => setPreferredService(item.title),
									className: "mt-6 inline-flex min-h-12 items-center gap-2 self-start rounded-full bg-palm px-6 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95",
									children: ["Start this file", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							]
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-20 max-w-6xl px-4 sm:px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-ink px-6 py-10 text-paper sm:px-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-center font-display text-2xl font-bold",
									children: "Reach us for"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-2 max-w-xl text-center text-sm text-paper/70",
									children: "Step-by-step assistance to set up and run in any emirate."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
									children: SERVICE_COLS.map((col, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-2.5",
										children: col.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-2 text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-4 shrink-0 text-gold" }), s]
										}, s))
									}, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 text-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#contact",
										className: "inline-flex min-h-12 items-center gap-2 rounded-full bg-palm px-7 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95",
										children: ["Request a proposal", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									})
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-20 max-w-6xl px-4 sm:px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisaCompareSection, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GallerySection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, { preferredService }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-paper/10 bg-ink py-10 text-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/logo.webp",
								alt: "Khalis Typing Center",
								width: 515,
								height: 515,
								className: "h-12 w-12 rounded-xl bg-paper object-contain p-0.5",
								loading: "lazy",
								decoding: "async"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm font-bold",
								children: "KHALIS TYPING CENTER"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-paper/60",
								children: "Abu Dhabi, UAE"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "flex flex-wrap gap-x-5 gap-y-2 text-sm text-paper/70",
							children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: item.href,
								className: "hover:text-paper",
								children: item.label
							}, item.href))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-paper/50",
							children: "© 2026 Khalis Typing Center. All rights reserved."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: WHATSAPP,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "wa-pulse fixed right-4 bottom-4 z-50 inline-flex min-h-12 items-center gap-2 rounded-full bg-palm px-5 text-sm font-semibold text-paper shadow-lg transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95",
				"aria-label": "WhatsApp Khalis",
				children: "WhatsApp"
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landing, {});
}
//#endregion
export { Home as component };
