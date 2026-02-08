/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0b',
          card: '#141417',
          'card-hover': '#1a1a1f',
        },
        border: {
          DEFAULT: '#222228',
          hover: '#333340',
        },
        text: {
          DEFAULT: '#e4e4e7',
          muted: '#71717a',
          dim: '#52525b',
        },
        accent: {
          DEFAULT: '#6366f1',
          glow: 'rgba(99, 102, 241, 0.15)',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
      },
    },
  },
  plugins: [],
};
