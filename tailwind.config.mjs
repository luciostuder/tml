/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",  // Make sure to match your pages directory
    "./components/**/*.{js,ts,jsx,tsx}",  // Match your components directory
    "./app/**/*.{js,ts,jsx,tsx}",  // Match your app directory
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'], 
      },
    },
    keyframes: {
      slide: {
        '0%, 100%': { transform: 'translateX(0)' },
        '50%': { transform: 'translateX(15%)' }
      },
    },
    animation: {
      slide: 'slide 4s ease-in-out infinite',
    },
  },
  plugins: [],
};
