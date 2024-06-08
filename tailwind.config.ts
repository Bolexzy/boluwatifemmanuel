import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
  extend: {
      colors: {
        dark: '#04171C',
        light: '#F5F5F5',
        primary: '#CDD4C5',
        primaryDark: '#818A7C',
        primaryGradient: ' linear-gradient(258deg, #0D4949 -47.68%, rgba(170, 194, 194, 0.75) 17.82%, rgba(146, 201, 201, 0.00) 90.18%, rgba(13, 73, 73, 0.00) 132.63%))',
        darkGradient: 
        "linear-gradient(113deg, #04171C -16.34%, rgba(4, 23, 28, 0.28) -6.63%, rgba(4, 23, 28, 0.45) 13.75%, rgba(4, 23, 28, 0.27) 62.17%, rgba(4, 23, 28, 0.00) 109.53%)",
      },
      backgroundImage: {
        darkGradient: 
        "linear-gradient(113deg, #04171C -16.34%, rgba(4, 23, 28, 0.28) -6.63%, rgba(4, 23, 28, 0.45) 13.75%, rgba(4, 23, 28, 0.27) 62.17%, rgba(4, 23, 28, 0.00) 109.53%)",
        lightGradient: "linear-gradient(90deg, #D0E0EF 29%, #DEE1E8 65.5%, #EEEFF4 97.5%)",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
    screens: {
      "2xl": {max: "1535px"},
      "xl": {max: "1279px"},
      "lg": {max: "1023px"},
      "md": {max: "767px"},
      "sm": {max: "639px"},
      "xs": {max: "479px"},
    }
  },
  plugins: [],
}
export default config
