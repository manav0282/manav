import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: { display: ['Inter','ui-sans-serif','system-ui','Helvetica','Arial','sans-serif'] },
      colors: {
        base: { bg:'#060608', fg:'#f5f7fb', muted:'#9aa1ac', line:'#1a1b1f', accent:'#6aa8ff', glow:'#7bd7ff' }
      },
      boxShadow: { glow: '0 0 40px rgba(123,215,255,0.15)', card: '0 10px 40px -10px rgba(0,0,0,0.5)' }
    },
  },
  plugins: [],
};
export default config;
