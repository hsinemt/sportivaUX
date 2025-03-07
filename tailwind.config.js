/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#00468c',
        secondary: '#40BFFF',
        accent: '#00468c',
        background: '#f8f9fa',
        text: '#333333',
        title: '#FFFFFF',
        card: "#FF0000",
        backgroundgray: "#f8f9fa",
        gray:{
          "100": "#f8f9fa",
            "200": "#e9ecef",
        }
      },
    },
  },
  plugins: [],
}