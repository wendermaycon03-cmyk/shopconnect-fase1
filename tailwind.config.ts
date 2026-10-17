import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}","./src/components/**/*.{js,ts,jsx,tsx,mdx}","./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        navy: "#0F172A",
        muted: "#F1F5F9",
        slate: "#64748B"
      },
      borderRadius: { xl: "16px" }
    }
  },
  plugins: []
};
export default config;
