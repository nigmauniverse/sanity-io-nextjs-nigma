import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "m3-sys-light-secondary-container": "#ffe083",
        "m3-sys-light-on-primary-container": "#002023",
        "m3-white": "#fff",
        "m3-sys-light-tertiary-container": "#d4e3ff",
        "m3-black": "#000",
        "m3-sys-dark-on-secondary": "#3c2f00",
        "m3-sys-light-on-tertiary-container": "#001c3a",
        "m3-sys-light-on-primary-fixed-variant": "#004f55",
        "m3-sys-light-primary-container": "#84f3ff",
        darkolivegreen: "rgba(87, 69, 0, 0.1)",
        teal: "rgba(0, 132, 142, 0.3)",
        "m3-sys-light-primary": "#006971",
        "m3-sys-light-outline": "#6f7975",
        khaki: "#fee084",
        "m3-sys-light-secondary-fixed-dim": "#e8c349",
        gray: {
          "100": "#121f25",
          "200": "rgba(8, 8, 8, 0.25)",
        },
        "m3-sys-light-inverse-surface": "#2f3033",
        "m3-sys-light-surface-container-high": "#e9e8eb",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        "m3-label-large": "Roboto",
        inter: "Inter",
      },
      borderRadius: {
        "81xl": "100px",
        "37xl": "56px",
        "563xl-5": "582.5px",
      },
    },
    fontSize: {
      base: "16px",
      "13xl": "32px",
      "3xl": "22px",
      "26xl": "45px",
      "9xl": "28px",
      "25xl": "44px",
      "38xl": "57px",
      "2xs": "11px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
  corePlugins: {
    preflight: false,
  },
};
