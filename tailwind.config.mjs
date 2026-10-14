/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0f172a',
        'accent-blue': {
          DEFAULT: '#2563eb',
          hover: '#1d4ed8',
          subtle: '#eff6ff',
        },
        'accent-teal': {
          DEFAULT: '#0d9488',
          hover: '#0f766e',
          subtle: '#f0fdfa',
        },
        'bg-neutral': '#f8fafc',
        'surface-white': '#ffffff',
        'surface-card': '#ffffff',
        'surface-dark': '#0f172a',
        'surface-dark-alt': '#1e293b',
        'border-light': '#e2e8f0',
        'border-dark': '#334155',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        glow: '0 0 25px -5px rgba(37, 99, 235, 0.3)',
        'glow-teal': '0 0 25px -5px rgba(13, 148, 136, 0.3)',
      },
    },
  },
  plugins: [],
};
