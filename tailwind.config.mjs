/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Colors resolve to CSS variables so the whole palette can be swapped
      // between dark (default) and light themes. Actual values live in
      // src/styles/global.css under :root and :root[data-theme="light"].
      // NOTE: no opacity modifiers (e.g. bg-green/20) are used on these tokens,
      // which keeps the bare var() form safe.
      colors: {
        'bg-base':      'var(--color-bg-base)',
        'bg-section':   'var(--color-bg-section)',
        'bg-card':      'var(--color-bg-card)',
        'bc-border':    'var(--color-bc-border)',
        'bc-border-hi': 'var(--color-bc-border-hi)',
        'green':        'var(--color-green)',
        'green-hi':     'var(--color-green-hi)',
        'amber':        'var(--color-amber)',
        'orange':       'var(--color-orange)',
        'bc-text':      'var(--color-bc-text)',
        'bc-muted':     'var(--color-bc-muted)',
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
