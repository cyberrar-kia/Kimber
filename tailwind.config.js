/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#1C1814',
          light: '#2D2720',
          soft: '#3D3530',
        },
        cream: {
          DEFAULT: '#FAF7F2',
          warm: '#F5EFE6',
          deep: '#EDE4D8',
        },
        brass: {
          DEFAULT: '#B8955E',
          light: '#C9A97A',
          dark: '#9A7A48',
        },
        sage: {
          DEFAULT: '#4A5240',
          light: '#7B8A6E',
          pale: '#B5BFB0',
        },
        sand: {
          DEFAULT: '#D4B896',
          light: '#E8D5BC',
          deep: '#BC9B77',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'slide-in-left': 'slideInLeft 0.8s ease forwards',
        'slide-in-right': 'slideInRight 0.8s ease forwards',
        'ken-burns': 'kenBurns 20s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.08) translate(-1%, -1%)' },
        },
      },
      transitionTimingFunction: {
        'elegant': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
};
