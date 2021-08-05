module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        hero: "url('assets/hero-bg.jpeg')"
      }),
      colors: {
        "pexel-green": "#08A081",
        "input-white": "#F5F4F3",
        "tab-active": "#0064f9"
      },
      boxShadow: {
        tab: "0 1px 3px 0 rgb(0 0 0 / 8%)"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
