/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Rutas a tus archivos de plantilla
    './src/**/*.{html,js,jsx,ts,tsx,vue,svelte}',
    './public/index.html',
    // ...más rutas
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class', // <--- ¡Aquí está la configuración!
}