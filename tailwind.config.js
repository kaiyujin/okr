module.exports = {
  mode: 'jit', // add just-in-time
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], // 未使用スタイルの除外
  darkMode: 'media', // or 'false' or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
