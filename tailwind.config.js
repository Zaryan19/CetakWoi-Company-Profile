/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "'Inter'", "sans-serif"],
        editorial: ["'Cormorant Garamond'", "'Playfair Display'", "serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#1A1A1A", // Ink Black for text and primary controls
          60: "#1A1A1A",
          70: "#27272A",
        },
        secondary: {
          DEFAULT: "#FFFFFF", // Crisp White
        },
        tertiary: {
          DEFAULT: "#114576", // Deep corporate blue accent
        },
        neutral: {
          DEFAULT: "#E4E4E7", // Zinc 200 hairline borders
          border: "#E4E4E7",
          muted: "#52525B",  // Zinc 600 readable muted text
        },
        surface: {
          DEFAULT: "#FFFFFF", // White paper canvas
          2: "#F4F4F5",       // Zinc 100 hover / containers
          3: "#E4E4E7",       // Zinc 200 borders / dividers
        },
        "on-surface": {
          DEFAULT: "#1A1A1A",
          muted: "#52525B",
        },
        "muted-text": "#52525B",
        error: {
          DEFAULT: "#D92D20",
        },
        accent: {
          blue: "#114576",
        },
      },
      borderRadius: {
        none: "0px",
        sm: "4px",
        md: "4px",
        lg: "8px",
        xl: "8px",
        full: "9999px",
      },
      maxWidth: {
        container: "1440px",
      },
    },
  },
  plugins: [],
};
