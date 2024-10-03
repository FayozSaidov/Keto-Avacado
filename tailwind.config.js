/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        customBg: '#31535a',
      },
      keyframes: {
        colorChange: {
          '0%': { color: '#000000' },  // Начальный цвет (например, красный)
          '50%': { color: 'rgb(72, 251, 105)' },  // Конечный цвет (например, синий)
          '100%': { color: '#000000' }  // Возвращение к исходному цвету
        },
      },
      animation: {
        'color-change': 'colorChange 4s ease-in-out infinite',  // Длительность и плавность
      },
    },
  },
  plugins: [],
}
