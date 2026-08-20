/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    { pattern: /^(bg|text|border|hover:bg|hover:border|hover:text|hover:shadow)-(emerald|blue|sky|indigo|violet|cyan|amber)-(50|100|200|300|400|500|600|700)/ },
    { pattern: /^shadow-(emerald|blue|sky|indigo|violet|cyan)-(500|600)\/10/ },
  ],
  theme: {
    extend: {
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
