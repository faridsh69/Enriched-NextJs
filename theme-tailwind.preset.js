/** @type {import('tailwindcss').Config} */
module.exports = {
  // Note: prefix is NOT set here because it would apply to the entire app
  content: [],
  theme: {
    extend: {
      screens: {
        'theme-xs': '360px',
        'theme-sm': '720px',
        'theme-md': '1024px',
        'theme-lg': '1280px',
        'theme-xl': '1920px',
        // Range breakpoints (min–max) for targeting specific viewport ranges only
        'theme-xs-only': { min: '360px', max: '719px' },
        'theme-sm-only': { min: '720px', max: '1023px' },
        'theme-md-only': { min: '1024px', max: '1279px' },
        'theme-lg-only': { min: '1280px', max: '1919px' },
        // Semantic breakpoint aliases for typography responsive system
        // Figma: https://www.figma.com/design/zUAUzMfk0m8d3BypYnW02o/Design-library?node-id=8014-36
        mobile: '360px',
        tablet: '720px',
        desktop: '1024px',
      },

      maxWidth: {
        'container-lg': 'var(--theme-container-lg)',
        'container-xl': 'var(--theme-container-xl)',
      },
      boxShadow: {
        'theme-glass': '0 2px 40px 0 rgba(0, 0, 0, 0.1)',
        'theme-float': '0px 1px 16px 0px rgba(0, 0, 0, 0.08)', // Figma: dropdown/popover shadow
        'theme-dropdown': '0px 4px 15px 0px rgba(0, 0, 0, 0.2)', // Figma: Nav Bar Drop Shadow
      },
      // Border Radius: https://www.figma.com/design/zUAUzMfk0m8d3BypYnW02o/Design-library?node-id=52-294&m=dev
      borderRadius: {
        'theme-xxs': '0.25rem', // 4px
        'theme-xs': '0.375rem', // 6px
        'theme-s': '0.5rem', // 8px
        'theme-sm': '0.75rem', // 12px
        'theme-m': '1rem', // 16px
        'theme-ml': '1.25rem', // 20px
        'theme-l': '1.5rem', // 24px
        'theme-xl': '2rem', // 32px
        'theme-xxl': '2.75rem', // 44px
        'theme-xxxl': '4rem', // 64px
      },
      // Spacing: https://www.figma.com/design/zUAUzMfk0m8d3BypYnW02o/Design-library?node-id=45-10585&m=dev
      spacing: {
        'theme-xxs': '0.25rem', // 4px
        'theme-xs': '0.375rem', // 6px
        'theme-s': '0.5rem', // 8px
        'theme-sm': '0.75rem', // 12px
        'theme-m': '1rem', // 16px
        'theme-ml': '1.25rem', // 20px
        'theme-l': '1.5rem', // 24px
        'theme-xl': '2rem', // 32px
        'theme-xxl': '2.75rem', // 44px
        'theme-xxxl': '4rem', // 64px
        // Icon Sizes: https://www.figma.com/design/zUAUzMfk0m8d3BypYnW02o/Design-library?node-id=52-1017&m=dev
        'theme-icon-xxs': '0.5rem', // 8px
        'theme-icon-xs': '0.75rem', // 12px
        'theme-icon-s': '1rem', // 16px
        'theme-icon-sm': '1.25rem', // 20px
        'theme-icon-m': '1.5rem', // 24px
        'theme-icon-l': '2rem', // 32px
        'theme-icon-xl': '2.75rem', // 44px
        'theme-icon-xxl': '4rem', // 64px
      },

      colors: {
        theme: {
          // Typography
          // Figma: Typography/Primary, Typography/Secondary, etc.
          'typography-primary': 'hsl(var(--theme-color-typography-primary))',
          'typography-secondary': 'hsl(var(--theme-color-typography-secondary))',
          'typography-tertiary': 'hsl(var(--theme-color-typography-tertiary))',
          'typography-disabled': 'hsl(var(--theme-color-typography-disabled))',

          // Main Colors
          // Figma: Main/Black, Main/Beige, Main/White
          black: 'hsl(var(--theme-color-main-black))',
          beige: 'hsl(var(--theme-color-main-beige))',
          white: 'hsl(var(--theme-color-main-white))',

          // Separators
          // Figma: Separator/1, Separator/2, Separator/Stroke
          'separator-1': 'hsl(var(--theme-color-separator-1))',
          'separator-2': 'hsl(var(--theme-color-separator-2))',
          'separator-stroke': 'hsl(var(--theme-color-separator-stroke))',

          // Backgrounds
          // Figma: Bg/Orange-Pale, Bg/Green-Pale, etc.
          'orange-pale': 'hsl(var(--theme-color-bg-orange-pale))',
          'green-pale': 'hsl(var(--theme-color-bg-green-pale))',
          'blue-pale': 'hsl(var(--theme-color-bg-blue-pale))',
          'purple-pale': 'hsl(var(--theme-color-bg-purple-pale))',
          'peach-pale': 'hsl(var(--theme-color-bg-peach-pale))',
          'yellow-warm': 'hsl(var(--theme-color-bg-yellow-warm))',
          'gray-warm': 'hsl(var(--theme-color-bg-gray-warm))',
          'lemon-bright': 'hsl(var(--theme-color-bg-lemon-bright))',
          'light-gray': 'hsl(var(--theme-color-bg-light-gray))',
          mint: 'hsl(var(--theme-color-bg-mint))',

          // Additional Colors
          // Figma: Additional/Orange, Additional/Yellow, etc.
          orange: 'hsl(var(--theme-color-additional-orange))',
          yellow: 'hsl(var(--theme-color-additional-yellow))',
          green: 'hsl(var(--theme-color-additional-green))',
          red: 'hsl(var(--theme-color-additional-red))',
          ruby: 'hsl(var(--theme-color-additional-ruby))',

          // Health
          // Figma: Health/Error, Health/Warning, Health/Good
          'health-error': 'hsl(var(--theme-color-health-error))',
          'health-warning': 'hsl(var(--theme-color-health-warning))',
          'health-good': 'hsl(var(--theme-color-health-good))',

          // Other
          // Figma: Other/Hover
          hover: 'hsl(var(--theme-color-hover))',
        },

        // Shadcn-compatible colors (for backward compatibility)
        'theme-background': 'hsl(var(--background))',
        'theme-foreground': 'hsl(var(--foreground))',
        'theme-card': {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'theme-popover': {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        'theme-primary': {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        'theme-secondary': {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        'theme-muted': {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        'theme-accent': {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        'theme-destructive': {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        'theme-border': 'hsl(var(--border))',
        'theme-input': 'hsl(var(--input))',
        'theme-ring': 'hsl(var(--ring))',
        'theme-chart': {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      // Keyframes for animations
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        'scale-x-in': {
          from: { transform: 'scaleX(0.9)', opacity: '0.6' },
          to: { transform: 'scaleX(1)', opacity: '1' },
        },
        'modal-in': {
          from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
        'modal-out': {
          from: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
          to: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
        },
        'overlay-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'overlay-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        // Popover: directional slide-in animations (direction = where content slides from)
        'popover-in-from-top': {
          from: { opacity: '0', transform: 'translateY(-4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'popover-in-from-bottom': {
          from: { opacity: '0', transform: 'translateY(4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'popover-in-from-left': {
          from: { opacity: '0', transform: 'translateX(-4px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'popover-in-from-right': {
          from: { opacity: '0', transform: 'translateX(4px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'popover-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        // NavigationMenu: viewport enter/exit
        'nav-viewport-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'nav-viewport-out': {
          from: { opacity: '1', transform: 'scale(1)' },
          to: { opacity: '0', transform: 'scale(0.95)' },
        },
        // NavigationMenu: content panel directional slides
        'nav-slide-in-from-left': {
          from: { opacity: '0', transform: 'translateX(-200px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'nav-slide-in-from-right': {
          from: { opacity: '0', transform: 'translateX(200px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'nav-slide-out-to-left': {
          from: { opacity: '1', transform: 'translateX(0)' },
          to: { opacity: '0', transform: 'translateX(-200px)' },
        },
        'nav-slide-out-to-right': {
          from: { opacity: '1', transform: 'translateX(0)' },
          to: { opacity: '0', transform: 'translateX(200px)' },
        },
        'snake-spin-fade': {
          '0%': { transform: 'rotate(0deg)', opacity: '0' },
          '5%': { opacity: '1' },
          '35%': { transform: 'rotate(360deg)', opacity: '1' },
          '50%': { transform: 'rotate(450deg)', opacity: '0' },
          '100%': { transform: 'rotate(450deg)', opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.2s ease-out',
        'fade-out': 'fade-out 0.2s ease-out',
        'scale-x-in': 'scale-x-in 0.4s cubic-bezier(.33,1.12,.54,1) forwards',
        'modal-in': 'modal-in 0.2s ease-out',
        'modal-out': 'modal-out 0.15s ease-in',
        'overlay-in': 'overlay-in 0.2s ease-out',
        'overlay-out': 'overlay-out 0.15s ease-in',
        'popover-in-from-top': 'popover-in-from-top 0.2s ease-out',
        'popover-in-from-bottom': 'popover-in-from-bottom 0.2s ease-out',
        'popover-in-from-left': 'popover-in-from-left 0.2s ease-out',
        'popover-in-from-right': 'popover-in-from-right 0.2s ease-out',
        'popover-out': 'popover-out 0.15s ease-in',
        'nav-viewport-in': 'nav-viewport-in 0.2s ease-out',
        'nav-viewport-out': 'nav-viewport-out 0.15s ease-in',
        'nav-slide-in-from-left': 'nav-slide-in-from-left 0.2s ease-out',
        'nav-slide-in-from-right': 'nav-slide-in-from-right 0.2s ease-out',
        'nav-slide-out-to-left': 'nav-slide-out-to-left 0.2s ease-in',
        'nav-slide-out-to-right': 'nav-slide-out-to-right 0.2s ease-in',
        'snake-spin-fade': 'snake-spin-fade 6s ease-in-out infinite',
      },
      // Z-Index: Semantic layering system to prevent z-index wars
      // See docs/Z-INDEX.md for full documentation
      zIndex: {
        'theme-hide': 'var(--theme-z-hide)',
        'theme-base': 'var(--theme-z-base)',
        'theme-raised': 'var(--theme-z-raised)',
        'theme-fab': 'var(--theme-z-fab)',
        'theme-dropdown': 'var(--theme-z-dropdown)',
        'theme-sticky': 'var(--theme-z-sticky)',
        'theme-fixed': 'var(--theme-z-fixed)',
        'theme-modal-backdrop': 'var(--theme-z-modal-backdrop)',
        'theme-modal': 'var(--theme-z-modal)',
        'theme-popover': 'var(--theme-z-popover)',
        'theme-toast': 'var(--theme-z-toast)',
      },
      backgroundImage: {
        'ai-glow':
          'conic-gradient(from 180deg, transparent 0%, transparent 70%, rgb(194, 178, 128) 80%, rgb(255, 215, 0) 85%, rgb(255, 243, 195) 90%, rgb(255, 255, 255) 93%, transparent 100%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities({
        '.theme-glass-effect': {
          'background-color': 'rgba(250, 250, 250, 0.7)',
          'backdrop-filter': 'blur(12px)',
          border: '1px solid white',
          'box-shadow': theme('boxShadow.theme-glass'),
        },
        '@supports (backdrop-filter: blur(12px))': {
          '.theme-glass-effect': {
            'background-color': 'rgba(250, 250, 250, 0.7)',
          },
        },
      })
    },
    function ({ addUtilities }) {
      addUtilities({
        '.theme-scrollbar-thin': {
          'scrollbar-width': 'thin',
          'scrollbar-color': '#d9d9d9 transparent',
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#d9d9d9',
            'border-radius': '5px',
          },
        },
      })
    },

    function ({ addComponents, theme }) {
      const desktop = theme('screens.desktop')

      addComponents({
        // --- DISPLAY (2 sizes, responsive) ---
        '.theme-text-display-large': {
          fontSize: '2.5rem', // 40px
          lineHeight: '3rem', // 48px
          [`@media (min-width: ${desktop})`]: {
            fontSize: '3.125rem', // 50px
            lineHeight: '3.75rem', // 60px
          },
        },
        '.theme-text-display-medium': {
          fontSize: '1.875rem', // 30px
          lineHeight: '2.25rem', // 36px
          [`@media (min-width: ${desktop})`]: {
            fontSize: '2.5rem', // 40px
            lineHeight: '3rem', // 48px
          },
        },

        // --- HEADLINE (4 sizes, responsive) ---
        '.theme-text-headline-large': {
          fontSize: '1.5rem', // 24px
          lineHeight: '2rem', // 32px
          [`@media (min-width: ${desktop})`]: {
            fontSize: '1.875rem', // 30px
            lineHeight: '2.25rem', // 36px
          },
        },
        '.theme-text-headline-medium': {
          fontSize: '1.25rem', // 20px
          lineHeight: '1.75rem', // 28px
          [`@media (min-width: ${desktop})`]: {
            fontSize: '1.5rem', // 24px
            lineHeight: '2rem', // 32px
          },
        },
        '.theme-text-headline-small': {
          fontSize: '1.125rem', // 18px
          lineHeight: '1.625rem', // 26px
          [`@media (min-width: ${desktop})`]: {
            fontSize: '1.25rem', // 20px
            lineHeight: '1.75rem', // 28px
          },
        },
        '.theme-text-headline-extra-small': {
          fontSize: '1rem', // 16px
          lineHeight: '1.5rem', // 24px
          [`@media (min-width: ${desktop})`]: {
            fontSize: '1.125rem', // 18px
            lineHeight: '1.625rem', // 26px
          },
        },

        // --- BODY (3 sizes, NOT responsive) ---
        '.theme-text-body-large': {
          fontSize: '1.125rem', // 18px
          lineHeight: '1.625rem', // 26px
        },
        '.theme-text-body-medium': {
          fontSize: '1rem', // 16px
          lineHeight: '1.5rem', // 24px
        },
        '.theme-text-body-small': {
          fontSize: '0.875rem', // 14px
          lineHeight: '1.375rem', // 22px
        },

        // --- CAPTION (2 sizes, NOT responsive) ---
        '.theme-text-caption-large': {
          fontSize: '0.75rem', // 12px
          lineHeight: '1.25rem', // 20px
        },
        '.theme-text-caption-medium': {
          fontSize: '0.625rem', // 10px
          lineHeight: '1rem', // 16px
        },
      })
    },
  ],
}
