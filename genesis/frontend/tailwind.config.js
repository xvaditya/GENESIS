/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "error-dim": "#b92902",
        "outline": "#7a7672",
        "primary-container": "#fd8b00",
        "on-tertiary": "#edf3ff",
        "on-primary": "#fff0e7",
        "secondary": "#705900",
        "surface-container": "#ede7e2",
        "surface-container-highest": "#e2dcd6",
        "secondary-fixed-dim": "#eec540",
        "on-tertiary-container": "#003258",
        "on-tertiary-fixed-variant": "#003b67",
        "on-primary-fixed-variant": "#512800",
        "surface-container-high": "#e7e1dc",
        "surface-tint": "#8c4a00",
        "tertiary-dim": "#00528b",
        "surface-bright": "#fbf5f0",
        "on-secondary": "#fff2d4",
        "primary": "#8c4a00",
        "on-error-container": "#520c00",
        "secondary-fixed": "#fdd34d",
        "on-surface": "#302e2b",
        "on-secondary-container": "#5c4900",
        "inverse-surface": "#0f0e0b",
        "tertiary-container": "#70b5ff",
        "inverse-primary": "#fd8b00",
        "surface-variant": "#e2dcd6",
        "on-tertiary-fixed": "#001930",
        "on-surface-variant": "#5e5b57",
        "on-primary-container": "#442100",
        "inverse-on-surface": "#a09c98",
        "background": "#fbf5f0",
        "outline-variant": "#b1aca8",
        "surface-dim": "#d9d3cd",
        "error-container": "#f95630",
        "error": "#b02500",
        "secondary-dim": "#624d00",
        "tertiary": "#005e9f",
        "tertiary-fixed": "#70b5ff",
        "surface": "#fbf5f0",
        "primary-fixed": "#fd8b00",
        "on-secondary-fixed-variant": "#675200",
        "on-secondary-fixed": "#463600",
        "surface-container-low": "#f6f0ea",
        "tertiary-fixed-dim": "#4ca8ff",
        "primary-dim": "#7b4000",
        "on-background": "#302e2b",
        "surface-container-lowest": "#ffffff",
        "secondary-container": "#fdd34d",
        "on-primary-fixed": "#180800",
        "on-error": "#ffefec"
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Plus Jakarta Sans", "sans-serif"],
        "body": ["Plus Jakarta Sans", "sans-serif"],
        "label": ["Plus Jakarta Sans", "sans-serif"]
      },
      animation: {
        "blob-bounce": "blob-bounce 0.6s ease-in-out infinite",
        "blob-pulse": "blob-pulse 2s ease-in-out infinite",
        "blob-blink": "blob-blink 2.5s ease-in-out infinite",
      },
      keyframes: {
        "blob-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        },
        "blob-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" }
        },
        "blob-blink": {
          "0%": { opacity: "1" },
          "10%": { opacity: "0.2" },
          "15%": { opacity: "1" },
          "45%": { opacity: "1" },
          "50%": { opacity: "0.2" },
          "55%": { opacity: "1" },
          "100%": { opacity: "1" }
        }
      }
    },
  },
  plugins: [],
}
