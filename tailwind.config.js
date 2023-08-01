/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "89rem",
    },
    extend: {
      gap: {
        33: "8.5rem",
      },
    },
  },
  plugins: [],
};
