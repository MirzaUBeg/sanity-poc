import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SalesforceSans-Regular", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      colors: {
        "sfplus-dark": "#1E1A58",
        "sfplus-light-blue": "#0176D3",
        "beacon-blue": "#A2C0CA",
        "custom-beige": "#FFE0B5",
        "custom-limegreen": "#BDB246",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
