import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, c as Clock, i as Phone, l as CircleCheck, o as MapPin, r as Star, s as Mail, t as X, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as Lottie } from "../_libs/lottie-react+lottie-web.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-jM8VfQqF.js
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
		className: cn("bg-ink/5", className),
		"aria-hidden": !label,
		"aria-label": label
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lottie, {
		src,
		loop: loop && !reduce,
		autoplay: !reduce,
		className,
		"aria-hidden": !label,
		"aria-label": label
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
var NAV = [
	{
		href: "#services",
		label: "Services"
	},
	{
		href: "#process",
		label: "Process"
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
var FEATURED = [
	{
		title: "Equivalency Certificate",
		copy: "UAE Ministry of Education equivalency for foreign degrees — attestation through application.",
		src: "/lottie/documents.json",
		tags: ["Data flow", "Golden visa"]
	},
	{
		title: "Will Registration UAE",
		copy: "Personal, property, financial or guardianship wills — registered fast and legally recognised.",
		src: "/lottie/paper.json",
		tags: ["Family protection", "Estate planning"]
	},
	{
		title: "DOH Professional Licensing",
		copy: "Department of Health Abu Dhabi licences for medicine, dentistry, nursing, pharmacy and allied health.",
		src: "/lottie/license.json",
		tags: ["DHA", "Specialists"]
	},
	{
		title: "PRO Services",
		copy: "Visa processing, trade licences, Emirates ID, document clearing — one partner in Abu Dhabi.",
		src: "/lottie/handshake.json",
		tags: ["Visa", "Trade licence"]
	}
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
		n: "01",
		title: "Find your trade name & issue licence",
		copy: "Reserve a unique name and secure the trade licence with guidance at every desk.",
		src: "/lottie/search.json"
	},
	{
		n: "02",
		title: "Complete documentation",
		copy: "Partner agreements, attestations and issuance — handled as one file, not a scavenger hunt.",
		src: "/lottie/paper.json"
	},
	{
		n: "03",
		title: "Marketing & promotions",
		copy: "Launch support so the company is visible the week the licence lands.",
		src: "/lottie/growth.json"
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
						src: "/logo.png",
						alt: "",
						className: "h-10 w-auto sm:h-12"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hidden leading-tight sm:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-sm font-bold tracking-wide text-paper",
							children: "KHALIS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[10px] font-semibold tracking-[0.18em] text-palm",
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
function ContactForm() {
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		setSent(true);
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center py-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LottiePlayer, {
				src: "/lottie/success.json",
				className: "h-40 w-full",
				label: "Request sent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-xl text-paper",
				children: "We’ll call you shortly."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-paper/70",
				children: "Your request is with the Khalis desk."
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Full name",
				name: "name",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Phone / WhatsApp",
				name: "phone",
				type: "tel",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Email",
				name: "email",
				type: "email"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-1.5 block text-sm text-paper/70",
					children: "Service needed"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					name: "service",
					className: "min-h-11 w-full rounded-xl border border-paper/15 bg-ink px-4 text-paper outline-none transition-colors duration-200 focus:border-palm",
					defaultValue: "",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						disabled: true,
						children: "Select a service"
					}), [
						"PRO Services",
						"Typing / Documentation",
						"Business Setup",
						"Visa Processing",
						"Certificate Attestation",
						"Equivalency Certificate",
						"DOH Professional Licensing",
						"Will Registration",
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
					className: "w-full rounded-xl border border-paper/15 bg-ink px-4 py-3 text-paper outline-none transition-colors duration-200 focus:border-palm",
					placeholder: "Tell us how we can help"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				className: "flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-palm font-semibold text-paper transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95",
				children: ["Send message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})
		]
	});
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-sm text-paper/70",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required,
			className: "min-h-11 w-full rounded-xl border border-paper/15 bg-ink px-4 text-paper outline-none transition-colors duration-200 focus:border-palm"
		})]
	});
}
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "home",
				className: "relative overflow-hidden bg-ink pt-24 text-paper sm:pt-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-1 bg-palm" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute right-0 top-24 h-40 w-40 bg-crimson/20 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:pb-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-4 inline-flex items-center gap-2 rounded-full border border-paper/15 px-3 py-1 text-xs font-medium text-paper/80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-palm text-palm" }), "Abu Dhabi · 4.9★ · 858+ Google reviews"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl",
								children: ["Documents, licences and PRO —", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-palm",
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
									className: "inline-flex min-h-12 items-center justify-center rounded-full border border-paper/20 px-7 text-sm font-semibold text-paper transition-colors duration-200 hover:border-paper/50",
									children: "Browse services"
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden rounded-2xl border border-paper/10 bg-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LottiePlayer, {
										src: "/lottie/typing.json",
										className: "mx-auto h-72 w-full sm:h-96",
										label: "Typing and documentation animation"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute -bottom-4 left-4 hidden max-w-[11rem] rounded-xl border border-paper/10 bg-ink/90 p-3 shadow-xl sm:block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LottiePlayer, {
										src: "/lottie/documents.json",
										className: "h-16 w-16"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs font-semibold",
										children: "Same-day typing"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute -right-2 top-8 hidden max-w-[11rem] rounded-xl border border-paper/10 bg-ink/90 p-3 shadow-xl sm:block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LottiePlayer, {
										src: "/lottie/handshake.json",
										className: "h-16 w-16"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs font-semibold",
										children: "PRO on call"
									})]
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "services",
				className: "py-20 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold tracking-widest text-palm uppercase",
							children: "What we offer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 max-w-xl font-display text-3xl font-bold tracking-tight sm:text-4xl",
							children: "Paperwork that actually moves."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-base leading-relaxed text-muted",
							children: "Featured government and professional files — plus a full typing-centre desk for everything else."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
							children: FEATURED.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex flex-col rounded-2xl border border-ink/10 bg-paper p-5 transition-transform duration-200 hover:-translate-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LottiePlayer, {
										src: item.src,
										className: "h-36 w-full"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-lg font-bold",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 flex-1 text-sm leading-relaxed text-muted",
										children: item.copy
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex flex-wrap gap-2",
										children: item.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-ink/5 px-2.5 py-1 text-xs font-medium text-ink",
											children: t
										}, t))
									})
								]
							}, item.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-16 rounded-2xl bg-ink px-6 py-10 text-paper sm:px-10",
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
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-4 shrink-0 text-palm" }), s]
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
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "process",
				className: "bg-palm py-20 text-paper sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold tracking-widest text-paper/80 uppercase",
							children: "Simple process"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl",
							children: "Three steps to grow the company"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-6 md:grid-cols-3",
							children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-2xl bg-paper p-6 text-ink",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LottiePlayer, {
										src: step.src,
										className: "h-40 w-full"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-xs font-bold tracking-widest text-palm",
										children: ["STEP ", step.n]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-display text-xl font-bold",
										children: step.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: step.copy
									})
								]
							}, step.n))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "about",
				className: "py-20 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold tracking-widest text-palm uppercase",
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
								className: "rounded-xl border border-ink/10 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl font-bold text-palm",
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
							className: "text-sm font-semibold tracking-widest text-palm uppercase",
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
							className: "mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-palm",
							children: "Leave a Google review"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-5 md:grid-cols-3",
							children: REVIEWS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "rounded-2xl border border-ink/10 bg-paper p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-3 flex gap-0.5 text-palm",
										children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-palm" }, i))
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
								className: "rounded-full border border-ink/10 px-3 py-1.5 text-xs font-medium text-muted",
								children: t
							}, t))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contact",
				className: "bg-ink py-20 text-paper sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold tracking-widest text-palm uppercase",
							children: "Get in touch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl",
							children: "Ready when you are"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 grid gap-12 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LottiePlayer, {
									src: "/lottie/contact.json",
									className: "mb-8 h-48 w-full max-w-sm",
									label: "Contact animation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-5 shrink-0 text-palm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
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
													className: "mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-palm",
													children: "Open in Google Maps"
												})
											] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-5 shrink-0 text-palm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold",
												children: "Call / WhatsApp"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: `tel:${PHONE_TEL}`,
												className: "text-lg font-semibold text-palm",
												children: PHONE
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-5 shrink-0 text-palm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold",
												children: "Email"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: `mailto:${EMAIL}`,
												className: "text-sm text-palm",
												children: EMAIL
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 size-5 shrink-0 text-palm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "w-full max-w-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mb-2 font-semibold",
													children: "Working hours"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
													className: "space-y-1 text-sm",
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
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 flex gap-3",
									children: [
										[INSTAGRAM, "Instagram"],
										[FACEBOOK, "Facebook"],
										[TIKTOK, "TikTok"]
									].map(([href, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex min-h-11 items-center rounded-full border border-paper/20 px-4 text-sm font-medium text-paper transition-colors duration-200 hover:border-palm",
										children: label
									}, label))
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-paper/10 bg-ink p-6 sm:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-bold",
										children: "Send a message"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 mb-6 text-sm text-paper/70",
										children: "We reply on WhatsApp and phone during working hours."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
								]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-paper/10 bg-ink py-10 text-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.png",
							alt: "",
							className: "h-10 w-auto"
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
				className: "fixed right-4 bottom-4 z-50 inline-flex min-h-12 items-center gap-2 rounded-full bg-palm px-5 text-sm font-semibold text-paper shadow-lg transition-transform duration-150 ease-out hover:bg-palm/90 active:scale-95",
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
