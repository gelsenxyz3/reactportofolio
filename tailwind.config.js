/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0B0712",        // Hitam pekat bertema gelap
        cardBg: "#140D21",        // Ungu sangat gelap untuk kartu/kontainer
        purplePrimary: "#8B5CF6", // Ungu utama
        purpleAccent: "#A855F7",  // Ungu terang
        purpleGlow: "#C084FC",    // Ungu menyala untuk teks/elemen khusus
      },
    },
  },
  plugins: [],
}