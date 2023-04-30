// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["index.html", "search.html"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
//! We are not using tailwind with react

tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
      },
    },
  },
};

// // LANDING PAGE
// const colors = require();
// module.exports = {
//   jit: true,
//   purge: ["./src/**/*.html", "./src/**/*.js"],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     colors: {
//       red: colors.red,
//       white: colors.white,
//       gray: colors.trueGray,
//       black: colors.black,
//     }
//     screens:{  //! setting page for 2 screen sizes (small and large)
//       'sm': '300px',
//       'lg': '760px',
//     }
//     extends: {  //! extending the background images
//       backgroundimage: theme => ({
//         'hero': "url('/img/hero-pattern.svg')",
//         'action': "url('/img/action-pattern.svg')",
//     })
//   },
// variants: {
//   extend: {},
// },
// plugins: [

// ],
// }

