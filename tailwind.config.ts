import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#15120f",
        cream: "#fbf7f1",
        saffron: "#eab308",
        ember: "#dc2626"
      },
      boxShadow: {
        soft: "0 20px 70px rgba(33, 24, 13, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
