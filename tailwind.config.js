/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          background: 'var(--color-background)',
          surface: 'var(--color-surface)',
          text: 'var(--color-text)',
          muted: 'var(--color-muted-text)',
          border: 'var(--color-border)',
        },
      },
      fontFamily: {
        sans: ['var(--font-primary)', 'Hind Siliguri', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 12px 36px -12px rgba(17, 17, 17, 0.08)',
      },
    },
  },
  plugins: [],
};
