import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue_gray_500: "var(--blue-gray-500)",
        blue_gray_800: "var(--blue-gray-800)",
        blue_gray_900: "var(--blue-gray-900)",
        lime_green_200: "var(--lime-green-200)",
        lime_green_400: "var(--lime-green-400)",
      },
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
      },
    },
  },
  plugins: [],
};
export default config;
