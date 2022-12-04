module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'verde-oscuro-btn': '#345C06',
        'verde-oscuro-hover': '#476327',
        'verde-oscuro-transparencia': 'rgb(2, 23, 1, .95)',
        'blanco': '#ffffff',
        'verde-oscuro-margen': '#081F08',
        'negro': '#000000',
        'gris-input': '#D9D9D9',
        'verde-estado': '#33BE11',
        'rojo-estado': '#F01212',
        '4.5paleta': '#8CAC71',
        '5paleta': '#C4D7AF',
        'amarilloclaro':'#f8fcc7',
        'amarilloPaleta0': '#D8DF1D',
        'amarilloPaleta1': '#E9EE8A',
        'cafeclaro':'#b9906f'
      },
      height:{
        '11/12': '91.666667%'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
