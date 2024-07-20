/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Concer: ["Black Ops One", "sans-serif"],
        Calistoga: ["Calistoga", "serif"],
        Mochiy: ["Mochiy Pop One", "sans-serif"],
        Cedarville: ["Cedarville Cursive", "cursive"],
        Pacifico: ["Pacifico", "cursive"],
        Great: ["Great Vibes", "cursive"],
        Kaushan: ["Kaushan Script", "cursive"],
        Jacquard: ["Jacquard 24", "system-ui"],
        poppins: ["Poppins", "sans-serif"]
       }
    },
  },
  plugins: [],
}

