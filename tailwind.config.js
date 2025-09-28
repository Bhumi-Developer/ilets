/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0A79DF',
        secondary: '#0A6ECA',
        accent: '#F2F7FB',
        dark: '#1a202c',
      },
    },
  },
  plugins: [],
}
