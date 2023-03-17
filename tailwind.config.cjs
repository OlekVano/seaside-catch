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
      'text-secondary': '#000000'
    },
    fontSize: {
      'small': '20px',
      'subheading': '25px',
      'body': '32px',
      'heading': '35px',
      'huge': '60px'
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
