/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A1620',
        panel: '#0F2436',
        panel2: '#132B40',
        edge: '#22475A',
        teal: '#2B9C93',
        tealLight: '#4FC3B8',
        amber: '#F5A623',
        mist: '#E9F2F1',
        slate: '#7C93A0',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      keyframes: {
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'spin-slow-rev': {
          to: { transform: 'rotate(-360deg)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 40s linear infinite',
        'spin-slow-rev': 'spin-slow-rev 60s linear infinite',
        pulseDot: 'pulseDot 1.4s ease-in-out infinite',
        rise: 'rise 0.7s ease-out both',
      },
    },
  },
  plugins: [],
}
