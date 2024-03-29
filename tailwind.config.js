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
        primary: "#1071fd",
        "primary-drk": "#08387d",
        "placeholder-txt": "#9ca3af",
        "form-ash": "#c7c7cd",
        "custom-bg": "#ededed",
      },
    },
  },
  plugins: [],
};
