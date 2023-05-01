/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          'beige': '#EAE7DC', // Background Color // Light Beige
          'tan': '#D8C3A5', // Hover Color? // Complimentary Color? // Slightly Darker Beige
          'gray': '#8E8D8A', // Footer Color // Text Color? // Gray
          'coral': '#E98074', // Hover Color? // Complimentary Color? // Light Red
          'red': '#E85A4F', // Main Color // Pop Color // Bright Red
          // Example of how to use colors: 
          // text-custom-gray, 
          // bg-custom-beige, 
          // hover:bg-custom-tan
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

