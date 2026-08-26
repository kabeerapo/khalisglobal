import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as FileText, D as ArrowRight, E as Briefcase, S as IdCard, T as CircleCheck, _ as MapPinned, a as Star, b as Link2, c as Search, d as Plane, f as Phone, g as Megaphone, h as Menu, i as Tags, l as Scale, m as MessageCircle, o as Share2, p as Moon, r as Target, s as Send, t as X, u as Reply, v as MapPin, w as Clock, x as Landmark, y as Mail } from "../_libs/lucide-react.mjs";
import { t as Lottie } from "../_libs/lottie-react+lottie-web.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BYJKiQ6T.js
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
function HeroVideo() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const video = ref.current;
		if (!video) return;
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const apply = () => {
			if (mq.matches) {
				video.pause();
				video.currentTime = 0;
				return;
			}
			video.play().catch(() => {});
		};
		apply();
		mq.addEventListener("change", apply);
		return () => mq.removeEventListener("change", apply);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		id: "video",
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-2xl border border-gold/25 bg-ink gold-ring gold-bevel",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref,
				className: "aspect-[4/3] w-full object-cover lg:aspect-[5/4]",
				src: "/khalis-hero.mp4",
				poster: "/poster-hero.webp",
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				preload: "auto",
				"aria-label": "Khalis Typing Center office tour — Emirates ID, typing and PRO services"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-3 text-sm text-paper/65",
			children: "Office tour · Emirates ID · Typing · PRO services"
		})]
	});
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
var PHONE = "050 120 1818";
var PHONE_TEL = "+971501201818";
var EMAIL = "info@khalisglobal.com";
var MAPS = "https://share.google/qTWqojAQNH4zmFig8";
var REVIEW = "https://g.page/r/CbjI7vnA12xFEBM/review";
var INSTAGRAM = "https://www.instagram.com/khalisbusiness";
var FACEBOOK = "https://www.facebook.com/share/1QFZj32Wsa/";
var TIKTOK = "https://www.tiktok.com/@khalisbusiness";
var WHATSAPP = `https://wa.me/${PHONE_TEL.replace("+", "")}`;
var WHATSAPP_FUNNEL = `${WHATSAPP}?text=${encodeURIComponent("Hello Khalis — I would like a WhatsApp funnel set up for my company.")}`;
var NAV = [
	{
		href: "#video",
		label: "Video"
	},
	{
		href: "#services",
		label: "Services"
	},
	{
		href: "#process",
		label: "Process"
	},
	{
		href: "#marketing",
		label: "Marketing"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#reviews",
		label: "Reviews"
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
		copy: "We manage the residency file end to end: entry permits, medical, Emirates ID, stamping, and dependent visas — sequenced so nobody is stuck in-country on an expired status.",
		points: [
			"Employment, investor, and family visas",
			"Medical, ID, and stamping sequence",
			"Status tracking until the visa is in passport"
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
		href: "#marketing"
	}
];
var MARKETING = [
	{
		Icon: MapPinned,
		title: "Google Business Profile",
		copy: "Own the map pack for Abu Dhabi searches — desk photos, hours, WhatsApp, and a review ask after every closed file."
	},
	{
		Icon: Search,
		title: "Local search",
		copy: "Pages and listings built around how people look: PRO Muroor, Emirates ID typing, trade licence Abu Dhabi, TAMM and ICA help."
	},
	{
		Icon: Share2,
		title: "Social that shows the work",
		copy: "Short reels on Instagram, TikTok and Facebook — office footage, service pills, and a clear call to walk in or message."
	},
	{
		Icon: MessageCircle,
		title: "WhatsApp as the funnel",
		copy: "Ads, posts and the website all land on 050 120 1818. One thread from the first question to a stamped file.",
		href: "#whatsapp"
	},
	{
		Icon: Star,
		title: "Review flywheel",
		copy: "Ask at the right moment — after the ID is collected, not at the counter. Khalis sits at 4.9★; new companies copy the same habit."
	},
	{
		Icon: Target,
		title: "Launch ads",
		copy: "Tight Google and Meta campaigns for licence, visa and typing keywords — geo-fenced to Abu Dhabi, with a budget you can see weekly."
	}
];
var WA_TACTICS = [
	{
		n: "01",
		Icon: Link2,
		title: "One number, every door",
		copy: "The same wa.me link on Google, Instagram, TikTok, Facebook, the website, and ads. No second inbox. No missed thread."
	},
	{
		n: "02",
		Icon: Reply,
		title: "First reply in a minute",
		copy: "Greeting plus hours, then a choice: Emirates ID, PRO, visa, licence, or typing. The client names the file before they type a paragraph."
	},
	{
		n: "03",
		Icon: FileText,
		title: "Saved replies, not typing twice",
		copy: "Templates for document lists, fees, and next steps — Emirates ID, labour, family visa, trade licence. Staff pick a reply, fill the name, send."
	},
	{
		n: "04",
		Icon: Tags,
		title: "Labels as the pipeline",
		copy: "New · Docs pending · Submitted · Ready to collect. The chat is the file. Nothing lives only in someone's head."
	},
	{
		n: "05",
		Icon: Moon,
		title: "After-hours auto reply",
		copy: "Sunday closed. Friday split shift. The auto-reply states hours and asks them to send the document photo so the morning starts with a file, not a question."
	},
	{
		n: "06",
		Icon: Star,
		title: "Close with a review",
		copy: "When the ID is collected, send the Google review link. That is how 4.9★ stays 4.9★ — asked once, at the right moment."
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50 border-b border-paper/10 bg-ink/90 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo.webp",
						alt: "",
						width: 360,
						height: 202,
						className: "h-10 w-auto sm:h-12",
						fetchPriority: "high",
						decoding: "async"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hidden leading-tight sm:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-sm font-bold tracking-wide text-paper",
							children: "KHALIS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[10px] font-semibold tracking-[0.18em] gold-foil",
							children: "TYPING CENTER"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "text-sm font-medium text-paper/80 transition-colors duration-200 hover:text-paper",
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
						className: "inline-flex size-11 items-center justify-center rounded-full text-paper lg:hidden",
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-paper/10 px-4 py-4 lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					className: "flex min-h-11 items-center text-sm font-medium text-paper",
					onClick: () => setOpen(false),
					children: item.label
				}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `tel:${PHONE_TEL}`,
					className: "mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-palm text-sm font-semibold text-paper",
					children: ["Call ", PHONE]
				})]
			})
		}) : null]
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
function ContactSection({ preferredService }) {
	const desk = useDeskOpen();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "bg-ink py-20 text-paper sm:py-24",
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
						className: "gold-plate gold-bevel inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold transition-transform duration-150 ease-out active:scale-95",
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
		className: "tex-grain tex-fiber min-h-screen bg-paper",
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
							lightingColor: "#f3e8c9",
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
				className: "relative overflow-hidden bg-ink pt-24 text-paper sm:pt-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-1 gold-hairline" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute right-0 top-24 h-40 w-40 bg-gold/15 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:pb-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-enter",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mb-4 inline-flex items-center gap-2 rounded-full gold-bevel border-gold/35 bg-gold/10 px-3 py-1 text-xs font-medium text-gold-soft",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-gold text-gold" }), "Abu Dhabi · 4.9★ · 858+ Google reviews"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "font-display text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl",
									children: ["Documents, licences and PRO —", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "gold-foil",
										children: " handled as one file."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-lg text-base leading-relaxed text-paper/75 sm:text-lg",
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
										className: "gold-plate gold-bevel inline-flex min-h-12 items-center justify-center rounded-full px-7 text-sm font-semibold transition-transform duration-150 ease-out active:scale-95",
										children: "Browse services"
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hero-media relative",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroVideo, {})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "services",
				className: "py-20 sm:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl px-4 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold tracking-widest text-palm uppercase",
								children: "Services"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl",
								children: "Your trusted business partner in UAE."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg",
								children: "We build your ideal business solution with passion for lasting success."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 space-y-3",
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
						className: "mx-auto mt-16 max-w-3xl space-y-20 px-4 sm:mt-20 sm:px-6",
						children: SERVICE_FILES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							id: item.id,
							className: "reveal scroll-mt-24",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden rounded-3xl bg-ink/5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.image,
										alt: item.alt,
										width: 1200,
										height: 900,
										className: "aspect-[4/3] w-full object-cover",
										loading: "lazy",
										decoding: "async",
										sizes: "(min-width: 768px) 768px, 100vw"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.18em] text-palm uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.Icon, { className: "size-4" }), item.category]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-base leading-relaxed text-muted sm:text-lg",
									children: item.copy
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 space-y-3",
									children: item.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3 text-base",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-5 shrink-0 text-palm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: point })]
									}, point))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									onClick: () => setPreferredService(item.title),
									className: "mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-palm px-7 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95",
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
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "process",
				className: "relative overflow-hidden bg-palm py-20 text-paper sm:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-0 tex-leaves",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-lg px-4 sm:px-6 md:max-w-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-center font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl",
						children: "Three simple steps to grow your business"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-5 reveal-stagger md:mt-14 md:grid-cols-3",
						children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "lift reveal flex flex-col rounded-2xl bg-paper p-6 text-ink shadow-lg sm:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-14 items-center justify-center rounded-full border-2 border-palm text-palm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.Icon, {
										className: "size-6",
										strokeWidth: 1.75
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 font-display text-xl font-bold tracking-tight",
									children: step.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 flex-1 text-sm leading-relaxed text-muted",
									children: step.copy
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-8 inline-flex w-fit rounded-full bg-gold px-4 py-1.5 text-sm font-semibold text-ink",
									children: step.n
								}),
								"href" in step && step.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: step.href,
									className: "mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-palm",
									children: ["See strategies", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								}) : null
							]
						}, step.n))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "marketing",
				className: "py-20 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-palm uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "size-4" }), "Digital marketing"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl",
							children: "Strategies that get the licence noticed."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-base leading-relaxed text-muted",
							children: "The stamp is not the finish line. After the trade licence lands, Khalis sets up the channels that bring the next file in — Maps, search, social, WhatsApp, and ads you can actually measure."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-5 reveal-stagger sm:grid-cols-2 lg:grid-cols-3",
							children: MARKETING.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "lift reveal flex flex-col rounded-2xl border border-gold/20 bg-paper p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex size-12 items-center justify-center rounded-full border-2 border-palm text-palm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.Icon, {
											className: "size-5",
											strokeWidth: 1.75
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 font-display text-xl font-bold tracking-tight",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 flex-1 text-sm leading-relaxed text-muted",
										children: item.copy
									}),
									"href" in item && item.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: item.href,
										className: "mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-palm",
										children: ["See tactics", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									}) : null
								]
							}, item.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								onClick: () => setPreferredService("Digital Marketing"),
								className: "inline-flex min-h-12 items-center gap-2 rounded-full bg-palm px-7 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95",
								children: ["Start this file", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "Instagram, TikTok and Facebook already live under Khalis Business."
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "whatsapp",
				className: "border-t border-ink/10 bg-ink py-20 text-paper sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-gold-soft uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), "WhatsApp funnel"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl",
							children: "Six tactics that turn a chat into a closed file."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-relaxed text-paper/70",
							children: "Khalis already lives on 050 120 1818. The funnel is how every ad, reel and walk-in lands in that thread — labelled, answered, and asked for a review when the stamp is done."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 flex flex-wrap gap-2",
							children: [
								"Emirates ID",
								"PRO",
								"Visa",
								"Licence",
								"Typing"
							].map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full border border-gold/30 px-3 py-1.5 text-xs font-semibold tracking-wide text-gold-soft",
								children: chip
							}, chip))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: WHATSAPP_FUNNEL,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex min-h-12 items-center gap-2 rounded-full bg-palm px-7 text-sm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95",
								children: ["Message Khalis", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								onClick: () => setPreferredService("Digital Marketing"),
								className: "inline-flex min-h-12 items-center rounded-full border border-gold/35 px-6 text-sm font-semibold text-paper transition-colors duration-200 hover:border-gold hover:bg-gold/10",
								children: "Set this up"
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "grid gap-4 reveal-stagger sm:grid-cols-2",
						children: WA_TACTICS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "lift reveal flex flex-col rounded-2xl border border-gold/25 bg-ink p-5 gold-ring",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex size-10 items-center justify-center rounded-full border border-palm text-palm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.Icon, {
											className: "size-4",
											strokeWidth: 1.75
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink",
										children: item.n
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-lg font-bold tracking-tight",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-paper/70",
									children: item.copy
								})
							]
						}, item.n))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "about",
				className: "py-20 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold tracking-widest text-gold-deep uppercase",
							children: "About Khalis"
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
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "reviews",
				className: "border-t border-ink/10 py-20 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold tracking-widest text-gold-deep uppercase",
							children: "Client notes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl",
							children: "4.9★ from 858+ Google reviews"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: REVIEW,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-gold-deep",
							children: "Leave a Google review"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-5 reveal-stagger md:grid-cols-3",
							children: REVIEWS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "lift reveal rounded-2xl border border-gold/20 bg-paper p-6",
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
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap gap-2",
							children: [
								"family visa process",
								"certificate attestation",
								"efficient staff",
								"document handling"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-gold/30 bg-gold-pale/50 px-3 py-1.5 text-xs font-medium text-gold-deep",
								children: t
							}, t))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, { preferredService }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-paper/10 bg-ink py-10 text-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.webp",
							alt: "",
							width: 360,
							height: 202,
							className: "h-10 w-auto",
							loading: "lazy",
							decoding: "async"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-bold",
							children: "KHALIS TYPING CENTER"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-paper/60",
							children: "Abu Dhabi, UAE"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-paper/50",
						children: "© 2026 Khalis Typing Center. All rights reserved."
					})]
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
