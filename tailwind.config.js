/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#0e0f12',
        bgSurface: '#15171c',
        bgSurfaceElevated: '#1e2128',
        bgSurfaceCard: '#181a20',
        accentGold: '#d97706',
        accentGoldLight: '#fbbf24',
        accentAmber: '#b45309',
        accentSage: '#385d49',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Cinzel', 'serif'],
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 10px 30px -10px rgba(217, 119, 6, 0.25)',
      }
    },
  },
  plugins: [],
}

