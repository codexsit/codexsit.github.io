/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#232323",
        primary: "#E76941",
        text: "#F7F7F7",
      },
      screens: {
        xs: "0px",
        sm: "600px",
        md: "900px",
        lg: "1200",
        xl: "1536px",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
