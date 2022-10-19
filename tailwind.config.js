/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Roboto': ['Roboto', 'ui-sans-serif', 'sans-serif'],
      'Comfortaa': ['Comfortaa', 'ui-monospace', 'monospace'],
      'fantasy': ['fantasy', 'Roboto']
    },
  },
  plugins: [],
}
