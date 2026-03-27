/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bms: {
          crimson: '#C41230',
          warmGold: '#E0A96D',
          nearBlack: '#0D0D0D',
          surface: '#141414',
          cream: '#F0EDE8',
          muted: '#8A8A8A',
          blue: '#2D6FC4',
          success: '#3FB06A',
          border: 'rgba(255,255,255,0.08)'
        }
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"Courier New"', 'monospace']
      }
    },
  },
  plugins: [],
}
