import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floatUp1: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        floatUp2: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '25%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        floatUp3: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '25%': { transform: 'translateY(100px)', opacity: '0' },
          '50%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        floatUp1: 'floatUp1 1s ease-out',
        floatUp2: 'floatUp2 1s ease-out',
        floatUp3: 'floatUp3 1s ease-out',
        fadeIn: 'fadeIn 3s ease-out',
      },
      backgroundImage: {
        'request-form1': "url('/images/request1.jpeg')",
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
