/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#d1d5db',
        'custom-blue': '#1E90FF',
        'custom-red': '#FF6347',
        'custom-black': '#000000',
        'custom-white': '#ffffff',
        'custom-green': '#bef264'
      },
    },
  },
  plugins: [],
}

