/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          200: "#e0e7ff",
          400: "#625fc7",
          500: "#5047e5",
        },
        grey: {
          300: "#dcdcdd",
          100: "#edf2f0"
        },
        background: {
          100: "#f8fafc",
        },

      },
    },
  },
  plugins: [],
};
