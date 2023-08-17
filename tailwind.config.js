/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: "0.125rem",
        sm: "0.125rem",
        lg: "0.125rem",
        xl: "0rem",
        "2xl": "4rem",
      },
    },
     screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '992px',

      'xl': '1200px',

      '2xl': '1400px',
    }
  },
  plugins: [],
};
