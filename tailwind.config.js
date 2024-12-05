/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // You can extend or override Tailwind's default colors here
        customDarkBg: '#1a1a1a', // Example custom background color for dark mode
        customDarkText: '#e0e0e0', // Example custom text color for dark mode
        
      },
    },
  },
  darkMode: 'class', // This enables dark mode with the 'class' strategy
  plugins: [
    require('daisyui'),
    require('flowbite/plugin'),
  ],
}
