/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg-base':    '#0D0D0D',
        'bg-section': '#141414',
        'bg-card':    '#1E1E1E',
        'bc-border':  '#2A2A2A',
        'bc-border-hi': '#333333',
        'green':      '#3E8B5E',
        'green-hi':   '#4CAF75',
        'amber':      '#E8A020',
        'orange':     '#E55C1A',
        'bc-text':    '#E8E0D0',
        'bc-muted':   '#7A7065',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      borderRadius: {
        'sm': '2px',
      },
    },
  },
  plugins: [],
};
