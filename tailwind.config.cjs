/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bg-primary': '#360CCD',
      'bg-secondary': '#402DDF',
      'bg-tertiary': '#2A4EE5',
      'bg-quaternary': '#1E90FC',
      'bg-quinary': '#58CCED',
      'bg-complementary': '#ebb2b1',
      'text-primary': '#ffffff',
      'text-secondary': '#000000',
      'text-tertiary': '#808080'
    },
    fontSize: {
      'small': '20px', 'small-medium-screen': '19px',
      'subheading': '25px', 'subheading-medium-screen': '22px',
      'body': '32px', 'body-medium-screen': '25px',
      'heading': '35px', 'heading-medium-screen': '30px',
      'huge': '60px', 'huge-medium-screen': '45px'
    },
    fontWeight: {
      semibold: '600',
      bold: '700',
      black: '900'
    },
    extend: {},
  },
  plugins: [],
}
