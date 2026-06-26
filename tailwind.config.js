/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7c3aed",
        secondary: "#2563eb",
        dark: "#020617"
      }
    }
  },
  plugins: []
}