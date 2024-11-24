/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const rotate = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-x-0": {
      transform: "rotateX(0deg)",
    },

    ".rotate-x-90": {
      transform: "rotateX(90deg)",
    },

    ".-rotate-x-90": {
      transform: "rotateX(-90deg)",
    },

    ".rotate-y-0": {
      transform: "rotateY(0deg)",
    },

    ".rotate-y-5": {
      transform: "rotateY(5deg)",
    },

    ".-rotate-y-5": {
      transform: "rotateY(-5deg)",
    },
  });
});

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "infinite-text-move": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },

      animation: {
        "infinite-text-move": "infinite-text-move 22s linear infinite",
      },

      fontFamily: {
        minecraft: "var(--minecraft)",
        poppins: "var(--poppins)",
        bulevar: "var(--bulevar)",
      },

      transformOrigin: {
        "right-center": "right center",
        "left-center": "left center",
        "top-center": "top center",
        "bottom-center": "bottom center",
      },

      transitionTimingFunction: {
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
      },

      fontSize: {
        navMenuItem: "clamp(3.75rem, 3.5073rem + 1.0356vw, 4.75rem)",
        xsmall: "clamp(2rem, 0.9565rem + 5.2174vw, 5rem)",
        small: "clamp(2.75rem, 1.6196rem + 5.6522vw, 6rem)",
        medium: "clamp(3.5rem, 1.9827rem + 6.474vw, 7rem)",
        large: "clamp(3.5rem, 2.7089rem + 3.3755vw, 6rem)",
        xlarge: "clamp(3.75rem, 1.9075rem + 7.8613vw, 8rem)",
      },

      width: {
        logo: "clamp(35rem, 4.1667rem + 64.2361vw, 81.25rem)",
        navMenu: "clamp(25rem, 12.5rem + 26.0417vw, 40rem)",
      },

      height: { "inner-header": "clamp(1.625rem, 0.7083rem + 1.9097vw, 3rem)" },

      padding: {
        header: "calc(clamp(5rem, 7.5vw, 10rem) * 0.2)",
        navMenu: "clamp(3.75rem, 3.4466rem + 1.2945vw, 5rem)",
        "space-sm": "clamp(1rem, 0.5665rem + 1.8497vw, 2rem)",
        "space-md": "clamp(1.75rem, 1.1539rem + 2.5434vw, 3.125rem)",
        "space-lg": "clamp(3.5rem, 2.4162rem + 4.6243vw, 6rem)",
        "space-xl": "clamp(6rem, 3.913rem + 10.4348vw, 12rem)",
      },

      margin: {
        header: "calc(clamp(5rem, 7.5vw, 10rem) * 0.2)",
        navMenu: "clamp(3.75rem, 3.4466rem + 1.2945vw, 5rem)",
        "space-sm": "clamp(1rem, 0.5665rem + 1.8497vw, 2rem)",
        "space-md": "clamp(1.75rem, 1.1539rem + 2.5434vw, 3.125rem)",
        "space-lg": "clamp(3.5rem, 2.4162rem + 4.6243vw, 6rem)",
        "space-xl": "clamp(6rem, 3.913rem + 10.4348vw, 12rem)",
      },

      gap: {
        md: "clamp(2.5rem, -2.9191rem + 23.1214vw, 15rem)",
      },

      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        accent: "var(--color-accent)",
      },
    },
  },

  plugins: [rotate],
};
