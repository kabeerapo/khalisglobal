import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base = env.VITE_BASE || "/";

  return {
    base,
    plugins: [tailwindcss()],
    publicDir: "public",

    build: {
      outDir: "dist",
      emptyOutDir: true,
      // Keep media as separate files (no base64 inlining of large assets)
      assetsInlineLimit: 0,
      cssCodeSplit: true,
      cssMinify: true,
      sourcemap: false,
      minify: "esbuild",
      target: ["es2018", "chrome70", "safari13", "firefox68"],
      reportCompressedSize: true,
      // Promo videos live in public/ and are copied as-is
      chunkSizeWarningLimit: 1500,
      modulePreload: {
        polyfill: true,
      },
      rollupOptions: {
        output: {
          entryFileNames: "assets/js/[name]-[hash].js",
          chunkFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: (assetInfo) => {
            const name = assetInfo.name || "";
            if (/\.(css)$/i.test(name)) return "assets/css/[name]-[hash][extname]";
            if (/\.(png|jpe?g|gif|svg|webp|avif|ico)$/i.test(name)) {
              return "assets/img/[name]-[hash][extname]";
            }
            if (/\.(woff2?|ttf|otf|eot)$/i.test(name)) {
              return "assets/fonts/[name]-[hash][extname]";
            }
            return "assets/[name]-[hash][extname]";
          },
        },
      },
    },

    esbuild: {
      // Strip debug noise from production bundles
      drop: mode === "production" ? ["console", "debugger"] : [],
      legalComments: "none",
    },

    server: {
      host: "0.0.0.0",
      port: 5173,
      strictPort: true,
    },

    preview: {
      host: "0.0.0.0",
      port: 4173,
      strictPort: true,
    },
  };
});
