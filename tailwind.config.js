// tailwind.config.mjs (or in an ES Module setup)
export default {
  darkMode: "class", // Enable dark mode using a class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        brandPurple: {
          50: "#F4EBFF",   // Very light lavender
          100: "#E6D1FF",  // Soft pastel lavender
          200: "#CCAAFF",  // Light purple
          300: "#AA7FFF",  // Medium-light purple
          400: "#9155FF",  // Vibrant mid-tone purple
          500: "#7C1AFF",  // Base purple (core brand color)
          600: "#6D16DB",  // Slightly darker purple
          700: "#5812B2",  // Dark purple
          800: "#440E8A",  // Deep dark purple
          900: "#320A63",  // Very dark purple
          950: "#1F053E",  // Almost black with purple undertones
        },
        brandBlue: {
          50: "#ecf5ff",
          100: "#ddecff", 
          200: "#c2dbff",
          300: "#9cc1ff",
          400: "#759dff",
          500: "#4c73ff",
          600: "#3651f5",
          700: "#2a3fd8",
          800: "#2538ae",
          900: "#263689",
          950: "#161d50",
        },
        brandDark: {
          50: "#FFFFFF",
          100: "#F8F9FA",
          200: "#E9ECEF",
          300: "#DEE2E6",
          400: "#CED4DA",
          500: "#858E96",  // bg-brandDark-500
          600: "#434C54",
          700: "#262D34",
          800: "#171B1F",
          900: "#121518",
          950: "#101114"
        },
      },
    },
  },
  plugins: [],
};
