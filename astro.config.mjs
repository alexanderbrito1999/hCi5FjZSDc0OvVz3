import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless"; // o /edge, /static

export default defineConfig({
  output: "server", // o 'static' o 'hybrid'
  adapter: vercel({
    isr: false,
    webAnalytics: { enabled: true },
    // otras opciones...
  }),
});
