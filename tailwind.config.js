/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#f1f1f1",
        tertiary: "#A9A9A9",
        accent1: "#1E1E1E",
        accent2: "#121212",
        accent3: "#444444",
        highlight: "#FFFFFF",
        muted: "#6D6D6D",
        success: "#2E7D32",
        warning: "#ED6C02",
        error: "#D32F2F",
        info: "#0288D1",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        section4: "url('/src/assets/images/section4-img.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'soft': '0 4px 20px -1px rgba(0, 0, 0, 0.3), 0 2px 8px -1px rgba(0, 0, 0, 0.2)',
        'glow': '0 0 20px rgba(255, 255, 255, 0.15)',
        'inner-glow': 'inset 0 0 10px rgba(255, 255, 255, 0.05)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
        'button': '0 5px 15px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.7s ease-out',
        'slide-right': 'slideRight 0.7s ease-out',
        'slide-left': 'slideLeft 0.7s ease-out',
        'scale-up': 'scaleUp 0.7s ease-out',
        'spin-slow': 'spin 12s linear infinite',
        'spin-slow-reverse': 'spin 15s linear infinite reverse',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(100, 100, 100, 0.3)' },
          '50%': { borderColor: 'rgba(255, 255, 255, 0.5)' },
        },
        slideUp: {
          from: { transform: 'translateY(30px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          from: { transform: 'translateX(-30px)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        slideLeft: {
          from: { transform: 'translateX(30px)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        scaleUp: {
          from: { transform: 'scale(0.8)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
