import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      opacity: {
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '80': '0.8',
        '90': '0.9',
        '95': '0.95',
      }
    },
  },
  plugins: [],
};
export default config;
