/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8", // Blue
        secondary: "#ef4444", // Red
        dark: "#000000", // Black
      },
    },
  },
  plugins: [],
};
