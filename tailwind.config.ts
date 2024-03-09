import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        floatUp: 'floatUp 2s ease-out',
        fadeIn: 'fadeIn 3s ease-out',
      },
      backgroundImage: {
        'request-form1': "url('/images/request1.jpeg')",
      }
    },
  },
  plugins: [],
};
export default config;
