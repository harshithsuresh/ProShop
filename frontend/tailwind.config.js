module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    minHeight: {
      80: '80vh',
    },
    container: {
      center: true,
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      background: '#B8B8B8',
      surface: '#333237',
      secondary: '#388474',
      primary: '#65B8B7',
      onBackground: '#9a9ea6',
      onSurface: '#e8e9ed',
      onPrimary: '#212121',
      onSecondary: '#ffd43b',
      danger: '#FA8072',
      warning: '#ffcc00',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
