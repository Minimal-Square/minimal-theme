module.exports = {
  purge: {
    enabled: false,
    content: [
      './layout/*.liquid',
      './templates/*.liquid',
      './sections/*.liquid',
      './snippets/*.liquid',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '176': '44rem',
        '288': '72rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
