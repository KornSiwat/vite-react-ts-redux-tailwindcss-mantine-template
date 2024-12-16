/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '640px',
        sm: '768px',
        md: '1024px',
        lg: '1280px',
        xl: '1536px',
      },
    },
  },
  plugins: [],
}
