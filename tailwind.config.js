module.exports = {
  purge: {
    content: [
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: {
        standard: ["outline-none"],
      },
    },
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
