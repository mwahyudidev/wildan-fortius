/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#023299",
        muted: "#64748b"
      },
      margin: {
        
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

