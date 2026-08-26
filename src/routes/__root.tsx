import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "Khalis Typing Center";

const VIDEO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Khalis Typing Center Abu Dhabi — Emirates ID, Typing & PRO Services",
  description:
    "Office tour of Khalis Typing Center on Muroor Road, Abu Dhabi: Emirates ID services, official typing, PRO support, and expert business consultation.",
  thumbnailUrl: "/poster-hero.jpg",
  uploadDate: "2026-08-25",
  duration: "PT20S",
  contentUrl: "/khalis-hero.mp4",
  embedUrl: "/#video",
  transcript:
    "Khalis Typing Center in Abu Dhabi. Emirates ID services, typing services, PRO support, and expert business consultation. Partner with Khalis — Muroor Road.",
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
      { name: "theme-color", content: "#0e1712" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(VIDEO_SCHEMA),
      },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-paper text-ink antialiased">
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
