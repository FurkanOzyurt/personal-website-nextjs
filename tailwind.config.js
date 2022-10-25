/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#F4F5F7",
          white: "#FCFCFE",
          text: "#00283A",
          supText: "#7B7B7D",
        },
        primary: "#AFB42B",
      },
      screens: {
        lgx: { max: "992px" },
        mdx: { max: "768px" },
      },
    },
  },
  plugins: [],
};
