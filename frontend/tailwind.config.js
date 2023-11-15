/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      boxShadow: {
      'outline': '16px 19px 15px -3px rgba(0,0,0,0.1)',
    },},
    fontFamily:{
      'playpen':['Playpen Sans','cursive'],
      'poppins':['Poppins','sans-serif']
    }
  },
  plugins: [require("daisyui")],
}