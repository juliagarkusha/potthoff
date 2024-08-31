import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app//*.{js,ts,jsx,tsx,mdx}",
    "./pages//*.{js,ts,jsx,tsx,mdx}",
    "./components///*.{js,ts,jsx,tsx,mdx}",

    // Or if using src directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      fontFamily: {
        'clash-display': ['var(--font-clash-display)'],
        'clash-grotesk': ['var(--font-clash-grotesk)'],
      },
    },
  },
  plugins: [],
};

export default config;
