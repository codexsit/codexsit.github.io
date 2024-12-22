/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E76941",
          light: "#FFA06D",
          dark: "#B54B1E",
          contrastText: "#F7F7F7",
        },
        secondary: {
          DEFAULT: "# ",
          light: "#A3A3A3",
          dark: "#222222",
        },
        background: {
          elevation: "#2a2a2a",
          dark: "#232323",
          light: "#F7F7F7",
        },
        text: {
          light: "#F7F7F7",
          dark: "#232323",
        },
        gradient: {
          light: "#383838",
          dark: "#222222 ",
        },
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
        gothic: ["League Gothic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
