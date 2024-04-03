/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage: {
      'bgparticles': "url('/images/bg-holding.png')",
    },
    container: {
      screens: {
      'lg':'960px',
      'xl':'1140px',
      '2xl':'1440px',  
      },
      center: true,
    },
    extend: {
      fontFamily: {
        tinos: ["Tinos", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        giusti: '#3399FF',
        fsb: '#082057',
        holding: '#469BF8',
        jotacom: '#FF6699',
        fsbcom: '#40693B',
        loures: '#3398FF',
        giustipr: '#3398CB',
        ipri: '#66CB66',
        f5growth: '#24BB2F',
        beon: '#5EDCAB',
        deck: '#344BCD',
      },
      container: {
        center: true,
      },
      fontSize: {
        '22xl': '1.75rem',
        '3xl': '2rem',
        '44xl': '4.063rem',
        'titulo-holding': '5rem',
        '9xl': '9.5rem',
        '10xl': '11.93rem',
        '11xl': '12.25rem',
        '12xl': '7.875rem',
        'big': ['15.625rem', '9.25rem'],
        'extra': '18.25rem',
        'mobile': '11.25rem',
      },
      opacity: {
        '35': '.35',
      },
      spacing: {
        '11': '0.125rem',
        '17': '4.5rem',
        '54': '13.5rem',
      }
    },
  },
  plugins: [],
}
