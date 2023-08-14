/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        // Exclude transparent color from the utility classes
        'transparent': 'transparent',
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        'whitesmoke':'#f5f5f5',
      },
    },
  },
  plugins: [],
  
  corePlugins: {
    preflight: false,
  }
}