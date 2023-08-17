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
        'containercolor':'#E1E3E1',
        'docCardColor':'#F9F8F8'
        
      },
      borderColor:{
        'bordercolor':'#bcbcbc',
        'hoverborder':'#7492de',
        'cardBorderHover':'#42a5f5'
      }
    },
  },
  plugins: [],
  
  corePlugins: {
    preflight: false,
  }
}