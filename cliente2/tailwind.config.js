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
        '4.5paleta': '#8cac71',
        '5paleta': '#C4D7AF',
        'amarilloPaleta0': '#D8DF1D',
        'amarilloPaleta1': '#E9EE8A'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
