/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#232323",
        primary: "#E76941",
        foreground: "#F7F7F7",
        gray: "737373",
      },
      screens: {
        xs: "0px",
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        gothic: ["League Gothic", "sans-serif"]
      },
    },
  },
  plugins: [],
};
