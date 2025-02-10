/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "bg-gradient-to-r from-blue-100 to-gray-200",
        secondary: "#1E293B", // Outra cor personalizada
      },
    },
  },
  plugins: [],
};
