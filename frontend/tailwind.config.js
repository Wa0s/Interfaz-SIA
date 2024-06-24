/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://blogs.worldbank.org/content/dam/sites/blogs/img/detail/mgr/id4d_0.jpg')"
      }
    },
  },
  plugins: [],
}