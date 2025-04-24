
import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f7ff',
          100: '#e6efff',
          200: '#c2d9ff',
          300: '#99c3ff',
          400: '#6699ff',
          500: '#3366ff',
          600: '#0033cc',
          700: '#002699',
          800: '#001a66',
          900: '#000d33',
        },
        pink: {
          50: '#fff0f4',
          100: '#ffe1e9',
          200: '#ffc3d4',
          300: '#ffa5be',
          400: '#ff87a9',
          500: '#FF477E',
          600: '#e63f71',
          700: '#cc3764',
          800: '#b32f57',
          900: '#99274a',
        },
        navy: {
          50: '#e6e7ea',
          100: '#cccfd5',
          200: '#9aa0ab',
          300: '#677080',
          400: '#344056',
          500: '#0A1128',
          600: '#090f24',
          700: '#080d20',
          800: '#070b1c',
          900: '#060918',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'hover': '0 10px 30px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [flowbite.plugin(),],
}