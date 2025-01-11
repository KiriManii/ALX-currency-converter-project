/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4f9be8", // Soft Blue
        secondary: "#f0f8ff", // Light Blue background
        dark: "#333333", // Dark gray text for contrast
        light: "#f0f0f0", // Soft light gray for secondary elements
      },
    },
  },
  plugins: [],
};
