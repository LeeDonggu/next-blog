import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        ligth: {
          100: '#F1F3F5'
        },
        dark: {
          800: '#1E1E1E',
          900: '#121212',
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
} satisfies Config;
