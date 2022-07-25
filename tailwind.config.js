/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   "hero-pattern": "url('/src/images/bg-login-img.jpg')",
      // },
      colors: {
        "dark-overlay": "#00000082",
      },
    },
  },
  plugins: [],
};
