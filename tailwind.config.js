/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#1e40af',
        accent: '#3b82f6',
        dark: '#1f2937',
        light: '#f9fafb'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
