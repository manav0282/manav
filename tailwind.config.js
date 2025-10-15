/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        ink: "#0b1020",
        mist: "#0b1020",
        accent: "#a78bfa"
      },
      boxShadow: {
        glow: "0 0 40px rgba(14,165,233,.25)"
      },
      backgroundImage: {
        'grid': "radial-gradient(circle at 1px 1px, rgba(255,255,255,.08) 1px, transparent 0)",
      }
    },
  },
  plugins: [],
};
