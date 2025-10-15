import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: { display: ['Inter','ui-sans-serif','system-ui','Helvetica','Arial','sans-serif'] },
      colors: { base: { bg:'#0a0a0a', fg:'#f5f5f7', muted:'#8e8e93', line:'#2c2c2e' } },
      boxShadow: { soft: '0 20px 60px -24px rgba(0,0,0,0.5)' }
    },
  },
  plugins: [],
};
export default config;
