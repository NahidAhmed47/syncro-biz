/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'up-down': 'upDown 5s infinite',
      },
      keyframes: {
        upDown: {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#00b0ee",

          "secondary": "#3e57d0",

          "accent": "#44c99f",

          "neutral": "#25232e",

          "base-100": "#2c363f",

          "info": "#7088d2",

          "success": "#14804a",

          "warning": "#b07f0c",

          "error": "#e84a7f",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
