/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    screens: {
      // Align with our standardized breakpoints
      'xs': '320px',
      'sm': '576px',   // Mobile Large
      'md': '768px',   // Tablet Small
      'lg': '992px',   // Tablet Large
      'xl': '1200px',  // Desktop Small
      '2xl': '1440px', // Desktop Medium
    },
    extend: {
      colors: {
        // XOBO Brand Colors
        primary: {
          50: '#f0f4ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#16234d', // Main brand color
          600: '#293f78', // Primary light
          700: '#1e3a8a',
          800: '#1e40af',
          900: '#1d4ed8',
        },
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ff3a3a', // Main accent color
          600: '#ff6b6b', // Accent light
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        neutral: {
          50: '#f9fafc',
          100: '#f5f7fa',
          200: '#e9ebef',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#666666', // Text light
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#333333', // Text color
        }
      },
      fontFamily: {
        sans: ['Nunito', 'Inter var', 'sans-serif'],
        display: ['Nunito', 'Lexend', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'mobile-optimized': 'none', // Disable complex animations on mobile
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      // Enhanced responsive utilities
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}