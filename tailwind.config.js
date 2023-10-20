/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark': '#333', // Define your dark mode background color
      },
      textColor: {
        'dark': '#fff', // Define your dark mode text color
      },
    },
  },
  plugins: [require("daisyui")],
}