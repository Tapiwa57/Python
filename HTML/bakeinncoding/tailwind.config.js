/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',    // ← includes app dir pages and components
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',  // optional if using /pages
  ],
  theme: {
    extend: {
      keyframes: {
        shadowPulse: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(0,0,0,0)' },
          '50%': { boxShadow: '0 0 30px rgba(0,0,0,0.7)' },
        },
      },
      animation: {
        shadowPulse: 'shadowPulse 4s linear infinite',
      },
    },
  },
  plugins: [],
};
