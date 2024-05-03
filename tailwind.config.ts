/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "new-red": "#F15858",
        "new-background-page": "#F7F8FB",
        "new-blue": "#2775EC",
        "new-light-blue": "#F0F6FF",
      },
    },
  },
  plugins: [],
};
