/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./theme-tailwind.preset.js')],
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}', './library/**/src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        dmSerif: ['"DM Serif"', 'sans-serif'],
      },
      borderWidth: {
        1: '1px',
      },
      colors: {
        black: '#000',
        black333: '#333',
        white: '#FFF',
        black100: 'rgba(0, 0, 0, 0.10)',
        black300: 'rgba(0, 0, 0, 0.30)',
        black400: 'rgba(0, 0, 0, 0.40)',
        grayCapture: 'rgba(201, 201, 204, .48)',
        orangePale: '#FFF1C8',
        peachPale: '#EEDAC7',
        greenPale: '#D7E9CC',
        greenLight: '#c2ffd0',
        yellowWarm: '#FCE396',
        bluePale: '#D5DEF4',
        purplePale: '#DECCE6',
        coralPale: '#FDCBB2',
        mint: '#C2FFD0',
        grayWarm: '#E2E0D5',

        // Typography
        primary: '#000',
        secondary: '#666',
        tertiary: '#999',
        disabled: '#CCC',
        link: '#1677FF',

        // Beige
        beige100: '#F9F7F1',
        beige133: '#f9f7f133',
        beige200: '#FAE7CE',
        beige300: '#FFF3C3',
        beige350: '#F4F1E6',
        beige400: '#F3F1D7',
        beige500: '#F4E3E2',
        beige600: '#6E1B25',

        // Separators
        sep100: '#E6E6E6',
        sep200: '#F2F2F2',

        // Gray
        gray100: '#E6E6E6',
        gray150: '#666666',
        gray200: '#686868',
        gray250: '#D9D9D9',
        gray300: '#F5F5F5',
        gray350: '#BBBBBB',
        gray450: '#999999',
        gray600: '#696969',
        gray650: '#F1F0F0',
        grayDark: '#2A2F2B',

        // Grey
        grey100: '#e0e0e0',

        // Blue
        blue300: '#D5E8FF',

        // Green
        green100: '#22BB5F',

        // Error
        error: '#C92121',
        red100: '#D3011C',
      },
      fontSize: {
        200: ['12.5rem', { lineHeight: '1' }],
        62: ['3.875rem', { lineHeight: '1' }],
        60: ['3.75rem', { lineHeight: '1.2' }],
        50: ['3.125rem', { lineHeight: '1.2' }],
        48: ['3rem', { lineHeight: '1.2' }],
        40: ['2.5rem', { lineHeight: '1.2' }],
        36: ['2.25rem', { lineHeight: '1.2' }],
        34: ['2.125rem', { lineHeight: '1.1' }],
        32: ['2rem', { lineHeight: '1.2' }],
        30: ['1.875rem', { lineHeight: '1.2' }],
        28: ['1.75rem', { lineHeight: '1.2' }],
        24: ['1.5rem', { lineHeight: '1.2' }],
        22: ['1.375rem', { lineHeight: '1.2' }],
        20: ['1.25rem', { lineHeight: '1.2' }],
        18: ['1.125rem', { lineHeight: '1.2' }],
        16: ['1rem', { lineHeight: '1.2' }],
        15: ['0.9375rem', { lineHeight: '1.125' }],
        14: ['0.875rem', { lineHeight: '1.5' }],
        12: ['0.75rem', { lineHeight: '1.5' }],
        10: ['0.625rem', { lineHeight: '1.5' }],
      },
      padding: {
        1.25: '0.3125rem',
        1.75: '0.4375rem',
        3.75: '0.9375rem',
      },
      spacing: {
        15: '3.75rem',
        295: '18.5rem',
      },
      boxShadow: {
        default: '0px 5px 30px 0px rgba(0, 0, 0, 0.3)',
        100: '2px 2px 10px 0 rgba(0, 0, 0, 0.40)',
        200: '0px 0px 24px 0px rgba(0, 0, 0, 0.25)',
        300: '0px 1px 16px 0px rgba(0, 0, 0, 0.08)',
      },
      writingMode: {
        'horizontal-tb': 'horizontal-tb',
        'vertical-rl': 'vertical-rl',
        'vertical-lr': 'vertical-lr',
      },
      height: {
        'custom-full-84': 'calc(100% - 84px)',
      },
      lineHeight: {
        1.3: '1.3',
      },
      keyframes: {
        fadeAnimate: {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeAnimate: 'fadeAnimate 1s ease-in-out infinite alternate',
        slideIn: 'slideIn 0.4s ease-in-out forwards',
      },
      screens: {
        xs: '480px',
        xl1780: '1780px',
        xl1081: '1081px',
        '3xl': '120rem',
        xl2080: '2080px',
      },
    },
  },
  plugins: [
    require('tailwindcss-logical'),
    function ({ addUtilities, addVariant }) {
      const newUtilities = {
        '.writing-horizontal': {
          'writing-mode': 'horizontal-tb',
        },
        '.writing-vertical-rl': {
          'writing-mode': 'vertical-rl',
        },
        '.writing-vertical-lr': {
          'writing-mode': 'vertical-lr',
        },
        '.webkit-overflow-touch': {
          '-webkit-overflow-scrolling': 'touch',
        },
        '.webkit-overflow-auto': {
          '-webkit-overflow-scrolling': 'auto',
        },
      }

      addUtilities(newUtilities)
      addVariant('firefox', '@supports (-moz-appearance: none)')
      addVariant('chrome', '@supports (-webkit-appearance: none) and (not (-moz-appearance: none))')
    },
  ],
}
