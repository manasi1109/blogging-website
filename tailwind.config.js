/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'linen': '#ece7e2',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] ,
        'overlock': ['Overlock', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        "blog-image": "url('/blog_bg.jpeg')",
      },
  },
  plugins: [
    require('./node_modules/tailwind-scrollbar-hide/src/index.js'),
  ],
}
}