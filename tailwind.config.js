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
    extend: {
      cursor: {
        grab: "grab",
        grabbing: "grabbing",
      },
    },
  },
  plugins: [],
};
