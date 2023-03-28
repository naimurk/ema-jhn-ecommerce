/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      mytheme: {



        "primary": "#1C2B35",



        "secondary": "#d82fab",



        "accent": "#1C2B35",



        "neutral": "#28253C",



        "base-100": "#EAEEF0",



        "info": "#71C0D6",



        "success": "#198566",



        "warning": "#D49516",



        "error": "#F43315",
      },
    },
  ],
  plugins: [require("daisyui")],
}
