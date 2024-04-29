/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "430px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)"],
        montserrat: ["var(--font-montserrat)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "below-zero": {
          blue: {
            100: "#CCEAFF",
            200: "#47A5E7",
          },
          red: {
            100: "#FFD9E1",
            200: "#FF4E73",
          },
          yellow: {
            100: "#F5E8CC",
            200: "#F5BF57",
          },
          purple: {
            100: "#F5EAFF",
            200: "#693CB8",
          },
          green: {
            100: "#DCEBBD",
            200: "#8CB537",
          },
        },
        primary: {
          DEFAULT: "#1C56A6",
          background: "#FCFEFF",
        },
        secondary: { background: "#F3F6FA" },
        text: {
          subtext: "#F3F6FA",
        },
        border: "#CFCFCF",
      },
    },
  },
  plugins: [],
};
