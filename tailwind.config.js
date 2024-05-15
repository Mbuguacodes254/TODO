/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage:{
        bg_light_header_image:"url('./src/assets/bg-desktop-light.jpg')",
        bg_dark_header_image:"url('./src/assets/Todo-Desktop.png')",
        bg_light_header_image_mobile:"url('./src/assets/bg-mobile-light.jpg')",
        bg_dark_header_image_mobile:"url('./src/assets/Todo-Mobile.png')",
    },
    },
  },
  variants: {
    extend: {
      fontWeight: ['focus'], // Enable focus variants for fontWeight
    }
  },
  plugins: [],
};