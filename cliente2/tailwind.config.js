module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        
        'verdeLogo': '#426d1b',
        'cafeLogo': '#874a17',
        '1paleta': '#777D35',
        '2paleta': '#D3D7A2',
        '3paleta': '#4C5303',
        '4paleta': '#7A9562',
        '5paleta': '#C4D7AF',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
