import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "Khalis Typing Center";

const publicHost = String(import.meta.env.VITE_PUBLIC_HOSTNAME ?? "")
  .trim()
  .replace(/^https?:\/\//, "");
const xBanner = publicHost ? `https://${publicHost}/x-banner.jpg` : undefined;

const FAMILY_VISA_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Khalis Typing Center — Family Visa Services in the UAE",
  description:
    "Bring your family to the UAE or renew their visas: birth and marriage certificate attestation, new visa applications, visa renewal, outside entry permit, 60/90-day self-sponsored visit visas, Family Golden Visa, and visa holding while you travel.",
  thumbnailUrl: "/poster-family.webp",
  uploadDate: "2026-08-26",
  duration: "PT59S",
  contentUrl: "/khalis-family-visa.mp4",
  embedUrl: "/#family-visa",
  transcript:
    "Looking to bring your family to the UAE or renew their visas without any stress? At Khalis Typing we provide complete family visa service with professional guidance and fast processing. Birth certificate attestation, marriage certificate attestation, new visa applications, visa renewal, outside entry permit, self-sponsored visit visas for 60 or 90 days, Family Golden Visa, and visa holding while you are away. Contact 050 120 1818 or info@khalisglobal.com.",
};

const VIDEO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Khalis Typing Center Abu Dhabi — Emirates ID, Typing & PRO Services",
  description:
    "Khalis Typing Center on Muroor Road, Abu Dhabi: Emirates ID services, official typing, PRO support, business setup, and expert consultation. Partner with Khalis.",
  thumbnailUrl: "/poster-office.webp",
  uploadDate: "2026-08-29",
  duration: "PT30S",
  contentUrl: "/khalis-office.mp4",
  embedUrl: "/#video",
  transcript:
    "Khalis Typing Center in Abu Dhabi. Emirates ID services, typing services, PRO support, business setup, Tasheel, Tadbeer, legal translation, and expert business consultation. Partner with Khalis — Muroor Road.",
};

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Khalis Typing Center",
  image: "/logo.png",
  logo: "/logo.png",
  url: "/",
  telephone: "+971501201818",
  email: "info@khalisglobal.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Muroor 31 signal, Zafaranah St, Al Sa'adah, Zone 1",
    addressLocality: "Abu Dhabi",
    addressCountry: "AE",
  },
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Khalis Typing Center in Abu Dhabi — PRO services, typing, business setup, visa processing, document attestation and professional licensing.",
      },
      { name: "theme-color", content: "#00665c" },
      ...(xBanner
        ? [
            { property: "x:game:image", content: xBanner },
            { property: "x:game:image:width", content: "1200" },
            { property: "x:game:image:height", content: "264" },
          ]
        : []),
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon-32.png" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preload", href: "/added-hero.webp", as: "image", type: "image/webp" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(VIDEO_SCHEMA),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(FAMILY_VISA_SCHEMA),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(ORG_SCHEMA),
      },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-mist text-ink antialiased">
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
